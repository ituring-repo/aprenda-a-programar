console.log("OI, meu primeiro script")

const funcaoParaConsole = () => {
    console.log("Esse texto foi chamado pela funcao")
}


const funcaoDeAlerta = () => {
    alert("Esse texto foi chamado pela funcao")
}

const alterarParagrafo = () => {
    //acessar o DOM - Document Object Model
    //mapas - objetos
    document.getElementById("paragrafo1").innerText = "Esse é o paragráfo alterado"
    
}

