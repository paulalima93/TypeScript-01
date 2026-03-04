// ---------------------------------------------------------------
// Aula 1.2 – Configuração Profissional e o tsconfig.json
// ---------------------------------------------------------------

// 🛠️ PREPARAÇÃO DO AMBIENTE NODE.JS (Para projetos reais)
// ---------------------------------------------------------------
// Abra o terminal na pasta do projeto e execute:
// 1. 👉 npm init -y (Inicia o projeto Node)
// 2. 👉 npm install typescript --save-dev (Instala o TS só para este projeto)
// 3. 👉 npx tsc --init (Cria o tsconfig.json cheio de regras comentadas)


// 📚 CONCEITO 1: Arquitetura de Pastas e Strict Mode
// ---------------------------------------------------------------
// Abra o arquivo `tsconfig.json` recém-criado. Use o Ctrl+F para achar:
// 
// 1. Ache "rootDir", tire as barras (//) e mude para: "rootDir": "./src",
// 2. Ache "outDir", tire as barras (//) e mude para: "outDir": "./dist",
// 3. Ache "strict", ele já deve estar sem barras: "strict": true,
//
// ⚠️ DICA DE OURO: O JSON é chato com vírgulas. Deu erro? Apague tudo 
// dentro do seu tsconfig.json e cole esta versão limpa e profissional:
/*
{
  "compilerOptions": {
    "target": "es2022",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
*/


// 📚 CONCEITO 2: O Erro do Any Implícito
// ---------------------------------------------------------------
// O modo strict proíbe variáveis sem tipo definido (any implícito).

// ❌ Se removermos o ': string', o TS vai acusar um erro de segurança na IDE.
function formatarLog(texto: string): string {
    return `[LOG SISTEMA]: ${texto.toUpperCase()}`;
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Refatoração de API Legada"
// ---------------------------------------------------------------

/* --- CÓDIGO LEGADO PARA DESCOMENTAR E CORRIGIR --- */

/*
function gerarFatura(nomeCliente, valorTotal, estaPaga) {
    const status = estaPaga ? "PAGA" : "PENDENTE";
    return `Fatura de ${nomeCliente} | Valor: R$ ${valorTotal.toFixed(2)} | Status: ${status}`;
}

const faturaImpressa = gerarFatura("Empresa X", 1500.50, false);
console.log(faturaImpressa);
*/

// TAREFA: Refatore o código acima adicionando as tipagens corretas 
// aos parâmetros da função para que o TypeScript pare de reclamar.