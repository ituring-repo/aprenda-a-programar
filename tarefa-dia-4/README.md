# Tarefa Opcional - Dia 4: Conhecendo o mundo da web com HTML + CSS + JavaScript

Saudações, estudante da nossa imersão Aprenda a Programar do ITuring! Que pena, esta é a última tarefa do nosso curso, mas que bom que você logo poderá receber o certificado de conclusão da nossa imersão. 🙏

Esta é uma tarefa opcional, ou seja, não é mandatória para receber o certificado. Porém, reforçamos que ela é **valiosíssima** para você expandir seu conhecimento e ver de perto como uma aplicação web é construída na parte do front-end de ponta-a-ponta, do HTML ao CSS e JavaScript!

Portanto, na tarefa opcional do dia 4, a sua função como pessoa especialista em engenharia front-end será de adicionar dois comportamentos na aplicação de lista de tarefas que criamos na aula:
- [**Etapa 1:**](#etapa-1-preparando-se-para-construir-um-front-end) Preparando-se para construir um front-end
- [**Etapa 2:**](#etapa-2-reproduza-tudo-o-que-foi-feito-em-aula-do-app-lista-de-tarefas) Reproduza tudo o que foi feito em aula do app lista de tarefas
- [**Etapa 3:**](#etapa-3-marcando-a-tarefa-como-concluída) Marcar tarefa como concluída quando clicar no texto da tarefa
- [**Etapa 4:**](#etapa-4-excluindo-a-tarefa) Excluir a tarefa quando clicar no botão de fechar ("x")
- [**Etapa Extra:**](#etapa-extra-impedindo-a-adição-de-uma-tarefa-sem-nenhum-texto) Impedindo a adição de uma tarefa sem nenhum texto

A 3ª etapa vai conter o passo-a-passo descrito para cada uma das etapas. Já a etapa 4 e a etapa extra é para você tentar resolver com base no que aprendeu.

## Etapa 1: Preparando-se para construir um front-end

Agora você é pró, não precisa mais de instruções mega detalhadas. A tarefa do Dia 4 será entregue em um novo repositório. Por isso, vá lá no github.com e crie um novo repositório remoto na sua conta com o nome de `frontend-to-do-list` (ou um outro nome que achar mais relevante). Não esqueça de fazer o clone dele na sua máquina local.

Pronto! Agora bora programar e construir o front-end de um app de lista de tarefas.

## Etapa 2: Reproduza tudo o que foi feito em aula do app lista de tarefas

Antes de começar a programar, é importante você tentar reproduzir os passos executados durante a aula e deixar o código no mesmo ponto. Pode ir fazer enquanto você vai assistindo a gravação da aula. Em alguns momentos você vai precisar, mas tente não copiar todo o código, vá digitando e pesquise sobre as tags html, as propriedades de CSS e outras coisas que tiver curiosidade. A curiosidade é a melhor ferramenta para o seu aprendizado.

Também te desafio a modificar o estilo da página dando aquele toque pessoal, que tal adicionar cores e imagens diferentes. Legal,né?

Se tiver dificuldades consulte o código da aula [aqui](https://github.com/ituring-repo/aprenda-a-programar/tree/main/tarefa-dia-4/to-do-list), assista o vídeo, procure ajuda no Discord, mas não deixe de tentar.

Vai testando, comitando e fazendo o push do seu código no repositório que você criou com o nome de `frontend-to-do-list`.

## Etapa 3: Marcando a tarefa como concluída

Antes de começar, saiba que existem várias formas de realizar essa tarefa, não tem certo ou errado, vamos seguir uma linha que julgamos mais simples de entender, beleza?

Para conseguir marcar uma tarefa como concluída, precisamos saber qual tarefa está sendo clicada. Para isso, vamos adicionar um `id` automático em cada tarefa no momento em que ela está sendo criada. Para isso:
1. Crie uma variável `let idTarefa = 0`para gerar um contador automátio no início do seu arquivo
2. Toda vez que você criar um item de tarefa, incremente esse `idTarefa` e use ele como `id` da sua tarefa criada na sua função `adicionarTarefa`. Vai ficar assim:
```javascript
    idTarefa++;
    item.id = idTarefa;
```
Pronto, agora cada elemento `li` criado possui um `id`.

3. Agora o próximo passo é criar a função `concluir(itemId)` que recebe o `id` clicado como parâmetro, encontra o item correspondente no html e adiciona uma classe `concluida` no texto (`<span>`). Ao adicionar uma classe no elemento, nós podemos forçar esse elemento a mudar de aparência. Colocando isso em prática, teríamos algo assim:
```javascript
    function concluir(itemId) {
        const tarefaSelecionada = document.getElementById(itemId);
        tarefaSelecionada.className = "concluida";
    }
```
4. Adicionar a classe no html me parece que foi tranquilo. Agora é preciso adicionar o estilo correspondente à classe `concluida` no arquivo CSS. Adicione o código abaixo para deixar o texto do `span` de outra cor e com um risco:
```css
    .concluida span {
        text-decoration: line-through;
        color: #a9a9a9;
    }
```
Note que só queremos que o span sofra a alteração, por isso usamos essa combinação de seletores `classe  tag`.

5. Agora basta a gente adicionar essa chamada de função em cada item criado, e um jeito fácil de fazer isso é passando a instrução `onclick="concluir(id)"` para o texto da lista assim que ele for criado. Podemos fazer isso no momento que inserimos o conteúdo no item. Vai ficar algo assim:
```javascript
    item.innerHTML = `
    <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <button class="excluir" onclick="excluir(event)">x</button>
    `;
```
Note que colocamos o `id` da tarefa dinamicamente, de forma que cada elemento passe o `id` correto para a função chamada no clique.

Vai testando, comitando e fazendo o push do seu código no repositório que você criou com o nome de `frontend-to-do-list`.

Prontinho, agora é só correr para o abraço!

## Etapa 4: Excluindo a tarefa

O raciocínio para excluir uma tarefa é o mesmo usado para marcar a tarefa como lida, mas pode ser que você precise utilizar um `tarefaSelecionada.remove()` em algum momento. Agora é com você!

Vai testando, comitando e fazendo o push do seu código no repositório que você criou com o nome de `frontend-to-do-list`.

## Etapa Extra: Impedindo a adição de uma tarefa sem nenhum texto

Se você achou tranquilo fazer os passos 1 e 2, tente melhorar o funcionamento da lista de tarefas. Que tal uma forma de impedir que um usuário adicione uma tarefa sem nenhum texto?

Vai testando, comitando e fazendo o push do seu código no repositório que você criou com o nome de `frontend-to-do-list`.

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-4-opcional**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.
