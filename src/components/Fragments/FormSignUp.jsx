import React, { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignUp() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="mt-16">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="*"
              name="password"
            />
          </div>

          <div className="mb-3">
            <CheckBox
              label=" I agree to the terms and service"
              id="terms"
              type="checkbox"
              name="terms"
            />
          </div>

          <Button
            type="button"
            disabled={loading}
            className="cursor-pointer transition hover:scale-105"
            onClick={() => setLoading(true)}
          >
            {loading ? "Processing..." : "Sign up"}
          </Button>
        </form>
      </div>

      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign up with
        </div>
      </div>

      <div className="mb-8">
        <Button type="button" variant="secondary" className="hover:scale-105">
          <span className="flex items-center justify-center">
            Continue with Google
          </span>
        </Button>
      </div>

      <div className="flex justify-center">
        <a className="text-primary text-sm font-bold cursor-pointer">
          Sign in here
        </a>
      </div>
    </>
  );
}

export default FormSignUp;
