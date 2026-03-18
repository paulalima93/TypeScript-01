// =========================================================================
// 🚀 MÃO NA MASSA: INTERFACES DE DADOS (Aula 05)
// =========================================================================

// -------------------------------------------------------------------------
// 🏗️ EXERCÍCIO 1: O Contrato Perfeito de uma API (Interfaces)
// -------------------------------------------------------------------------
// Por que usar TS aqui?
// Garantir que a comunicação do Front-End com o Back-End respeite as regras 
// do banco de dados, exigindo campos obrigatórios e ignorando os ausentes.
//
// 📜 Algoritmo Passo a Passo:
// 1. Você está criando um sistema de RH. Crie uma `interface` chamada `Funcionario`.
// 2. A interface deve ditar as regras:
//    - `matricula` (number, obrigatório e somente leitura)
//    - `nome` (string, obrigatório)
//    - `cargo` (string, obrigatório)
//    - `possuiCNH` (boolean, opcional)
// 3. Crie uma função `registrarContratacao` que receba um objeto `novoFuncionario` 
//    que obedeça à interface `Funcionario`. O retorno é `void`.
// 4. Dentro da função, dê um console.log no nome e no cargo do funcionário.
// 5. Chame a função passando um objeto com matrícula, nome e cargo válidos.

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:





// -------------------------------------------------------------------------
// 🛡️ EXERCÍCIO 2: Blindagem de Propriedades (O Erro da Mutação)
// -------------------------------------------------------------------------
// 📜 Algoritmo Passo a Passo:
// 1. Aproveitando a função e a interface criadas no exercício anterior...
// 2. O que aconteceria se você tentasse mudar a matrícula do funcionário 
//    dentro da função? (ex: novoFuncionario.matricula = 9999)
// 3. Tente fazer isso e observe a proteção do TypeScript agir na sua IDE!

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇: