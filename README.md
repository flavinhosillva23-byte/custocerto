# Custo Certo v2

Site público de comparação de ofertas com busca geral e links diretos de compra.

## O que já funciona

- Pesquisa de qualquer produto cadastrado
- Sugestões conforme nome, marca e categoria
- Categorias e filtros
- Ordenação por preço
- Links diretos de compra
- Compatibilidade com links de afiliado
- Registro de cliques no Supabase
- Layout responsivo para celular
- Produtos demonstrativos quando o banco estiver vazio

## Instalação no Supabase

1. Abra o projeto do Supabase.
2. Entre em **SQL Editor**.
3. Clique em **New query**.
4. Cole o conteúdo de `supabase_setup.sql`.
5. Clique em **Run**.
6. Vá em **Table Editor → offers**.
7. Edite ou adicione produtos.
8. No campo `affiliate_url`, coloque seu link de afiliado daquele produto.

## Como usar seus links de afiliado

### Mercado Livre

Gere o link no Portal do Afiliado. Cadastre o site Custo Certo entre seus canais permitidos. Depois copie o link gerado e cole em `affiliate_url`.

### Shopee

Use **Plataforma de Afiliados → Conta → Link de Conversão**. Converta o link do produto e cole o resultado em `affiliate_url`.

O site abre `affiliate_url` primeiro. O campo `product_url` fica como referência do link normal.

## Publicar no GitHub Pages

Substitua os arquivos atuais do repositório pelos arquivos desta pasta:

- `index.html`
- `styles.css`
- `app.js`
- `config.js`

O arquivo SQL não precisa ser enviado ao GitHub, mas pode ficar no repositório para documentação.

## Atenção

A versão atual pesquisa os produtos que você cadastrou na tabela `offers`. Para importar preços automaticamente e atualizar milhares de produtos, será necessária uma integração autorizada com APIs, feeds de afiliados ou uma Edge Function no Supabase.

Não coloque secret key ou service_role no GitHub. A chave publishable presente em `config.js` é destinada ao navegador.
