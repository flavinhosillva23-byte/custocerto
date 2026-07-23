-- Execute APENAS depois de publicar a Edge Function refresh-offers.
-- Substitua SEU_PROJECT_REF e SEU_ANON_KEY.

select cron.schedule(
  'refresh-shopee-feed-every-10-minutes',
  '*/10 * * * *',
  $$
  select net.http_post(
    url := 'https://SEU_PROJECT_REF.supabase.co/functions/v1/refresh-offers',
    headers := jsonb_build_object(
      'Content-Type','application/json',
      'Authorization','Bearer SEU_ANON_KEY'
    ),
    body := '{}'::jsonb
  );
  $$
);
