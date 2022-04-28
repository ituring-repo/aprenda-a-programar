//RETOMANDO AULA PASSADA
let pessoa = {'temIngresso': true, 'idade': 30, 'nome': "Tiago Sestari"}

if (pessoa.idade >= 18 && pessoa.temIngresso == true) {
    console.log("Pode entrar.")
} else {
    console.log("Não pode entrar.")
}


//FUNÇÕES
//conceito
function imprimirNome (nome) {
    console.log(nome);
    //return nome
}

imprimirNome("Tiago")


let nome_retornado_da_funcao = imprimirNome("Thales")
console.log(nome_retornado_da_funcao)

//ou

const imprimirNome_b = (nome) => {
    console.log(nome);
}
imprimirNome("Tiago")
//resolvendo um problema
//Toda vez que recebemos um mapa com dados de uma pessoa, precisamos verificar se a idade é maior ou igual a 18
//e se ela já comprou o ingresso.

let pessoaA = {'temIngresso': true, 'idade': 30, 'nome': "Tiago Sestari"}
let pessoaB = {'temIngresso': false, 'idade': 20, 'nome': "José Alfonso"}
let pessoaC = {'temIngresso': true, 'idade': 15, 'nome': "Ana Maria"}

//Ai ficamos com o problema de ter que ficar mudando o código ou reescrevendo ele para cada pessoa.

if (pessoaA.idade >= 18 && pessoaA.temIngresso == true) {
    console.log("Pode entrar.")
} else {
    console.log("Não pode entrar.")
}

if (pessoaB.idade >= 18 && pessoaB.temIngresso == true) {
    console.log("Pode entrar.")
} else {
    console.log("Não pode entrar.")
}

if (pessoaC.idade >= 18 && pessoaC.temIngresso == true) {
    console.log("Pode entrar.")
} else {
    console.log("Não pode entrar.")
}

//Para evitar isso podemos escrever uma função e chamá-la diversas vezes
function podeEntrar(idade, ingresso) {
    if (idade >= 18 && ingresso == true) {
        console.log("Pode entrar.")
    } else {
        console.log("Não pode entrar.")
    }
}

podeEntrar(pessoaA.idade, pessoaA.temIngresso)
podeEntrar(pessoaB.idade, pessoaB.temIngresso)
podeEntrar(pessoaC.idade, pessoaC.temIngresso)



//ITERAÇÃO
//DADOS QUE VAMOS USAR
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

//vamos analisar alguns logs para entender nossos dados
console.log(arr[0])
console.log(arr[1])
console.log(arr[0].nome)
console.log(arr[1].nome)

//Exercício 1: passando pela lista imprima apenas os nomes de alunos que fizeram a prova.
//Exercício 2: quantos alunos fizeram a prova?

//For Loops
//Exercício 1
for (let aluno of alunos) {
    if (aluno.fezProva == true) {
        console.log(aluno.nome)
    }
}
//Exercício 2
let quantidadeDeAlunos = 0
for (let aluno of alunos) {
    if (aluno.fezProva == true) {
        quantidadeDeAlunos = quantidadeDeAlunos + 1
    }
}
console.log(quantidadeDeAlunos)


//Métodos
//Exercício 1
alunos.forEach((aluno) => {
    if (aluno.fezProva == true) {
        console.log(aluno.nome)
    }
})
//Exercício 2
let quantidadeDeAlunos_b = 0
alunos.forEach((aluno) => {
    if (aluno.fezProva == true) {
        quantidadeDeAlunos = quantidadeDeAlunos + 1
    }
})
console.log(quantidadeDeAlunos_b)













