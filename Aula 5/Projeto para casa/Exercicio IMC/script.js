
const IMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
    

}

const faixaIMC = (indice) => {
    //insira sua lógica do ex.2 aqui.
    //dica, lembre-se que quando queremos duas condições simultaneas, usamos o &&
    //conforme vimos em aula, caso a pessoa precise estar 
    //acima de um imc E abaixo de outro, podemos fazer algo como 
    // if (x < 10 && x > 5)

    //não esqueça de retornar o texto da faixa.

}

const pegarValores = () => {
    let num1 = Number(document.getElementById("peso").value)
    let num2 = Number(document.getElementById("altura").value)

    let imc = IMC(num1, num2)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixa = faixaIMC(imc)
    alert("Sua faixa de IMC é: " + faixa);
}
