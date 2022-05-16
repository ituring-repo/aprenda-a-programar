# Tarefa - Dia 1: Primeiros passos e modo de pensar

Na tarefa do dia 1, faremos o seguinte:
- Passo 1: Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas
- Passo 2: Praticando os comandos de terminal


## Passo 1: Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas

Para preparar o seu ambiente de desenvolvimento, você vai precisar de instalar 3 coisas:
- o editor de texto VSCODE
- o programa Terminal e Git
- o programa Node

O VSCode é onde vamos de fato escrever códigos. O Git vamos usar pra gente controlar e ver o histórico do que estamos desenvolvendo. Por fim, o Node vamos utilizar para executar os códigos que vamos escrever em JavaScript no dia 3 e 4.

Você pode optar por outro editor texto diferente do VSCode sem problemas, mas os exercícios e exemplos desse curso serão feitos com VSCode.

Vamos lá!

### Instalando o VSCODE

Para instalar o VSCODE, basta entrar [aqui](https://code.visualstudio.com/) e seguir os passos de instalação de acordo com o seu sistema operacional. Se surgir dúvidas, poste lá no [nosso Discord](https://discord.com/invite/kHS84D2hA4) ou pode seguir esse [tutorial](https://balta.io/blog/visual-studio-code-instalacao-customizacao). No Windows, não esqueça de marcar a opção "Add to Path".

### Instalando o terminal e o Git no seu computador

Como vimos no 1º dia, o terminal é onde a gente consegue interagir com o sistema operacional por meio de **comandos de texto**. Estamos acostumados a interagir com o sistema operacional (Windows, MacOS, etc) por meio da interface, onde manipulamos janelas, entramos em programas "clicando 2 vezes" com o mouse, navegamos por pastas, etc. Já a outra forma de interagir com o SO é por meio de comandos de texto. No terminal nós fazemos isso. Nós digitamos textos para navegar em pastas, abrir e executar arquivos, configurar ferramentas, etc.

**Nunca esqueça!** No terminal, você **sempre** está em algum lugar! O terminal é como um navegador de pastas. Você sempre estará em alguma pasta do seu computador.

Como podemos instalar o terminal? Vamos ver agora. Siga as instruções do SO que você estiver utilizando.

#### Instalando o terminal e o Git no MacOS ou Linux

O MacOS e o Linux já possuem o terminal instalado. Para abrir o terminal no MacOS, [siga estes passos](https://pt.wikihow.com/Abrir-o-Terminal-no-Mac). No Linux, [siga estes passos](https://pt.wikihow.com/Abrir-uma-Janela-do-Terminal-no-Ubuntu).

Além do terminal, você também vai precisar do programa chamado `git`. Nós vamos explicar melhor o que é o `git` no dia 2. Para instalar o `git`, tanto para MacOS, como para Linux, basta seguir as instruções [aqui](https://git-scm.com/downloads).

#### Instalando o terminal e o Git no Windows

No Windows, vamos utilizar o programa chamado Git Bash. Ou seja, considere que no Windows o Git Bash é o terminal e também o Git. Para instalar o Git Bash no Windows:
1. Clique [aqui](https://git-scm.com/downloads)
1. Depois clique em "Download for Windows", em seguida em "Click here to download".
1. Quando terminar de baixar, clique no instalador (começa com "Git-...") e depois clicar em "Sim" e "Next" por **todos** os passos.
1. Caso queira, na etapa de escolha do editor de texto padrão, selecione o VSCODE

### Instalando o programa Node

Como falamos, o Node nós vamos utilizar no dia 3 e 4. Ele é o programa que vai executar o código que a gente vai aprender a escrever em JavaScript! Ele é um programa como qualquer outro, com a diferença de que ele consegue executar códigos que por consequência viram programas (ou software). No dia 3 e 4 você vai entender isso melhor. Por enquanto, o foco hoje é apenas de instalar o Node.

Para instalar o Node, independente do seu sistema operacional, basta clicar [aqui](https://nodejs.org/en/) e em seguida clicar no botão de download que tem a sigla "LTS". Em seguida, basta seguir as instruções de instalação e pronto! Se surgir alguma dúvida, joga lá no [nosso Discord](https://discord.com/invite/kHS84D2hA4) que respondemos prontamente.

Finalmente! Vamos começar a praticar o terminal?

## Passo 2: Praticando os comandos de terminal

Agora sim. Agora é a hora de praticar o terminal. Vamos começar praticando verificando se as instalações que você fez deram certo!

### Verificando se as instalações deram certo pelo terminal:
Abra o terminal (no Windows, lembre-se que é o programa "Git bash") e execute os seguintes comandos:
- Digite `git --version` e pressione enter
- Digite `node --version` e pressione enter

Se as instalações tiverem funcionado corretamente, o terminal irá retornar as versões dos programas Git e Node. Fácil né? pra executar os comandos, basta digitar o comando e pressionar enter. Agora é a parte mais divertida. Vamos praticar os vários comandos existentes no terminal! 

### Dominando os comandos de terminal

Antes de começar, relembre os comandos de terminal assistindo a gravação da aula do dia 1 ou pelos slides fornecidos. Deixe eles num lugar visível. Quando não lembrar de algum comando, assista a aula ou dê uma pesquisada no Google (ou vídeos no Youtube)! Ou então peça ajuda no [nosso Discord](https://discord.com/invite/kHS84D2hA4). Vamos lá!
1. Utilizando o terminal (no Windows, o próprio "git bash"), navegue para uma localização desejada (recomendamos o Desktop ou Área de Trabalho) e crie uma pasta chamada `ituring-aprenda-a-programar`. Esta será a pasta onde você irá construir todos os seus códigos nos próximos dias!
1. Confira se a pasta realmente foi criada com um comando que você sabe qual (dica: começa com 'l')
1. Navegue para a pasta e crie o diretório com o nome de `tarefa-dia-1` e navegue para dentro dele (desafio opcional: tente fazer isso com um único comando. Mostramos isso no dia 1)
1. Dentro de `tarefa-dia-1`, crie um arquivo chamado `resumo-dia-1.md` no terminal (obs: nada de criar o arquivo com o mouse, viu? haha depois você verá que assim é bem mais rápido que pelo mouse).
1. Pausa para dica 1: pressione a seta pra cima e você poderá pegar os comandos anteriores que você digitou.
1. Pausa para dica 2: quando você começar digitar o nome de uma pasta em um comando (por exemplo, `cd nomedapasta`), pressione 'tab' que o nome da pasta é preenchido automaticamente!
1. Continuando... usando um editor de texto qualquer, copie o conteúdo a seguir e cole no arquivo `resumo-dia-1.md`. Em seguida salve o arquivo.


```
# Resumo DIA 1: Primeiros passos e modo de pensar

## O que é programação?
- Programação é um trabalho que hoje se faz presente em todos os setores da sociedade e da indústria. Desde a aviação, sistemas bancários e financeiros, no setor de saúde, serviços públicos, redes sociais. Programar é uma atividade essencial para o mundo digital.
- Programação é a espinha dorsal de praticamente qualquer produto, serviço ou empresa de tecnologia. Praticamente toda inovação no mundo tem programação no meio.
- Programação é a profissão que mais cresce no mundo, e está faltando cada vez mais profissionais qualificados para trabalhar com tecnologia.
- Programar é a arte de resolver problemas com código. Toda pessoa programadora é uma resolvedora de problemas.
- Existem vários títulos para quem trabalha com programação, mas no final todo mundo é programador.
- Programar é instruir o computador o que queremos que ele faça. Para isso, usamos uma linguagem de programação.

## Qualquer pessoa pode ser programadora?
- Profissões tradicionais exigem graduação, mas programação não. Em programação, tudo que você precisa é de um computador, internet, dedicação diária e orientação de carreira.
- Profissionais que trabalham com programação têm uma mentalidade "problem solver", prática intensa, aprendizado constante, resiliência e trabalho em equipe.
- Não preciso amar programação para trabalhar com ela. Mas se eu desenvolver um gosto por programação, terei mais facilidade de me desenvolver e evoluir na área.
- "Está difícil porque eu ainda não aprendi ou exerguei uma solução. É agora que eu vou aprender, para tornar o difícil, fácil.". Isto é aprender de verdade. Em programação, teremos isso em diversos momentos de nossa carreira.
- Inteligência é uma habilidade que pode ser aprendida, expandida e aperfeiçoada. Programação no início é difícil, mas quanto mais você aprender, mais fácil será aprender coisas novas na área.
- Aprender nunca é uma linha reta e perfeita, mas cheias de curvas, com altos e baixos. A dificuldade faz parte do processo.
- Programar é o ato de codificar, errar, errar muito e evoluir. Eu posso ser uma pessoa programadora se eu estiver disposta a absorver e viver dessa filosofia no meu trabalho.
- As maiores empresas de tecnologia do mundo trabalham e constroem produtos e inovações seguindo essa filosofia.

## Preparando a caixa de ferramentas que toda pessoa programadora utiliza
- Pra você trabalhar com programação, você precisa basicamente de um editor de texto, um sistema pra você ver o histórico de tudo que você está codificando e um terminal para se comunicar com o sistema operacional e executar o programa que você codificou.
- No curso, vamos utilizar VSCODE como editor de texto, git para controle de versão e JavaScript como linguagem de programação.

## Introdução ao terminal
- Pessoas comuns interagem com o sistema operacional por meio da interface de usuário.
- Em programação, vamos precisar muitas vezes interagir com o sistema operacional por meio de comandos de texto. O Terminal tem esse propósito.

### Vejamos os comandos e termos mais comuns do terminal:
- `pwd` (**p**rint **w**orking **d**irectory): exibe qual é o seu diretório corrente
- Termo 'diretório corrente': no terminal, você sempre está em algum lugar, em alguma pasta do seu computador.  Quando você digita o comando `pwd`, ele mostra em qual pasta você está naquela exato momento. A pasta também é chamada de diretório. Ou seja, o diretório que você está é o diretório corrente.
- `ls` (**l**i**s**t files): lista o que está no seu diretório corrente
- `cd <diretório de destino>` (**c**hange **d**irectory): altera o diretório corrente para o diretório de destino
- `cd ..`: volta para o diretório anterior. Ex: se você está em `/diretorio-pai/diretorio-filho` e executa `cd ..`, o seu diretório corrente passa a ser `/diretorio-pai`
- `cd ../../../`: volta três diretórios. Você pode fazer `../` quantas vezes quiser. O número de vezes determinará quantos diretórios você vai voltar pra trás
- `mkdir <nomedodiretório>` (**m**a**k**e **dir**ectory): cria um novo diretório no diretório corrente
```

1. De volta ao terminal, exiba as primeiras 5 linhas do texto (dica: o comando `head` exibe mais do que as primeiras 5 linhas do texto. Pesquise no Google "comando head" e veja como mostrar uma quantidade de linhas específica).

1. Agora tente exibir todas as linhas que tem a palavra 'programação' no texto.

1. Desafio opcional: exiba todas as linhas que começam com '-'. Em seguida, exiba todas as linhas que **não** começam com '-'. Pesquise no google sobre o comando `grep` para conseguir resolver esse desafio.

1. Execute o comando `pwd` no diretório onde se encontra o arquivo `resumo-dia-1.md`.

Parabéns! Você já sabe manusear o terminal e executar comandos nele. O terminal é a base de toda pessoa que programa computadores. Nele você pode executar desde um pequeno código a até configurar um sistema super complexo na nuvem. Continue pesquisando por mais comandos no Google e "brinque" de criar e remover pastas (comando `rm`), copiar arquivos (comando `cp`), mover arquivos (comando `mv`), etc.

Nos próximos dias, você vai aprender a utilizar o comando `git` e também a executar o código que você escrever em JavaScript com o comando `node`.

## Enviando a sua tarefa no Discord

 Para enviar a tarefa, basta executar o comando `history` no terminal, copiar o resultado mostrado e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-1**.

O comando `history` lista todos os comandos que você digitou no terminal! Legal, né? :)
   
