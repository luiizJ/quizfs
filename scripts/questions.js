let questions = [
    // Nível Fácil
    {
        question: 'Qual é a função do operador aritmético de adição (+) em programação?s',
        options: [
            'Realizar uma subtração entre dois valores',
            'Realizar uma multiplicação entre dois valores',
            'Realizar uma operação lógica entre dois valores.',
            'Realizar uma soma entre dois valores.'
        ],
        answer: 3 
    },
    {
        question: 'Qual a melhor linguagem de programação para iniciantes?',
        options: [
            'Phyton',
            'Java',
            'C++',
            'JavaScript'
        ],
        answer: 0
    },
    {
        question: 'Qual das alternativas abaixo melhor descreve a definição de programação?',
        options: [
            'É a arte de criar jogos de computador.',
            'É a ciência de criar algoritmos para solucionar problemas.',
            'É o processo de proteger um sistema de ataques externos.',
            'É a habilidade de manipular planilhas eletrônicas.'
        ],
        answer: 1
    },
    {
        question: 'Qual é a sintaxe correta para um laço de repetição "for" em Python?',
        options: [
            'for (i = 0; i < 10; i++)',
            'for i in range(10):',
            'while i < 10:',
            'for (i = 0, i < 10, i++)'
        ],
        answer: 1 
    },
    {
        question: 'Qual é a sintaxe correta para um laço de repetição "while" em Python?',
        options: [
            'while i < 10',
            'do while i < 10',
            'for i in range(10):',
            'while (i = 10)'
        ],
        answer: 0
    },

    {
        question: 'Qual é a sintaxe correta para um laço de repetição "while" em Python que verifique se o saldo é suficiente para o saque e subtraia o valor do saldo caso seja possível?',
        options: [
            'while (saldo - saque >= 0)',
            'do while (saldo - saque >= 0)',
            'for i in range(saldo - saque):',
            'while loop (saldo - saque >= 0)'
        ],
        answer: 0
    },
    {
        question: 'Um professor precisa percorrer uma lista com as notas dos alunos da turma para calcular a média. Qual é a sintaxe correta para um laço de repetição "for" em Python que percorra essa lista e acumule as notas?',
        options: [
            'for (i = 0; i < len(notas); i++)',
            'for nota in notas:',
            'while nota in notas:',
            'for (i = 0, i < len(notas), i++)'
        ],
        answer: 1 
    },
    {
        question: 'Em um jogo, o personagem só pode entrar em uma sala se ele tiver a chave correta e a porta não estiver trancada. Qual é o operador lógico correto para a condição "tem a chave correta E a porta não está trancada" em Python?',
        options: [
            'AND',
            'OR',
            'NOT',
            'XOR'
        ],
        answer: 0 
    },
    {
        question: 'Um jogo tem um sistema de pontos em que o jogador ganha pontos a cada vez que ele elimina um inimigo. O sistema de pontos é implementado com uma estrutura condicional "if". Qual é a sintaxe correta para a estrutura condicional "if" em Python que verifica se o jogador eliminou um inimigo?',
        options: [
            'if (inimigo = True):',
            'if inimigo = True:',
            'if inimigo == True:',
            'if inimigo == "True":'
        ],
        answer: 2
    },
    {
        question: 'Em um sistema de cadastro de clientes, é necessário validar se o CPF digitado pelo usuário é válido antes de salvar no banco de dados. Se o CPF for inválido, o sistema deve exibir uma mensagem de erro. Qual é a sintaxe correta para a estrutura condicional "if" em Python que verifica se um CPF é válido?',
        options: [
            'if (cpf != None):',
            'if (cpf.valido):',
            'if (len(cpf) != 11):',
            'if (cpf in lista_cpf_validos):'
        ],
        answer: 2
    },

    {
        question: 'Uma empresa precisa gerar um relatório com o faturamento mensal de cada filial, que está armazenado em um dicionário em Python. Qual é a sintaxe correta para um laço de repetição "for" que percorre o dicionário e exibe o faturamento de cada filial?',
        options: [
            'for filial in faturamento:',
            'for (filial, faturamento) in dicionario.items():',
            'while filial in faturamento:',
            'for (filial, faturamento) in dicionario:'
        ],
        answer: 1 
    },
    {
        question: 'Em um jogo de plataforma, o personagem só pode se mover se não estiver colidindo com nenhum obstáculo. Qual é a sintaxe correta para um laço de repetição "while" em Python que verifique se o personagem está colidindo com um obstáculo e interrompa o movimento caso esteja?',
        options: [
            'while personagem.colisao(obstaculo)',
            'while colisao(personagem, obstaculo):',
            'while personagem != obstaculo:',
            'while personagem.colisao == obstaculo.colisao:'
        ],
        answer: 0 
    },
    {
        question: 'Em uma loja virtual, é necessário calcular o valor do frete com base na região de entrega e no peso do produto. Se a região de entrega for "Sul" e o peso do produto for maior que 10 kg, o valor do frete será dobrado. Qual é a sintaxe correta para a estrutura condicional "if" em Python que realiza esse cálculo?',
        options: [
            'if (regiao == "Sul") and (peso > 10): frete = frete * 2',
            'if (regiao == "Sul") or (peso > 10): frete = frete * 2',
            'if (regiao == "Sul") or (peso > 10): frete = frete + frete',
            'if (regiao == "Sul") and (peso > 10): frete = frete + frete'
        ],
        answer: 0
    },
    {
        question: `Considere o seguinte código em Python:
lista = [3, 7, 2, 9, 5] 
for i in range(len(lista)): 
print(lista[i]) 
Qual é a saída do programa?`,
        options: [
            '3 7 2 9 5',
            '[3, 7, 2, 9, 5]',
            '0 1 2 3 4',
            'Nenhuma das alternativas anteriores'
        ],
        answer: 0
    },
    {
        question: `Considere o seguinte código em Python:
idade = input("Digite sua idade: ") 
print("Você tem " + idade + " anos.") 
Qual é a saída do programa se o usuário digitar 25?`,
        options: [
            'Você tem 25 anos.',
            'Você tem 25',
            '25 anos.',
            'Nenhuma das alternativas anteriores'
        ],
        answer: 0
    },
    {
        question: `Considere o seguinte código em Python:
lista = ["Python", "Java", "C++", "Ruby", "JavaScript"]
print(len(lista)) 
Qual é a saída do programa?`,
        options: [
            '["Python", "Java", "C++", "Ruby", "JavaScript"]',
            'Erro de sintaxe',
            '5',
            '0'
        ],
        answer: 2 
    },
    {
        question: `Considere o seguinte código em Python:
lista = ["Python", "Java", "C++", "Ruby", "JavaScript"] 
print(lista[-2]) 
Qual é a saída do programa?`,
        options: [
            'Phyton',
            'Ruby',
            'C++',
            'JavaScript'
        ],
        answer: 1 
    },
    {
        question: `Considere o seguinte código em Python:
lista = [4, 8, 2, 5, 1]
soma = 0
for i in lista:
    soma += i
print(soma) 
Qual é a saída do programa?`,
        options: [
            '0',
            '20',
            '15',
            '1'
        ],
        answer: 1
    },
    {
        question: 'Em um programa Python, você precisa verificar se um número digitado pelo usuário é par ou ímpar. Qual das estruturas condicionais abaixo você utilizaria?',
        options: [
            'While',
            'for',
            'if',
            'if-else'
        ],
        answer: 3
    },
    {
        question: 'Para iterar sobre uma lista e executar um bloco de código para cada elemento, qual estrutura de controle você utilizaria em Python?',
        options: [
            'if',
            'for',
            'while',
            'def'
        ],
        answer: 1
    },
    {
        question: 'Qual das opções a seguir é um exemplo correto de declaração de uma função em Python?',
        options: [
            'def minhaFunção()',
            'def minhaFunção():',
            'minhaFunção()',
            'def minhaFunção:'
        ],
        answer: 1
    },
    {
        question: 'Como podemos solicitar que o usuário digite um valor no console em Python?',
        options: [
            'Utilizando a função print()',
            'Utilizando a função input()',
            'Utilizando a função scanf()',
            'Utilizando a função readline()'
        ],
        answer: 1
    },
    {
        question: 'Qual das seguintes alternativas é uma função nativa do Python que retorna o valor absoluto de um número?',
        options: [
            'ceil()',
            'round()',
            'abs()',
            'floor()'
        ],
        answer: 2
    },
    {
        question: 'Qual das opções a seguir é uma forma correta de criar uma lista vazia em Python?',
        options: [
            'lista_vazia = []',
            'lista_vazia = ""',
            'lista_vazia = {}',
            'lista_vazia = ()'
        ],
        answer: 0
    },
    {
        question: 'Qual é a função em Python que remove o último elemento de uma lista?',
        options: [
            'pop()',
            'dell()',
            'remove()',
            'delete()'
        ],
        answer: 0
    },
    {
        question: 'Suponha que você precise repetir um bloco de código um número fixo de vezes. Qual estrutura de controle você usaria em Python',
        options: [
            'if',
            'for',
            'if-else',
            'while'
        ],
        answer: 1
    },
    {
        question: 'Qual é o resultado da seguinte expressão em Python: 3 + 4 * 2?',
        options: [
            '14',
            '18',
            '16',
            '11'
        ],
        answer: 3
    },
    {
        question: 'Qual é o tipo de dado utilizado para armazenar múltiplos valores em uma única variável em Python?',
        options: [
            'string',
            'boolean',
            'lista',
            'float'
        ],
        answer: 2
    },
];

