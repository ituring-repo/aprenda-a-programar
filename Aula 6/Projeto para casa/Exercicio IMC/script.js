
const calculoIMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
    

}

const resultadoIMC = (indiceIMC) => {
    // insira sua lógica do ex.2 aqui.
    // dica, lembre-se que quando queremos que duas condições sejam verdadeiras, usamos o operador &&
    // neste caso, conforme vimos em aula, caso a pessoa precise estar 
    // acima de um imc E abaixo de outro, podemos fazer algo como 
    // if (x > 5 && x < 10) {
    // }

    // não esqueça de retornar o texto da faixa do IMC.
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}
