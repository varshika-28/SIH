from fastapi import APIRouter
from pydantic import BaseModel
from engines.finance_engine import (
    calculate_funding_gap, calculate_revenue, 
    calculate_operating_cost, calculate_profit, calculate_break_even_units
)
from engines.risk_engine import assess_financial_risk, generate_recommendation

router = APIRouter(prefix="/api/feasibility", tags=["feasibility"])

class FeasibilityRequest(BaseModel):
    available_capital: float
    startup_cost: float
    fixed_costs: float
    variable_costs: float
    selling_price: float
    expected_units_sold: float
    emi_burden_ratio: float = 0.0
    data_confidence: str = "Medium"

@router.post("/")
def evaluate_feasibility(req: FeasibilityRequest):
    initial_op_cost = req.fixed_costs + req.variable_costs
    funding_gap = calculate_funding_gap(req.startup_cost, initial_op_cost, req.available_capital)
    
    revenue = calculate_revenue(req.expected_units_sold, req.selling_price)
    operating_cost = calculate_operating_cost(req.fixed_costs, req.variable_costs)
    profit = calculate_profit(revenue, operating_cost)
    
    if req.expected_units_sold > 0:
        break_even = calculate_break_even_units(req.fixed_costs, req.selling_price, req.variable_costs / req.expected_units_sold)
    else:
        break_even = float('inf')
        
    break_even_months = break_even / req.expected_units_sold if req.expected_units_sold > 0 else float('inf')
    
    risk_level = assess_financial_risk(funding_gap, break_even_months, req.emi_burden_ratio)
    recommendation = generate_recommendation(risk_level, req.data_confidence)
    
    return {
        "financials": {
            "funding_gap": funding_gap,
            "expected_revenue": revenue,
            "operating_cost": operating_cost,
            "expected_profit": profit,
            "break_even_months": break_even_months
        },
        "risk_level": risk_level.value,
        "recommendation": recommendation
    }
