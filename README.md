# Custo Certo — Layout de loja virtual

Esta versão foi refeita do zero. Ela funciona como uma vitrine de comércio eletrônico e comparação de preços.

## Principais recursos

- Layout completo de loja virtual
- Três opções de visual no botão **Trocar visual**
  - Clássico
  - Marketplace
  - Premium
- Busca geral de produtos
- Sugestões automáticas
- Menu de categorias
- Filtros de categoria, marca, loja, preço, frete e desconto
- Ordenação
- Favoritos
- Vistos recentemente
- Grade e lista
- Links diretos de compra
- Compatibilidade com links de afiliado
- Integração com Supabase
- Catálogo demonstrativo com 20 produtos
- Layout adaptado para celular

## Publicação no GitHub Pages

1. Extraia o ZIP.
2. Abra o repositório `custocerto`.
3. Use **Add file → Upload files**.
4. Envie tudo, inclusive a pasta `assets`.
5. Marque para substituir os arquivos com o mesmo nome.
6. Clique em **Commit changes**.
7. Aguarde alguns minutos.
8. Abra o site e pressione `Ctrl + F5`.

## Supabase

No Supabase, abra **SQL Editor**, cole `supabase_setup.sql` e execute.

Enquanto a tabela estiver vazia, o site exibirá 20 produtos demonstrativos.

Para cadastrar uma oferta real, adicione uma linha na tabela `offers` e preencha:

- name
- brand
- category
- store
- price
- old_price
- shipping_text
- installments
- image_url
- product_url
- affiliate_url
- rating
- reviews

No campo `affiliate_url`, use seu link de afiliado do Mercado Livre ou Shopee.

## Importante

O GitHub Pages publica apenas o que está dentro do repositório. A pasta `assets` precisa ser enviada junto, senão as imagens não aparecerão.
