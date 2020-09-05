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

/*function maioresQ(arr, num) {
    const numeros = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        numerosMaiores.push(arr[i])
      }
    }
    return numeros
  }
  console.log(maioresQ([88,55,0,2,85,81,24,12], 5))*/

function maioresQ(arr, num) {
    let numeros = [88,55,0,2,85,81,24,12]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        numeros.splice(numeros.indexOf(numeros[i] < num), [i])

      }
    }
    return numeros 
  }
  console.log(maioresQ(numeros, 5))