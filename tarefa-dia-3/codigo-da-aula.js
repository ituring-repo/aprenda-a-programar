let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoC.internacional == true) {
    //executa se for verdadeiro
    let preco = produtoC.valor
    //20% == 0.2
    let imposto = 0.2
    
    let valorComImposto = preco + preco * imposto

    console.log("O produto é internacional")
    console.log("O valor com impostos é: ", valorComImposto)

} else {
    //executa se for falso
    console.log("O produto é nacional")
    console.log("O valor com impostos é: ", produtoC.valor + (produtoC.valor * 0.12))
}


FUNÇÕES - Começo

declarando a função
function imprimirNome () {
    //o código que vem aqui dentro é executado quando eu chamo a função.
    console.log("O Tiago é legal.")
}
//chamando a função
console.log("A Jô ensina muito bem.")
imprimirNome()

function somar (n1, n2) {
    console.log("O primeiro número é: ", n1)
    console.log("O segundo número é: ", n2)
    console.log("A soma é: ", n1 + n2)

}

somar(10, 20)
somar(100, 1000)

//ITERAÇÃO (LOOP)
let alunos = [
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

function verificaNotaDeAluno (nota, nome) {
    if (nota > 5) {
        console.log(nome, " passou de ano.")
    } else {
        console.log(nome, " reprovou.")
    }
}

//Usando For 'normal'
console.log("Usando for 'normal' ")
for (let i = 0; i < 9; i++) {
    //o código que estiver será repetido até o contador obedecer a condição
    //será repetido até i < 9, nesse caso.
    verificaNotaDeAluno(alunos[i].media, alunos[i].nome)
}

//Usando For 'mais legal'
console.log("\n Usando for 'mais legal' ")
for (let aluno of alunos) {
    //console.log(aluno)
    verificaNotaDeAluno(aluno.media, aluno.nome)
}


console.log("\nTestando a ideia do José: ")
let mapaDeTeste = {
    'a': 'teste1',
    'b': 'teste2'
}

let arrayDeTeste = ["teste1", "teste2", "teste1000"]

for (let teste in mapaDeTeste) {
    console.log(teste)
}

for (let teste in arrayDeTeste) {
    console.log(teste)
}

