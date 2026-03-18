// =========================================================================
// 🚀 MÃO NA MASSA: ESTRUTURAS DE DADOS (Aula 03)
// =========================================================================
// Regra de Ouro: O seu tsconfig.json deve estar com "strict": true.
// =========================================================================

// -------------------------------------------------------------------------
// 🔒 EXERCÍCIO 1: Firewall e Arrays Imutáveis
// -------------------------------------------------------------------------
// Por que usar TS aqui?
// Numa arquitetura de segurança, uma lista de IPs permitidos nunca deve ser 
// modificada em tempo de execução. O TypeScript garante essa imutabilidade.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie uma variável `ipsLiberados` e tipe-a como um Array de strings 
//    totalmente protegido (Apenas leitura).
// 2. Atribua a ela os IPs: "192.168.0.1" e "10.0.0.5".
// 3. Na linha de baixo, tente dar um `.push("127.0.0.1")` na lista.
// 4. Veja o erro do TypeScript e comente a linha do `.push()` explicando 
//    o motivo do erro.

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇:





// -------------------------------------------------------------------------
// 🚦 EXERCÍCIO 2: Gateway de Pagamentos e Enums
// -------------------------------------------------------------------------
// Por que usar TS aqui?
// Evita que o banco de dados receba "APROVADO" de um desenvolvedor e "aprovado" 
// de outro, o que quebraria os relatórios financeiros.
//
// 📜 Algoritmo Passo a Passo:
// 1. Crie um Enum chamado `StatusTransacao` com as seguintes chaves e valores:
//    - SUCESSO = "TX_SUCESSO"
//    - RECUSADO = "TX_RECUSADA"
//    - FRAUDE = "TX_ALERTA_FRAUDE"
// 2. Crie uma função chamada `analisarPagamento` que receba um parâmetro 
//    chamado `status` do tipo do Enum que você acabou de criar.
// 3. Faça um if verificando se o status é igual a Fraude do Enum. Se for, 
//    dê um console.log("Bloqueando cartão imediatamente!").

// 👇 ESCREVA O SEU CÓDIGO AQUI 👇: