// const opt = {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         demand: true,
//         alias: 'l',
//         // default: 10
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borrar una de las tareas'
        }
    })
    // .command('listar', 'Hacer un listado de las tareas', {
    //     descripcion: {
    //         alias: 'l',
    //         desc: 'Descripcion de la tarea por hacer'
    //     }
    // })
    .help()
    .argv;

module.exports = {
    argv
}