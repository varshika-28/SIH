from sqlalchemy import Column, Integer, String, Float, ForeignKey, JSON
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location_id = Column(Integer, ForeignKey("locations.location_id"))
    language = Column(String)
    available_capital = Column(Float)
    experience = Column(String)

    financial_plans = relationship("FinancialPlan", back_populates="user")
    recommendations = relationship("Recommendation", back_populates="user")

class Business(Base):
    __tablename__ = "businesses"

    business_id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String, index=True)
    category = Column(String, index=True)
    startup_cost = Column(Float)
    operating_cost = Column(Float)
    expected_revenue = Column(Float)

    financial_plans = relationship("FinancialPlan", back_populates="business")
    recommendations = relationship("Recommendation", back_populates="business")

class Location(Base):
    __tablename__ = "locations"

    location_id = Column(Integer, primary_key=True, index=True)
    state = Column(String, index=True)
    district = Column(String, index=True)
    block = Column(String)
    village = Column(String)
    population = Column(Integer)
    market_indicators = Column(JSON)

class FinancialPlan(Base):
    __tablename__ = "financial_plans"

    plan_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    business_id = Column(Integer, ForeignKey("businesses.business_id"))
    investment = Column(Float)
    loan = Column(Float)
    revenue = Column(Float)
    expenses = Column(Float)
    profit = Column(Float)
    break_even = Column(Float)

    user = relationship("User", back_populates="financial_plans")
    business = relationship("Business", back_populates="financial_plans")

class Recommendation(Base):
    __tablename__ = "recommendations"

    recommendation_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    business_id = Column(Integer, ForeignKey("businesses.business_id"))
    feasibility_score = Column(String)
    risk_level = Column(String)
    confidence = Column(String)
    recommendation = Column(String)

    user = relationship("User", back_populates="recommendations")
    business = relationship("Business", back_populates="recommendations")
