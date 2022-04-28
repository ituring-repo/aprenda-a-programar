# Tarefa - Dia 3: Aprendendo a programar (parte 1)

## Exercício 1: verifique as expressões lógicas

Avalie as expressões lógicas do arquivo no [neste link](./logica.js) e tente prever se o ```console.log``` resultante será A ou B.
Você pode rodar o código para testar se sua resposta está correta. Confira se você acertou comparando com o nosso [gabarito](../Gabaritos).

**Não é preciso enviar a resposta deste exercício**

## Exercício 2: resolvendo um problema com programação

Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. 
O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e 
se ele é internacional ou nacional, mas não calcula os impostos.

Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica 
se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro.
Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

Base de dados que o cliente passou para você:
```
let produtoA = {"nome": camiseta, "valor": 100.00, "internacional": true};
let produtoB = {"nome": perfume, "valor": 200.00, "internacional": true};
let produtoC = {"nome": sandália, "valor": 120.00, "internacional": false};
```

Copie essa base para o seu código e escreva um programa que resolve o problema do cliente e exibe as informações dos produtos e o valor aplicado os impostos devidos. Você deve testar o seu código com os 3 produtos.

**Dica 1:** lembre-se do que falamos no dia 1. Programar é errar e consertar. É SEMPRE experimentando e "futucando". É ser uma pessoa desbravadora, que futuca e vai tentando tudo de quanto é jeito até acertar. Experimente o `console.log()`, execute o código e veja o que aparece na tela. Começa tentando exibir as informações de cada produto. Lembrando que pra executar o código você digita `node nomedoarquivo.js` no terminal.

**Dica 2:** lembre-se que para acessar ou alterar as informações das variáveis do tipo mapa você utiliza `nomedavariavel["nome"]`, `nomedavariavel["valor"]`, `nomedavariavel["internacional"]`. Altere as informações e depois tente exibir com `console.log()`. Veja se realmente foram alteradas ao ver o que foi exibido com o `console.log()`.

**Dica 3:** resolver problemas é **sempre** baby-steps (passos de bebê). Não existe nenhuma pessoa programadora do mundo que não siga esse processo. As melhores sempre fazem isso, um passo de cada vez, dividir para conquistar. Pra quem está começando, este método é ainda mais importante! Começa fazendo algo bem simples primeiro. Testa e veja se funcionou. Funcionou? Não funcionou? Deu algum erro? Pesquisa o que foi que deu errado e corrige. Corrigiu? Vai pro próximo passo. E assim em diante.

**Dica 4:** fique tranquilo(a). A 1ª vez que coloca a mão no código é sempre mais difícil. Tudo mais confuso na cabeça, as coisas estão se materializando, o entendimento, a compreensão e prática é que vai te permitir a evolução. Aos poucos você vai pegando o jeito e depois você verá que tudo fica mais tranquilo e fluido. Como falamos no 1º dia, quando a pessoa aprende a dirigir é o mesmo processo! Tudo mais difícil no início, depois fica natural e rápido.

**Dica 5:** para aplicar 20% de impostos, você deve multiplicar por 1.2. Para aplicar 12%, você deve multiplicar por 1.12.

**Dica 6:** você vai precisar criar comandos condicionais que verificam se o produto é internacional ou não. Se for internacional, deve exibir o nome do produto e o valor com os impostos de 20%. Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.

**Dica 7:** lembre-se que para acessar ou alterar as informações das variáveis do tipo mapa você utiliza `nomedavariavel["nome"]`, `nomedavariavel["valor"]`, `nomedavariavel["internacional"]`.

### Instruções de envio

Ao terminar o exercício 2, não esqueça de comitar e fazer o push do código no seu repositório. Em seguida, **envie o link do seu repositório no formulário indicado do canal #💪tarefa-dia-3**.
