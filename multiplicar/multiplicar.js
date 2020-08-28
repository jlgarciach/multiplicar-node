/* 

*/
// requireds
const fs = require('fs');
const colors = require('colors');

//const fs = require('express'); este paquete se instala... no es nativo de node
//const fs = require('./abc'); los que creamos nosotros mismos en alguna parte del proyecto

let listarTabla = (base, limite = 10) => {
    console.log('----------------------------'.green);
    console.log(`    TABLA de ${ base}  `.green);
    console.log('----------------------------'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base} * ${ i } = ${ base * i}\n`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introdudicido ${ base }, no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base} * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/taba-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base}-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}