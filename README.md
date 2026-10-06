# Sri Kala Bhairava Holidays

Modern travel agency platform rebuilt from the original prototype and the approved reference architecture.

## Stack

- Next.js 16.3.8
- React 19.3
- TypeScript 7
- Tailwind CSS 4.3
- GSAP 3.15 + ScrollTrigger
- Lucide React
- FastAPI 0.142.2
- SQLAlchemy 2 + asyncpg
- PostgreSQL / Neon
- Vercel

## Frontend

The customer experience uses real Next.js routes, not anchor scrolling:

Home, Destinations, Destination detail, Tours, Tour detail, Packages, About, Blog, Blog detail, Contact, Quote, Booking and Admin.

The homepage follows the supplied reference composition: top info bar, two-row navigation, scenic hero, overlapping trip search, trust row, destination cards, split feature section, promotion banner, newsletter and dark footer.

GSAP adds:
- hero image reveal
- title word-by-word story reveal
- scroll-triggered section reveals
- parallax imagery
- card tilt
- magnetic CTA interactions
- animated counters
- reduced-motion support

Images are served from high-resolution Unsplash sources with Next Image optimization and no blur filters.

## Backend

services/api/main.py is a FastAPI service with lead and booking endpoints, PostgreSQL models and CORS configuration.

Set DATABASE_URL to a Neon connection string and NEXT_PUBLIC_API_URL in the web app.

## Database

db/schema.sql contains the starting PostgreSQL schema for leads, bookings, customers, destinations, packages, notifications and audit logs.

## Local development

Frontend:
cd apps/web
npm install
npm run dev

Backend:
cd services/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

## Deployment

Vercel should use apps/web as the project root directory.

The FastAPI service can be deployed as a separate Python service using the included Dockerfile.

## Client

Sri Kala Bhairava Holidays
Hosamane, Bhadravathi, Karnataka 577301
13.8409, 75.7037
5.0 Google rating, 12 reviews
