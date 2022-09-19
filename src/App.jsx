import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Form from './components/Form';
import ListaPacientes from './components/ListaPacientes';
import './App.css'

function App() {

  // State arreglo que contiene todos los px
  // El estado inicial es el valor que hay dentro de localStorage, si es que tiene algo, de lo contario agrega n arreglo vacio
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  // State objeto, que contiene 1 px, para la edición o carga en el DOM
  const [paciente, setPaciente] = useState({})

  // useEffect que verifica si tiene data el localStorage
  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS()
  // }, [])
  

  // useEffect para gudar la dara en localStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])
  


  // Eliminar un paciente
  const eliminarPaciente = (id) => {
    // Iteramos el state pacientes con filter, y nos traemos a los pacientes que tengan un id diferente al que queremos borrar y lo asignamos a SetPacientes
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <div>
        {/* Importando un componente desde otra carpeta */}
        <Header/>
        {/* Haciendo flexbox con Tailwind */}
        <div className='mt-12 md:flex text-center'>
          <Form
            // Usando props
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListaPacientes
            // Mandando el prop de app a ListaPacientes
            pacientes={pacientes}
            // Carga del state para el update del componente unitario
            setPaciente={setPaciente}
            // Prop para eliminar paciente
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </div>
  )
}

export default App
