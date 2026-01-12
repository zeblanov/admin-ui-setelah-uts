import React, { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignIn({ onSubmit }) {

  /* ===============================
     STATE UNTUK MENYIMPAN INPUT
     =============================== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ===============================
     HANDLE SUBMIT FORM
     =============================== */
  const handleSubmit = (e) => {
    e.preventDefault();

    // menampilkan nilai input saat tombol Login ditekan
    onSubmit(email + password);
  };

  return (
    <>
      {/* ================= FORM START ================= */}
      <div className="mt-16">
        <form onSubmit={handleSubmit}>

          {/* EMAIL INPUT */}
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD INPUT */}
          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="*"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CHECKBOX */}
          <div className="mb-3">
            <CheckBox
              label=" Keep me signed in"
              id="status"
              type="checkbox"
              name="status"
            />
          </div>

          {/* BUTTON LOGIN */}
          <Button type="submit">
            Login
          </Button>

        </form>
      </div>
      {/* ================= FORM END ================= */}


      {/* ================= TEXT DIVIDER START ================= */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign in with
        </div>
      </div>
      {/* ================= TEXT DIVIDER END ================= */}


      {/* ================= SIGN IN WITH GOOGLE START ================= */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              <title>Google-color</title>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FBBC05"
                  d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.736.867 7.26 2.62 10.388l7.905-6.05A11.93 11.93 0 0 1 9.827 24"
                />
                <path
                  fill="#EB4335"
                  d="M23.714 10.133c3.31 0 6.301 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.823-5.531 7.017-9.51 13.182-9.51"
                />
                <path
                  fill="#34A853"
                  d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.51l-7.909 6.038C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.334-4.786 2.052-7.804 2.052"
                />
                <path
                  fill="#4285F4"
                  d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.09-2.345 5.467-4.8 7.014l7.507 5.805C43.339 37.614 46.145 31.649 46.145 24"
                />
              </g>
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* ================= SIGN IN WITH GOOGLE END ================= */}


      {/* ================= LINK START ================= */}
      <div className="flex justify-center">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
      {/* ================= LINK END ================= */}
    </>
  );
}

export default FormSignIn;
