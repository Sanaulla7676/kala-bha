create table if not exists leads (
  id bigserial primary key,
  name varchar(160) not null,
  phone varchar(40) not null,
  email varchar(160),
  destination varchar(160),
  travel_dates varchar(160),
  travellers varchar(40),
  message text,
  status varchar(40) not null default 'new',
  assigned_agent varchar(160),
  created_at timestamptz not null default now()
);
create index if not exists leads_created_at_idx on leads(created_at desc);
create index if not exists leads_status_idx on leads(status);

create table if not exists bookings (
  id bigserial primary key,
  name varchar(160) not null,
  phone varchar(40) not null,
  trip varchar(160),
  travel_date varchar(40),
  travellers varchar(40),
  vehicle varchar(120),
  notes text,
  status varchar(40) not null default 'pending',
  payment_status varchar(40) not null default 'unpaid',
  created_at timestamptz not null default now()
);
create index if not exists bookings_created_at_idx on bookings(created_at desc);
create index if not exists bookings_status_idx on bookings(status);

create table if not exists customers (
  id bigserial primary key,
  name varchar(160) not null,
  phone varchar(40) unique not null,
  email varchar(160),
  created_at timestamptz not null default now()
);

create table if not exists destinations (
  id bigserial primary key,
  slug varchar(180) unique not null,
  name varchar(180) not null,
  description text,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists packages (
  id bigserial primary key,
  slug varchar(180) unique not null,
  name varchar(180) not null,
  description text,
  duration varchar(80),
  starting_price numeric(12,2),
  image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists notifications (
  id bigserial primary key,
  customer_id bigint references customers(id) on delete set null,
  channel varchar(30) not null,
  template_key varchar(120) not null,
  status varchar(40) not null default 'pending',
  scheduled_at timestamptz,
  sent_at timestamptz
);

create table if not exists audit_logs (
  id bigserial primary key,
  actor_id bigint,
  action varchar(120) not null,
  entity_type varchar(80),
  entity_id bigint,
  metadata jsonb,
  created_at timestamptz not null default now()
);