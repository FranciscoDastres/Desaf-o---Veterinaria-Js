const {registrar,leer} = require('./operaciones.js');
// const operacion = process.argv[2];
// const nombre = process.argv[3];
// const edad = process.argv[4];
// const tipo = process.argv[5];
// const color = process.argv[6];
// const enfermedad = process.argv[7];
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)
if(operacion === "registrar"){
    registrar(nombre, edad, tipo, color, enfermedad)
    console.log('registro exitoso')
    } 
if(operacion === "leer"){
    const res=leer()
    console.log(res)
    }