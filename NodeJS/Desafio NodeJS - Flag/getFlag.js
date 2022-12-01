// Criando um módulo com uma função
module.exports = function getFlag(flag) {
  // Constante 'index' recebe o índice do array 'process.argv' que contém a flag passada como parâmetro
  const index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
}