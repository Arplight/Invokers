"use client";
import MainSection from "@/components/main_section/mainSection";
import Contact from "../../../../../public/assets/contact.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "@/components/field/field";
import Button from "@/components/button/button";
import Image from "next/image";
import { useTranslations } from "next-intl"; 

const ContactForm = () => {
  const t = useTranslations("ContactForm"); 

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, t("form.name.errors.min")) 
      .required(t("form.name.errors.required")), 
    companyname: Yup.string().optional(),
    email: Yup.string()
      .email(t("form.email.errors.invalid")) 
      .required(t("form.email.errors.required")), 
    message: Yup.string()
      .min(10, t("form.message.errors.min")) 
      .required(t("form.message.errors.required")), 
  });

  return (
    <MainSection containerStyle="flex gap-2" sectionId="contact">
      <span className="w-1/2 relative">
        <Image src={Contact} fill alt="contact" />
      </span>
      <span className="w-1/2">
        <div className="bg-white p-4 rounded-md mx-4">
          <h1 className="primary-color mb-1">{t("title")}</h1>{" "}
          {/* Translated title */}
          <p className="small-paragraph blue-color text-justify">
            {t("description")} {/* Translated description */}
          </p>
          <Formik
            initialValues={{
              username: "",
              companyname: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-4">
                <Field
                  fieldLabel={t("form.name.label")} // Translated label
                  fieldPlaceholder={t("form.name.placeholder")} // Translated placeholder
                  fieldName="username"
                  fieldType="text"
                  isRequired={true}
                  autoComplete="username"
                />
                <Field
                  fieldLabel={t("form.company.label")} // Translated label
                  fieldPlaceholder={t("form.company.placeholder")} // Translated placeholder
                  fieldName="companyname"
                  fieldType="text"
                  isRequired={false}
                  autoComplete="organization"
                />
                <Field
                  fieldLabel={t("form.email.label")} // Translated label
                  fieldPlaceholder={t("form.email.placeholder")} // Translated placeholder
                  fieldName="email"
                  fieldType="email"
                  isRequired={true}
                  autoComplete="email"
                />
                <Field
                  fieldLabel={t("form.message.label")} // Translated label
                  fieldPlaceholder={t("form.message.placeholder")} // Translated placeholder
                  fieldName="message"
                  fieldType="textarea"
                  isRequired={true}
                  autoComplete="off"
                />
                <Button
                  buttonLabel={t("button.submit")} // Translated button label
                  isPrimary={true}
                  isRounded={true}
                  isDisabled={!isValid || !dirty}
                  withStyle="font-extrabold px-4"
                />
              </Form>
            )}
          </Formik>
        </div>
      </span>
    </MainSection>
  );
};

export default ContactForm;
