# React

## Vite

Es una herramienta para Frontend, creada por Evan You, mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular o ya sea directo con Vanillajs.

## Ventajas

**💡 Inicio Instantáneo del Server (Instant Server Start)**
Nos brinda los archivos que necesitamos en el momento qu eo necesitamos, atraves de módulos de javascript nativos (ESM), con lo cual no tendremos que lidiar con el building

**⚡️ Rápido HMR - (Lightning Fast HMR)** 
Sin importar el tamaño de la aplicación, podremos ver reflejados los cambios en nuestro codebase de manera instantanea.

**🛠️ Grandiosas Características - (Rich Features)**
A esto nos referimos a características grandiosas por debajo, tales como son el uso de JSX, CSS, Typescript.
**📦 Build Optimizado - (Optimized Build)**
De manera interna ya trae pre-configurado Rollup con soporte a multiples paginas y soporte para librerías.
**🔩 Plugins Universales - (Universal Plugins)**
Al hacer uso de Rollup de manera interna, este provee una interfaz compartida entre desarrollo y build 
**🔑 APIs completamentamente tipadas - (Fully Typed APIs)**
APIs totalmente flexibles con sus tipados, esto nos ayuda en el desarrollo para autocompletar, trackear errores, y todas las bondades que nos ofrece Typescript

## Creando proyecto con vite

Abrimos cmd desde la ruta donde vamos a guardar el proyecto. 

```sh
    npm init vite@latest
```

Nos preguntará el nombre del proyecto

```sh
    mi-proyecto
```
Ahora tenemos que escoger la tech a ocupar, nos aparecerá una lista. Podemos escoger la que ocuparemos. 

- vanilla
- vue
- react
- svelte
- etc

Nosotros escogeremos ==react==

Seleccionaremos *react* y nos preguntará nuevamente

- javascript
- typescript 

Escogeremos javascript. 

Ahora seguiremos los pasos que nos indica cuando termina en la terminal 

```jsx
        cd mi-proyecto
        npm install
        npm run dev
```

La primera linea, entra dentro del directorio recién creado. 
La segunda, instala todas las dependencias del proyecto. 
Y po último dev, levanta un servidor con una URL similar **http://127.0.0.1:5173/**, la pegamos en el navegador, y listo. Tenemos nuestro proyecto creado, instalado e inicializado. 


## JSX

### JavaScript Syntax Extension

Es una extensión del lenguage desarrollada por Facebook para react. 

Parece JS pero muestra código de HTML, y básicamente es una lenguaje de template que muestra el HTML pero tiene todas las funciones de JS. 

## Reglas

- A diferencia de HTML, que no es estricto, en JSX si un elemento HTML tiene una etiqueta de apertura, deberás tener también la de cierre.
- Las etiquetas de solo apertura como < link > < img > o < input > deberán finalizar con **/>**
- Cada componente debe un return
- En este return debe haber máximo un solo elemento en el nivel máximo

## Carpetas

Dentro de la instalación tendremos muchas carpetas pero las más notorias podrían ser:

- node_modules
- public
- src

Donde **node_modules** están todas los archivos base de las dependencias de node y npm. 

**Public** todos los archivos que queremos que sean públicos. 

Y po rúltimo **src** dónde se encontrará toda nuestra aplicación (code) y dónde trabajaremos mucho más. 

## Componentes

Los componentes son fragmentos de código que podemos reutilizar las veces que sea necesario, se crean componentes, para no repetir el code. Un buen ejemplo de un componente es el menú nav de una página web. 

### Cómo crear un componente

Dentro de la carpeta *src*, creamos otra llamada **components**. Está última carpeta no está obligada a llamarse ni a crearce, sin embargo para tener un buen código y bien estructurado se recomienda. 

### Mi primer componente

Creamos un fichero dentro de *components* llamado *Header.jsx*. 
Los componentes por buenas practicas se deben crear con la primera letra en Mayus y con la extensión jsx porque estamos trabajando con vite. 

Dentro de *Header.jsx*

```js
        const Header = () => {
        return (
            <div>
                <h1>Mandando a imprimir desde el Header.</h1>
            </div>
        )
        }

        export default Header
```

Creamos una arrow function, donde la nombramos Header y returnamos el "template" jsx y por último lo exportamos. 

Consumiendo el Header en nuestra app de react. 

Dentro de *App.jsx*

```js
        import { useState } from 'react'
        {/* Importando un componente desde otra carpeta */}
        import Header from "./components/Header";

        function App() {

        return (
            <div>
                {/* Consumiendo el contenido del Header */}
                <Header/>
            </div>
        )
        }

        export default App
```

Primero debemos importar la ruta de donde tenemos nuestro componente. 
Ahora, dentro del return usamos nuestro Header como si fuera etiqueta. Los dic no son esenciales. 

Visualizamos nuestro navegador y aparecerá la leyenda *Mandando a imprimir desde el Header.*

## CSS en React

- CSS Plano
- Framework
    - Boostrap
    - Bulma
    - Tailwind
- Modulos CSS
- Componentes
    - SASS
    - Tailwind como componente


## Tailwind

Tailwind es una framework de CSS, el cual nos ayudará para el formateo de nuestra página haciendonos más fácil la vida en diseño, este se compara mucho con Bootstrap pero en realidad no se parecen en nada. Es para publicos diferentes. 

> Nota: Tailwind te pide un poco más de conocimientos en CSS que Boostrap. 

### Instalando Tailwind para vite 

```sh
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
```
El primer comando instalará las dependencias de 3 cosas; 

- tailwindcss
- postcss
- autoprefixer

El segundo creará dos archivos necesarios para Tailwind. 

- tailwind.config.js
- postcss.config.js

Iremos a *tailwind.config.cjs*

```js
        module.exports = {
        content: [
            "./index.html",
            "./src/**/*.jsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
```

Añadiremos el arreglo content: donde le decimos donde se le aplicará los estilos de Tailwind. Será en el index.html y en cualquier otro archivo dentro de la carpeta src que termine con la extensión .jsx.

Vamos al archivo *index.css*

```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
```
Y agregamos esas directivas. 

Por último iniciamos el servidor con tailwind

```js
        npm run dev
```
Y probamos. 

> Nota: La guía de instalación la puedes encontrar 👉[aquí](https://tailwindcss.com/docs/guides/vite)

## Hooks

React cuenta con una API muy sencilla que te permite crear todo tipo de aplicaciones por medio de algo llamado Hooks.
Los Hooks están disponibles desde la versión 16.8, previo a ello se tenían que crear classes para crear y modificar el state, con los Hooks no es necesario.
Los Hooks se dividen en básicos y Adicionales

## Categorías

- useState
- useEffects
- useContext
- Adicionales
    - useReducer
    - useCallback
    - useMemo
    - useRef
    - useImperativeHandle
    - useLayoutEffect
    - useDebugValue

## ¿Podemos crear nuestros propios Hooks

También es posible crear tus propios Hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece.

## Agregando hooks al proyecto

Nos vamos al componente donde lo vayamos a ocupar y agregamos la siguiente linea

```jsx
        import { useState, useEffects } from 'react'
```

## useState

El state es el la pieza central de React. 

El state aunque parezca increíble es el estado actual en el que se encuentra tu aplicación. 
El Estado es una variable con información relevante en nuestra aplicación de React , algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes .

## Cómo usar el state

Ya vimos cómo se importa, ahora vamos a usarlo. 

```jsx
       const [cliente, setCliente] = useState({})
       const [total, setTotal] = useState(0))
       const [cliente, setCliente] = useState({})
       const [modal, setModal] = useState(false)
```

La lógica es la siguiente;

1. Definimos una constante
2. Dentro de corchetes creamos la variable la cual guardará el estado
3. Definimos otra variable la cual modificará el estado de la otra
4. Asignamos el state pero dentro del parentesis se encuentra el valor inicial

En otras palabras:

En el ejemplo uno, tenemos cliente, y setCliente. *cliente* será la variable quién guardará el estado de la aplicación, mientras que *setCliente* en su momento modificará el estado. Todo esto con *useState* quién empieza con el objeto vacio irá guardando los valores. 

> Nota: React reacciona segun el state. Cuando el estado cambia, React renderiza toda la aplicación donde se vio afectada. 

## Reglas de los hooks

Los hooks se colocan en la parte superior de tus componentes de React. 

No se deben colocar dentro de condicionales, tampoco después de return. 

## Eventos

Los eventos que maneja React son muy similares a los eventos que maneja JS de manera nativa, sólo hay unos lijeros cambios. 

- Utilizan camelCase

Es decir, en vez de onchange es onChange o en vez de onclick es onClick. 

- También a diferencia de JS y TML, donde se coloca el nombre de la función en un string en React (JSX) se utuliza la función. 

HTML tradicional 

```html
        <button onclick="descargaManual()">
            Descarga de Manual
        </button>
```
En JSX 

```jsx
        <button onClick={descargaManual()}>
            Descarga de Manual
        </button>
```
## Props

Los props o propiedades es la forma de mandar variables o funciones de un componente a otro. 

Recuerda qeu el state o funciones que se creen estarán disponibles en ese componente. Sin embargo a veces se necesita mandar variables, funciones o states de un componente a otro para evitar replicar código y para eso te sirven los props. 

> Nota: Los componentes padre siempre pasan o heredan props al hijo, nunca al reves. 

## Children

Es la forma de mandar valores, etiquetas desde el componente padre al hijo

## Iterar un arreglo dentro de React

La forma más optima será usando map

```jsx
      { pacientes.map( (px) => (
          <Paciente
            px={px}
          />
      ))}
```

Ahora vemos como iteramos sobre el arreglo pacientes con map.

## Importancia de los key en React

En el ejemplo anterior iteramos un arreglo y creamos la solución para pintar en el DOM todas las entradas o data que teníamos para px. Sin embargo hay algo que nos falta, y que por consola react, nos mandará error y es el uso del ==key==.

Esto se hace cuando vas a iterar con map con un arreglo, debes pasar un id unico, que solvente la key. 

> Nota: Si tenemos el id de la base de datos, debemos pasar ese puesto que no se repite. Pero si no, es mejor crear uno. 

## Creando id random y unico para el uso de keys

```jsx
        const randomId = () => {
            const random = Math.random().toString(36).substr(2)
            const fecha  = Date.now().toString(36)
            return random + fecha
        }
```

1. Creamos un arrow fn
2. Generamos un número aleatorio con Math y random, lo parseamos a string y borramos los dos primeros subindices
3. Hacemos una fecha con date now y lo parseamos
4. Regresamos la concatenacion de random y fecha para el uso de esa cadena como el id 

Por último, pasamos la fn por el objeto del px

```jsx
        // Creando el objeto para guardar los datos de entrada
        const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        telefono, 
        ciudad, 
        fecha, 
        sintomas,
        // Cuando creamos el objeto, pasamos la fn randomId para generar el id por cada px
        id: randomId()
        }
```

## Pasando el id como prop y key

```jsx
      { pacientes.map( (px) => (
          <Paciente
            // id random
            key={px.id}
            px={px}
          />
      ))}
```

## Hook useEffect

Después de useState, el hook más común es **useEffect**. Siempre es un callback, que se ejecuta cuando el state cambia o está listo.
Es el sustituto de lo que antes se conocía como componentDidMount() y componentDidUpdate() cuando React era por clases o hacia uso del ciclo de vida. 

## usamos

- Al ejecutarse cuando el state está listo, es un excelente lugar para consumir una API o consultar data del localStorage
- Debido a que se le puede pasar una dependencia y por escuchar los cambios que puede haber en una variable, puede actualizar el componente cuando dicho cambio suceda

## Sintaxis

```jsx
        // Lo importamos
        import { useEffect } from 'React'
        
        // useEffect es un callback, o sea tiene un arrow function en su cuerpo
        useEffect( () => {
            console.log("El componente está listo");
        }, [])
        // El arreglo vacio del final son las dependencias
```
x|