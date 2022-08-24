# Tarefa - Dia 1: Primeiros passos e preparando a caixa de ferramentas

Saudações, estudante da nossa imersão Aprenda a Programar do ITuring! Esta é a 1ª tarefa do curso. Em cada um dos 3 primeiros dias da nossa imersão, você terá uma tarefa para solucionar ao longo da semana.

Na tarefa do dia 1, teremos as seguintes etapas:
- [**Etapa 1:**](#etapa-1-instalando-o-ambiente-de-desenvolvimento-e-preparando-a-caixa-de-ferramentas) Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas
- [**Etapa 2:**](#etapa-2-praticando-os-comandos-de-terminal) Praticando os comandos de terminal
- [**Etapa 3:**](#etapa-3-criando-sua-conta-no-github) Criando sua conta no GitHub


## Etapa 1: Instalando o ambiente de desenvolvimento e preparando a caixa de ferramentas

Para preparar o seu ambiente de desenvolvimento, você vai precisar de instalar 3 coisas na seguinde ordem:
1. o editor de texto VSCODE
1. o programa Terminal e Git
1. o programa Node

O VSCode é onde vamos de fato escrever códigos. Toda e qualquer pessoa que trabalha com desenvolvimento de software no mundo escreve códigos usando um editor de texto.

O Git vamos usar para controlar e ver o histórico do que estamos desenvolvendo. Por fim, o Node vamos utilizar para executar os códigos que vamos escrever em JavaScript nos dias 2, 3 e 4.

Você pode optar por outro editor texto diferente do VSCode sem problemas, mas os exercícios e exemplos desse curso serão feitos com VSCode.

Vamos lá!

### Instalando o VSCODE

Para instalar o VSCODE, basta entrar [aqui](https://code.visualstudio.com/) e seguir os passos de instalação de acordo com o seu sistema operacional. Se surgir dúvidas, poste lá no [nosso Discord](https://discord.com/invite/kHS84D2hA4) ou pode seguir esse [tutorial](https://balta.io/blog/visual-studio-code-instalacao-customizacao). No Windows, não esqueça de marcar a opção "Add to Path".

### Instalando o terminal e o Git no seu computador

Como vimos no 1º dia, o terminal é onde a gente consegue interagir com o sistema operacional por meio de **comandos de texto**. Estamos acostumados a interagir com o sistema operacional (Windows, MacOS, etc) por meio da interface, onde manipulamos janelas, entramos em programas "clicando 2 vezes" com o mouse, navegamos por pastas, etc. Já a outra forma de interagir com o SO (Sistema Operacional) é por meio de comandos de texto. No terminal nós fazemos isso. Nós digitamos textos para navegar em pastas, abrir e executar arquivos, configurar ferramentas, etc.

**Nunca se esqueça!** no terminal, você **sempre** está em algum lugar! O terminal é como um navegador de pastas. Você sempre estará em alguma pasta do seu computador. Por isso, certifique-se sempre de que está no lugar correto quando for executar algum comando.

Como podemos instalar o terminal? Vamos ver agora. Siga as instruções do SO que você estiver utilizando.

#### Instalando o terminal e o Git no MacOS ou Linux

O MacOS e o Linux já possuem o terminal instalado. Para abrir o terminal no MacOS, [siga estes passos](https://pt.wikihow.com/Abrir-o-Terminal-no-Mac). No Linux, [siga estes passos](https://pt.wikihow.com/Abrir-uma-Janela-do-Terminal-no-Ubuntu).

Além do terminal, você também vai precisar do programa chamado `git`. Nós vamos explicar melhor o que é o `git` no dia 2.

##### Instalando o Git no MacOS:
1. No terminal, execute o comando `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
1. Vai pedir uma senha, é a senha de acesso do seu MacOs
1. Em seguida, execute `brew install git`

##### Instalando o Git no Linux: 
- No terminal, execute o comando referente à versão do seu Linux de acordo com este link: https://git-scm.com/download/linux


#### Instalando o terminal e o Git no Windows

O Windows possui um terminal padrão, mas ele não é do tipo Unix/Linux. Por conta disso, vamos utilizar o Git Bash como terminal no Windows. Por que usar um terminal do tipo Unix/Linux? Você vai entender melhor ao longo da sua carreira em desenvolvimento de software, mas a razão é porque [mais de 96% dos principais servidores do mundo são do tipo Linux](https://www.zdnet.com/home-and-office/networking/can-the-internet-exist-without-linux/). Por isso, quando e se no futuro você começar a trabalhar com servidores, é importante se acostumar com os comandos que realmente são utilizados nos servidores. Portanto, considere que, no Windows, o Git Bash é o nosso terminal. 

1. Para instalar o Git Bash no Windows, entre [aqui](https://git-scm.com/downloads)
1. Depois clique em "Download for Windows", em seguida em "Click here to download"
1. Se você estiver com algum problema por conta da sua versão do Windows, fale com a gente no canal **#⚙│dúvidas-configurações**
1. Quando terminar de baixar, clique no instalador (começa com "Git-...") e depois clicar em "Sim" e "Next" por **todos** os passos
1. Caso queira, na etapa de escolha do editor de texto padrão, selecione o VSCODE

E o Git? Bom, o Git Bash já vem com o Git instalado. :)

### Instalando o programa Node

O Node nós vamos utilizar diariamente enquanto estivermos programando. Ele é o programa que vai executar o código que a gente vai aprender a escrever em JavaScript! Ele é um programa como qualquer outro, com a diferença de que ele consegue executar códigos que por consequência viram programas (ou software). Chamamos este tipo de programa de 'interpretador' ou 'compilador'.

Um compilador converte um programa inteiro em zeros e uns, o idioma que o computador entende. Já um interpretador é como se fosse uma tradução simultânea, ele vai convertendo partes do código em código binário (os zeros e uns) e executando-os sequencialmente. Todos os programas de computador do mundo passam por este processo de interpretação ou compilação. Programas e aplicativos que você utiliza diariamente foram criados assim.

#### Instalando o Node no Windows

1. Clique [aqui](https://nodejs.org/en/) e em seguida clique no botão de download que tem a sigla "LTS"
1. Seu Windows é uma versão antiga? Então instale o Node com [este instalador](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-win-x64.zip)
1. Em seguida, basta seguir as instruções de instalação e pronto! **Importante:** o Node é um programa você vai executar dentro do terminal. Ou seja, no Windows, dentro do Git Bash!
1. Qualquer dificuldade, fale com a gente no canal **#⚙│dúvidas-configurações**

#### Instalando o Node no Linux
1. Se estiver usando o Ubuntu, execute o comando `sudo apt install nodejs` no terminal
1. Caso contrário, baixe o instalador [aqui](https://nodejs.org/en/download/).  **Importante:** o Node é um programa que não tem um ícone para clicar e executar. Ele na verdade funciona dentro do terminal. Ou seja, no Windows, dentro do Git Bash!
1. Qualquer dificuldade, fale com a gente no canal **#⚙│dúvidas-configurações**

#### Instalando o Node no MacOS
1. Clique [aqui](https://nodejs.org/en/) e em seguida clique no botão de download que tem a sigla "LTS"
1. Em seguida, basta seguir as instruções de instalação e pronto!  **Importante:** o Node é um programa você vai executar dentro do terminal.

Finalmente! Vamos começar a praticar o terminal?

## Etapa 2: Praticando os comandos de terminal

Agora sim. Agora é a hora de praticar o terminal. Vamos começar praticando verificando se as instalações que você fez deram certo!

### Verificando se as instalações deram certo pelo terminal:
Abra o terminal (**no Windows**, lembre-se que é o programa "Git Bash") e execute os seguintes comandos:
- Digite `git --version` e pressione enter
- Digite `node --version` e pressione enter

Se as instalações tiverem funcionado corretamente, o terminal irá retornar as versões dos programas Git e Node. Fácil né? pra executar os comandos, basta digitar o comando e pressionar enter. Agora é a parte mais divertida. Vamos praticar os vários comandos existentes no terminal! 

### Dominando os comandos de terminal

Antes de começar, se sentir necessidade, relembre os comandos de terminal assistindo a gravação da aula do dia 1 ou pelos slides fornecidos. Deixe eles num lugar visível. Quando não lembrar de algum comando, assista a aula ou dê uma pesquisada no Google (ou vídeos no Youtube)! Ou então peça ajuda no [nosso Discord](https://discord.com/invite/kHS84D2hA4). Vamos lá!
1. Utilizando o terminal (no Windows, o próprio "git bash"), navegue para uma localização desejada (recomendamos o Desktop ou Área de Trabalho) e crie uma pasta chamada `dia-1-primeiros-passos`.
1. Confira se a pasta realmente foi criada com um comando que você sabe qual (dica: começa com 'l')
1. Navegue para a pasta e crie o diretório com o nome de `tarefa-dia-1` e navegue para dentro dele
1. Dentro de `tarefa-dia-1`, crie um arquivo chamado `resumo-dia-1.md` no terminal (obs: nada de criar o arquivo com o mouse, viu? haha depois você verá que assim é bem mais rápido que pelo mouse).
1. *Pausa para dica 1:* pressione a seta pra cima e você poderá pegar os comandos anteriores que você digitou.
1. *Pausa para dica 2:* quando você começar digitar o nome de uma pasta em um comando (por exemplo, `cd nomedapasta`), pressione 'tab' que o nome da pasta é preenchido automaticamente!
1. Continuando... agora abra o arquivo `resumo-dia-1.md` em um editor de texto (ou seja, no VSCODE).
1. Em seguida, copie e cole o conteúdo abaixo nesse arquivo no editor de texto. Salve a alteração no VSCODE.


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

## O poder do GitHub para a sua carreira em programação
- O GitHub é uma ferramenta poderosa para trabalhar em projetos de software, compartilhar o seu portfólio e mostrar para os recrutadores que você programa todos os dias
- Cada verdinho no GitHub é uma prova de que você programou naquele dia. Por isso, ao utilizar o GitHub, você pode mostrar a todos que você está sempre colocando em prática o que está aprendendo e isso é muito importante para conquistar oportunidades na área.
```

9. De volta ao terminal, exiba as primeiras 5 linhas do texto do conteúdo do arquivo `resumo-dia-1.md` (dica: o comando `head` exibe mais do que as primeiras 5 linhas do texto. Pesquise no Google o termo `comando head` e veja como mostrar uma quantidade de linhas específica).

1. Agora tente exibir todas as linhas que tem a palavra `programação` no texto.

1. Desafio opcional: exiba todas as linhas que começam com '-'. Em seguida, exiba todas as linhas que **não** começam com '-'. Pesquise no google sobre o comando `grep` para conseguir resolver esse desafio.

1. Execute o comando `pwd` no diretório onde se encontra o arquivo `resumo-dia-1.md`.

Ao final desta etapa, você deverá ter os seguintes arquivos e pastas criados na sua área de trabalho ou em alguma outra pasta de sua escolha:
```
📦 Area de Trabalho ou Desktop (ou outra pasta de sua escolha)
 ┗ 📂 dia-1-primeiros-passos
   ┗ 📂 tarefa-dia-1
     ┗ 📜 resumo-dia-1.md
```

Parabéns! Você já sabe manusear o terminal e executar comandos nele. O terminal é a base de toda pessoa que programa computadores. Nele, você pode executar desde um pequeno código a até configurar um sistema super complexo na nuvem. Continue pesquisando por mais comandos no Google (ex: [este artigo](https://towardsdatascience.com/17-terminal-commands-every-programmer-should-know-4fc4f4a5e20e) é bem legal) e exercite a criação e remoção de pastas (comando `rm`), copiar arquivos (comando `cp`), mover arquivos (comando `mv`), etc.

Nos próximos dias, você vai aprender a utilizar o comando `git` e também a executar o código que você escrever em JavaScript com o comando `node`.

## Etapa 3: Criando sua conta no GitHub

Para finalizar, vamos criar sua conta no GitHub e mostrar como obter o token de acesso para que você consiga subir código no seu perfil do GitHub. Então vamos lá!

### Criando sua conta no Github

1. No https://github.com/, clique em "Sign up" e siga os passos de criação de conta.
1. Na área de recursos que se interessa, pode pular e em seguida selecionar a conta "free"
1. Pronto! Sua conta está criada. :)

### Obtendo o token de acesso

Para conseguir subir códigos no seu perfil do GitHub, você pode precisar de um token que funciona como uma senha. Fique tranquilo! Na tarefa do dia 2 você entenderá melhor quando você deverá utilizar esse token. Vamos então obter esse token:
1. Logado na sua conta conta no https://github.com/, clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo).
1. Em seguida, clique no penúltimo item, em "Settings".
1. Depois disso, no menu lateral esquerdo, vá até o último item e clique nele, no "Developer settings".
1. Agora clique em "Personal access tokens".
1. Agora clique em "Generate new token".
1. Em "Note", pode colocar "Token para o curso Aprenda a Programar do ITuring".
1. Pode selecionar a opção "No expiration" no Expiration.
1. Em seguida, pode selecionar todos os itens abaixo ("repo", "workflow", "write:packages", "delete:packages", etc).
1. Por fim, clique em "Generate token".
1. Pronto! Este será o token que você utilizará como senha para acessar e subir seus códigos no GitHub. **Importante:** guarde-o em algum lugar pra você utilizar na tarefa do dia 2.
1. Caso você perca o token, basta ir novamente em Seu perfil -> Settings -> Developer settings -> Personal access tokens e gerar um novo token

### Criando o repositório remoto `aprenda-a-programar`

Agora vamos criar o seu 1º repositório remoto no GitHub. Você utilizará esse repositório para colocar todas as soluções das tarefas desenvolvidas no nosso curso. Por isso, lembre-se de colocar um nome relevante e busque sempre deixá-lo organizado.

1. Com sua conta criada no https://github.com/, crie um novo repositório remoto com o nome `aprenda-a-programar` ou outro nome que julgar relevante. Para isso, basta clicar em "Create repository".
1. Em seguida, preencha o nome do repositório em "Repository name" e deixe uma descrição caso queira.
1. Mantenha a marcação "Public", caso contrário não vamos conseguir ver seu repositório.
1. Em seguida, clique em "Create repository".

Excelente! Você criou o seu 1º repositório no GitHub :star_struck: 

No Dia 2, vamos aprender a colocar os nossos códigos nesse repositório. :punch: 

## Enviando a sua tarefa no Discord

Para enviar a tarefa você deve seguir os seguintes passos:
1. Execute o comando `history` no terminal
2. Copie o resultado mostrado pelo comando `history`
3. Entre no link do formulário de envio de tarefas que se encontra no canal **#💪tarefa-dia-1** do [Discord do curso](https://discord.com/invite/kHS84D2hA4).
4. Cole o resultado mostrado pelo comando `history` na primeira pergunta do formulário
5. Responda as perguntas restantes do formulário e envie

O comando `history` lista todos os comandos que você digitou no terminal! Legal, né? :)

Parabéns por ter chegado até aqui. Isto já é um ótimo sinal de que programação é para você! 👊😁
   
