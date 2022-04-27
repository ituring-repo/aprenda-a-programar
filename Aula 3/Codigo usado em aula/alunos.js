

console.log("Olá, Mundo! Sou o primeiro programa da ITuring.")

let idade = 18 //idade recebe o valor 18
let nome = 'Tiago Sestari'
let boolA = true
let boolB = false
let lista = [18, 20, 40, 'Thales', 10, 'Tiago', [10, 20, 30, 'david']]

let mapa = {
    "faculdade": ['boletim', 'carterinha', 'provas'],
    "casamento": ['casa', 'certidão'],
    "anos_de_casado": 30
}

// console.log(idade)
// console.log(nome)
// console.log(boolA)
// console.log(boolB)
// console.log(lista)
// console.log(mapa)
//console.log(lista[5])
//console.log(mapa['anos_de_casado'])

//Tipagem Estática: eu preciso dizer para o computador o tipo de variável que estou criando.
//Tipagem Dinâmica: o computador já percebe o tipo de variável que está sendo usada.

// let numero = 10
// console.log(numero)
// numero = "Teste de texto"
// console.log(numero)

let numero_a = 10
let numero_b = 15
let soma = (numero_a + numero_b) / 2
//console.log(soma)

nome = "Tiago"
let sobrenome = "Sestari"
//console.log(nome + sobrenome)


//DESAFIO
let texto = "11"
let numero = 1
//console.log(texto + numero)
//console.log(texto - numero)



//CONDICIONAIS
if (numero != 2) {
    console.log("É Verdade")
} else {
    console.log("Não é verdade")
}

/*

< - é menor
> - é maior
== - é igual
!= - é diferente
>= - é maior ou igual
<= - é menor ou igual

*/

//Listas [ ]
//Mapas {chave: valor, chave: valor}
//Lista de mapas: [{chave: valor, chave: valor}, {chave: valor, chave: valor}]

let arr = [
    {'nome': 'Tiago', 'fezProva': true, 'media': 10},
    {'nome': 'Alvaro', 'fezProva': true, 'media': 9},
    {'nome': 'Tobias', 'fezProva': false, 'media': 8},
    {'nome': 'Regina', 'fezProva': true, 'media': 9},
    {'nome': 'Julia', 'fezProva': true, 'media': 5},
    {'nome': 'Joana', 'fezProva': false, 'media': 6},
    {'nome': 'Paulo', 'fezProva': false, 'media': 4},
    {'nome': 'Carla', 'fezProva': false, 'media': 2},
    {'nome': 'Luciana', 'fezProva': true, 'media': 1}
]

//vamos analisar alguns logs para entender nossos dados
//console.log(arr[0])
//console.log(arr[1])

//console.log(arr[0].nome)
//console.log(arr[1].nome)
