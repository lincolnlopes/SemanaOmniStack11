import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo Principal - My Heroes" />
        <form action="">
          <h1>Faça o seu logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button">Entrar</button>
          <Link to="/register">
            <FiLogIn size={16} color="#00a091" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
