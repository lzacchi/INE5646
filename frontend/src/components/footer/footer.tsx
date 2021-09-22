import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./style.module.css";
import { IoPersonCircleOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <Row className={`${styles['row']}`}>
                <Col>
                    <h4>Nome da empresa</h4>
                    <span className={`${styles['text-muted']}`}><p>Resumo breve da empresa e <br/>outras coisas como:</p></span>
                    <span className={`${styles['text-muted']}`}><p>Direitos autorais reservados</p></span>
                </Col>
                <Col>
                    <h4>Contatos</h4>
                    <span className={`${styles['text-muted']}`}><p><IoLocationOutline/>  Rua dos bobo, nº 0</p></span>
                    <span className={`${styles['text-muted']}`}><p><AiOutlineMail/>example@domain.com</p></span>
                    <span className={`${styles['text-muted']}`}><p><AiOutlinePhone/>4002 8922</p></span>
                </Col>
                <Col>
                    <IoPersonCircleOutline/><IoPersonCircleOutline/><IoPersonCircleOutline/><IoPersonCircleOutline/>
                    <span className={`${styles['text-muted']}`}><p>Patrocinadores, apoiadores<br/> e líderes das equipes.</p></span>
                </Col>
            </Row>
        </footer>
    );
}