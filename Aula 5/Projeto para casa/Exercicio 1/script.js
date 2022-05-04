
const somar = (n1, n2) => {
    //insira sua lógica aqui
    

}

const pegarValores = () => {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = somar(num1, num2)
    console.log(resultado)
    document.getElementById("resultado").innerText = "O resultado é: " + resultado
}
