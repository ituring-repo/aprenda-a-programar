# Tarefa - Dia 3: Aprendendo a programar (parte 1)

Na tarefa do dia 3, faremos o seguinte:
- **Passo 1:** Explorando declaração de variáveis e atribuição de valores
- **Passo 2:** Explorando comandos condicionais
- **Passo 3:** Resolvendo um problema com programação
- **Passo 4 (Opcional):** Resolvendo mais problemas com programação

## Antes de começar

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:
1. Nela, você criou as pastas `tarefa-dia-1` e `tarefa-dia-2`. Agora crie a pasta `tarefa-dia-3` (de preferência, pelo terminal :D).
1. Agora vá para a pasta `tarefa-dia-3` e crie os seguintes arquivos: `pratica-1.js`, `pratica-2.js`, `pratica-3.js` e `pratica-4.js` (novamente, pelo terminal :D).
1. Agora execute os comandos git (`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub

Pronto, agora bora programar!

## Passo 1: Explorando declaração de variáveis e atribuição de valores

Aqui vai a primeira prática:
1. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência.
1. Agora declare 5 variáveis que vão armazenar os seguintes valores:
- seu nome
- seu email
- sua profissão
- sua idade
- o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)
3. Dê um nome apropriado para cada variável. Ou seja, o nome da variável deve sugerir o valor que ela armazena (ex: se você vai armazenar sua idade, então o nome da variável ideal pode ser `idade`). Isso é primordial em programação, pois é muito importante que a gente escreva um código que as outras pessoas consigam entender, não só o computador.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal (**importante:** o terminal deve estar na pasta onde está o arquivo `pratica-1.js` para conseguir executá-lo com o comando `node`).
1. Não exibiu nada? Então funcionou! É porque você não utilizou o `console.log()` (ainda, vamos utilizar daqui a pouco).
1. Agora execute os comandos git (`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub
1. Agora atribua a cada uma das variáveis o valor de cada uma delas, ou seja, o seu email, sua profissão, sua idade e o lugar que você sonha um dia conhecer. Lembre-se que cada valor precisa ser do tipo mais apropriado. Ou seja, idade deve ser um `Number` ou uma `String`? Assim em diante.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. Agora exiba na tela cada um dos valores que você atribuiu às variáveis com o comando `console.log()`. Ou seja, você precisará usar esse comando 4 vezes para exibir as 4 variáveis. Consegue utilizá-lo apenas uma vez? Fica como desafio.
1. Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.
1. **(Desafio - Opcional)** Agora você deve ajustar o uso do `console.log()` para que os valores de cada uma das variáveis se encaixe nessa frase que deve ser exibida na tela:
```Olá, <valor da variável que tem o seu nome>! Somos aqui da agência de turismo Viagem dos Sonhos. Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para <valor da variável que armazena o lugar que você sonha conhecer>. Confirma pra gente alguns dados? A sua idade é <valor da variável que armazena sua idade>, você é <valor da variável que armazena sua profissão> e o seu email é <valor da variável que armazena seu email>? Ficamos no aguardo. Muito obrigado e boa viagem! :D```
14. **(Desafio - Opcional)** Clique em salvar no seu editor de código e execute o código com `node pratica-1.js` no terminal.
1. **(Desafio - Opcional)** Agora execute os comandos git para subir essa atualização no seu repositório remoto do GitHub.

Este é o processo de programar. Comitar o código é parte integral do processo. Nesta prática, você comitou com bastante frequência e também testou o código em vários pequenos momentos. Pra quem está começando, isso ajuda MUITO a errar menos e acertar mais (mas errar muito também não é problema, pelo contrário). Por isso, nesse início, escreva partes bem pequenas do código e vai evoluindo aos poucos e sempre testando o código executando-o com `node nomedoarquivo.js`. Mais pra frente você certamente vai querer fazer menos commits, mas neste início, recomendamos que siga esse processo pois vai te ajudar bastante! Agora a próxima prática nós não vamos explicar muito cada um dos passos. Agora é com você.

## Passo 2: Explorando comandos condicionais

Agora que você praticou declaração de variáveis, atribuição de valores às variáveis e o uso do comando `console.log()`, vamos explorar os comandos condicionais. Mas antes de condificar comandos condicionais, vamos fazer o seguinte:
1. Copie [este código](/condicoes.js) e cole no seu arquivo `pratica-2.js`. Em seguida, clique em salvar.
1. Agora analise os seguintes comandos `if` do código e coloque nos comentários que estão dentro do código:
> `// Escreva depois dos ':' se vai entrar no 'if' ou no 'else' ('if' se entrar no 'if' e 'else' se entrar no 'else'): `
se você acha que o computador vai entrar dentro do `if` (ou seja, a condição será verdadeira) ou dentro do `else` (ou seja, a condição será falsa).
3. Agora execute o código no terminal (lembre-se, `node nomedoarquivo.js`) e veja se você acertou
1. Agora execute os comandos do git para comitar o código e subir no seu repo remoto do GitHub

Show! Agora vamos resolver um problema utilizando comandos condicionais.

## Passo 3: Resolvendo um problema com programação

O matemático e cientista da computação Alan Turing estava decifrando um dos códigos da máquina de criptografia Enigma durante a 2ª guerra mundial. Ele descobriu que se o código tiver mais que 6110 caracteres, a mensagem codificada não poderia ser decifrada em tempo hábil para derrotar os nazistas. Por isso ele pediu a ajuda dos programadores do ITuring para ajudá-lo a contabilizar quantos caracteres tem essa mensagem e assim dizer para ele se ('if') eles terão tempo hábil ou não para derrotar os nazistas.

Sua missão será escrever um programa que ao receber esse código, informe para Alan Turing se eles vão conseguir derrotar os nazistas ou não. Para isso, ele deixou um arquivo com o código imenso. Sua missão será armazenar esse código em uma variável, verificar se essa variável tem mais ou menos que 121333 caracteres e a partir dessa verificação, determinar se eles vão vencer os nazistas ou não. Vamos começar? Se quiser fazer sem o nosso passo-a-passo abaixo, apenas garanta que está seguindo as instruções da parte 1 e da parte 4 e 5.

1. Pegue o código que Alan Turing nos enviou [aqui](/alanturingcode.js) e armazene esse valor em uma variável, tudo no arquivo `pratica-3.js`. Sim, é um valor muuuito grande, mas não tem problema, pode armazenar na variável que vai funcionar.
1. Agora pesquise no Google "verificar tamanho da string em javascript" e descubra como saber o tamanho de uma string em JavaScript.
1. Descobriu? Utilize esse método no seu código e armazene o valor contabilizado em uma nova variável (pense em um bom nome para essa nova variável)
1. Agora verifique se esse valor é maior ou menor que 6110. Se for maior você deve exibir na tela `Perdão, Alan Turing. Vocês não conseguirão derrotar os nazistas. :'(`. Se for menor (ou igual?), você deve exibir `Maravilha! O código tem menos ou é igual a 6111 caracteres! Mãos à obra! Decifrem o código o quanto antes que vocês vão conseguir derrotá-los! :D`.
1. Por fim, faça o de sempre: teste o código, veja se ele está funcionando e depois suba ele no GitHub.

Show! O passo 4 abaixo é opcional. E dessa vez não tem passo-a-passo, você deve resolver por conta própria.

## Passo 4 (Opcional): Resolvendo mais problemas com programação

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

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-3**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.