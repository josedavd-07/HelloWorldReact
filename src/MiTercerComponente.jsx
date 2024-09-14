// import React from 'react'
// import PropTypes from 'prop-types'


// export const MiTercerComponente = ({ Titulo, Subtitulo }) => {
//     console.log(Titulo)
//     console.log(Subtitulo)
//     return (
//         <>
//             <h1>{Titulo}</h1>
//             <h2>{Subtitulo + 5}</h2>
//         </>
//     )
// }


// MiTercerComponent.PropTypes = {
//     Titulo: PropTypes.string.isRequired,
//     Subtitulo: PropTypes.number.isRequired
// }




import React from 'react';
import PropTypes from 'prop-types';
//Se puede asignar un valor por defecto a las props en la funcion de flecha dandole asignacion y elo valor = ""
export const MiTercerComponente = ({ Titulo, Subtitulo }) => {
    console.log(Titulo);
    console.log(Subtitulo);
    return (
        <>
            {<h1>{Titulo}</h1>
            /*Se le quiota el valor por default y miramos como se comporta con el valor establecido */}
            <h2>{Subtitulo}</h2>
        </>
    );
};

MiTercerComponente.PropTypes = {
    Titulo: PropTypes.string.isRequired,
    Subtitulo: PropTypes.string.isRequired //Aca es number solo qeu se cam POR EL DE ABAJO DE EJEMPLO
};

MiTercerComponente.defaultProps = {
    Titulo: 'Curso de React',
    Subtitulo: 'Seccion de props'
};