# Custo Certo

Site estático pronto para GitHub Pages.

1. Apague todos os arquivos antigos do repositório.
2. Envie todos os arquivos deste ZIP para a raiz.
3. Em Settings > Pages, selecione GitHub Actions.
4. Aguarde “Publicar Custo Certo” ficar verde.
5. Abra o site e pressione Ctrl + F5.

Não usa React, Vite, npm ou Node.

## Atualização automática de preços

O workflow `.github/workflows/atualizar-precos.yml` executa a cada 6 horas e também pode ser iniciado manualmente em **Actions > Atualizar preços do Mercado Livre > Run workflow**.

Secrets necessários:

- `ML_CLIENT_ID`
- `ML_CLIENT_SECRET`

Os resultados são gravados em `data/ofertas.json` e o histórico em `data/historico.json`.

Observação: a criação da aplicação no Mercado Livre não transforma automaticamente os links comuns em links de afiliado. A conversão de links deve continuar sendo feita pelas ferramentas oficiais do programa de afiliados enquanto não houver uma integração específica liberada para a conta.
