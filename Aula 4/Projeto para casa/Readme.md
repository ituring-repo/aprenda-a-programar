# Exercícios com lista e Projeto do módulo de programação (aulas 3 e 4)

### Exercícios com lista
Crie um arquivo no seu repositório local referente a essa aula e copie e cole o código desse link [Dados para o exercício](./receitas.js) 
ou em https://github.com/ituring-repo/aprendendo-a-programar/blob/main/Aula%204/Projeto%20para%20casa/receitas.js

Resolva os exercícios a seguir usando a lista dada no arquivo e faça o commit e push para o seu repositório.

Você pode compartilhar o link da sua solução no canal #tarefa-dia-4 do Discord.
- Exercício 1: Qual o valor total de vendas sem gorjeta?
- Exercício 2: Qual o valor total de vendas incluindo a gorjeta?
- Exercício 3: Quantas vendas foram abaixo de 50 reais?

### Projeto do Módulo

Seu gestor organizou um arquivo em texto como esse:
```
317065 | 8
277099 | 1
665420 | 7
635236 | 7
647862 | 3
105875 | 8
812312 | 1
635520 | 8
515280 | 8
```

Cada valor da primeira coluna é um número de cadastro e o da segunda coluna uma nota final. A tarefa que ele passou para você foi de analisar caso a caso 
quem foi aprovado (nota >= 6) e quem foi reprovado (nota < 6) para lançar no sistema. Assim você poderia ir ao sistema e cadastrar por aluno por aluno.

Você como pessoa programdora sabe que sempre existe um jeito melhor de fazer as coisas. Então decidiu pedir ajudar para sua amiga Carla que já desenvolve há alguns anos, e essa foi a resposta dela para o seu email:
```
Bom dia, 

É super possível fazer isso mais rápido! Mas estou meio sem tempo e vou precisar da sua ajuda. 
Se puder escrever o código para transformar esse texto em algo que eu possa iterar facilmente 
(pode ser uma lista de listas ou uma lista de mapas) eu posso depois subir todos os dados 
de alunos via Backend para você.

Abs
```

Bom, você ainda não sabe exatamente como fazer isso. Mas já sabe iterar, já sabe criar listas e objetos... só precisamos achar um jeito de lidar com arquivos de texto. Então para facilitar as coisas vamos fazer uma lista do que precisamos:
- Ler o arquivo .txt
- Criar o formato de dados pedido pela Carla (lista de listas ou lista de mapas)
- Imprimir esses dados via console.log para que possamos enviar para ela.

Para ajudar, a Carla já iniciou o código com comentários. Você encontra o link do código que ela subiu no Github abaixo.

DESAFIO:
Sabendo que seu gesto prefere as coisas um pouco mais a moda antiga. Além dos dados que vai enviar para Carla, como você geraria um arquivo de boletim automático, conforme o exemplo abaixo?
```
O cadastro 317065 teve nota 8. Portanto foi aprovado 
O cadastro 277099 teve nota 1. Portanto foi reprovado 
O cadastro 665420 teve nota 7. Portanto foi aprovado 
O cadastro 635236 teve nota 7. Portanto foi aprovado 
```

Links para os arquivos:
- Dados em txt: https://github.com/ituring-repo/aprendendo-a-programar/blob/main/Aula%204/Projeto%20para%20casa/dados.txt
- Código de partida: https://github.com/ituring-repo/aprendendo-a-programar/blob/main/Aula%204/Projeto%20para%20casa/projeto_modulo.js

Exemplo de uma lista de mapas:
```
[
  { cadastro: '317065', nota: '8' },
  { cadastro: '277099', nota: '1' },
  { cadastro: '665420', nota: '7' },
  { cadastro: '635236', nota: '7' }
]
``` 
