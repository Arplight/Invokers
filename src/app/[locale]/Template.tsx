"use client";
import Button from "@/components/button/button";
import Field from "@/components/field/field";
import ServiceCard from "@/components/service_card/serviceCard";
import { Form, Formik } from "formik";
import React from "react";
import Service1 from "../../../public/assets/service1";
import Advantage1 from "../../../public/assets/advantage1.svg";
import AdvantageCard from "@/components/advantage_card/advantageCard";
import TestimonialsCard from "@/components/testimonials_card/testimonialsCard";

const Template = () => {
  return (
    <div className="bg-blue-900 p-2">
      {/* Typegraphy */}
      <h1 className="text-[#ffffff]">lorem ipsum</h1>
      <h2 className="text-[#ffffff]">lorem ipsum</h2>
      <h3 className="text-[#ffffff]">lorem ipsum</h3>
      <p className="large-paragraph text-[#ffffff]">lorem ipsum</p>
      <p className="small-paragraph text-[#ffffff]">lorem ipsum</p>
      {/* Template buttons */}
      <br />
      <Button buttonLabel="Contact-Us" isPrimary={true} />
      <Button buttonLabel="Contact-Us" isPrimary={false} />
      <Button
        buttonLabel="Submit"
        isPrimary={true}
        withLink="download"
        isRounded={true}
      />
      {/* Fields */}
      <Formik
        initialValues={{ username: "", email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field
            fieldLabel="username"
            fieldPlaceholder="Type your username"
            fieldName="username"
            fieldType="text"
            isRequired={true}
            autoComplete="username"
          />
          <Field
            fieldLabel="email"
            fieldPlaceholder="Type your email"
            fieldName="email"
            fieldType="email"
            isRequired={true}
            isDark={true}
            autoComplete="email"
            fieldWidth={"w-1/2"}
          />
          <Field
            fieldLabel="password"
            fieldPlaceholder="Type your password"
            fieldName="password"
            fieldType="password"
            isRequired={true}
            isDark={true}
            autoComplete="new-password"
          />
        </Form>
      </Formik>
      <br />
      {/* cards */}
      <ServiceCard
        cardLabel="Web Design & Web Development"
        cardIcon={<Service1 />}
      />
      <br />
      <AdvantageCard
        cardTitle="Experience"
        cardIcon={Advantage1}
        cardDescription="Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."
      />
      <br />
      <TestimonialsCard
        userName="Muhammad"
        userFeedback="outstanding experience"
        feedbackLink="https://www.figma.com/design/qCPfZoHCKY1z44kzvjIGeu/RR-Technologies-%7C-Dark-and-light-UI-%7C-Agency-landing-page-free-(Community)?node-id=0-1&t=cNwIqga57e9WQ8aF-0"
        userImage=""
      />
    </div>
  );
};

export default Template;
