import { useLocale } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { ClipLoader } from "react-spinners";
import Styles from "./button.module.scss";

interface IButton {
  buttonLabel: string;
  buttonRole?: "button" | "submit" | "reset";
  isPrimary: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
  withLink?: string;
  withStyle?: string;
  onClick?: () => void;
}
const Button: FC<IButton> = ({
  buttonLabel,
  buttonRole = "button",
  isPrimary = true,
  isDisabled = false,
  isLoading = false,
  isRounded = false,
  withLink,
  withStyle,
  onClick,
}) => {
  const buttonStyle = `small-paragraph px-3 py-1 duration-300 inline-flex items-center justify-center gap-2 ${
    isRounded ? "rounded-full" : "rounded-[10px]"
  } ${(isLoading || isDisabled) && "button-disabled"} ${
    isPrimary ? `primary-bg ${Styles.primary}` : Styles.secondary
  } ${withStyle}`;

  const buttonContent = (
    <button
      className={buttonStyle}
      type={buttonRole}
      role="button"
      aria-label={buttonLabel}
      aria-busy={isLoading}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <ClipLoader
          color={isPrimary ? "#ffffff" : "#14b8a6"}
          size={16}
          aria-label="Loading"
        />
      ) : (
        buttonLabel
      )}
    </button>
  );
  const currentLocale = useLocale();
  return (
    <>
      {withLink ? (
        withLink.startsWith("https") ? (
          <a href={withLink} target="_blank">
            {buttonContent}
          </a>
        ) : (
          <Link href={`/${currentLocale}/${withLink}`}>{buttonContent}</Link>
        )
      ) : (
        buttonContent
      )}
    </>
  );
};

export default Button;
