# Custo Certo v5 estável

Esta versão corrige os dois problemas principais:

1. As imagens não dependem mais da pasta assets. Cada categoria possui uma imagem interna de reserva.
2. Produtos demonstrativos nunca abrem a página inicial da loja. Eles abrem uma busca específica pelo produto.
3. Ofertas reais usam o campo affiliate_url ou product_url exato.
4. A busca aceita qualquer texto e inclui móveis, colchões, ferramentas, automotivo, beleza, bebê, esportes e outros.
5. Inclui admin.html para cadastrar ofertas reais.

## Publicar

Envie para a raiz do GitHub:

index.html
styles.css
app.js
config.js
admin.html
admin.js

Execute supabase_setup.sql no Supabase.

## Limitação real

Sem API, feed ou cadastro, o site não consegue inventar links exatos de produtos. Por isso, os itens de exemplo levam a uma busca específica na loja e aparecem marcados como Exemplo.

Quando uma oferta real for cadastrada no Supabase, o botão muda para Ver produto e abre o link exato.
