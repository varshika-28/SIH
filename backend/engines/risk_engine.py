from enum import Enum
from typing import Dict, Any

class RiskLevel(Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

class RecommendationTier(Enum):
    PROCEED = "Proceed"
    PILOT = "Proceed with Pilot"
    MODIFY = "Modify Business Plan"
    HIGH_RISK = "High Risk / Do Not Invest Yet"

def assess_financial_risk(funding_gap: float, break_even_months: float, emi_burden_ratio: float) -> RiskLevel:
    if funding_gap > 0 or break_even_months > 24 or emi_burden_ratio > 0.4:
        return RiskLevel.HIGH
    if break_even_months > 12 or emi_burden_ratio > 0.2:
        return RiskLevel.MEDIUM
    return RiskLevel.LOW

def generate_recommendation(financial_risk: RiskLevel, data_confidence: str) -> Dict[str, Any]:
    # Simplified rule-based engine logic as per PRD Section 10
    if financial_risk == RiskLevel.HIGH:
        return {
            "tier": RecommendationTier.HIGH_RISK.value,
            "reason": "Financial stress is high (large funding gap or distant break-even).",
            "next_action": "Re-evaluate capital requirements or reduce initial scale."
        }
    
    if data_confidence == "Low" or financial_risk == RiskLevel.MEDIUM:
        return {
            "tier": RecommendationTier.PILOT.value,
            "reason": "Uncertainty is significant. Validation is needed before full-scale investment.",
            "next_action": "Test with a smaller pilot budget for 30-60 days."
        }
    
    return {
        "tier": RecommendationTier.PROCEED.value,
        "reason": "Financial feasibility is acceptable and data confidence is sufficient.",
        "next_action": "Proceed with the investment plan while monitoring actuals."
    }
