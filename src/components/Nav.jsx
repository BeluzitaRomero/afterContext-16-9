import logo from "../logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import { useTareasContext } from "../context/TareasContext";

export const Nav = () => {
  const estiloLink = {
    color: "white",
    textDecoration: "none",
    margin: "2rem",
  };

  const { pendientes } = useTareasContext();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link style={estiloLink} to={"/"}>
              Agregar tareas
            </Link>
          </li>
          <li>
            <Link style={estiloLink} to={"/lista"}>
              Ver tareas
            </Link>
          </li>
        </ul>
        {pendientes() > 0 && (
          <p>
            Pendientes: <b className="nro-pendiente">{pendientes()}</b>
          </p>
        )}
      </nav>
    </header>
  );
};
