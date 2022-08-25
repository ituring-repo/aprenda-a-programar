# Tarefa - Dia 4: Aprendendo a programar (parte 2)

Saudações novamente, estudante da nossa imersão Aprenda a Programar aqui do ITuring! **Esta é a última tarefa obrigatória** do nosso curso, falta pouco! 🙏😁

Na tarefa do dia 4, faremos o seguinte:
- [**Etapa 1:**](#etapa-1-preparando-se-para-programar) Preparando-se para programar
- [**Etapa 2:**](#etapa-2-dominando-loops-e-iteração) Dominando loops e iteração

## Antes de começar, se aprofundando um pouco em ciência da computação

Como já falamos repetidas vezes, o que você está aprendendo é a base de qualquer software no mundo. Para realmente resolver qualquer tipo de problema solucionável com programação, você precisa unicamente desses 3 elementos:
- Variáveis
- Comandos condicionais
- Comandos de repetição

Estes são os elementos primordiais da programação. Sem eles você não consegue fazer nada, pois são eles que concretizam a [máquina de Turing](https://pt.wikipedia.org/wiki/M%C3%A1quina_de_Turing) (sim, concebida pelo Alan Turing, o "big boss" da computação), também conhecida como máquina universal, capaz de resolver qualquer [problema lógico solucionável](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_computer_science) do mundo.

Mas é só isso então? Não, tem muito mais coisas. Porém, esses outros elementos que não passamos aqui são mais importantes para organização do código, coesão, escala e sustentabilidade de coisas grandes que você constrói. Como o foco do curso é que você aprenda o primordial para depois se desenvolver, não abordamos estes outros elementos.

Agora, voltando à questão da Máquina de Turing, quando um conjunto de regras (i.e, linguagem de programação) satisfaz o funcionamento de uma Máquina de Turing, ele é chamado de Turing-completo. Neste caso, variáveis, condicionais e loops (comandos de repetição) é o suficiente para satisfazer isto. Depois, se tiver interesse, não deixe de conferir [este vídeo](https://www.youtube.com/watch?v=G4MvFT8TGII) do Fabio Akita que explica muito bem o que é uma Máquina de Turing. Isso é mais de curiosidade, caso queira se aprofundar nas raízes da ciência da computação.

### Como as variáveis que eu declaro se relacionam com a memória do computador?

Não sei se você já se fez essa pergunta, mas, sim, como falamos, cada variável que você declara em um programa é um espaço de memória sendo consumida no seu computador. As memórias do computador são normalmente dividas em 3:
- *Memória do processador:* a mais rápida que existe, pois fica no coração do processador. Elas são chamadas de **registradores**. Ela **só funciona** com o computador ligado.
- *Memória primária:* é a famosa memória RAM. Ela é muito rápida, mas não como uma memória do processador. Quando te perguntam "quanto de memória tem o seu celular?", você responde "ele tem 2GB de memória RAM". É dessa memória aí. Assim como a memória do computador, ela também **só funciona** com o computador ligado.
- *Memória secundária:* esta é o famoso HD ou SSD. Não é tão rápida igual a memória RAM, mas é capaz de armazenar muuuuitos gigas de dados e consegue guardar os dados mesmo sem energia.

Mas então, qual memória meu computador utiliza quando eu declaro uma variável? Por padrão, elas são armazenadas na memória primária. Porém, o compilador/interpretador, no nosso caso o NodeJS (lembre-se que você executa o código com `node nomedoarquivo`), pode colocar uma variável em um registrador do processador caso ela esteja sendo acessada com muita frequência, melhorando a performance. Ou seja, geralmente uma variável que está em uso direto e frequente fica armazenada nos registradores do processador, em contato direto com o núcleo de processamento da máquina.

Gostou desse papo? Se sim, envia um emoji de 👌 lá no canal da tarefa pra gente saber e assim trazer mais informações desse tipo.

## Etapa 1: Preparando-se para programar

Como vimos na última tarefa:

1. Você criou um repositório remoto: `aprenda-a-programar`
2. Clonou o repositório remoto para sua máquina local
3. Criou a solução para os exercícios
4. Subiu as alterações para o repositório remoto

A sua organização após a finalização da tarefa da 2ª semana ficou algo semelhante a:

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

A tarefa do dia 3 também será entregue neste mesmo repositório. Vamos relembrar os principais comandos e criar a estrutura para a solução dos exercícios:
1. No terminal, entre no seu repositório local `aprenda-a-programar` e crie a pasta `tarefa-dia-3`
1. Agora vá para a pasta `tarefa-dia-3` e crie os seguintes arquivos: `pratica-1.js`, `pratica-2.js`, `pratica-3.js`, `pratica-4.js` e `pratica-5.js`. Ou, execute o comando `for i in {1..5}; do touch pratica-${i}.js; done` e veja a mágica acontecer (dê um `ls` para ver todos os arquivos criados)
1. Agora execute os comandos git (`git pull` -> `git status` -> `git add .` -> `git commit -m 'mensagem de commit'` -> `git log` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub

Agora a estrutura de pastas do seu repositório de tarefas `aprenda-a-programar` deverá ficar da seguinte forma:

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
 ┗ 📂 tarefa-dia-3
   ┣ 📜 pratica-1.js
   ┣ 📜 pratica-2.js
   ┣ 📜 pratica-3.js
   ┣ 📜 pratica-4.js (caso tenha feito o desafio opcional)
   ┗ 📜 pratica-5.js (caso tenha feito o desafio opcional)
```

Pronto, agora bora programar!

## Etapa 2: Dominando loops e iteração

Se existe algo ainda mais poderoso que as estruturas condicionais que você aprendeu ontem, são as estruturas de repetição.

Comandos de repetição, ou loops, fazem jus ao nome que damos para o núcleo "pensante" de qualquer computador: o processador ou microprocessador. São com as estruturas de repetição que nós programadores somos capazes de processar megas, gigas ou até terabytes de informações. Aí "o processador que lute!". 😅

Mas, com grandes poderes, vem grandes responsabilidades. As estruturas de repetição também exercem um papel fundamental na performance de aplicações. Quando mal projetadas, elas podem acarretar em um software lento. Mas na verdade não são elas as culpadas, mas sim a pessoa programadora que desenvolveu uma solução pouco performática.

Empresas como Google, Apple e outras big techs são bastante exigentes nas entrevistas sobre [análise e complexidade de algoritmos](https://pt.wikipedia.org/wiki/An%C3%A1lise_de_algoritmos) por conta disso. Para elas, é crucial que o software que elas projetam sejam o suprassumo da performance e qualidade, pois seus software estão atendendo a milhões e até bilhões de usuários.

"Nossa, então eu tenho que me preocupar com isso agora também?". Não! Esqueça performance neste início. Aliás, esqueça performance por um bom tempo. Foque no básico, no simples. Estamos te contando essa história, pois queremos te trazer a consciência de que isso um dia poderá ser importante na sua carreira. E também porque queremos que você seja uma pessoa programadora de muito sucesso.

Agora vamos para a primeira prática para você dominar loops. 👊

### Prática 1: Implementando meu primeiro comando de repetição

1. Certifique-se que você está na pasta `tarefa-dia-3` no terminal
2. Abra o arquivo `pratica-1.js` com o VSCODE ou o editor de código de sua preferência
3. Este problema nós trabalhamos em aula: exibir números de 1 até n
4. Considere que o dado de entrada para executar o código é o número `n`. Ou seja, uma variável `n` que vai armazenar o valor do número final que queremos exibir
6. Neste problema, você deverá utilizar o comando `while`
7. Exiba todos os números de 1 a `n`. Por exemplo, se o valor de `n` for `9`, você deverá exibir o seguinte resultado na tela com `console.log()`:
```
1
2
3
4
5
6
7
8
9
```
8. Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub

### Prática 2: Fazendo a tabuada

1. Novamente, certifique-se que você está na pasta `tarefa-dia-3` no terminal
2. Abra o arquivo `pratica-2.js` com o VSCODE ou o editor de código de sua preferência
3. Este problema nós trabalhamos em aula: criar uma tabuada
4. Considere que o dado de entrada para executar a tabuada é o número fixo que vamos efetuar as multiplicações
5. Nossa tabuada deverá ir de 1 ao 10
6. Neste problema, você deverá utilizar o comando `while`
7. No código, exiba a tabuada no terminal. Por exemplo, se o valor de entrada for `9`, você deverá exibir o seguinte resultado na tela com `console.log()`:
```
Tabuada de 9
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
```
8. Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub

### Prática 3: Exiba os ímpares

Crie um código no arquivo `pratica-3.js` que começando com um número inteiro > 0, exiba com `console.log()` todos os números ímpares até chegar neste número. Se quiser, pode chamar a variável que vai armazenar esse número inteiro de `n`. Veja um exemplo abaixo.

**Dado de entrada:**
```javascript
16
```
**Valores exibidos:**
```javascript
1
3
5
7
9
11
13
15
```

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub

## Prática 4 (Opcional): É um número primo?

Números primos são aqueles que são divisíveis apenas pelo número 1 e por ele mesmo. Os números primos cumprem um papel essencial na área da criptografia, pois é [por meio deles que conseguimos hoje criptografar informações](https://pt.stackoverflow.com/questions/66513/como-n%C3%BAmeros-primos-s%C3%A3o-importantes-na-criptografia).

Agora é com você! Crie um código no arquivo `pratica-4.js` que começando com a entrada de um número inteiro maior que zero, exiba `Sim, o número ${numero} é primo!` se este número for primo e `Não, o número ${numero} não é primo!` se ele não for um número primo. Como sugestão, pode colocar o nome da variável que vai armazenar esse valor de entrada de `numero`. Veja abaixo alguns exemplos.

**Alguns possíveis dados de entrada:**
```javascript
17
2
7
8
5
23
15
1500450271
```
**Resultados exibidos no terminal para cada valor de entrada quando executar o código:**
```
Sim, o número 17 é primo!
Sim, o número 2 é primo!
Sim, o número 7 é primo!
Não, o número 8 não é primo!
Sim, o número 5 é primo!
Sim, o número 23 é primo!
Não, o número 15 não é primo!
Sim, o número 1500450271 é primo!
```

**Importante:** o seu código não deve pegar todos esses dados de entrada e exibir os resultados tudo de uma só vez, ou seja, executando `node pratica-4.js` uma única vez. Para **cada** dado de entrada exemplificado, você vai colocar esse dado em uma variável e executar `node seuarquivo.js` para ver se deu a saída esperada.

Teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

**Dica se estiver com dificuldade:** se um número primo é divisível apenas por 1 ou por ele mesmo, então basta verificar se algum número entre `1` e `n` são divisíveis por `n`, sendo `n` o número que você quer saber se é primo. Como verificar se é divisível? Se o resto da divisão for zero, significa que ele é divisível. Ou seja, utilize uma estrutura de repetição que vai verificando cada um dos números entre `1` e `n`.

## Prática 5 (Opcional): Calculando as vendas com e sem gorjeta

No arquivo `pratica-5.js` da pasta `tarefa-dia-3`, copie e cole o código [desse link](./receitas.js).

Resolva os problemas a seguir usando a lista dada no arquivo e faça o commit e push para o seu repositório no GitHub.

- Problema 1: Qual o valor total de vendas sem gorjeta?
- Problema 2: Qual o valor total de vendas incluindo a gorjeta?
- Problema 3: Quantas vendas foram abaixo de 50 reais?

Você pode resolver esses problemas da forma que quiser. Agora, é importante sempre imaginar, "se a lista vier com outros valores, vai funcionar?". Digo isso, pois muitas vezes a gente pode escrever uma solução que **só funciona** para aqueles valores em específico. Um código com uma lógica correta deve solucionar o problema para **qualquer** valor de entrada.

Por fim, o de sempre: teste o seu código, veja se está funcionando, e depois faça o commit e suba ele no seu GitHub.

**Importante:** este problema é desafiante. Você sabe que variáveis pode armazenar os seguintes tipos de dados/valores:
- números: `1`, `1.23`, `-123`, `-1.23`, etc
- texto/strings: `"Texto aqui"`, `'Texto aqui'`
- booleanos: `true` ou `false`

Porém, existem tipos de valores mais complexos que não falamos: listas e objetos (no caso do problema, uma lista de objetos)! Qualquer tipo de dado que vai além dos tipos primitivos citados acima, nós chamamos de **estruturas de dados**. Agora é o momento de você exercitar e aprimorar o "se virar" que toda pessoa programadora vai precisar na hora de trabalhar em uma equipe de engenharia. Confia e vai! A base primordial (variáveis, expressões, comandos de atribuição, comandos condicionais e de repetição) você aprendeu. 

**Por isso, a nossa dica é:** pesquise e entenda os seguintes itens para `listas` e `objetos`
1. O que são em JavaScript
1. Como armazenar essas estruturas de dados em variáveis
1. Como acessar os valores dessas estruturas de dados
1. Como modificar os valores que estão dentro dessas estruturas de dados

Depois de entender essas duas estruturas de dados e experimentar elas no código, aí sim, tente resolver o problema!

**Reforçando:** sem querer forçar a barra, mas este problema pode ser muito difícil pra você, mas tenha calma e tente. Curta o processo com calma, vai mastigando cada conceito que você precisa aprender. Não se preocupe se não conseguir resolvê-lo, pois é algo que você pode muito bem aprender mais pra frente. Qualquer coisa, olha a solução ou chama a gente lá no Discord! :)

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-4**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link na 1ª pergunta do formulário.

Ao final de todas as etapas, o seu repositório **remoto** e **local** deverão ter as seguintes pastas e arquivos:

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
 ┗ 📂 tarefa-dia-3
   ┣ 📜 pratica-1.js
   ┣ 📜 pratica-2.js
   ┣ 📜 pratica-3.js
   ┣ 📜 pratica-4.js (caso tenha feito o desafio opcional)
   ┗ 📜 pratica-5.js (caso tenha feito o desafio opcional)
```



