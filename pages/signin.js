import React from "react";
import Head from "next/head";
import { Formik, Form } from "formik";

import Link from "next/link";
import TextInput from "../components/TextInput";
import validate from "../helpers/inputValidation";
const signin = () => {
  return (
    <div>
      <Head>
        <title> WingerStore Login  Page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bkgWhite flex  items-center justify-center">
        <section className="h-[400px] w-[400px] bg-white rounded-md my-16 shadow-md flex flex-col  items-center justify-center">
          <h1 className="text-2xl font-semibold">Login</h1>
          <div className="line"></div>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={validate}
          >
            {(formik) => (
              <div>
                <Form>
                  {console.log(formik.values)}
                  <TextInput label="Email" name="email" type="email" />
                  <TextInput label="password" name="password" type="password" />

                  <div className="flex items-center justify-between my-3 font-light">
                    <Link href="/register">
                      <p className="cursor-pointer text-sm hover:text-accent hover:underline">
                        Dont have an account ?
                      </p>
                    </Link>
                    <button
                      className="font-light text-sm hover:text-accent hover:border-b-[1px] pb-0 hover:border-accent"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                  <button className="btn-filled h-10  w-80 " type="submit">
                    Register
                  </button>
                  <div className="flex items-center justify-center   mt-3 ">
                    <div className="flex items-center justify-center shadow-md rounded-lg h-10 w-10 ml-4  "></div>
                    <div className="flex items-center justify-center shadow-md rounded-lg h-10 w-10 ml-4   "></div>
                    <div className="flex items-center justify-center shadow-md rounded-lg h-10 w-10 ml-4  "></div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};

export default signin;
