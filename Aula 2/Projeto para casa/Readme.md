# Criando seu repo remoto e subindo arquivos

### Exercício 1: Criando o repositóriio

Esse repositório você poderá usar até o fim do curso para colocar as soluções dos seus projetos
e exercícios. Então lembre-se de colocar um nome relevante e pensar em como quer organizar suas pastas.


1. Com sua conta criada no github.com crie um novo repositório remoto com o nome "aprenda-a-programar" ou outro nome que julgar relevante.
2. Assim que criar, você verá um link na tela. Abra o seu terminal (git bash se estiver no Windows) e clone o repositório para o local que desejar.
   Utilize o comando ```git clone <link que você recebeu quando criou o repo>```.
3. Dentro da sua pasta com arquivos da Aula 2 crie um arquivo "index.html". Abra seu editor de texto e cole o conteúdo HTML abaixo no arquivo. Salve.
4. Utlizando o comando ```git status``` o arquivo index.html deve aparecer como modificado/criado.
5. Faça o staging dele com ```git add index.html```.
6. E agora faça o commit com ```git commit -m "mensagem de commit"```. Lembre-se de usar uma mensagem sucinta e relevante que deixe
   clara a alteração que você fez.
7. Agora, cheque o repositório remoto em github.com e veja que o arquivo ainda não está lá. Vamos subir nossas alterações do local para o remoto.
   Para isso use o comando ```git push```.

### Desafio: Tente criar um arquivo Readme.md resumindo para o que seu repositório serve.

Faça uma boa formatação do arquivo utilizando Markdown e tente subir esse arquivo para o seu repo remoto.
Aqui você encontra a documentação do Markdown https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax.

Lembre-se fuçar e pesquisar é fundamental em programação.

### Envie a tarefa feita no canal #tarefa-dia-1 do Discord com o link do seu repositório criado e commitado.


#### HTML Para colar no arquivo index.html do exercício 1.
```
<html>
    <head>
        <title>ITuring</title>
    </head>

    <body>
        <h1>Primeira Página - Aprendendo a Programar</h1>
        <p>Esse é o primeiro arquivo do curso aprendendo a programar.</p>
    </body>
</html>
```
