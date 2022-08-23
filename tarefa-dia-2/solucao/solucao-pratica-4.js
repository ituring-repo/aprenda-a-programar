//Dados enviados pelo cliente
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true}
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}

//Usamos o condiconal para testar se a chave internacional do mapa produtoA é true ou false.
if (produtoC.internacional == true) {
    //para deixar o código organizado, podemos clarar uma variável que recebe o resultado do calculo de impostos. 
    //Isso deixa o progrmaa mais legível sobre o que está acontecendo.
    let valorImpostos = produtoC.valor * 1.2
    //Podemos adiconar um console.log com uma mensagem que será útil para verificarmos se o programa funcionou corretamente.
    console.log("O produto é internacional")
    console.log(valorImpostos)

} else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("O produto é nacional")
    console.log(valorImpostos)   
}