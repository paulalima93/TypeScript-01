// ---------------------------------------------------------------
// Aula 03 – Arrays, Tuplas e Enums
// ---------------------------------------------------------------

// 📚 CONCEITO 1: Arrays Homogêneos e Readonly
// ---------------------------------------------------------------
// No JS, uma lista pode misturar textos, números e objetos. No TS, 
// nós travamos o tipo da lista para evitar bugs em laços de repetição (for/map).
// Em dados críticos, usamos `ReadonlyArray` para impedir alterações acidentais.

const emailsDeAdmin: string[] = ["paula@empresa.com", "carlos@empresa.com"];
// emailsDeAdmin.push(123); // ❌ ERRO: Só aceita texto!

// Lista protegida: Não possui .push() ou .pop()
const portasBloqueadas: ReadonlyArray<number> = [21, 23, 445];


// 📚 CONCEITO 2: Tuplas (O Array Estruturado)
// ---------------------------------------------------------------
// Uma Tupla é um array com tamanho e tipos fixos por posição. 
// É extremamente útil em retornos de banco de dados ou requisições HTTP.

// Contrato: O índice 0 é SEMPRE o Status Code (number) e o índice 1 é a Mensagem (string)
let respostaDaAPI: [number, string];
respostaDaAPI = [200, "Sucesso: Dados carregados."];
// respostaDaAPI = ["Erro", 404]; // ❌ ERRO: Ordem e tipos invertidos!


// 📚 CONCEITO 3: Enums (Matando as "Strings Mágicas")
// ---------------------------------------------------------------
// Em regras de negócio, digitar textos soltos (ex: "PENDENTE", "Pendente") 
// gera bugs silenciosos no banco. O Enum cria um dicionário imutável.

enum StatusDoPedido {
    AGUARDANDO_PAGAMENTO = "AGUARDANDO",
    EM_PROCESSAMENTO = "PROCESSANDO",
    ENVIADO = "ENVIADO",
    ENTREGUE = "ENTREGUE"
}

// O VS Code agora sugere as opções se você digitar "StatusDoPedido."
let statusDaCompraAtual: StatusDoPedido = StatusDoPedido.EM_PROCESSAMENTO;


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Sinalização de Tráfego HTTP"
// ---------------------------------------------------------------

// TAREFA: Crie uma Tupla chamada `logDeErro` que receba, estritamente nesta ordem:
// 1. Um código de erro numérico (ex: 500)
// 2. O IP de origem em formato de texto (ex: "192.168.0.1")
// 3. Um booleano indicando se o alerta foi resolvido (ex: false)

// A sua solução aqui: