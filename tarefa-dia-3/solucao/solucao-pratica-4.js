/*
Observação: mostramos duas soluções possíveis, mas existem
outras soluções de código para resolver este problema.
Inclusive, soluções mais performáticas.
*/

// Inicialização das variáveis
const numero = 1500450271 // olha o const aí :)
let i = 2
let ehPrimo = true

/* SOLUÇÃO POSSÍVEL 1 --------------------------------------------------------- */
while (i <= n) {
    if (numero % i == 0) {
        ehPrimo = false
        /*
        Dica: o comando break pára completamente o loop e sai dele.
        Sem o break a lógica também está correta, mas ele vai fazer mais processamento.
        */
        break 
    }
    i++
}

// Dica: quando dentro do if ou do else SÓ TEM UM COMANDO, não precisa de chaves {}
if (ehPrimo) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)
/* ------------------------------------------------------------------------------ */


/* SOLUÇÃO POSSÍVEL 2 --------------------------------------------------------- */
// Dica: quando dentro do if ou do else SÓ TEM UM COMANDO, não precisa de chaves {}
i = 2 // voltando com o valor 2 no i para rodar corretamente essa segunda solução possível
while (numero % i != 0)
    i++ // que é a mesma coisa que i = i + 1

// Dica: quando dentro do if ou do else SÓ TEM UM COMANDO, não precisa de chaves {}
if (numero == i) 
    console.log(`Sim, o número ${numero} é primo.`)
else
    console.log(`Não, o número ${numero} não é primo.`)
/* ------------------------------------------------------------------------------ */