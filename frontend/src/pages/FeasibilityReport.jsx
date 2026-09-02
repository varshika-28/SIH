import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { CheckCircle2, TrendingUp, Store, Wallet, TriangleAlert, Settings2, Pencil, AlertCircle, Info, Download } from 'lucide-react';

export default function FeasibilityReport() {
  // Chart data updated to reflect the new bakery data (Revenue 60k, Cost 42k) over 4 quarters
  const chartData = [
    { name: 'Q1', revenue: 60, cost: 42 },
    { name: 'Q2', revenue: 65, cost: 43 },
    { name: 'Q3', revenue: 70, cost: 45 },
    { name: 'Q4', revenue: 85, cost: 50 },
  ];

  const handleDownload = () => {
    const dataString = localStorage.getItem('graminveda_assessment');
    let data = null;
    if (dataString) {
      try { data = JSON.parse(dataString); } catch (e) {}
    }

    // Default template if no assessment was taken
    const content = data ? `
      <h2>GraminVeda Feasibility Report</h2>
      <hr/>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Business:</strong> ${data.businessType}</p>
      <p><strong>Location:</strong> ${data.locationVillage}, ${data.locationDistrict}, ${data.locationState}</p>
      <hr/>
      <h3>Financials</h3>
      <p><strong>Available Capital:</strong> ₹${data.availableCapital}</p>
      <p><strong>Total Investment Required:</strong> ₹${data.totalInvestment}</p>
      <p><strong>Expected Revenue:</strong> ₹${data.expectedRevenue}/month</p>
      <p><strong>Expected Expenses:</strong> ₹${data.expectedExpenses}/month</p>
      <hr/>
      <h3>Market & Strategy</h3>
      <p><strong>Target Customers:</strong> ${data.targetCustomers}</p>
      <p><strong>Competitors:</strong> ${data.competitors}</p>
      <p><strong>Risks:</strong> ${data.risks}</p>
      <hr/>
      <h3>AI Conclusion</h3>
      <p><strong>Verdict:</strong> ${data.conclusion?.canProceed ? "PROCEED" : "REVISE PLAN"}</p>
      <p><strong>Reasoning:</strong> ${data.conclusion?.message}</p>
    ` : `
      <h2>GraminVeda Feasibility Report</h2>
      <hr/>
      <p>No personalized assessment data found. Please take the assessment in the "My Business" tab first to generate your custom report.</p>
    `;

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Feasibility Report</title>
          <style>
            body { font-family: sans-serif; padding: 40px; color: #333; line-height: 1.6; }
            h2 { color: #5D2B19; }
            h3 { color: #2E4A35; margin-top: 20px; }
            hr { border: 0; border-top: 1px solid #ccc; margin: 20px 0; }
          </style>
        </head>
        <body>
          ${content}
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="flex flex-col min-h-full">
      
      {/* Top Banner */}
      <div className="bg-[var(--color-gv-brown-dark)] text-white w-full px-12 py-10 flex items-center justify-between shadow-md">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-4xl font-bold">Rural Bakery: Feasibility Report</h1>
            <button 
              onClick={handleDownload}
              className="bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm transition-colors border border-white/30 ml-4"
            >
              <Download size={16} /> Download PDF
            </button>
          </div>
          <p className="text-white/80 text-sm flex items-center gap-2">
            Location: Coimbatore
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] ml-2">Data Confidence: Medium</span>
          </p>
        </div>
        
        <div className="bg-white text-[var(--color-gv-brown-dark)] rounded-xl p-4 flex items-center gap-4 shadow-xl border-l-4 border-[#f0a22a]">
          <div className="w-12 h-12 rounded-full border-2 border-[#f0a22a] bg-orange-50 flex items-center justify-center shrink-0">
             <AlertCircle size={24} className="text-[#f0a22a]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">AI Recommendation</p>
            <h2 className="text-2xl font-bold text-[#b57512] tracking-tight">Proceed with Pilot</h2>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto w-full p-8 -mt-6">
        
        {/* Recommendation Banner */}
        <div className="bg-[#fff9ed] border border-[#f0a22a]/30 rounded-2xl p-6 mb-8 flex items-start gap-4 shadow-sm">
          <div className="mt-1 text-[#f0a22a]">
            <Info size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-gv-text)] mb-1">Strategic Advice</h3>
            <p className="text-[var(--color-gv-text-light)]">
              Start with a smaller <strong>₹50,000 pilot for 1–2 months</strong> to validate customer demand before investing the full ₹2,00,000.
            </p>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--color-gv-text-light)] mb-4">
              <Wallet size={18} className="text-[var(--color-gv-brown-dark)]" />
              <span className="text-xs font-bold uppercase tracking-wider">Total Investment</span>
            </div>
            <p className="text-4xl font-bold text-[var(--color-gv-text)] mb-4">₹2.0L</p>
            <p className="text-[10px] text-gray-500 font-medium">Break-even: 11 months</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--color-gv-text-light)] mb-4">
              <TrendingUp size={18} className="text-green-700" />
              <span className="text-xs font-bold uppercase tracking-wider">Est. Profit</span>
            </div>
            <p className="text-4xl font-bold text-[var(--color-gv-text)] mb-4">₹18k<span className="text-lg text-gray-400 font-normal">/mo</span></p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-green-600 h-full w-[30%]"></div>
            </div>
            <p className="text-[10px] text-gray-500">Based on ₹60k Rev / ₹42k Exp</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--color-gv-text-light)] mb-4">
              <Store size={18} className="text-[var(--color-gv-brown-dark)]" />
              <span className="text-xs font-bold uppercase tracking-wider">Market Demand</span>
            </div>
            <p className="text-3xl font-bold text-[var(--color-gv-text)] mb-4 leading-tight mt-2">Med-High</p>
            <div className="flex gap-1 w-full mb-2 mt-4">
              <div className="h-2 flex-1 bg-[var(--color-gv-brown-dark)] rounded-l-full"></div>
              <div className="h-2 flex-1 bg-[var(--color-gv-brown-dark)]"></div>
              <div className="h-2 flex-1 bg-[var(--color-gv-brown-dark)]/50"></div>
              <div className="h-2 flex-1 bg-gray-200 rounded-r-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
            <div className="flex items-center gap-2 text-[var(--color-gv-text-light)] mb-4">
              <TriangleAlert size={18} className="text-[#f0a22a]" />
              <span className="text-xs font-bold uppercase tracking-wider">Overall Risk</span>
            </div>
            <p className="text-4xl font-bold text-[var(--color-gv-text)] mb-4">Medium</p>
            <div className="h-2 w-full"></div> {/* Spacer to align */}
            <p className="text-[10px] text-gray-500 mt-2">Requires pilot testing first</p>
          </div>

        </div>

        {/* Chart & Assumptions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chart Area */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)] h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-[var(--color-gv-text)]">Revenue vs. Cost Projection (Monthly Avg)</h3>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Monthly View</span>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={0}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E4E7" />
                    <XAxis dataKey="name" axisLine={true} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-gv-text-light)' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-gv-text-light)' }} tickFormatter={(value) => `₹${value}k`} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="cost" fill="#e2dcd3" radius={[2, 2, 0, 0]} maxBarSize={30} />
                    <Bar dataKey="revenue" fill="var(--color-gv-brown-dark)" radius={[2, 2, 0, 0]} maxBarSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-xs text-[var(--color-gv-text-light)]">
                  <div className="w-3 h-3 rounded-sm bg-[#e2dcd3]"></div>
                  Operating Expenses (Avg ₹42k)
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--color-gv-text-light)]">
                  <div className="w-3 h-3 rounded-sm bg-[var(--color-gv-brown-dark)]"></div>
                  Projected Revenue (Avg ₹60k)
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Financials Area */}
          <div className="bg-[#fcfaf5] rounded-3xl p-8 shadow-sm border border-[var(--border)] h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-gv-text)] flex items-center gap-2 mb-8">
                <Settings2 className="text-[var(--color-gv-brown-dark)]" /> Key Metrics
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-[var(--border)] flex justify-between items-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expected Revenue</p>
                  <p className="text-lg font-bold text-[var(--color-gv-text)]">₹60,000/mo</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[var(--border)] flex justify-between items-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Monthly Expenses</p>
                  <p className="text-lg font-bold text-[var(--color-gv-text)]">₹42,000/mo</p>
                </div>

                <div className="bg-[#eef7f0] p-4 rounded-xl border border-[#d1ead7] flex justify-between items-center">
                  <p className="text-xs text-green-800 font-bold uppercase tracking-wider">Estimated Profit</p>
                  <p className="text-lg font-bold text-green-900">₹18,000/mo</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-[var(--border)] flex justify-between items-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Break-even Point</p>
                  <p className="text-lg font-bold text-[var(--color-gv-text)]">11 months</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 text-[var(--color-gv-brown-dark)] font-bold text-sm flex items-center justify-between p-4 hover:bg-[var(--color-gv-brown-light)] rounded-xl transition-colors">
              Edit Financials
              <Pencil size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
