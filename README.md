# Preço Certo

Site simples para acompanhar promoções de produtos em lojas verificadas.

## Como abrir

1. Extraia o arquivo ZIP.
2. Abra o arquivo `index.html` no navegador.
3. Os produtos cadastrados ficam salvos no próprio navegador usando `localStorage`.

## O que já funciona

- Adicionar produtos.
- Definir preço máximo.
- Informar marcas e palavras-chave.
- Registrar preços encontrados em lojas verificadas.
- Filtrar por produto, categoria e situação.
- Identificar automaticamente quando uma oferta está dentro da meta.
- Adicionar outros produtos quando quiser.
- Layout responsivo para celular e computador.

## Limitação desta versão

A consulta de preços ainda é manual. Para buscar preços reais automaticamente, é necessário publicar o site com um backend e integrar APIs oficiais, feeds de afiliados ou um serviço autorizado de comparação de preços.

Evite fazer scraping direto de lojas sem conferir os termos de uso. APIs oficiais ou programas de afiliados são a opção mais segura.

## Próximo passo técnico sugerido

- Frontend: esta interface ou React/Next.js.
- Banco de dados: Supabase ou Firebase.
- Backend: funções agendadas para consultar APIs.
- Login: conta administrativa.
- Alertas: e-mail, WhatsApp ou Telegram.
