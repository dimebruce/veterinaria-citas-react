// Todos los componentes deben empezar con Mayúscula y con la extensiónde .jsx porque estamos usando Vite

function Header() {
    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Pacientes de la <span className="text-indigo-600">Veterinaria</span></h1>
        </>
    )
}

export default Header;