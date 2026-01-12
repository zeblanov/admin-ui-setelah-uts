import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

/* ===============================
   VALIDATION SCHEMA (YUP)
   =============================== */
const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .required("Password wajib diisi"),
});

function FormSignIn({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        status: false,
      }}
      validationSchema={SignInSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await onSubmit(values.email, values.password);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <>
          {/* ================= FORM START ================= */}
          <div className="mt-16">
            <Form>
              {/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="●●●●●●●●"
                    />
                  )}
                </Field>

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* CHECKBOX */}
              <div className="mb-3">
                <Field name="status">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="status"
                      type="checkbox"
                      checked={field.value}
                      label="Keep me signed in"
                    />
                  )}
                </Field>
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer hover:scale-105 transition"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>
            </Form>
          </div>
          {/* ================= FORM END ================= */}
        </>
      )}
    </Formik>
  );
}

export default FormSignIn;
