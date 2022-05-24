
const calculoIMC = (peso, altura) => {
    //Faça o cálculo do IMC nesta função. Não esqueça de retornar o valor do cálculo com o comando 'return'.

}

const resultadoIMC = (indiceIMC) => {
    //Retorne o resultado do IMC nesta função. A função deve retornar "Baixo peso", "Normal", "Sobrepeso" ou "Obesidade" de acordo com o índice (indiceIMC) recebido como parâmetro. Ou seja, utilize comandos 'if' para verificar em qual faixa o índice está para retornar o texto adequado.
    
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}
