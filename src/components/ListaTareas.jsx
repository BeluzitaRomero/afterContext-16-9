import React from "react";
import { useTareasContext } from "../context/TareasContext";

export const ListaTareas = () => {
  const { tareas, removerTarea, actualizarEstado, vaciarLista } =
    useTareasContext();

  return (
    <div>
      <h1>Perdon que tiene cero onda los estilos 😆</h1>
      <h2>Fue un after de ultimo minuto 😬</h2>

      {tareas.length ? (
        tareas.map((tarea) => (
          <article key={tarea.id}>
            <h3>Tarea: {tarea.titulo}</h3>
            <h3>Encargadx: {tarea.encargado}</h3>
            <h3>Estado: {tarea.estado ? "Realizado" : "Pendiente"}</h3>

            <button className="button" onClick={() => removerTarea(tarea)}>
              Remover tarea
            </button>

            <button
              className="button"
              onClick={() => actualizarEstado(tarea, tarea.estado)}
            >
              Cambiar estado
            </button>
          </article>
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay tareas...</h3>
      )}
      {tareas.length > 0 && (
        <button className="button" onClick={vaciarLista}>
          Vaciar lista de tareas
        </button>
      )}
    </div>
  );
};
