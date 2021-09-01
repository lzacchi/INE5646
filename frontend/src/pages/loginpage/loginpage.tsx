import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import * as userAPI from "../../services/userAPI";
import styles from "./style.module.css";
import { IoLogoReact } from "react-icons/io5";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
  const contactSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  function handleSubmit(params) {
    userAPI.logInUser(params);
  }

  const loginForm = (
    <div className={`${styles["main-login"]}`}>
      <div className="col-md-6 col-sm-12">
        <div className={`${styles["login-form"]}`}>
          <Formik
            initialValues={{
              email: "Ex.: artur.schumacher@dominio.com",
              password: "123",
            }}
            validationSchema={contactSchema}
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
                <div className={`${styles['error-message']}`}>
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
                <div className={`${styles['error-message']}`}>
                  <ErrorMessage className={`${styles['error-message']}`} name="password" />
                </div>

              </div>
              <Link className={`${styles['needHelp']}`} to="#">Precisa de ajuda?</Link>
              <br />
              <Row className={`${styles['submit-area']}`}>
                <Col>
                  <Button type="submit">Entrar</Button>
                </Col>
                <Col>
                  <Link className={`${styles["alreadyHasAccount"]}`} to="#">
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
  return (
    <>
      <div className={`${styles["sidenav-login"]}`}>
        <div className={`${styles["login-main-text"]}`}>
          <IoLogoReact className={`${styles["logo"]}`} size={"20%"} />
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
      {loginForm}
    </>
  );
}
