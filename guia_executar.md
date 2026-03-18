# 🚀 Como Executar TypeScript Direto no Terminal

No ambiente de desenvolvimento corporativo, não perdemos tempo compilando o projeto inteiro a cada pequena alteração. Usamos ferramentas que leem o arquivo `.ts` e o executam diretamente na memória, como se fosse um arquivo de script normal.

A ferramenta padrão e mais moderna hoje para isso chama-se **`tsx`**.

## Passo 1: Instalar a Dependência

Abra o terminal na raiz do seu projeto (onde está o seu `package.json` e `tsconfig.json`) e rode o comando abaixo. Ele vai instalar a ferramenta apenas como dependência de desenvolvimento:

```bash
npm install tsx --save-dev
```

## Passo 2: Executar qualquer arquivo `.ts`

A partir de agora, você não precisa mais usar o comando `node` ou ficar caçando arquivos na pasta `dist`.

Para rodar qualquer arquivo da sua pasta `src` e ver o resultado no console na mesma hora, basta usar o `npx tsx` seguido do caminho do arquivo:

```bash
npx tsx src/03.ts
```

```bash
npx tsx src/e04.ts
```

O `tsx` vai automaticamente ler as regras rígidas do seu `tsconfig.json`, checar o código e rodar a resposta no seu terminal em milissegundos.

---

## 💡 Dica de Ouro (Criando um Atalho no package.json)

Para não ter que digitar `npx tsx ...` toda hora, os desenvolvedores criam atalhos chamados **Scripts**.

1. Abra o seu `package.json`.
2. Encontre a área `"scripts"`.
3. Adicione o comando de desenvolvimento lá. Ficará parecido com isso:

```json
  "scripts": {
    "dev": "tsx"
  }
```

Agora, no seu terminal, se você quiser rodar um arquivo de exercício, basta digitar:

```bash
npm run dev src/e05.ts
```

É mais limpo, rápido e é exatamente assim que as APIs em Node.js sobem nos servidores de teste das empresas!