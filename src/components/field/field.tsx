import { Field as FormikField, ErrorMessage } from "formik";
import { FC } from "react";
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
      className={`flex flex-col gap-0.5 large-paragraph ${
        fieldWidth ? fieldWidth : "w-full"
      }`}
    >
      <label
        htmlFor={fieldName}
        className={`${isDark ? "text-[#ffffff]" : "text-[#0A1E40]"}`}
      >
        {fieldLabel}:
      </label>
      <FormikField
        type={fieldType}
        placeholder={fieldPlaceholder}
        name={fieldName}
        id={fieldName}
        maxLength={fieldMaxLength}
        required={isRequired}
        aria-describedby={`${fieldName}-error`}
        className={`small-paragraph primary-color px-1 py-0.5 rounded-[5px] border-2 border-[#5380EA] focus:outline-none focus:shadow-lg focus:shadow-[#5380ea50] duration-300 ${
          isDark ? "bg-[#2478fe20]" : "bg-[#5380EA30]"
        }`}
        autoComplete={autoComplete}
      />
      <ErrorMessage
        name={fieldName}
        component="div"
        className="danger-color text-[12px] absolute bottom-[-16px] left-[0px]"
        id={`${fieldName}-error`}
      />
    </fieldset>
  );
};

export default Field;
