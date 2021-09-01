import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import * as userAPI from "../../services/userAPI";
import styles from "./style.module.css";
import { IoLogoReact } from "react-icons/io5";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function LoginPage(props) {
  const { pathname } = useLocation();
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  function handleSubmit(params) {
    userAPI.logInUser(params);
  }

  const registerDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const loginDefaultValues = {
    email: "",
    password: "",
  };

  const loginForm = (
    <div className={`${styles["main-login"]}`}>
      <div className="col-md-6 col-sm-12">
        <div className={`${styles["login-form"]}`}>
        <h1>Faça login</h1>
          <Formik
            initialValues={{
              email: "Ex.: artur.schumacher@dominio.com",
              password: "123",
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className={`${styles["input-wrapper"]}`}>
                <span>Seu email</span>
                <br />
                <Field
                  label="aaa"
                  className="default-input login-input"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                />
                <br />
                <div className={`${styles["error-message"]}`}>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className={`${styles["input-wrapper"]}`}>
                <span>Sua senha</span>
                <br />
                <Field
                  className="default-input login-input"
                  name="password"
                  type="password"
                  placeholder="********"
                />
                <br />
                <div className={`${styles["error-message"]}`}>
                  <ErrorMessage
                    className={`${styles["error-message"]}`}
                    name="password"
                  />
                </div>
              </div>
              <Link className={`${styles["needHelp"]}`} to="#">
                Precisa de ajuda?
              </Link>
              <br />
              <Row className={`${styles["submit-area"]}`}>
                <Col>
                  <Button type="submit">Entrar</Button>
                </Col>
                <Col>
                  <Link
                    className={`${styles["alreadyHasAccount"]}`}
                    to="/register"
                  >
                    <p>
                      Não tem conta? <br />
                      Inscreva-se
                    </p>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );

  const registerForm = (
    <div className={`${styles["main-login"]}`}>
      <div className="col-md-6 col-sm-12">
        <div className={`${styles["login-form"]}`}>
        <h1>Inscreva-se</h1>
          <Formik
            initialValues={
              pathname == "/login" ? loginDefaultValues : registerDefaultValues
            }
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className={`${styles["input-wrapper"]}`}>
                <Row>
                  <Col>
                    <span>Nome</span>
                    <br />
                    <Field
                      label="aaa"
                      className="default-input login-input"
                      name="firstName"
                      type="firstName"
                      placeholder="Seu nome"
                    />
                    <br />
                    <div className={`${styles["error-message"]}`}>
                      <ErrorMessage name="firstName" />
                    </div>
                  </Col>
                  <Col>
                    <span>Sobrenome</span>
                    <br />
                    <Field
                      label="aaa"
                      className="default-input login-input"
                      name="lastName"
                      type="lastName"
                      placeholder="Seu sobrenome"
                    />
                    <br />
                    <div className={`${styles["error-message"]}`}>
                      <ErrorMessage name="lastName" />
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={`${styles["input-wrapper"]}`}>
                <span>Seu email</span>
                <br />
                <Field
                  label="aaa"
                  className="default-input login-input"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                />
                <br />
                <div className={`${styles["error-message"]}`}>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className={`${styles["input-wrapper"]}`}>
                <span>Sua senha</span>
                <br />
                <Field
                  className="default-input login-input"
                  name="password"
                  type="password"
                  placeholder="********"
                />
                <br />
                <div className={`${styles["error-message"]}`}>
                  <ErrorMessage
                    className={`${styles["error-message"]}`}
                    name="password"
                  />
                </div>
              </div>
              <div className={`${styles["input-wrapper"]}`}>
                <span>Confirme a senha</span>
                <br />
                <Field
                  className="default-input login-input"
                  name="confirmPassword"
                  type="confirmPassword"
                  placeholder="********"
                />
                <br />
                <div className={`${styles["error-message"]}`}>
                  <ErrorMessage
                    className={`${styles["error-message"]}`}
                    name="confirmPassword"
                  />
                </div>
              </div>

              <Link className={`${styles["needHelp"]}`} to="#">
                Precisa de ajuda?
              </Link>
              <br />
              <Row className={`${styles["submit-area"]}`}>
                <Col>
                  <Button type="submit">Registrar</Button>
                </Col>
                <Col>
                  <Link
                    className={`${styles["alreadyHasAccount"]}`}
                    to="/login"
                  >
                    <p>
                      Já tem conta? <br />
                      Faça login
                    </p>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`${styles["sidenav-login"]}`}>
        <div className={`${styles["login-main-text"]}`}>
          <IoLogoReact href="/" className={`${styles["logo"]}`} size={"20%"} />
          <h1>Nome da empresa</h1>
          <p>Veja os três passos para o sucesso!</p>
          <ul className={`${styles["ul-actions"]}`}>
            <li>
              <span>01 Inscrever-se na plataforma</span>
              <p>
                Uma solicitação será enviada a nossa equipe. Caso aprovado você
                já pode prosseguir!
              </p>
            </li>
            <li>
              <span>02 Preencher seu perfil</span>
              <p>
                Com cadastro aprovado agora você pode preencher seus perfil com
                conhecimentos, certificados, experiências e habilidades suas.
              </p>
            </li>
            <li>
              <span>03 Encontrar a vaga perfeita</span>
              <p>
                Com seu perfil criado as buscas serão otimizadas. Você irá
                aparecer para empregadores que buscam profissionais do seu
                perfil!
              </p>
            </li>
          </ul>
        </div>
      </div>
      {pathname == "/login" ? loginForm : registerForm}
    </>
  );
}
