// ---------------------------------------------------------------
// Aula 04 – Union Types, Type Aliases e Unknown
// ---------------------------------------------------------------

// 📚 CONCEITO 1: Union Types (Flexibilidade Controlada)
// ---------------------------------------------------------------
// No backend, é comum uma variável aceitar legitimamente mais de um tipo.
// Usamos o operador Pipe `|` para dizer "pode ser X OU Y".

let identificadorCliente: number | string;
identificadorCliente = 1059;         // ✅ Válido (Sistema Legado)
identificadorCliente = "abc-1234";   // ✅ Válido (Sistema Novo UUID)


// 📚 CONCEITO 2: Type Aliases (Criando os nossos próprios tipos)
// ---------------------------------------------------------------
// Para não ficar repetindo `number | string` pelo código inteiro, 
// podemos criar um "Apelido" (Alias) para esse tipo personalizado.

type IdBancoDeDados = number | string;
type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE";

function realizarRequisicao(url: string, metodo: MetodoHTTP) {
    console.log(`Fazendo um ${metodo} para ${url}`);
}
// realizarRequisicao("/api/users", "UPDATE"); // ❌ ERRO: "UPDATE" não existe no Type!


// 📚 CONCEITO 3: O Escudo do 'unknown'
// ---------------------------------------------------------------
// Ao consumir APIs externas, não sabemos o que vai chegar. Se usarmos `any`, 
// o TS "desliga" a segurança. Se usarmos `unknown`, o TS obriga a verificar 
// o tipo antes de deixar fazer qualquer operação (Type Guard).

let payloadDoWebhook: unknown = "pagamento_aprovado";

// payloadDoWebhook.toUpperCase(); // ❌ ERRO: O TS diz "Pode não ser texto!"

if (typeof payloadDoWebhook === "string") {
    // Aqui dentro, o TS garante que é texto e libera as funções de string!
    console.log(payloadDoWebhook.toUpperCase());
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "O Inspetor de APIs"
// ---------------------------------------------------------------
// TAREFA: Crie um Type Alias chamado `StatusAcesso` que só aceite os 
// textos "PERMITIDO", "NEGADO" ou "EM_ANALISE". Depois crie uma variável 
// usando esse tipo.

// A sua solução aqui: