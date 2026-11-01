"use client";
import MainSection from "@/components/main_section/mainSection";
import Contact from "../../../../../public/assets/message.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "@/components/field/field";
import Button from "@/components/button/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm, ValidationError } from "@formspree/react";

type ContactFormValues = {
  username: string;
  companyname: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const [state, handleSubmit] = useForm<ContactFormValues>("mljjpkkv");

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
    <MainSection
      containerStyle="flex flex-col lg:flex-row gap-4"
      sectionId="contact"
    >
      <span className="w-full lg:w-1/2 relative min-h-[400px]">
        <Image src={Contact} fill alt="contact" />
      </span>
      <span className="w-full lg:w-1/2">
        <div className="bg-white p-2.5 md:p-4 rounded-md w-full xl:w-4/5 ms-auto">
          <h1 className="dark-blue-color mb-1">{t("title")}</h1>
          <p className="small-paragraph paragraph-dark text-justify">
            {t("description")}
          </p>

          {state.succeeded ? (
            <p
              className="mt-4 small-paragraph paragraph-dark font-bold"
              role="status"
            >
              {t("success")}
            </p>
          ) : (
            <Formik
              initialValues={{
                username: "",
                companyname: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await handleSubmit(values);
              }}
            >
              {({ isValid, dirty, isSubmitting }) => (
                <Form className="mt-4">
                  <Field
                    fieldLabel={t("form.name.label")}
                    fieldPlaceholder={t("form.name.placeholder")}
                    fieldName="username"
                    fieldType="text"
                    isRequired={true}
                    autoComplete="name"
                  />
                  <Field
                    fieldLabel={t("form.company.label")}
                    fieldPlaceholder={t("form.company.placeholder")}
                    fieldName="companyname"
                    fieldType="text"
                    isRequired={false}
                    autoComplete="organization"
                  />
                  <Field
                    fieldLabel={t("form.email.label")}
                    fieldPlaceholder={t("form.email.placeholder")}
                    fieldName="email"
                    fieldType="email"
                    isRequired={true}
                    autoComplete="email"
                  />
                  <ValidationError
                    field="email"
                    errors={state.errors}
                    className="danger-color text-[12px] mb-2"
                  />
                  <Field
                    fieldLabel={t("form.message.label")}
                    fieldPlaceholder={t("form.message.placeholder")}
                    fieldName="message"
                    fieldType="textarea"
                    isRequired={true}
                    autoComplete="off"
                  />
                  <ValidationError
                    field="message"
                    errors={state.errors}
                    className="danger-color text-[12px] mb-2"
                  />
                  <ValidationError
                    errors={state.errors}
                    className="danger-color text-[12px] mb-2"
                  />
                  <Button
                    buttonLabel={t("button.submit")}
                    buttonRole="submit"
                    isPrimary={true}
                    isRounded={true}
                    isDisabled={!isValid || !dirty || state.submitting}
                    isLoading={isSubmitting || state.submitting}
                    withStyle="font-extrabold px-4"
                  />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </span>
    </MainSection>
  );
};

export default ContactForm;
