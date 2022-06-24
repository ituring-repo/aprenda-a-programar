# Tarefa Opcional - Dia 4: Conhecendo o mundo da web com HTML + CSS + JavaScript

Na tarefa opcional do dia 4, adicionaremos dois comportamentos na lista de tarefas que criamos na aula :
- **Passo 1:** Marcar tarefa como concluída quando clicar no texto da tarefa
- **Passo 2:** Excluir a tarefa quando clicar no botão de fechar ("x")

O primeiro passo vai conter os passo-a-passo descrito para cada uma das etapas, o passo 2 é pra você tentar resolver com base no que aprendeu.

## Antes de começar

Antes de começar a programar, é importante você tentar reproduzir os passos executados na aula e deixar o código no mesmo ponto. Tente não copiar o código, vá digitando e pesquise sobre as tags html, as propriedades de CSS e outras coisas que tiver curiosidade. A curiosidade é a melhor ferramenta para o seu aprendizado.

Também te desafio a modificar o estilo da página dando aquele toque pessoal, que tal adicionar cores e imagens diferentes. Legal,né?

Se tiver dificuldades consulte o código da aula, assista o vídeo, procure ajuda no chat, mas não deixe de tentar.

Pronto, agora bora programar!

## Passo 1: Marcando a tarefa como concluída

Antes de começar, saiba que existem várias formas de realizar essa tarefa, não tem certo ou errado, vamos seguir uma linha que julgamos mais simples de entender, beleza?

Para conseguir marcar uma tarefa como concluída precisamos saber qual tarefa está sendo clicada, para isso vamos adicionar um id automático em cada tarefa no momento em que ela está sendo criada. Para isso:
1. Crie uma variável `let idTarefa = 0`para gerar um contador automátio no início do seu arquivo
2. Toda vez que você criar um item de tarefa, incremente esse idTarefa e use ele como id da sua tarefa criada, na sua função `adicionarTarefa`, vai ficar assim:

```
    idTarefa++;
    item.id = idTarefa;
```
Pronto, agora cada elemento `li` criado possui um id.
1.  O próximo passo é criar a função `concluir(itemId)` que recebe o id clicado como parâmetro, encontra o item correspondente no html e adiciona uma classe concluído no texto (<span>). Ao adicionar uma classe no elemento nós podemos forçar esse elemento a mudar de aparência. Colocando isso em prática teríamos algo assim:
```
    function concluir(itemId) {
        const tarefaSelecionada = document.getElementById(itemId);
        tarefaSelecionada.className = "concluida";
    }
```
1. Adicionar a classe no html foi tranquilo, agora é preciso adicionar o estilo correspondente a classe concluída no arquivo CSS. Adicione o código abaixo para deixar o texto do span de outra cor e com um risco:
```
    .concluida span {
        text-decoration: line-through;
        color: #a9a9a9;
    }
```
Note que só queremos que o span sofra a alteração, por isso usamos essa combinação de seletores `classe  tag`.
5. Agora basta a gente adicionar essa chamada de função em cada item criado, e um jeito fácil de fazer isso é passando a instrução `onclick="concluir(id)"` para o texto da lista assim que ele for criado. Podemos fazer isso no momento que inserimos o conteúdo no item. Vai ficar algo assim:
```
    item.innerHTML = `
    <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <button class="excluir" onclick="excluir(event)">x</button>
    `;
```
Note que colocamos o id da tarefa dinamicamente, de forma que cada elemento passe o id correto para a função chamada no clique.

Prontinho, agora é só correr para o abraço!

## Passo 2: Excluindo a tarefa

O raciocínio para excluir uma tarefa é o mesmo usado para marcar a tarefa como lida, mas pode ser que você precise dar um tarefaSelecionada.remove() em algum momento. Agora é com você!

## Passo Extra

Se você achou fácil fazer os passos 1 e 2, tente melhorar o funcionamento da lista de tarefas. Que tal uma forma de impedir que um usuário adicione uma tarefa sem nenhum texto?

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-4**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.
