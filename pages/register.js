import Head from "next/head";
import React from "react";
import { Formik, Form } from "formik";

import Link from "next/link";
import TextInput from "../components/TextInput";
import validate from "../helpers/inputValidation";
const register = () => {
  return (
    <div>
      <Head>
        <title> WingerStore Register Page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bkgWhite flex  items-center justify-center">
        <section className="h-[600px] w-[400px] bg-white rounded-md my-16 shadow-md flex flex-col  items-center justify-center">
          <h1 className="text-2xl font-semibold  ">Register</h1>
          <div className="line"></div>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
          >
            {(formik) => (
              <div>
                <Form>
                  {console.log(formik.values)}
                  <TextInput label="Username" name="username" type="name" />
                  <TextInput label="Email" name="email" type="email" />
                  <TextInput label="password" name="password" type="password" />
                  <TextInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <div className="flex items-center justify-between my-3 font-light">
                    <Link href="/signin">
                      <p className="cursor-pointer text-sm hover:text-accent hover:underline">
                        Already have an account
                      </p>
                    </Link>
                    <button
                      className="font-light text-sm hover:text-accent hover:border-b-[1px]"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                  <button className="btn-filled h-10  w-80 " type="submit">
                    Login
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};

export default register;
