const mensagemDoClick_consoleLog = () => {
    console.log("Botão pressionado")
}

const mensagemDoClick_alert = () => {
    alert("Botão pressionado")
}

const manipulacaoDom = () => {
    let paragrafo = document.getElementById("paragrafo")
    //Mostrar os 2 para comparar
    console.log(paragrafo)
    console.log(paragrafo.innerText)
}