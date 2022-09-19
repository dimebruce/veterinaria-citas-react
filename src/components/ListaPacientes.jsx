import Paciente from "./Paciente";
import { useEffect } from "react";

// Consumiendo los props que vienen desde app.jsx paciente y setPaciente
const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // useEffect que se ejecuta cuando se agrega un nuevo Px.
  useEffect( () => {
    if (pacientes.length > 0) {
      console.log("Se agregó un nuevo paciente.");
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* if ternario, que te muestra un título si hay px u otro si no los hay */}
      {pacientes && pacientes.length ? (
         // Se crea un fragmente, porque sólo se puede retornar una etiqueta
        <>
          <h2 className="font-black text-3xl">✅ Lista de los pacientes</h2>

          <p className="text-lg mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
    
          {/* Iterando la data de px agregado */}
          { pacientes.map( (px) => (
              <Paciente
                key={px.id}
                px={px}
                // setPaciente para el update del componente Paciente
                setPaciente={setPaciente}
                //Prop Eliminar Paciente
                eliminarPaciente={eliminarPaciente}
              />
          ))}
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl">❌ Aún no hay pacientes</h2>

          <p className="text-lg mt-5 mb-10">
            Agrega al menos un{" "}
            <span className="text-indigo-600 font-bold">paciente</span>
          </p>
        </>
      )}

      


    </div>
  );
};

export default ListaPacientes;
