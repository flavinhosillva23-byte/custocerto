# GUIA ÚNICO — USE SOMENTE ESTE PACOTE

Você informou que ainda não aplicou as últimas mudanças. Portanto, ignore os ZIPs anteriores e use apenas este.

## O que este pacote reúne

- Layout público de ofertas
- Imagens locais como reserva
- Links específicos de produto
- Links de afiliado
- Cupons por loja
- Copiar cupom
- Atualização do site a cada 30 segundos
- Botão Atualizar agora
- Supabase
- Importador de datafeed da Shopee
- Registro de execuções do importador
- Arquivo para agendamento automático

## Parte 1 — Atualizar o GitHub

Envie para a raiz do repositório:

- index.html
- styles.css
- app.js
- config.js
- pasta assets

Depois aguarde a publicação e pressione Ctrl + F5.

## Parte 2 — Preparar o Supabase

Abra SQL Editor, cole todo o conteúdo de `supabase_setup.sql` e execute.

## Parte 3 — Conseguir o datafeed da Shopee

Entre no painel de Afiliados Shopee e procure por Datafeed, Feed de produtos ou ferramenta semelhante.

Você precisará copiar o link de download gerado para sua conta. Ele costuma ser um endereço longo e pode ser temporário ou específico do afiliado.

Não coloque esse link em `config.js` ou no GitHub.

## Parte 4 — Publicar a Edge Function

A função está em:

supabase/functions/refresh-offers/index.ts

Ela lê CSV, tenta reconhecer os nomes mais comuns das colunas e salva os produtos na tabela `offers`.

A função precisa destes segredos:

- SHOPEE_DATAFEED_URL
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

A chave service_role fica somente nos segredos da Edge Function. Nunca coloque essa chave no site ou no GitHub.

## Parte 5 — Frequência

O site consulta o banco a cada 30 segundos.

O importador da Shopee deve rodar a cada 10 minutos inicialmente. Use `schedule_refresh.sql` depois de publicar a função.

Não recomendo baixar o datafeed inteiro a cada 30 segundos. Isso gera tráfego desnecessário e pode ultrapassar limites.

## O que falta para a importação ficar realmente ativa

Você precisa me mostrar a tela do painel de afiliados da Shopee onde aparece o Datafeed ou enviar apenas os nomes das colunas do arquivo.

Não envie senhas, service_role ou chaves secretas.
