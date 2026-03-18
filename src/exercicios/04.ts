// =========================================================================
// 🚀 MÃO NA MASSA: TIPOS AVANÇADOS (Aula 04)
// =========================================================================

// -------------------------------------------------------------------------
// 🧬 EXERCÍCIO 1: Flexibilidade Segura no Backend (Union Types)
// -------------------------------------------------------------------------
// Por que usar TS aqui?
// APIs muitas vezes buscam usuários por ID (número) ou por Email (string).
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie um Type Alias chamado `IdentificadorBusca` que aceite number ou string.
// 2. Crie uma função chamada `buscarUsuarioBanco` que receba um parâmetro 
//    `identificador` usando o tipo que você criou acima.
// 3. O retorno da função deve ser `void`.
// 4. Dentro da função, use um `if` com `typeof` para checar:
//    - Se for number: console.log("Buscando usuário pelo ID [valor]").
//    - Se for string: console.log("Buscando usuário pelo Email [valor]").

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:





// -------------------------------------------------------------------------
// 🛡️ EXERCÍCIO 2: Domando APIs Selvagens (Unknown)
// -------------------------------------------------------------------------
// Por que usar TS aqui?
// Se uma API externa retornar um dado inesperado e tentarmos usar métodos de 
// string nela, o Node.js quebra.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma função `processarMensagemLog` que receba `dadoExterno` do tipo `unknown`.
// 2. Tente dar um console.log(dadoExterno.toLowerCase()) direto, sem `if`.
// 3. O TS vai gerar um erro. Comente essa linha.
// 4. Crie um Type Guard (um `if` validando o `typeof` como "string").
// 5. Mova o código comentado para dentro do `if` e descomente. O erro vai sumir!

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇: