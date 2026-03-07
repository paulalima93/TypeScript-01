// =========================================================================
// 🚀 MÃO NA MASSA: FUNDAMENTOS DO TYPESCRIPT 
// =========================================================================
// Regra de Ouro: O seu tsconfig.json deve estar com "strict": true.
// Escreva os códigos abaixo do enunciado de cada exercício.
// =========================================================================


// -------------------------------------------------------------------------
// 💻 EXERCÍCIO 1: Controle de Servidor (Tipagem de Variáveis Primitivas)
// -------------------------------------------------------------------------
// Por que usar TS aqui? 
// No JavaScript, você poderia acidentalmente reatribuir a variável `porta` 
// recebendo o texto "Oito Mil". O TypeScript impede isso travando os tipos.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma variável chamada `nomeServidor` e tipe ela explicitamente como texto.
//    Atribua o valor "Servidor_AWS_01".
// 2. Crie uma variável chamada `porta` e tipe ela como número. Atribua o valor 8080.
// 3. Crie uma variável chamada `estaOnline` e tipe ela como booleano. Atribua `true`.
// 4. Crie uma estrutura `if / else`.
// 5. Se o servidor estiver online, dê um console.log dizendo: 
//    "O [nomeServidor] está rodando na porta [porta]".
// 6. Se não estiver, dê um console.log dizendo: "Servidor offline."

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:






// -------------------------------------------------------------------------
// 🧮 EXERCÍCIO 2: Calculadora de Custos (Funções e o Bug da Concatenação)
// -------------------------------------------------------------------------
// Por que usar TS aqui? 
// O maior bug do JS em formulários ou APIs é receber "100" e "20", e ao somar, 
// o JS retornar "10020" em vez de 120. O TS obriga a função a receber apenas números.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma função chamada `calcularCustoMensal`.
// 2. Ela deve receber dois parâmetros obrigatórios: `custoDiario` e `diasUteis`.
// 3. Tipe os dois parâmetros para que aceitem apenas números.
// 4. A função deve retornar um número (tipe o retorno também!).
// 5. Dentro da função, crie uma variável `let total = 0`.
// 6. Crie um laço `for` que comece em 1 e vá até o número de `diasUteis`.
// 7. Dentro do laço, some o `custoDiario` na variável `total` (total = total + custoDiario).
// 8. Retorne a variável `total`.
// 9. Fora da função, chame-a passando 50 de custo e 20 dias, e guarde numa 
//    constante `resultado`. Dê um console.log no resultado.

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:





// -------------------------------------------------------------------------
// 🚨 EXERCÍCIO 3: O Perigo do "Any" (Modo Strict)
// -------------------------------------------------------------------------
// Por que usar TS aqui? 
// Sem tipar o parâmetro, ele vira `any`. Se outro dev passar um número sem querer, 
// a função vai tentar rodar `.toLowerCase()` num número, e o servidor vai cair (Crash).
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma função chamada `formatarEmailCorporativo`.
// 2. Ela deve receber um parâmetro chamado `nomeUsuario`.
// 3. Tipe esse parâmetro como `string` (se não tipar, o modo Strict vai gritar!).
// 4. A função deve retornar uma `string`.
// 5. Dentro da função, crie uma `const nomeFormatado` que pega o `nomeUsuario` 
//    e usa o método do JS `.toLowerCase()` para deixar tudo minúsculo.
// 6. Retorne o `nomeFormatado` concatenado com "@empresa.com.br".
// 7. Chame a função passando "PAULA_DEV" e imprima no console.

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:




// -------------------------------------------------------------------------
// 🏦 EXERCÍCIO 4: Validador de Saque (Lógica com Múltiplos Tipos)
// -------------------------------------------------------------------------
// Por que usar TS aqui? 
// Em regras de negócio bancárias, ter a certeza de que a variável de bloqueio 
// é exatamente `true` ou `false` (e não uma string vazia ou nula) é o que 
// separa um código seguro de um grande prejuízo financeiro.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma função chamada `autorizarSaque`.
// 2. Ela deve receber três parâmetros:
//    - `saldoDisponivel` (número)
//    - `valorDesejado` (número)
//    - `contaBloqueada` (booleano)
// 3. O retorno da função deve ser `void` (pois ela só vai imprimir mensagens).
// 4. Primeiro, faça um `if` para checar se a `contaBloqueada` é verdadeira. 
//    Se for, imprima "[ERRO] Conta bloqueada. Procure sua agência" e use o 
//    comando `return;` para parar a execução da função ali mesmo.
// 5. Em seguida, faça outro `if / else` para checar os valores:
//    Se `valorDesejado` for maior que o `saldoDisponivel`, imprima "[ERRO] Saldo insuficiente".
//    Senão, imprima "[SUCESSO] Saque de R$ [valorDesejado] autorizado".
// 6. Faça dois testes chamando a função: um com conta bloqueada e outro com saque válido.

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:
