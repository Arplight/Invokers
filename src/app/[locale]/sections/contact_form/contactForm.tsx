"use client";
import MainSection from "@/components/main_section/mainSection";
import Contact from "../../../../../public/assets/contact.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Field from "@/components/field/field";
import Button from "@/components/button/button";
import Image from "next/image";

const ContactForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    companyname: Yup.string().optional(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <MainSection containerStyle="flex gap-2">
      <span className="w-1/2 relative">
        <Image src={Contact} fill alt="contact" />
      </span>
      <span className="w-1/2">
        <div className="bg-white p-4 rounded-md mx-4">
          <h1 className="primary-color mb-1">Register interest</h1>
          <p className="small-paragraph blue-color text-justify">
            Use the form below to contact us. Please be as detailed and precise
            as possible. Include your industry and any specific requests. To
            help us get to know and serve you better, we thank you for first
            giving us a good description of who you are. You can also send an
            email, call us or send us a WhatsApp to make an appointment.
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
                  fieldLabel="Name"
                  fieldPlaceholder="Enter your name"
                  fieldName="username"
                  fieldType="text"
                  isRequired={true}
                  autoComplete="username"
                />
                <Field
                  fieldLabel="Company"
                  fieldPlaceholder="Enter your company name"
                  fieldName="companyname"
                  fieldType="text"
                  isRequired={false}
                  autoComplete="organization"
                />
                <Field
                  fieldLabel="Email address"
                  fieldPlaceholder="Enter your email address"
                  fieldName="email"
                  fieldType="email"
                  isRequired={true}
                  autoComplete="email"
                />
                <Field
                  fieldLabel="Message"
                  fieldPlaceholder="Your message here"
                  fieldName="message"
                  fieldType="textarea"
                  isRequired={true}
                  autoComplete="off"
                />
                <Button
                  buttonLabel="Submit"
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
