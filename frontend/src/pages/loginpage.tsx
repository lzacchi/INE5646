import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup";
import React, { useState } from 'react';
import * as userAPI  from "../services/userAPI"


export default function LoginPage(props) {

  const contactSchema = yup.object().shape({  
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()});


  function handleSubmit(params) {
    userAPI.logInUser(params);
  }

  return (<>
    <div className="sidenavLogin">
      <div className="loginMainText">
        <h2>Application<br/> Login Page</h2>
          <p>Login or register from here to access.</p>
      </div>
    </div>
    
    <div className="mainLogin">
      <div className="col-md-6 col-sm-12">
        <div className="login-form">
          <Formik
            initialValues={{email: "teste@teste.com", password:"123"}}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field 
                className="default-input login-input"
                name="email"
                type="email"
                placeholder="Seu email"
              />
              <ErrorMessage name="email"/>
              <Field 
                className="default-input login-input"
                name="password"
                type="password"
                placeholder="********"
              />
              <ErrorMessage name="password"/>
              <button
                type="submit"
              >
                Entrar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
    </>);
}