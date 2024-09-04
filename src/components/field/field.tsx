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
      className={`flex flex-col gap-0.5 large-paragraph relative ${
        fieldWidth ? fieldWidth : "w-full"
      }`}
    >
      <label
        htmlFor={fieldName}
        className={`${isDark ? "text-[#ffffff]" : "text-[#0A1E40]"} font-bold`}
      >
        {fieldLabel} {isRequired && <span className="danger-color">*</span>}
      </label>
      <FormikField
        type={fieldType !== "textarea" ? fieldType : undefined}
        as = {fieldType === "textarea" ? "textarea" : "input"}
        placeholder={fieldPlaceholder}
        name={fieldName}
        id={fieldName}
        maxLength={fieldMaxLength}
        required={isRequired}
        aria-describedby={`${fieldName}-error`}
        className={`small-paragraph primary-color p-1 mb-2 rounded-[5px] border-2 border-[#5380eab2] outline-none duration-300 focus:shadow-lg focus:shadow-[#5380ea50]  focus:border-[#5380ea] ${
          isDark ? "bg-[#2478fe20]" : "bg-[#5380ea1c]"
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
