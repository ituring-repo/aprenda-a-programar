//Resolvendo problema de condicional - retomando a aula passada
let pessoa = {
    'nome': "Tiago Sestari", 
    'idade': 30,
    'temIngresso': true
}

//pessoa.idade é a mesma coisa que pessoa['idade']
//vamos um console para ver como acessar nosso dado
console.log(pessoa['nome'])

//dica: && - E   || - OU
if (pessoa.idade >= 18 && pessoa.temIngresso == true) {
    console.log("Pode entrar")
} else {
    console.log("Não pode entrar")
}


//FUNÇÕES
function imprimirNome (nome, idade) {
    console.log(nome)
    console.log(idade)
}

imprimirNome("Primeira chamda", "30 anos")
imprimirNome("Segunda chamada", "25 anos")

//funções podem cuspir dados, isso chama retornar
function tirarMedia (numero_a, numero_b) {
    let soma = numero_a + numero_b
    let media = soma / 2
    //console.log(media)
    return media
}
let mediarecebidadafuncao = tirarMedia(100, 50)
console.log(mediarecebidadafuncao)


//criando uma funcao com arrow function
const tirarMedia_arrow = (numero_a, numero_b) => {
    let soma = numero_a + numero_b
    let media = soma / 2
    //console.log(media)
    return media
}

console.log(tirarMedia_arrow(200, 600))

//Resolvendo um problema com funções
let pessoaA = {'temIngresso': true, 'idade': 30, 'nome': "Tiago Sestari"}
let pessoaB = {'temIngresso': false, 'idade': 20, 'nome': "José Alfonso"}
let pessoaC = {'temIngresso': true, 'idade': 15, 'nome': "Ana Maria"}

function podeEntrar (idade, ingresso) {

    if (idade >= 18 && ingresso == true) {
        console.log("Pode entrar")
    } else {
        console.log("Não pode entrar")
    }
}
podeEntrar(pessoaA.idade, pessoaA.temIngresso)
podeEntrar(pessoaB.idade, pessoaB.temIngresso)
podeEntrar(pessoaC.idade, pessoaC.temIngresso)


//ITERAÇÃO
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

//vamos entender o nosso dado 
console.log("O ", alunos[2].nome, " tirou média ", alunos[2].media)

//Exercício 1: passando pela lista imprima apenas os nomes de alunos que fizeram a prova.
//Exercício 2: quantos alunos fizeram a prova?

//Exercício 1
for (let aluno of alunos) {
    if (aluno.fezProva == true){
        console.log(aluno.nome)
    }
}

// //Exercício 2
let quantidadeDeAlunos = 0
for (let aluno_b of alunos) {
    if (aluno_b.fezProva == true) {
        //quantidadeDeAlunos = quantidadeDeAlunos + 1
        //quantidadeDeAlunos ++
        quantidadeDeAlunos += 1

    }
}
console.log("A quantidade de alunos que fizeram prova é: ", quantidadeDeAlunos)

//Métodos

//Exercício
console.log("a chamada a seguir usa o método for each")
alunos.forEach(
    (aluno) => {

        if (aluno.fezProva == true) {
            console.log(aluno.nome)
        }

    }
)