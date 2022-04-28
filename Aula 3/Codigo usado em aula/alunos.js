
//Usando o Console.Log
console.log("Olá, Mundo! Sou o primeiro programa da ITuring.")


//Declarando variáveis
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

//Vendo as variáveis na tela
console.log(idade)
console.log(nome)
console.log(boolA)
console.log(boolB)
console.log(lista)
console.log(mapa)

//Podemos acessar pedaços de listas e mapas
console.log(lista[5])
console.log(mapa['anos_de_casado'])

//Tipagem Estática: eu preciso dizer para o computador o tipo de variável que estou criando.
//Tipagem Dinâmica: o computador já percebe o tipo de variável que está sendo usada.


//Podemos trocar o valor de uma variável sem precisar usar o let para declarar novamente.
let numero = 10
console.log(numero)
numero = "Teste de texto"
console.log(numero)


//Podemos fazer contas com variáveis
let numero_a = 10
let numero_b = 15
let soma = (numero_a + numero_b) / 2
console.log(soma)

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