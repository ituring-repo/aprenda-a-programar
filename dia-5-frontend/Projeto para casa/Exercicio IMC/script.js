
const calculoIMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
    
    return peso/(altura * altura)
}

const resultadoIMC = (indiceIMC) => {
    return "não sei"
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}
