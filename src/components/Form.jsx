import { useState, useEffect } from "react";
import Error from './Error';

// Destructuring de prop setPacientes que viene desde app.jsx
const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {


  // Usando los state || Hooks
  const [ nombre, setNombre ] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ telefono, setTelefono ] = useState('')
  const [ ciudad, setCiudad ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [ sintomas, setSintomas ] = useState('')

  const [error, setError] = useState(false)
  // Uso del useEffect
  // Se ejecuta, cuando el objeto px contiene algo y evita los renders innecesarios
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setTelefono(paciente.telefono)
      setCiudad(paciente.ciudad)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])
  

  // Creando un randomId para el uso de las key del form y poder pintar sin err. 
  const randomId = () => {
    // Creamos la sintaxis para un idRandom donde math nos ayuda para generar numeros, toString para parsearlos y substr a quitar los dos primeros digitos de cada cadena. 
    // Date genera la fecha actual en dia, minutos hr y seg y lo parseamos.
    const random = Math.random().toString(36).substring(2)
    const fecha  = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validación campos vacios
    if ([nombre, propietario, email, telefono, ciudad, fecha, sintomas].includes('')) {
      setError(true)
      return
    } 
    setError(false)

    // Creando el objeto para guardar los datos de entrada
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      telefono, 
      ciudad, 
      fecha, 
      sintomas
    }

    // Crenado objeto, por si se actualiza el ya creado

    if (paciente.id) {
      // Editando el paciente
      objetoPaciente.id = paciente.id

      // Iterando los pacientes para la carga de la data actualizada
      // Si el pacienteState (el que está en memoria actualizado) es igual al del pacienteid entonces carga el objeto, sino el que estaba en state
      const pacientesActualizados = pacientes.map( (pacienteState) => 
        pacienteState.id === paciente.id ? 
        objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
      

    } else {
      // Creando un nuevo paciente

      // console.log(objetoPaciente);
      // Aplicamos un spreed, para crear una copia de pacientes, pero pasando el nuevo objeto de la data del form y eso lo hace inmutable (No se modifica el original)
      // Generando un id unico para el objeto de agregar paciente
      objetoPaciente.id = randomId()
      setPacientes([...pacientes, objetoPaciente])
    }


    // Reseteando valores del form
    setNombre('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setCiudad('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl">✍ Seguimiento de pacientes</h2>

      <p className="text-lg mt-5 mb-10">
        ➕ Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <div className="mt-5 md:col-span-2 md:mt-0 shadow-lg rounded mx-5 mb-10">
        {/* handleSubmit es la acción del form después de darle enviar */}
        <form onSubmit={handleSubmit}>
          {/* Mensaje de validación */}
          {error && <Error>Todos los compos son obligatorios</Error>}
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Belli"
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="propietario"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Propietario
                  </label>
                  <input
                    type="text"
                    name="propietario"
                    id="propietario"
                    placeholder="Bruce"
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="dime@bruce.com"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="number"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Teléfono
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="555 555 5555"
                    value={telefono}
                    onChange={ (e) => setTelefono(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Morelia"
                    value={ciudad}
                    onChange={ (e) => setCiudad(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Ingreso
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                  />
                </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                    <label
                      htmlFor="sintomas"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Síntomas
                    </label>
                    <textarea
                      type="text"
                      name="sintomas"
                      id="sintomas"
                      placeholder="Describe los síntomas del paciente"
                      value={sintomas}
                      onChange={ (e) => setSintomas(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center p-2"
                    />
                  </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase"
              >
                {/* Condicional de texto, por si es la primera vez o se actualiza el px */}
                {paciente.id ? 'Actualizar paciente' : 'Guardar paciente'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
