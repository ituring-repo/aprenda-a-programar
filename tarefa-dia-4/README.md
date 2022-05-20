# Tarefa - Dia 4: Aprendendo a programar (parte 2)

Na tarefa do dia 4, faremos o seguinte:
- **Passo 1:** Resolvendo um problema com funções
- **Passo 2:** Resolvendo um problema com comandos de repetição
- **Passo 3 (Opcional):** Calculando as vendas com gorjeta

## Antes de começar

Antes de começar a programar, vamos organizar a pasta onde você está desenvolvendo as tarefas:
1. Nela, você criou as pastas `tarefa-dia-1`, `tarefa-dia-2` e `tarefa-dia-3`. Agora crie a pasta `tarefa-dia-4` (de preferência, pelo terminal :D).
1. Agora vá para a pasta `tarefa-dia-4` e crie os seguintes arquivos: `pratica-1.js`, `pratica-2.js`, `pratica-3.js`.
1. Agora execute os comandos git (`git pull`->`git status` -> `git add *` -> `git commit -m 'mensagem de commit'` -> `git log` -> `git push`) para subir essa atualização no seu repositório remoto do GitHub.

Pronto, agora bora programar!

## Passo 1: Resolvendo um problema com funções

A rede de boates Vegas necessita de uma funcionalidade no sistema de entrada que faz uma leitura digital da carteira de identidade das pessoas e determina se cada uma delas é ou não é maior de idade. Para a parte de reconhecimento de imagem, eles contrataram pessoas especialistas em processamento de imagens que coletassem a informação de idade direto da carteira de identidade das pessoas. O próximo passo é justamente determinar se a pessoa é maior de idade ou não. Para isso a rede Vegas contratou você para resolver esse problema.

As pessoas especialistas em processamento de imagens já deixaram um template de código pra você. Com isso o seu papel é apenas preencher as informações que estão faltando para que o código funcione corretamente. Portanto, copie e cole o código abaixo no arquivo `pratica-1.js` na pasta `tarefa-dia-4` e depois implemente a solução pedida nos comentários do código:
```
function legalAgeOrNot (age) {
    // escreva aqui a solução de código que verifica se a idade da pessoa é maior ou não que 18 anos (veja que a idade virá através da variável 'age' que está como parâmetro da função)
    // Se for maior ou igual, você deve exibir na tela "A idade é maior ou igual a 18 anos. Pode entrar na boate".
    // Se for menor, você deve exibir na tela "A idade é menor que 18 anos, entrada não permitida!"
}

let age1 = 13
let age2 = 18
let age3 = 20

// chame a função legalAgeOrNot que você construiu logo abaixo deste comentário para cada uma das idades em age1, age2, age3.
```

Por fim, faça o de sempre: execute o código (`node pratica-1.js`) pra ver se sua solução está funcionando e depois suba ele no GitHub.

## Passo 2: Resolvendo um problema com comandos de repetição

No arquivo `pratica-2.js` da pasta `tarefa-dia-4`, copie e cole o seguinte código:
```
for (let contador = 1; contador <= 10; contador++) {
    // escreva aqui um código para calcular exibir o resultado da tabuada do número 7. Ou seja, exibir o resultado de quanto é 7x1, 7x2, 7x3, 7x4, 7x5, etc
    // veja que você pode utilizar o contador para fazer este cálculo.
}
```

Seu papel será escrever o código que vai calcular a tabuada do número 7. Execute o código (`node pratica-2.js`) pra ver se sua solução está funcionando e depois suba ele no GitHub.

## Passo 3 (Opcional): Calculando as vendas com e sem gorjeta

No arquivo `pratica-3.js` da pasta `tarefa-dia-4`, copie e cole o código [desse link](./receitas.js).

Resolva os problemas a seguir usando a lista dada no arquivo e faça o commit e push para o seu repositório no GitHub.

- Problema 1: Qual o valor total de vendas sem gorjeta?
- Problema 2: Qual o valor total de vendas incluindo a gorjeta?
- Problema 3: Quantas vendas foram abaixo de 50 reais?

## Enviando a sua tarefa no nosso Discord

 Para enviar a tarefa, basta copiar o link do seu repositório no GitHub e colar no formulário solicitado no [Discord do curso](https://discord.com/invite/kHS84D2hA4) no canal **#💪tarefa-dia-4**.

 **Não sabe qual é o link do seu repositório?** Entre em github.com e clique no seu perfil no canto superior direito da tela (onde tem um círculo com uma setinha para baixo). Em seguida, clique em "Your repositories". Lá você vai ver o nome do repositório que você criou. Clique nele e em seguida copie o link do navegador e cole o link no formulário.




