//Com essa linha estamos importando a biblioteca fs para que possamos utilizá-la.
const fs = require('fs');

//Utlizamos o método readFileSync para ler o arquivo dados.txt da nossa pasta.
let dados = fs.readFileSync('dados.txt', 'utf-8');
//Esse conosole.log nos mostra como os arquivos foram lido.
console.log(dados);


//Sabendo que cada aluno está em um alinha do texto, podemos usar o split a seguir 
//para obter uma lista de alunos. 
let _dados = dados.split("\n");
//checamos nossa lista
console.log(_dados)

//Coloque sua solução a partir daqui

/* Dicas:
- Perceba que cada aluno tem seu cadastro e nota separados por ' | '. 
- Lembre-se, o resultado que queremos é uma lista de listas, ou uma lista de mapas. Algo que nossa backend 
  possa iterar para subir os dados no sistema
  */

//SOLUÇÃO GABARITO
let _objetos = [];
for (dado of _dados) {
    let buffer = dado.split(' | ');

    let obj = {};
    obj.cadastro = buffer[0];
    obj.nota = buffer[1];

    _objetos.push(obj);
}

console.log(_objetos);

//SOLUÇÃO DO DESAFIO
for (objeto of _objetos) {
    //let aprovado = objeto.nota > 5 ? 'aprovado' : 'reprovado';
    let aprovacao = '';
    if (objeto.nota > 5) {
        aprovacao = "aprovado";
    } else {
        aprovacao = "reprovado";
    }
    let texto = `O cadastro ${objeto.cadastro} teve nota ${objeto.nota}. Portanto foi ${aprovacao} \n`
    fs.appendFileSync("boletim.txt", texto);
}