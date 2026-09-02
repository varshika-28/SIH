def calculate_revenue(units_sold: float, selling_price: float) -> float:
    return units_sold * selling_price

def calculate_operating_cost(fixed_costs: float, variable_costs: float) -> float:
    return fixed_costs + variable_costs

def calculate_profit(revenue: float, operating_cost: float) -> float:
    return revenue - operating_cost

def calculate_funding_gap(startup_cost: float, initial_operating_cost: float, available_capital: float) -> float:
    total_required = startup_cost + initial_operating_cost
    gap = total_required - available_capital
    return gap if gap > 0 else 0.0

def calculate_break_even_units(fixed_costs: float, selling_price: float, variable_cost_per_unit: float) -> float:
    if selling_price <= variable_cost_per_unit:
        return float('inf') # Will never break even
    return fixed_costs / (selling_price - variable_cost_per_unit)

def calculate_emi(principal: float, annual_interest_rate: float, tenure_months: int) -> float:
    if principal <= 0 or tenure_months <= 0:
        return 0.0
    if annual_interest_rate == 0:
        return principal / tenure_months
    
    r = (annual_interest_rate / 100.0) / 12.0
    emi = (principal * r * ((1 + r) ** tenure_months)) / (((1 + r) ** tenure_months) - 1)
    return emi

def calculate_cash_flow(opening_balance: float, revenue: float, expenses: float, emi: float = 0.0) -> float:
    return opening_balance + revenue - expenses - emi
