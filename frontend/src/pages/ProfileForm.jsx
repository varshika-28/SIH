import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export default function ProfileForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const totalSteps = 4
  
  const [formData, setFormData] = useState({
    // Step 1: Basics
    name: '',
    age: '',
    // Step 2: Business & Location
    businessType: '',
    locationState: '',
    locationDistrict: '',
    locationVillage: '',
    // Step 3: Financials
    availableCapital: '',
    totalInvestment: '',
    needsLoan: 'No',
    loanAmount: '',
    expectedRevenue: '',
    expectedExpenses: '',
    investmentApproach: 'Invest full amount immediately',
    // Step 4: Market & Strategy
    targetCustomers: '',
    competitors: '',
    risks: ''
  })
  
  const [conclusion, setConclusion] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }
  
  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple logic to determine if they can proceed based on their answers
    const available = parseInt(formData.availableCapital) || 0
    const totalRequired = parseInt(formData.totalInvestment) || 0
    const revenue = parseInt(formData.expectedRevenue) || 0
    const expenses = parseInt(formData.expectedExpenses) || 0
    
    let canProceed = false
    let message = ""
    
    // Simple mock logic: if they have at least 20% of required capital, or if revenue > expenses
    if (available >= (totalRequired * 0.2) && revenue > expenses) {
      canProceed = true
      message = `Great plan, ${formData.name}! Your expected revenue exceeds expenses, and you have sufficient initial capital to leverage a loan for the remaining amount. We highly recommend starting a pilot phase as you suggested.`
    } else if (revenue <= expenses) {
       canProceed = false
       message = "Your expected monthly expenses currently exceed your projected revenue. We recommend revising your business model to lower operating costs before proceeding."
    } else {
      canProceed = false
      message = "Your available capital might be too low to secure the required loan for the total investment. We recommend exploring government micro-schemes or starting with a smaller pilot."
    }

    const finalConclusion = { canProceed, message }
    setConclusion(finalConclusion)
    
    // Save to localStorage for the PDF download
    localStorage.setItem('graminveda_assessment', JSON.stringify({
      ...formData,
      conclusion: finalConclusion
    }))

    setStep(5) // Step 5 is conclusion
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-sm rounded-3xl p-10 border border-[var(--border)] relative overflow-hidden">
      
      {/* Progress Bar */}
      {step < 5 && (
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
          <div 
            className="h-full bg-[var(--color-gv-green-dark)] transition-all duration-300 ease-in-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-2 text-[var(--color-gv-text)]">Comprehensive Assessment</h2>
      {step < 5 && (
        <p className="text-[var(--color-gv-text-light)] mb-8 font-medium">Step {step} of {totalSteps}</p>
      )}
      
      {/* Step 1: Basics */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="e.g. Ramesh Kumar"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">Age</label>
              <input 
                type="number" 
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="e.g. 35"
              />
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <button type="submit" className="bg-[var(--color-gv-brown-dark)] hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2">
              Next <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Business & Location */}
      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">1. What business do you want to start?</label>
            <input 
              type="text" 
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
              placeholder="e.g. Poultry Farm, Tailoring Shop"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">2. Where do you plan to start this business?</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                name="locationState"
                required
                value={formData.locationState}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="State"
              />
              <input 
                type="text" 
                name="locationDistrict"
                required
                value={formData.locationDistrict}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="District"
              />
              <input 
                type="text" 
                name="locationVillage"
                required
                value={formData.locationVillage}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="Block / Village"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <button type="button" onClick={handleBack} className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-gray-200">
              <ArrowLeft size={18} /> Back
            </button>
            <button type="submit" className="bg-[var(--color-gv-brown-dark)] hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-xl flex items-center gap-2">
              Next <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Financials */}
      {step === 3 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">3. How much money do you currently have available to invest?</label>
              <input 
                type="number" 
                name="availableCapital"
                required
                value={formData.availableCapital}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="Amount in ₹"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">4. Estimated total investment required?</label>
              <input 
                type="number" 
                name="totalInvestment"
                required
                value={formData.totalInvestment}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="Amount in ₹"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">5. Do you need a loan/external funding?</label>
              <select 
                name="needsLoan"
                value={formData.needsLoan}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {formData.needsLoan === 'Yes' && (
              <div>
                <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">If yes, how much?</label>
                <input 
                  type="number" 
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                  placeholder="Amount in ₹"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">8a. Expected monthly sales/revenue?</label>
              <input 
                type="number" 
                name="expectedRevenue"
                required
                value={formData.expectedRevenue}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="Amount in ₹"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">8b. Expected monthly operating expenses?</label>
              <input 
                type="number" 
                name="expectedExpenses"
                required
                value={formData.expectedExpenses}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
                placeholder="Amount in ₹"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">10. Would you prefer to invest the full amount immediately or start with a pilot?</label>
            <select 
              name="investmentApproach"
              value={formData.investmentApproach}
              onChange={handleChange}
              className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5]"
            >
              <option value="Invest full amount immediately">Invest full amount immediately</option>
              <option value="Start with a smaller pilot first">Start with a smaller pilot first</option>
            </select>
          </div>

          <div className="pt-4 flex justify-between">
            <button type="button" onClick={handleBack} className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-gray-200">
              <ArrowLeft size={18} /> Back
            </button>
            <button type="submit" className="bg-[var(--color-gv-brown-dark)] hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-xl flex items-center gap-2">
              Next <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* Step 4: Market & Strategy */}
      {step === 4 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">6. Who are your target customers, and how many do you expect locally?</label>
            <textarea 
              name="targetCustomers"
              required
              rows="3"
              value={formData.targetCustomers}
              onChange={handleChange}
              className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5] resize-none"
              placeholder="Describe your customers..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">7. Who are your main competitors, and what makes you different?</label>
            <textarea 
              name="competitors"
              required
              rows="3"
              value={formData.competitors}
              onChange={handleChange}
              className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5] resize-none"
              placeholder="Describe competitors and your unique value..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[var(--color-gv-text)] mb-2">9. What could negatively affect your business?</label>
            <p className="text-xs text-gray-500 mb-2">(Examples: low demand, competition, raw-material costs, seasonal changes)</p>
            <textarea 
              name="risks"
              required
              rows="3"
              value={formData.risks}
              onChange={handleChange}
              className="w-full border border-[var(--border)] rounded-xl p-3 focus:ring-2 focus:ring-[var(--color-gv-green)] outline-none bg-[#fcfaf5] resize-none"
              placeholder="List potential risks..."
            />
          </div>

          <div className="pt-4 flex justify-between">
            <button type="button" onClick={handleBack} className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-gray-200">
              <ArrowLeft size={18} /> Back
            </button>
            <button type="submit" className="bg-[var(--color-gv-green-dark)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform hover:scale-105">
              Submit Assessment
            </button>
          </div>
        </form>
      )}

      {/* Step 5: Conclusion */}
      {step === 5 && conclusion && (
        <div className="text-center py-10 px-4">
          <div className="flex justify-center mb-6">
            {conclusion.canProceed ? (
              <CheckCircle2 size={80} className="text-[var(--color-gv-green-dark)] bg-green-50 rounded-full p-2" />
            ) : (
              <XCircle size={80} className="text-red-500 bg-red-50 rounded-full p-2" />
            )}
          </div>
          <h3 className="text-3xl font-bold mb-4 text-[var(--color-gv-text)]">
            {conclusion.canProceed ? "Proceed with Business Plan" : "Consider Alternative Options"}
          </h3>
          <p className="text-[var(--color-gv-text-light)] text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            {conclusion.message}
          </p>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setStep(1)}
              className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Retake Assessment
            </button>
            {conclusion.canProceed && (
              <button 
                onClick={() => navigate('/reports')}
                className="bg-[var(--color-gv-brown-dark)] text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                View Full Feasibility Report
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
