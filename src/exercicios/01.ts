// -------------------------------------------------------------------------
// 🛠️ EXERCÍCIO 1: O Bug da Autenticação (Foco: Tipagem Básica)
// -------------------------------------------------------------------------
// Cenário:
// Um sistema de login antigo escrito em JavaScript puro estava a permitir o
// acesso de utilizadores mesmo quando a senha estava incorreta. 
// O problema ocorreu porque a função avaliava a palavra "false" (um texto) 
// em vez do valor booleano `false`. No JavaScript, qualquer texto com 
// conteúdo é considerado `true`, o que gerava um bug grave de segurança.
//
// Tarefa:
// 1. O código legado abaixo está em JavaScript.
// 2. Converta-o para TypeScript adicionando as tipagens corretas aos 
//    parâmetros da função (`usuario` e `senhaCorreta`).
// 3. Após tipar, note que a chamada da função na linha 33 vai ficar 
//    sublinhada a vermelho (o TypeScript encontrou o bug do Júnior!).
// 4. Corrija a chamada da função para que o acesso seja negado corretamente.

/* --- CÓDIGO A SER CORRIGIDO --- 

function validarAcesso(usuario, senhaCorreta) {
    if (senhaCorreta) {
        console.log(`[SUCESSO] Acesso liberado para: ${usuario}`);
    } else {
        console.log(`[ERRO] Acesso negado para: ${usuario}`);
    }
}

*/
// O erro aconteceu aqui: o front-end enviou o texto "false" em vez do booleano false.
// DESCOMENTE A LINHA ABAIXO PARA VER O ERRO (APÓS TIPAR A FUNÇÃO):
// validarAcesso("admin_paula", "false"); 





// -------------------------------------------------------------------------
// 🛠️ EXERCÍCIO 2: A Armadilha da Inferência (Foco: Tipagem Básica)
// -------------------------------------------------------------------------
// Cenário:
// Um desenvolvedor declarou uma variável para controlar as tentativas de 
// login de um usuário. Mais à frente, a regra de negócio mudou e ele tentou 
// atribuir o texto "bloqueado" a essa variável. O TypeScript barrou a 
// compilação imediatamente, mesmo o dev não tendo escrito `: number`.
//
// Tarefa:
// 1. Descomente as linhas de código abaixo e leia o erro gerado na IDE.
// 2. Explique num comentário o conceito do TypeScript que causou este erro.
// 3. Corrija o código (seja atribuindo um número como 0, ou alterando a 
//    lógica para fazer sentido com o tipo numérico).

/* --- CÓDIGO A SER CORRIGIDO --- */

// let tentativasDeLogin = 3;
// console.log(`Tentativas restantes: ${tentativasDeLogin}`);
// tentativasDeLogin = "bloqueado"; //

// 👇 ESCREVA A SUA EXPLICAÇÃO E CORREÇÃO AQUI ABAIXO 👇:
