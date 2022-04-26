# Tarefa - Dia 2: Gerando o hábito de programar com o GitHub

## Criando seu repo remoto e subindo arquivos

### Exercício 1: Criando o repositóriio

Esse repositório você poderá usar até o fim do curso Aprenda a Programar para colocar as soluções dos seus projetos
e exercícios. Por isso, lembre-se de colocar um nome relevante e pensar em como quer organizar suas pastas. Deixar as coisas organizadas tem sua importância.


1. Com sua conta criada no github.com, crie um novo repositório remoto com o nome "aprenda-a-programar" ou outro nome que julgar relevante.
2. Assim que criar, você verá um link na tela. Abra o seu terminal (git bash se estiver no Windows) e clone o repositório para o local que desejar.
   Utilize o comando `git clone <link que você recebeu quando criou o repo>`.
3. Dentro da sua pasta com arquivos da Aula 2, crie um arquivo chamado `index.html`. Abra seu editor de texto e cole o conteúdo HTML abaixo no arquivo. Salve.
4. Utlizando o comando `git status`, o arquivo `index.html` deve aparecer como modificado/criado.
5. Faça o staging dele com `git add index.html`.
6. E agora faça o commit com `git commit -m "mensagem de commit apropriada"`. Lembre-se de usar uma mensagem sucinta e relevante que deixe
   clara a alteração que você fez.
7. Agora, cheque o repositório remoto em github.com e veja que o arquivo ainda não está lá. Vamos subir nossas alterações do local para o remoto.
   Para isso use o comando `git push`.

### Exercício 2: Crie um arquivo README.md resumindo para o que seu repositório serve.

Faça uma boa formatação do arquivo utilizando Markdown e suba este arquivo para o seu repo remoto.
Aqui você encontra a documentação do Markdown https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax.

Lembre-se de que "fuçar" e pesquisar é fundamental em programação. Esta é, se não a principal, uma das principais habilidades que buscamos com este curso.

### Envie a tarefa feita no formulário disponibilizado no canal `#tarefa-dia-2` do Discord com o link do seu repositório criado e comitado.


#### HTML Para colar no arquivo index.html do exercício.
```
<html>
    <head>
        <title>ITuring</title>
    </head>

    <body>
        <h1>Primeira Página HTML - Aprendendo a Programar do ITuring</h1>
        <p>Esse é o primeiro arquivo e parágrafo do curso Aprenda a Programar do ITuring. ITuring vem de Instituto Turing. Turing vem de Alan Turing.</p>
        <p>Alan Mathison Turing (23 de junho de 1912 – 7 de junho de 1954) foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais.</p> 
    </body>
</html>
```
