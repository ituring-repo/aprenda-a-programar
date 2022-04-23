# Gabarito dos exercícios de terminal

#### Exercícios

1. Utlizando o terminal, navegue para uma localização desejada e crie uma pasta chamada 'ITuring'
2. Navegue para a pasta e crie o diretório Aula 1 e navegue para dentro dele (desafio: tente fazer isso com um único comando)
3. Dentro da Aula 1 crie um arquivo 'meu_arquivo.txt'
4. Usando um editor de texto qualquer copie o conteúdo a seguir, sem as aspas, para o arquivo e salve.
5. De volta ao terminal, exiba as primeiras 5 linhas do texto.
6. Agora tente exibir todas as linhas que tem a palavra 'caixa' no texto.
7. Desafio: Exibas todas as linhas que começam com A. Você deve usar o google para resolver esse desafio.
  

#### Os comandos a seguir resolvem os exercícios

1. **mkdir ITuring** para fazer o diretório ITuring
2. Para fazer com um único comando você pode usar o &&: **cd ITuring && mkdir Aula1 && cd Aula1**
3. **touch meu_arquivo.txt**
4. Basta copiar o texto usando o notepad mesmo e salvar.
5. **head meu_arquivo.txt**
6. **grep caixa meu_arquivo.txt**
7. **grep ^A meu_arquivo.txt**

Você pode ver mais detalhes sobre o desafio além de outras possibilidades de como usar o comando grep aqui: https://guialinux.uniriotec.br/grep/

O mais importante é sempre ter o hábito de buscar soluções, mesmo quando não temos ideia de como resolver. Hábito e técnica de pesqusia são habilidades
importantes de uma pessoa desenvolvedora.
