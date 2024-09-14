import React from 'react'
import './styles/MiSegundoComponente.css'

// Vamos a comenzar a  crear variables  en jsx de manera que solo se renderize lo que se necesita
// poque en la funcion se renderiza todo el contenido de la funcion y no es lo mas recomendado

const strinNombre = "Jose David Carranza Angarita 👨‍💻"
const string = "Hola esto es un texto o cadena de caracteres"
const number = 123456789
const boolean = true
const array = ['universidad NacionaL Abierta y a Distancia - UNAD', 4, 10000, 'Ingenieria de Sistemas'] //Array de datos mixtos

// Funcion de flecha o arrow function
const funcion = () => {
    return "Hola soy una funcion"
}
const funcion1 = () => 1 + 1 //Funcion de una sola linea
const fecha = new Date() //Fecha actual
const objeto = { nombre: 'Jose David Carranza Angarita', edad: 30, ciudad: 'Bogota' } //Objeto de datos

export const MiSegundoComponente = () => {
    return (
        // Se puede hacer de esta manera o de la manera de abajo aunquye la de abaajo es mas recomendada
        /*
        <p>
            {strinNombre} <br />
            {string} <br />
            {number} <br />
            {boolean} <br />
            {array} <br />
            {funcion()} <br />
            {funcion1()} <br />
            {fecha.toString()} <br />
            {objeto.nombre} <br />
            {objeto.edad} <br />
            {JSON.stringify(objeto)} <br />
            {JSON.stringify(fecha)}
        </p>
        */
        // Esta forma nos permite tener mas de un elemento en el return y es mas recomendada.
        // Ya que no es posible tener mas de un elemento en el return mas si son hermanos
        // Solo debe ser un elemento padre

        <>
            <h2>Hola, esta es la manera correcta de imprimir los valores en React usando <code>&lt;&gt;&lt;/&gt;</code></h2>
            <br />
            <h4>Valor de tipo string o cadena de caracteres:</h4> <p>{strinNombre}</p> <br />
            <h4>Valor de tipo string o cadena de caracteres:</h4> <p>{string}</p> <br />
            <h4>Valor de tipo número:</h4> <p>{number}</p> <br />
            <h4>Valor de tipo boolean:</h4> <p>{boolean.toString()}</p> <br />
            <h4>Valor de tipo array:</h4> <p>{array.join(', ')}</p> <br />
            <h4>Valor de tipo función:</h4> <p>{funcion()}</p> <br />
            <h4>Valor de tipo función de una sola línea:</h4> <p>{funcion1()}</p> <br />
            <h4>Valor de tipo fecha:</h4> <p>{fecha.toString()}</p> <br />
            <h4>Valor de tipo objeto:</h4> <p>{objeto.nombre}</p> <br />
            <h4>Valor de tipo objeto edad:</h4> <p>{objeto.edad}</p> <br />
            <h4>Valor de tipo JSON stringify:</h4> <p>{JSON.stringify(objeto)}</p> <br />
            <h4>Valor de JSON string:</h4> <p>{JSON.stringify(fecha)}</p>
        </>
    )
}
