import React from 'react'
import { Container } from 'react-bootstrap';
import styles from "./style.module.css";

export default function Footer() {
    return (
        <footer>
            <hr />
            <Container>
                <span className={`${styles['text-muted']}`}>Em breve texto aqui</span>
            </Container>
        </footer>
    );
}