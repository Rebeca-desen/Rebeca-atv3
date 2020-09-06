// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const arrai = ["banana", "gatinho","brócolis"]

function imprimeArrai(arr){
    for (let i = 0; i< arr.length; i++) {
        console.log(`índice ${i}, elemento ${arr[i]}`)
    }

}
console.log(imprimeArrai(arrai))

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const numeros = [10,11,12]

function soma(num){
    let total = 0
    for (let i = 0; i< num.length; i++){
        total += num[i]
    }
    return total
}

console.log(soma(numeros))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maioresQ(arr) {
    const numeros = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
        numeros.push(arr[i])
      }
    }
    return numeros
  }
  console.log(maioresQ([88,55,0,2,85,81,24,12]))

  // 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function carros(arr, num) {
    const batata = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        batata.push(arr[i])
      }
    }
    return batata
  }
  
  console.log(carros([88,55,0,2,85,81,24,12], 20))
  
  // 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
  // Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
  // EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)
  
  const valores = [56, 12, 168, 66]

  function maiorEncontrado(maior){
      for (let i = 0; i < maior.length; i++){
          if (maior[i] >= 0){
             return Math.max(valores)
          }
         return valores
      }
  }
  console.log(maiorEncontrado(valores))

  // 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
  // Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"
  