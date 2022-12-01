// Chamamos o módulo que criamos
const modulo = require("./getFlag.js");

// Passando a flag '--nome' e '--salve' como parâmetros e seus respectivos valores
console.log(`Oi, ${modulo("--nome")}! ${modulo("--salve")}`);