import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function FeasibilityDashboard() {
  const mockData = {
    financials: {
      expected_revenue: 150000,
      operating_cost: 80000,
      expected_profit: 70000,
      funding_gap: 0,
      break_even_months: 6.5
    },
    risk_level: "Medium",
    recommendation: {
      tier: "Proceed with Pilot",
      reason: "Uncertainty is significant. Validation is needed before full-scale investment.",
      next_action: "Test with a smaller pilot budget for 30-60 days."
    }
  }

  const chartData = [
    {
      name: 'Financials',
      Revenue: mockData.financials.expected_revenue,
      Cost: mockData.financials.operating_cost,
      Profit: mockData.financials.expected_profit,
    }
  ]

  const tierColors = {
    "Proceed": "bg-green-100 text-green-800 border-green-300",
    "Proceed with Pilot": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Modify Business Plan": "bg-orange-100 text-orange-800 border-orange-300",
    "High Risk / Do Not Invest Yet": "bg-red-100 text-red-800 border-red-300",
  }

  const recColor = tierColors[mockData.recommendation.tier] || "bg-gray-100 text-gray-800 border-gray-300"

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Feasibility Dashboard</h2>
      
      {/* Recommendation Banner */}
      <div className={`p-6 rounded-xl border-l-4 ${recColor}`}>
        <h3 className="text-lg font-bold mb-2">Recommendation: {mockData.recommendation.tier}</h3>
        <p className="mb-1"><strong>Reason:</strong> {mockData.recommendation.reason}</p>
        <p><strong>Next Action:</strong> {mockData.recommendation.next_action}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Expected Profit</p>
            <p className="text-2xl font-bold text-green-600">₹{mockData.financials.expected_profit.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Funding Gap</p>
            <p className="text-2xl font-bold text-red-600">₹{mockData.financials.funding_gap.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Break-even</p>
            <p className="text-2xl font-bold text-blue-600">{mockData.financials.break_even_months} Months</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Risk Level</p>
            <p className="text-2xl font-bold text-yellow-600">{mockData.risk_level}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-64">
          <h4 className="text-sm font-semibold text-gray-600 mb-4">Cost vs Revenue vs Profit</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#22c55e" />
              <Bar dataKey="Cost" fill="#ef4444" />
              <Bar dataKey="Profit" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
