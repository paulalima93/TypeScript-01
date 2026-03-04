// ---------------------------------------------------------------
// Aula 1.1 – O Que é TypeScript e Por Que Usamos?
// ---------------------------------------------------------------

// 🛠️ PREPARAÇÃO DO AMBIENTE (Testes rápidos globais)
// ---------------------------------------------------------------
// 1. Instale o compilador globalmente para testarmos este ficheiro:
//    👉 npm install -g typescript
//
// 2. Para rodar, compile e depois execute no Node:
//    👉 tsc aula1-1.ts
//    👉 node aula1-1.js


// 📚 CONCEITO 1: Os Tipos Básicos (Revisão do JS)
// ---------------------------------------------------------------
// O TypeScript utiliza os mesmos tipos fundamentais do JavaScript, mas agora 
// nós escrevemo-los de forma explícita (nota: sempre com letra minúscula!).
// 
// - string  : Para textos (ex: "Paula", 'Ativo', `Total`)
// - number  : Para números inteiros ou com casas decimais (ex: 10, 3.14, -50)
// - boolean : Para valores lógicos verdadeiros ou falsos (ex: true, false)


// 📚 CONCEITO 2: O Gargalo do JS vs A Solução do TS
// ---------------------------------------------------------------
// O TS analisa o seu código em Tempo de Compilação. Ele impede 
// que erros básicos (como somar texto com número) cheguem a produção.

function calcularTotalCompra(preco: number, frete: number): number {
    return preco + frete;
}

const valorProduto = 100;
const valorFrete = 20;

console.log(`Total: R$ ${calcularTotalCompra(valorProduto, valorFrete)}`);

// 👇 O PROBLEMA QUE O TS EVITA:
const inputDoUsuario = "100"; // Simulando o .value de um input HTML (vem como string)

// DESCOMENTE A LINHA ABAIXO E VEJA O TS SALVAR O SEU CÓDIGO:
//const totalErrado = calcularTotalCompra(inputDoUsuario, valorFrete);


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "O Dev Júnior Invertido"
// ---------------------------------------------------------------

function exibirPerfil(nome: string, idade: number, ativo: boolean): void {
    console.log(`Usuário: ${nome} | Idade: ${idade} | Status: ${ativo ? 'Online' : 'Offline'}`);
}

const nomeUsuario = "Paula";
const idadeUsuario = 32;
const isOnline = true;

// ❌ ERRO DO JÚNIOR: Descomente a linha abaixo e leia o erro na IDE.
// exibirPerfil(idadeUsuario, isOnline, nomeUsuario);

// TAREFA: Chame a função passando os argumentos na ordem exata exigida pelo contrato:
// A sua solução aqui: