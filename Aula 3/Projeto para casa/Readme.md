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

**Dica 1:** para aplicar 20% de impostos, você deve multiplicar por 1.2. Para aplicar 12%, você deve multiplicar por 1.12.

**Dica 2:** você pode exibir como resposta o nome do produto e o novo valor com os impostos.

**Dica 3:** você vai precisar criar comandos condicionais que verificam se o produto é internacional ou não. Se for internacional, deve exibir o nome do produto e o valor com os impostos de 20%. Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.

**Dica 4:** lembre-se que para acessar as informações das variáveis do tipo mapa você usa `nomedavariavel["nome"]`, `nomedavariavel["valor"]`, `nomedavariavel["internacional"]`.

### Instruções de envio

Ao terminar o exercício 2, não esqueça de comitar e fazer o push do código no seu repositório. Em seguida, **envie o link do seu repositório no formulário indicado do canal #💪tarefa-dia-3.
