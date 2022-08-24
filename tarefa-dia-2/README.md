# Tarefa - Dia 2: Aprendendo a programar e adquirindo o hábito com GitHub (parte 1)

Saudações, estudante da nossa imersão Aprenda a Programar do ITuring! Vamos então para a nossa 2ª tarefa do curso. Na 1ª tarefa, você exercitou os comandos de terminal e criou sua conta no GitHub. Agora você vai aprender a mexer com o GitHub e começar a escrever suas primeiras linhas de código! 🤩

**Importante:** a Etapa 3 você só conseguirá fazer depois da aula do Dia 3 que vamos ensinar amanhã às 19h. Por enquanto, foque apenas em fazer a etapa 1 e a etapa 2.

Na tarefa do dia 2, faremos o seguinte:
- [**Etapa 1:**](#etapa-1-subindo-a-tarefa-do-dia-1-para-o-repositório-remoto-aprenda-a-programar) Subindo a tarefa do dia 1 para o repositório remoto `aprenda-a-programar`
- [**Etapa 2:**](#etapa-2-explorando-declaração-de-variáveis-e-atribuição-de-valores) Explorando declaração de variáveis e atribuição de valores
- [**Etapa 3:**](#etapa-3-explorando-e-entendendo-um-pouco-comandos-condicionais) Explorando comandos condicionais

## Etapa 1: Subindo a tarefa do dia 1 para o repositório remoto `aprenda-a-programar`

Na tarefa do dia 1, você criou sua conta no GitHub, obteve o token de acesso e criou o seu primeiro repositório remoto no GitHub chamado `aprenda-a-programar`. Você utilizará este repositório para colocar todas as soluções das tarefas desenvolvidas no nosso curso.

Agora vamos subir a tarefa do dia 1 para o seu repositório remoto `aprenda-a-programar` (ou outro nome que você tenha dado para ele)!

### Etapa 1.1: Clonando o seu repositório remoto no seu computador
1. Abra o seu terminal (lembrete: se estiver no Windows, o terminal é o 'Git Bash') e configure o seu nome e email no git executando os seguintes comandos em sequência (**importante:** coloque o email que você registrou sua conta no GitHub):
``` 
  $ git config --global user.name "Seu nome aqui"
  $ git config --global user.email seuemail@aqui.br
```
**Observação:** você pode estar em qualquer diretório no terminal para executar os comandos acima. Ou seja, não é necessário estar em uma pasta específica, pois os comandos acima são de configuração geral do Git e se aplicam em qualquer lugar. 

2. Veja se as configurações que você fez deram certo com `git config --list`
1. Agora em um navegador, entre no https://github.com e logue na sua conta do GitHub
1. Ainda no navegador, entre no repositório que você criou na sua conta do GitHub. Assim que entrar, você verá um link na tela começando com `https://github.com/...` e terminando com `.git`.
1. Agora no terminal, clone o repositório para o local que desejar (recomendamos no Desktop ou Área de Trabalho) com o seguinte comando:
```
git clone link_do_repositório_que_você_criou
```
**Importante:** se perguntarem o login e senha, você pode colocar o seu email de login do GitHub e o token que você criou no dia 1!

6. Ainda no terminal, confira se deu tudo certo e se apareceu uma pasta no local que você clonou o repositório. Esta pasta vazia (por enquanto) tem uma conexão com o repositório remoto! :)

Esta pasta vazia que está no seu computador é o seu **repositório local**! Ou seja, está na sua máquina local. Já o que está lá no seu perfil do site do GitHub é o **repositório remoto**. Eles estão conectados!


### Etapa 1.2: Colocando a tarefa do Dia 1 no seu repositório local e fazendo o commit
1. Agora na tarefa do dia 1, você criou uma pasta com o nome `dia-1-proximos-passos`, certo? Entre nessa pasta navegando pela interface mesmo (sem ser pelo terminal), copie a pasta `tarefa-dia-1` e cole dentro do **repositório local** `aprenda-a-programar` (ou o nome que você deu) que você acabou de clonar do seu repositório remoto.

Agora a sua pasta do **repositório local** deve ficar assim:
```
📦 aprenda-a-programar
 ┗ 📂 tarefa-dia-1
   ┗ 📜 resumo-dia-1.md
```
2. Utilizando o comando `git status`, a pasta `tarefa-dia-1` deve aparecer como modificada/criada, assim como o arquivo dentro dela.

**Importante:** todos os comandos `git` você tem que executar dentro da pasta `aprenda-a-programar`. Se executar o comando fora da pasta, não vai funcionar, pois você estará fora do seu **repositório local** `aprenda-a-programar`. Ou seja, no terminal, você precisa estar dentro do seu repositório local para executar os comandos `git status`, `git add`, `git commit`, etc.

3. Agora faça o 'staging' da pasta e do arquivo que você adicionou executando o comando `git add .` no terminal. O símbolo `.` significa que você está adicionando no 'staging' tudo que estiver como `modificado/criado`.
1. Execute novamente o comando `git status` e veja que agora a pasta com o arquivo foi adicionada no 'staging'.
1. Agora faça o commit com `git commit -m "mensagem de commit apropriada"`. Lembre-se de usar uma mensagem sucinta e relevante que deixe clara a alteração que você fez. Pode começar a mensagem com letra minúscula, não tem problema. Mas, se quiser, pode ser com maiúscula também, você que manda.
1. Confira se o commit foi realizado com `git log` (para sair do `git log`, pressione a tecla `q`). O comando `git log` mostra todos os commits que você fez no seu repositório!

Parabéns! Este foi o seu 1º commit dentro da nossa imersão Aprenda a Programar. Pessoas programadoras commitam o código frequentemente, todos os dias praticamente. A partir de agora você vai sempre commitar o seu código e subir as alterações para o seu GitHub. :)

### Etapa 1.3: Preparando a tarefa do Dia 2 no seu repositório local e fazendo o commit

1. Agora, ainda no terminal, crie uma nova pasta dentro de `aprenda-a-programar` com o nome `tarefa-dia-2` (lembre-se do `mkdir`) e em seguida crie um arquivo chamado `index.html` dentro da pasta `tarefa-dia-2`.

Agora a sua pasta do **repositório local** deve ficar assim:
```
📦 aprenda-a-programar
 ┗ 📂 tarefa-dia-1
   ┗ 📜 resumo-dia-1.md
 ┗ 📂 tarefa-dia-2
   ┗ 📜 index.html
```

2. Abra o arquivo `index.html` com o seu editor de texto (o VSCODE) e cole o conteúdo HTML abaixo no arquivo e depois salve.
```
<html>
    <head>
        <title>ITuring</title>
    </head>

    <body>
        <h1>Primeira Página HTML - Aprendendo a Programar do ITuring</h1>
        <p>Esse é o primeiro arquivo e parágrafo do curso Aprenda a Programar do ITuring. ITuring vem de Instituto Turing. Turing vem de Alan Turing.</p>
        <p>Alan Mathison Turing (23 de junho de 1912 – 7 de junho de 1954) foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações, infelizmente ele nunca foi totalmente reconhecido em seu país de origem enquanto estava vivo por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais.</p> 
    </body>
</html>
```
3. Ainda no terminal e, claro, dentro do repositório local `aprenda-a-programar`, utilizando o comando `git status`, o arquivo `index.html` deve aparecer como modificado/criado, assim como a pasta `tarefa-dia-2`.
1. Faça o staging dele e da pasta com `git add .`.
1. Agora faça o commit com `git commit -m "mensagem de commit apropriada"`. Novamente, lembre-se de usar uma mensagem sucinta e relevante que deixe clara a alteração que você fez.

Opa! Já se foram 2 commits no repositório local. :D

Mas, e o **repositório remoto**? Se você entrar na sua conta no site do GitHub, você vai ver que ainda não tem nada do que você fez no seu repositório local por lá. Ela só estará assim:
```
📦 aprenda-a-programar
 ┗ [nada dentro 😕]
```

Seus problema acabaram (rs), agora vamos subir todas as alterações que você fez no seu repositório local para o repositório remoto.

### Etapa 1.4: Subindo todas as alterações para o seu repositório remoto

1. Novamente, cheque o repositório remoto no seu perfil do github.com e veja que os arquivos e as novas pastas ainda **não** estão lá. Vamos subir nossas alterações do repositório local para o repositório remoto.
1. Para isso, no terminal, e, claro, dentro do repositório local `aprenda-a-programar`, execute o comando `git push` no terminal  (se perguntarem a senha, você pode colocar o token que você criou durante a tarefa do dia 1!). Reforçando, todos os comandos `git` você deve fazer dentro da pasta do repositório local. Se executar o comando fora da pasta, não vai funcionar.
1. Pronto. Agora veja que os arquivos estão corretamente no seu repositório remoto e veja mais um verdinho que apareceu no seu perfil do GitHub! :D

Parabéns por ter chegado até aqui! É este o espírito, programar todos os dias e deixar o GitHub cada vez mais "verdinho". Agora é a hora. Vamos programar pra valer.

## Etapa 2: Explorando e entendendo um pouco de declaração de variáveis e atribuição de valores

Antes de começar a programar , vamos organizar a pasta onde você está desenvolvendo as tarefas:
1. No terminal, vá para a pasta `tarefa-dia-2`
1. Crie os seguintes arquivos nesta pasta:
- `pratica-1.js`
- `pratica-2.js`
- `pratica-3.js`
- `pratica-4.js`

Novamente, pelo terminal com o comando `touch nomedoarquivo`. Ou, execute o comando `for i in {1..4}; do touch pratica-${i}.js; done` e veja a mágica acontecer (dê um `ls` para ver todos os arquivos criados). Isso é programação! Para saber mais: [introdução ao shell script](https://canaltech.com.br/linux/Introducao-ao-Shell-Script/).

3. Agora volte para a pasta `aprenda-a-programar` e execute os comandos git (`git status` -> `git add .` -> `git commit -m 'mensagem de commit'` -> `git log` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub.

O resultado final deve ser este:
```
📦 aprenda-a-programar
 ┗ 📂 tarefa-dia-1
   ┗ 📜 resumo-dia-1.md
 ┗ 📂 tarefa-dia-2
   ┣ 📜 index.html
   ┣ 📜 pratica-1.js
   ┣ 📜 pratica-2.js
   ┣ 📜 pratica-3.js
   ┗ 📜 pratica-4.js
```

Pronto, agora sim, bora programar!

**Muito importante:** não se preocupe se você achar que está difícil. Lembre-se que, se for o seu caso, você está conhecendo programação agora, e, como tudo na vida, no início é sempre mais complicado. Por isso, o que mais queremos é que você entenda um pouco de código. Não é obrigatório conseguir fazer tudo com perfeição. Se fizer, excelente! Se não fizer, sem problema algum. Agora tire a palavra "difícil" da mente e vai com tranquilidade. Curta o processo, divirta-se com o código. Vamos lá.

### Prática 1: Preparando uma mensagem de uma agência de turismo
1. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência.
1. Agora no arquivo `pratica-1.js`, declare 5 variáveis que vão armazenar os seguintes valores:
- seu nome
- seu email
- sua profissão
- sua idade
- o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)
3. Dê um nome apropriado para cada variável. Ou seja, o nome da variável deve sugerir o valor que ela armazena (ex: se você vai armazenar sua idade, então o nome da variável ideal pode ser `idade`, não acha?). Isso é primordial em programação, pois é muito importante que a gente escreva um código que as outras pessoas consigam entender, não só o computador.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal (**importante:** o terminal deve estar na pasta onde está o arquivo `pratica-1.js` para conseguir executá-lo com o comando `node`).
1. Não exibiu nada? Então funcionou! É porque você não utilizou o `console.log()` (ainda, vamos utilizar daqui a pouco).
1. Agora execute os comandos git (`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git log` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub
1. Agora atribua a cada uma das variáveis o valor de cada uma delas, ou seja, o seu email, sua profissão, sua idade e o lugar que você sonha um dia conhecer. Lembre-se que cada valor precisa ser do tipo mais apropriado. Ou seja, idade deve ser um `number` ou uma `string`? E nome, `string`, né? Assim em diante.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. Agora exiba na tela cada um dos valores que você atribuiu às variáveis com o comando `console.log()`. Ou seja, você precisará usar esse comando 4 vezes seguidas para exibir cada uma das 4 variáveis. Consegue utilizá-lo apenas uma vez? Fica como desafio.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Teste, explore, exiba mais coisas com `console.log()` se quiser. O importante é "fuçar" e ir entendendo a lógica de cada comando.
1. Novamente, execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. **(Desafio - Opcional)** Agora você deve ajustar o uso do `console.log()` para que os valores de cada uma das variáveis se encaixe nessa frase que deve ser exibida na tela:
```Olá, <valor da variável que tem o seu nome>! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para <valor da variável que armazena o lugar que você sonha conhecer>. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é <valor da variável que armazena sua profissão> e o seu email é <valor da variável que armazena seu email>? Ficamos no aguardo. Muito obrigado e boa viagem! :D```

Como fazer isso? Pesquise por `template strings` no Google e tente descobrir como utilizar *template strings* no JavaScript. Tentou, mas não foi? Sem problema algum, esta provavelmente é sua 1ª experiência com programação. Acredite, você já está fazendo MUITA coisa para apenas 2 dias. Por isso, mande suas dúvidas lá no nosso Discord.

14. **(Desafio - Opcional) continuação:** Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. **(Desafio - Opcional) continuação:** Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.

Este é o processo de programar. Comitar o código é parte integral do processo. Nesta prática, você comitou com bastante frequência e também testou o código em vários pequenos momentos. Pra quem está começando, isso ajuda MUITO a errar menos e acertar mais (mas errar muito também não é problema, pelo contrário).

Por isso, nesse início, escreva partes bem pequenas do código e vai evoluindo aos poucos e sempre testando o código executando-o com `node nomedoarquivo.js`. Mais pra frente você certamente vai querer fazer menos commits, mas neste início, recomendamos que siga esse processo pois vai te ajudar bastante! Agora a próxima prática nós não vamos explicar muito cada um dos passos. Agora é com você.

## Etapa 3: Explorando e entendendo um pouco comandos condicionais

Agora que você praticou declaração de variáveis, atribuição de valores às variáveis e o uso do comando `console.log()`, vamos explorar os comandos condicionais. Mas antes de codificar comandos condicionais, vamos tentar pegar a lógica do `if`.

### Prática 2: Entra no `if` ou entra no `else`?

1. Copie [este código](condicoes.js) e cole no seu arquivo `pratica-2.js` (no VSCODE). Em seguida, clique em salvar.
1. Agora analise os comandos `if` do código e coloque a resposta nestes comentários que estão dentro do código:
> `// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): `

3. Agora execute o código no terminal (lembre-se, `node nomedoarquivo.js`) e veja se você acertou
1. Agora execute os comandos do git para comitar o código e subir no seu repo remoto do GitHub

Show! Agora vamos resolver um problema utilizando comandos condicionais.

### Prática 3: Alan Turing conseguiu decifrar a máquina Enigma? Ajude-o neste desafio!

O matemático e cientista da computação Alan Turing estava decifrando um dos códigos da máquina de criptografia Enigma durante a 2ª guerra mundial. Ele descobriu que se o código tiver mais que 6110 caracteres, a mensagem codificada não poderia ser decifrada em tempo hábil para derrotar os nazistas. Por isso ele pediu a ajuda dos programadores do ITuring para ajudá-lo a contabilizar quantos caracteres tem essa mensagem e assim dizer para ele se ('if') eles terão tempo hábil ou não para derrotar os nazistas.

Sua missão será escrever um programa que ao receber esse código, informe para Alan Turing se eles vão conseguir derrotar os nazistas ou não. Para isso, ele deixou um arquivo com o código imenso. Sua missão será armazenar esse código em uma variável, verificar se essa variável tem mais ou menos que 121333 caracteres e a partir dessa verificação, determinar se eles vão vencer os nazistas ou não. Vamos começar? Se quiser fazer sem o nosso passo-a-passo abaixo, apenas garanta que está seguindo as instruções da parte 1 e da parte 4 e 5.

1. Pegue o código que Alan Turing nos enviou [aqui](alanturingcode.js) e armazene esse valor em uma variável, tudo no arquivo `pratica-3.js` (claro, usando o VSCODE). Sim, é um valor muuuito grande, mas não tem problema, pode armazenar na variável que vai funcionar.
1. Agora pesquise no Google o termo `verificar tamanho da string em javascript` e descubra como saber o tamanho de uma string em JavaScript.
1. Descobriu? Utilize esse método no seu código e armazene o valor resultante em uma nova variável (pense em um bom nome para essa nova variável).
1. Agora verifique se esse valor é maior ou menor que 6110. Se (`if`) for maior, você deve exibir na tela `Perdão, Alan Turing. Vocês não conseguirão derrotar os nazistas. :'(`. Se for menor (ou igual?) (`else`), você deve exibir `Maravilha! O código tem menos ou é igual a 6111 caracteres! Mãos à obra! Decifrem o código o quanto antes que vocês vão conseguir derrotá-los! :D`.
1. Por fim, faça o de sempre: teste o código, veja se ele está funcionando e depois suba ele no GitHub.

Muito bom! Agora a Prática 4 abaixo é opcional. E dessa vez não tem passo-a-passo, você deve resolver por conta própria.

### Prática 4 (Opcional): Resolvendo mais problemas com programação

Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. 
O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e 
se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica 
se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro.
Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você:
```
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
```

Copie essa base para o arquivo `pratica-4.js` e escreva um programa que resolve o problema do cliente e exibe as informações dos produtos e o valor aplicado os impostos devidos. Você deve testar o seu código com os 3 produtos. Não esqueça do de sempre: testar o código, ver se ele está funcionando e depois subir ele no GitHub.

**Dica 1:** lembre-se do que falamos no dia 1. Programar é errar e consertar. É SEMPRE experimentando e "futucando". É ser uma pessoa desbravadora, que futuca e vai tentando tudo de quanto é jeito até acertar. Experimente o `console.log()`, execute o código e veja o que aparece na tela. Começa tentando exibir as informações de cada produto. Lembrando que pra executar o código você digita `node nomedoarquivo.js` no terminal.

**Dica 2:** lembre-se que para acessar ou alterar as informações das variáveis do tipo mapa você utiliza `nomedavariavel["nome"]`, `nomedavariavel["valor"]`, `nomedavariavel["internacional"]` ou `nomedavariavel.nome`, `nomedavariavel.valor`, `nomedavariavel.internacional`. Altere as informações e depois tente exibir com `console.log()`. Veja se realmente foram alteradas ao ver o que foi exibido com o `console.log()`.

**Dica 3:** resolver problemas é **sempre** baby-steps (passos de bebê). Não existe nenhuma pessoa programadora do mundo que não siga esse processo. As melhores sempre fazem isso, um passo de cada vez, dividir para conquistar. Pra quem está começando, este método é ainda mais importante! Começa fazendo algo bem simples primeiro. Testa e veja se funcionou. Funcionou? Não funcionou? Deu algum erro? Pesquisa o que foi que deu errado e corrige. Corrigiu? Vai pro próximo passo. E assim em diante.

**Dica 4:** fique tranquilo(a). A 1ª vez que coloca a mão no código é sempre mais difícil. Tudo mais confuso na cabeça, as coisas estão se materializando, o entendimento, a compreensão e prática é que vai te permitir a evolução. Aos poucos você vai pegando o jeito e depois você verá que tudo fica mais tranquilo e fluido. Como falamos no 1º dia, quando a pessoa aprende a dirigir é o mesmo processo! Tudo mais difícil no início, depois fica natural e rápido.

**Dica 5:** para aplicar 20% de impostos, você deve multiplicar por 1.2. Para aplicar 12%, você deve multiplicar por 1.12.

**Dica 6:** você vai precisar criar comandos condicionais que verificam se o produto é internacional ou não. Se for internacional, deve exibir o nome do produto e o valor com os impostos de 20%. Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.

### Prática 5 (Opcional): Criando um arquivo README.md resumindo para o que seu repositório serve

Crie o arquivo `README.md` no seu repositório local na pasta `aprenda-a-programar` (ou o nome que você deu pra ela). Aproveite para descrever neste arquivo pra que serve o seu repositório! Faça uma boa formatação do arquivo utilizando Markdown e suba este arquivo para o seu repositório remoto. [Aqui](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) você encontra a documentação de como utilizar o Markdown.

Faça o commit e depois suba o seu novo arquivo para o repositório remoto.

Lembre-se de que "fuçar" e pesquisar é fundamental em programação. Esta é, se não a principal, uma das principais habilidades que buscamos com este curso.

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-2**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.

 Para enviar a tarefa, basta copiar o link do seu repositório `bootcamp-full-stack-ituring` no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.gg/FXage6t99U) no canal **#💪 │ tarefa-semana-2**.

Ao final de todas as etapas, o seu repositório **remoto** e **local** deverá ter as seguintes pastas e arquivos:

```
📦 aprenda-a-programar
 ┗ 📜 README.md (caso tenha feito o desafio opcional)
 ┗ 📂 tarefa-dia-1
   ┗ 📜 resumo-dia-1.md
 ┗ 📂 tarefa-dia-2
   ┣ 📜 index.html
   ┣ 📜 pratica-1.js
   ┣ 📜 pratica-2.js
   ┣ 📜 pratica-3.js
   ┗ 📜 pratica-4.js (caso tenha feito o desafio opcional)
```
