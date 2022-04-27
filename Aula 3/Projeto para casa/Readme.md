# Exercícios de lógica

Avalie as expressões lógicas do arquivo no link abaixo e tente prever se o ```console.log``` resultante será A ou B.
Você pode rodar o código para testar se sua resposta está correta. 

Compartilhe no canal #tarefa-dia-3 sua solução.

### Link: 

[exercício](./logica.js)

ou

https://github.com/ituring-repo/aprendendo-a-programar/blob/main/Aula%203/Projeto%20para%20casa/logica.js

## Exercício 2

Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. 
O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e 
se ele é internacional ou nacional, mas não calcula os impostos. 
Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica 
se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro.
Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.


Base de dados que o cliente passou passa para você:
let produtoA = {"valor": 100.00, "internacional": true};
let produtoB = {"valor": 200.00, "internacional": true};
let produtoC = {"valor": 120.00, "internacional": false};

Copie essa base para o seu código e escreva o programa que resolve o problema do cliente. Você deve testar o seu código com os 3 produtos.

dica: para aplicar 20% de impostos você deve multiplicar 1.2 e 12% deve multiplicar por 1.12
