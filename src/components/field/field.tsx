import { Field as FormikField, ErrorMessage } from "formik";
import { FC } from "react";
import Styles from "./field.module.scss";

interface IField {
  fieldLabel: string;
  fieldType: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldMaxLength?: number;
  fieldWidth?: string;
  isDark?: boolean;
  autoComplete: string;
  isRequired: boolean;
}
const Field: FC<IField> = ({
  fieldLabel,
  fieldType,
  fieldName,
  fieldPlaceholder,
  fieldMaxLength = 80,
  fieldWidth,
  isDark = false,
  autoComplete,
  isRequired = true,
}) => {
  return (
    <fieldset
      className={`flex flex-col gap-0.5 large-paragraph relative ${
        fieldWidth ? fieldWidth : "w-full"
      }`}
    >
      <label
        htmlFor={fieldName}
        className={`${isDark ? Styles.labelDark : Styles.labelLight} font-bold`}
      >
        {fieldLabel} {isRequired && <span className="danger-color">*</span>}
      </label>
      <FormikField
        type={fieldType !== "textarea" ? fieldType : undefined}
        as={fieldType === "textarea" ? "textarea" : "input"}
        placeholder={fieldPlaceholder}
        name={fieldName}
        id={fieldName}
        rows={5}
        maxLength={fieldMaxLength}
        required={isRequired}
        aria-describedby={`${fieldName}-error`}
        className={`small-paragraph paragraph-dark p-1 mb-2 rounded-[5px] outline-none duration-300 ${Styles.input} ${
          isDark ? Styles.inputDark : Styles.inputLight
        }`}
        autoComplete={autoComplete}
      />
      <ErrorMessage
        name={fieldName}
        component="div"
        className="danger-color text-[12px] absolute bottom-[-2px] left-[0px]"
        id={`${fieldName}-error`}
      />
    </fieldset>
  );
};

export default Field;
