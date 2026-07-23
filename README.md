# Custo Certo 4.0

Reconstrução em React, Vite, Tailwind CSS e estrutura pronta para Supabase.

## Recursos

- Visual claro e responsivo
- Pesquisa por marca e modelo
- Catálogo com filtros
- Página individual de cada TV
- Nota Custo Certo
- Histórico de preços
- Comparação de até quatro modelos
- Mostrar somente diferenças
- Resumo automático da comparação
- GitHub Actions para publicar no GitHub Pages
- HashRouter para evitar erro 404 nas páginas

## Testar no computador

Instale Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Publicar no GitHub Pages

1. Faça backup do repositório atual.
2. Apague os arquivos antigos.
3. Envie todos os arquivos deste projeto para a raiz do repositório `custocerto`.
4. Abra **Settings > Pages**.
5. Em **Source**, selecione **GitHub Actions**.
6. Faça um novo commit.
7. Abra a aba **Actions** e aguarde o processo terminar.

O site deverá continuar em:

`https://flavinhosillva23-byte.github.io/custocerto/`

## Supabase

Copie `.env.example` para `.env` e informe sua URL e chave pública.

Os produtos continuam em `src/data/products.json` como fallback. A próxima etapa é substituir essa leitura por consultas ao Supabase.

## Dados demonstrativos

Preços, notas, brilho e especificações deste protótipo são demonstrativos e precisam ser revisados antes de uso comercial.
