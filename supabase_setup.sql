create extension if not exists pgcrypto;
create table if not exists public.offers(
id uuid primary key default gen_random_uuid(),external_id text,source text not null default 'manual',
name text not null,brand text,category text not null default 'Outros',store text not null,
price numeric(12,2) not null,old_price numeric(12,2),shipping_text text,installments text,
image_url text,product_url text not null,affiliate_url text not null,is_verified boolean default true,
active boolean default true,updated_at timestamptz default now(),created_at timestamptz default now());
create or replace view public.offers_public as select * from public.offers where active=true;
alter table public.offers enable row level security;
drop policy if exists "public read" on public.offers;
create policy "public read" on public.offers for select to anon,authenticated using(active=true);
drop policy if exists "public insert" on public.offers;
create policy "public insert" on public.offers for insert to anon,authenticated with check(true);
grant select on public.offers_public to anon,authenticated;
grant insert on public.offers to anon,authenticated;