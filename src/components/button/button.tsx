import { useLocale } from "next-intl";
import Link from "next/link";
import { FC } from "react";

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
  const buttonStyle = `small-paragraph px-3 py-1 duration-300 ${
    isRounded ? "rounded-full" : "rounded-[10px]"
  } ${(isLoading || isDisabled) && "button-disabled"} ${
    isPrimary
      ? "primary-bg  text-[#ffffff] hover:shadow-lg hover:shadow-[#5380ea70]"
      : "bg-transparent text-[#ffffff] border-2"
  } ${withStyle}`;

  const buttonContent = (
    <button
      className={buttonStyle}
      type={buttonRole}
      role="button"
      aria-label={buttonLabel}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
  const currentLocale = useLocale();
  return (
    <>
      {withLink ? (
        <Link href={`/${currentLocale}/${withLink}`}>{buttonContent}</Link>
      ) : (
        buttonContent
      )}
    </>
  );
};

export default Button;
