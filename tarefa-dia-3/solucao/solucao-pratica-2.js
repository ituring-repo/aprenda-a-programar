/*
DICA LEGAL:
Veja que abaixo usamos 'const' ao invés de 'let'. Você saber por que?

'const' é uma outra forma de declarar variáveis em JavaScript.

Quando você declara uma variável como 'const', você está dizendo que essa variável
NUNCA deve alterar o seu valor. Ou seja, ela é uma variável CONSTante.

Se você alterar o valor dessa variável, vai dar erro no código!

Qual a única variável que declaramos como 'let'? A variável 'i',
pois ela é a ÚNICA que muda de valor durante o código. :)

Isso é muito bom, pois garante a consistência de como cada variável
deve se comportar e também facilita a leitura do código, pois quando
você vê o 'const', você logo entende que aquela variável tem um valor fixo.
Por conta disso, você consegue deduzir que ela terá uma função diferente no código,
como por exemplo servir de um limite superior em um comando de repetição por exemplo.
*/
const multiplicador = 9
let i = 1

while (i <= 10) {
    const resultado = i*multiplicador
    const valorExibido = `${multiplicador} X ${i} = ${resultado}`
    console.log(valorExibido)
}