import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const TareasContext = createContext();

export const useTareasContext = () => useContext(TareasContext);

export const TareasContextProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const existe = (tarea) => {
    return tareas.some((buscada) => buscada.titulo === tarea.titulo);
  };

  const agregarTarea = (tarea) => {
    if (existe(tarea)) {
      return Swal.fire("La tarea ya existe en la lista");
    }

    const id = uuid();
    const nuevaTarea = { ...tarea, id };
    setTareas([...tareas, nuevaTarea]);
    Swal.fire("Tarea agregada");
  };

  //* Otra forma, es como mostro el profe Adrian

  //    const agregarTarea2 = (tarea) => {
  //     const id = uuid();
  //     const nuevaTarea = { ...tarea, id };
  //     setTareas((prev) => prev.concat(nuevaTarea));
  //   };

  const removerTarea = (tarea) => {
    const removerTarea = tareas.filter((buscada) => buscada.id !== tarea.id);
    return setTareas(removerTarea);
  };

  const vaciarLista = () => {
    setTareas([]);
  };

  const pendientes = () => {
    const pendientes = tareas.reduce(
      (acum, tarea) => (tarea.estado === false ? acum + 1 : acum),
      0
    );
    return pendientes;
  };

  const actualizarEstado = (tarea, estado) => {
    const copiaTareas = [...tareas];

    const actualizarTarea = copiaTareas.map((actual) => {
      if (actual.id === tarea.id) {
        return { ...actual, estado: estado ? false : true };
      } else {
        return actual;
      }
    });

    //!---------------------------------------------------------
    //! Esto no es necesario en la funcion, sino que lo use
    //! para mostrar como el estado original no habia cambiado
    const original = tareas.find((p) => p.id === tarea.id);

    console.log("tarea original:", original);
    console.log("Lista tareas original", tareas);
    console.log("Lista tareas actualizadas:", actualizarTarea);
    //! ---------------------------------------------------------

    setTareas(actualizarTarea);
  };

  return (
    <TareasContext.Provider
      value={{
        tareas,
        existe,
        agregarTarea,
        removerTarea,
        vaciarLista,
        pendientes,
        actualizarEstado,
      }}
    >
      {children}
    </TareasContext.Provider>
  );
};
