# Tarefa - Dia 2: Gerando o hábito de programar com o GitHub

Na tarefa do dia 2, faremos o seguinte:
- **Passo 1:** Configurando sua conta no GitHub e obtendo o token de acesso
- **Passo 2:** Criando o repositório remoto `aprenda-a-programar`
- **Passo 3 (Opcional):** Criando um arquivo README.md resumindo para o que seu repositório serve

## Passo 1: Configurando sua conta no GitHub e obtendo o token de acesso

Neste passo, se ainda não fez, vamos criar sua conta no GitHub e mostrar como obter o token de acesso para que você consiga subir código no seu perfil do GitHub. Então vamos lá!

### Criando sua conta no Github

1. No https://github.com/, clique em "Sign up" e siga os passos de criação de conta.
1. Na área de recursos que se interessa, pode pular e em seguida selecionar a conta "free"
1. Pronto! Sua conta está criada. :)

### Obtendo o token de acesso

Para conseguir subir códigos no seu perfil do GitHub, você precisa de um token que funciona como uma senha. No passo 2 você vai ver como utilizar esse código. Vamos então obter esse token:
1. Logado na sua conta conta no https://github.com/, clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo).
1. Em seguida, clique no penúltimo item, em "Settings".
1. Depois disso, no menu lateral esquerdo, vá até o último item e clique nele, no "Developer settings".
1. Agora clique em "Personal access tokens".
1. Agora clique em "Generate new token".
1. Em "Note", pode colocar "Token para o curso Aprenda a Programar do ITuring".
1. Pode selecionar a opção "No expiration" no Expiration.
1. Em seguida, pode selecionar todos os itens abaixo ("repo", "workflow", "write:packages", "delete:packages", etc).
1. Por fim, clique em "Generate token".
1. Pronto! Este será o token que você utilizará como senha para acessar e subir seus códigos no GitHub. Guarde-o em algum lugar pra você utilizar no passo 2.
1. Caso você perca o token, basta ir novamente em Seu perfil -> Settings -> Developer settings -> Personal access tokens e gerar um novo token

## Passo 2: Criando o repositório remoto `aprenda-a-programar`

Agora vamos criar o seu 1º repositório remoto no GitHub. Você utilizará esse repositório para colocar todas as soluções das tarefas desenvolvidas no nosso curso. Por isso, lembre-se de colocar um nome relevante e busque sempre deixá-lo organizado.

1. Com sua conta criada no https://github.com/, crie um novo repositório remoto com o nome `aprenda-a-programar` ou outro nome que julgar relevante. Para isso, basta clicar em "Create repository".
1. Em seguida, preencha o nome do repositório em "Repository name" e deixe uma descrição caso queira.
1. Mantenha a marcação "Public", caso contrário não vamos conseguir ver seu repositório.
1. Em seguida, clique em "Create repository".
1. Assim que criar, você verá um link na tela começando com `https://github.com/...` e terminando com `.git`. Abra o seu terminal ('git bash' se estiver no Windows) e clone o repositório para o local que desejar (recomendamos no Desktop ou Área de Trabalho). Para isso, execute o comando `git clone link_que_você_recebeu_quando_criou_o_repo` no terminal (se perguntarem a senha, você pode colocar o token que você criou no passo 1!)
1. Ainda no terminal, confira se deu tudo certo e se apareceu uma pasta no local que você clonou o repositório. Esta pasta tem uma conexão com o repositório remoto! :)
1. Agora na tarefa do dia 1, você criou uma pasta com o nome `ituring-aprenda-a-programar`, certo? Entre nessa pasta navegando pela interface mesmo (sem ser pelo terminal), copie a pasta `tarefa-dia-1` e cole dentro da pasta `aprenda-a-programar` (ou o nome que você deu) que você acabou de clonar do seu repositório remoto.
1. Utilizando o comando `git status`, a pasta deve aparecer como modificada/criada, assim como o arquivo dentro dela. Lembre-se, todos os comandos você tem que executar dentro da pasta `aprenda-a-programar` (ou o nome que você deu). Se executar o comando fora da pasta, não vai funcionar.
1. Faça o staging da pasta executando o comando `git add tarefa-dia-1` ou `git add *` no terminal. O símbolo `*` significa que você está adicionando no staging tudo que estiver como `modificado/criado`.
1. Execute novamente o comando `git status` e veja que agora a pasta com o arquivo foi adicionada no staging.
1. Agora faça o commit com `git commit -m "Mensagem de commit apropriada"`. Lembre-se de usar uma mensagem sucinta e relevante que deixe clara a alteração que você fez.
1. Agora crie uma nova pasta dentro de `aprenda-a-programar` com o nome `tarefa-dia-2` (pode usar o terminal dessa vez, lembre-se do `mkdir`) e em seguida crie um arquivo chamado `index.html` dentro da pasta `tarefa-dia-2`. Abra seu editor de texto e cole o conteúdo HTML abaixo no arquivo. Salve.
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
13. Utilizando o comando `git status`, o arquivo `index.html` deve aparecer como modificado/criado, assim como a pasta `tarefa-dia-2`.
1. Faça o staging dele e da pasta com `git add *` ou `git add tarefa-dia-2`.
1. Agora faça o commit com `git commit -m "Mensagem de commit apropriada"`. Novamente, lembre-se de usar uma mensagem sucinta e relevante que deixe clara a alteração que você fez.
1. Agora, cheque o repositório remoto no seu perfil do github.com e veja que os arquivos e as novas pastas ainda **não** estão lá. Vamos subir nossas alterações do local para o remoto.
1. Para isso, execute o comando `git push` no terminal  (se perguntarem a senha, você pode colocar o token que você criou no passo 1!). Lembre-se, todos os comandos você tem que fazer dentro da pasta. Se executar o comando fora da pasta, não vai funcionar.
1. Pronto. Agora veja que os arquivos estão corretamente no seu repositório remoto! :D

Parabéns por ter chegado até aqui! Agora vamos para o último passo da tarefa. Este é opcional. Se não quiser fazer, pode ir para o "Enviando a sua tarefa no nosso Discord".

## Passo 3 (Opcional): Criando um arquivo README.md resumindo para o que seu repositório serve

Crie o arquivo `README.md` no seu repositório local na pasta `aprenda-a-programar` (ou o nome que você deu pra ela). Aproveite para descrever neste arquivo pra que serve o seu repositório! Faça uma boa formatação do arquivo utilizando Markdown e suba este arquivo para o seu repositório remoto. [Aqui](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) você encontra a documentação de como utilizar o Markdown.

Faça o commit e depois suba o seu novo arquivo para o repositório remoto.

Lembre-se de que "fuçar" e pesquisar é fundamental em programação. Esta é, se não a principal, uma das principais habilidades que buscamos com este curso.

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-2**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.
