// ---------------------------------------------------------------
// Aula 05 – Interfaces e Objetos (Contratos de Dados)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: O Problema dos Objetos Soltos
// ---------------------------------------------------------------
// Passar objetos gigantes em funções deixa o código ilegível e difícil de dar manutenção.

// ❌ Ruim: A assinatura da função fica poluída.
function salvarUsuario(usuario: { nome: string, email: string, idade: number }) {
    console.log(`Salvando ${usuario.nome}`);
}


// 📚 CONCEITO 2: A Elegância das Interfaces
// ---------------------------------------------------------------
// A Interface é o contrato arquitetural da sua aplicação. Ela define a "forma" 
// exata que um objeto deve ter. É muito usada para tipar retornos de APIs (DTOs) 
// e modelos de Banco de Dados.

interface UsuarioDB {
    nome: string;
    email: string;
    idade: number;
}

// ✅ Profissional: O código fica limpo e reutilizável.
function cadastrarNovoUsuario(usuario: UsuarioDB) {
    console.log(`Usuário ${usuario.nome} cadastrado com sucesso.`);
}


// 📚 CONCEITO 3: Propriedades Opcionais e Somente Leitura
// ---------------------------------------------------------------
// Podemos usar o `?` para campos não obrigatórios e o `readonly` para 
// blindar IDs que nunca devem ser alterados após a criação do objeto.

interface Produto {
    readonly id: string;  // Ninguém pode alterar o ID depois de criado
    nome: string;
    preco: number;
    emEstoque?: boolean;  // Opcional (Pode existir ou ser undefined)
}

const notebook: Produto = {
    id: "prod-999",
    nome: "Notebook Pro",
    preco: 5000
};

// notebook.id = "prod-000"; // ❌ ERRO: Propriedade apenas de leitura!


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Arquiteto de Banco de Dados"
// ---------------------------------------------------------------
// TAREFA: Crie uma Interface chamada `ContaBancaria`. Ela deve ter:
// 1. Uma propriedade `numeroAgencia` (somente leitura e string).
// 2. Uma propriedade `saldo` (number).
// 3. Uma propriedade `limiteCredito` (number e opcional).

// A sua solução aqui: