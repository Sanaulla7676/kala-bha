from contextlib import asynccontextmanager
from datetime import datetime, timezone
import os
from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from sqlalchemy import DateTime, Integer, String, Text, func
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

DATABASE_URL = os.getenv("DATABASE_URL", "")
engine = create_async_engine(DATABASE_URL, pool_pre_ping=True) if DATABASE_URL else None
SessionLocal = async_sessionmaker(engine, expire_on_commit=False) if engine else None

class Base(DeclarativeBase):
    pass

class Lead(Base):
    __tablename__ = "leads"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(160))
    phone: Mapped[str] = mapped_column(String(40))
    email: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    destination: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    travel_dates: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    travellers: Mapped[Optional[str]] = mapped_column(String(40), nullable=True)
    message: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(40), default="new")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

class Booking(Base):
    __tablename__ = "bookings"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(160))
    phone: Mapped[str] = mapped_column(String(40))
    trip: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    travel_date: Mapped[Optional[str]] = mapped_column(String(40), nullable=True)
    travellers: Mapped[Optional[str]] = mapped_column(String(40), nullable=True)
    vehicle: Mapped[Optional[str]] = mapped_column(String(120), nullable=True)
    notes: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(40), default="pending")
    payment_status: Mapped[str] = mapped_column(String(40), default="unpaid")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

class LeadIn(BaseModel):
    name: str = Field(min_length=1, max_length=160)
    phone: str = Field(min_length=3, max_length=40)
    email: Optional[str] = None
    destination: Optional[str] = None
    travel_dates: Optional[str] = None
    travellers: Optional[str] = None
    message: Optional[str] = None

class BookingIn(BaseModel):
    name: str = Field(min_length=1, max_length=160)
    phone: str = Field(min_length=3, max_length=40)
    trip: Optional[str] = None
    travel_date: Optional[str] = None
    travellers: Optional[str] = None
    vehicle: Optional[str] = None
    notes: Optional[str] = None

@asynccontextmanager
async def lifespan(_: FastAPI):
    if engine:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(title="Sri Kala Bhairava Holidays API", version="2.1.0", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

@app.get("/health")
async def health():
    return {"status": "ok", "service": "skbh-api", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.post("/leads")
async def create_lead(payload: LeadIn):
    if not SessionLocal:
        return {"stored": False, "message": "DATABASE_URL is not configured", "data": payload.model_dump()}
    async with SessionLocal() as session:
        row = Lead(**payload.model_dump())
        session.add(row)
        await session.commit()
        await session.refresh(row)
        return {"stored": True, "id": row.id}

@app.post("/bookings")
async def create_booking(payload: BookingIn):
    if not SessionLocal:
        return {"stored": False, "message": "DATABASE_URL is not configured", "data": payload.model_dump()}
    async with SessionLocal() as session:
        row = Booking(**payload.model_dump())
        session.add(row)
        await session.commit()
        await session.refresh(row)
        return {"stored": True, "id": row.id}