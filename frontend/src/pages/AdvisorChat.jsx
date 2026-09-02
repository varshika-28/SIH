import React from 'react';
import { Send, Mic, FileText, Info, Lightbulb, Landmark, CheckCircle2, TrendingUp, MoreVertical } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdvisorChat() {
  const chartData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 38 },
    { name: 'Apr', value: 65 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 95 },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto p-6 h-[calc(100vh-140px)]">
      
      {/* Left Column: Chat Interface */}
      <div className="flex-1 flex flex-col bg-white rounded-3xl shadow-sm border border-[var(--border)] overflow-hidden relative">
        
        {/* Chat header */}
        <div className="bg-[var(--color-gv-brown-dark)] p-4 px-6 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=32" alt="AI" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[var(--color-gv-brown-dark)] rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Veda Advisor</h2>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <Info size={12} /> Always ready to help
              </p>
            </div>
          </div>
          <button className="text-white/80 hover:text-white">
            <MoreVertical size={24} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 pb-32 bg-[#fdfaf5]">
          <div className="text-center text-xs text-[var(--color-gv-text-light)] mb-8 bg-gray-200/50 inline-block px-4 py-1.5 rounded-full mx-auto flex w-max">
            Today, 9:42 AM
          </div>

          {/* User Message */}
          <div className="flex justify-end mb-6">
            <div className="bg-[#e9e4de] text-[var(--color-gv-text)] p-4 rounded-2xl rounded-tr-sm text-[15px] leading-relaxed max-w-[80%]">
              Namaste. I have a small tailoring shop in the village. I want to buy a new electric sewing machine, but it costs ₹15,000. How can I manage this?
            </div>
          </div>

          {/* AI Message */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1 shadow-sm border border-gray-100">
               <img src="https://i.pravatar.cc/150?img=32" alt="AI" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white text-[var(--color-gv-text)] p-5 rounded-2xl rounded-tl-sm text-[15px] leading-relaxed max-w-[85%] shadow-sm border border-[var(--border)]">
              Namaste Ramesh! Upgrading to an electric machine is a smart move. It will increase your daily output.
              <br/><br/>
              For an investment of ₹15,000, you don't need to use all your savings. I recommend looking into the <span className="font-bold text-[var(--color-gv-brown-dark)]">PM Mudra Yojana (Shishu loan)</span>. It's designed exactly for needs like yours.
              
              <div className="flex gap-3 mt-4">
                <button className="bg-[var(--color-gv-brown-dark)] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90">
                  <FileText size={14} /> View Scheme Details
                </button>
                <button className="bg-gray-100 text-[var(--color-gv-text)] text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200">
                  <Landmark size={14} /> Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent pt-10 pb-6 px-8 flex flex-col gap-4">
          
          {/* Suggestion Chips */}
          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            <button className="whitespace-nowrap bg-white border border-[var(--border)] px-4 py-2 rounded-full text-xs font-medium text-[var(--color-gv-text)] shadow-sm hover:bg-gray-50">
              What documents do I need?
            </button>
            <button className="whitespace-nowrap bg-white border border-[var(--border)] px-4 py-2 rounded-full text-xs font-medium text-[var(--color-gv-text)] shadow-sm hover:bg-gray-50">
              Are there any subsidies?
            </button>
            <button className="whitespace-nowrap bg-white border border-[var(--border)] px-4 py-2 rounded-full text-xs font-medium text-[var(--color-gv-text)] shadow-sm hover:bg-gray-50">
              How much profit increase can I expect?
            </button>
          </div>
          
          {/* Input Box */}
          <div className="flex gap-3 items-center bg-[#f0eae4] rounded-full px-2 py-2">
            <button className="w-12 h-12 bg-[var(--color-gv-green-dark)] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-opacity-90">
              <Mic size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Ask anything in your language..." 
              className="bg-transparent outline-none flex-1 text-sm text-[var(--color-gv-text)] placeholder-gray-500 px-2"
            />
            <button className="w-12 h-12 flex items-center justify-center text-[var(--color-gv-brown-dark)] shrink-0 pr-2">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Live Insights */}
      <div className="w-[450px] shrink-0 flex flex-col gap-6 overflow-y-auto pr-2 pb-12">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-[var(--color-gv-text)]">
          <Lightbulb className="text-[var(--color-gv-brown-dark)]" /> Live Insights
        </h2>

        {/* Insight Card 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)] relative overflow-hidden border-l-4 border-l-[var(--color-gv-brown-dark)]">
          <div className="inline-block bg-[var(--color-gv-green-dark)] text-white text-[9px] font-bold tracking-wider px-2 py-1 rounded-sm mb-3">
            RECOMMENDED SCHEME
          </div>
          <h3 className="text-xl font-bold text-[var(--color-gv-text)] mb-2">PM Mudra Yojana (Shishu)</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Collateral-free loans for micro-units to support equipment purchase or working capital.
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-[#fcfaf5] p-3 rounded-xl border border-[var(--border)]">
              <p className="text-[10px] text-gray-500 mb-1">Max Loan Amount</p>
              <p className="text-sm font-bold text-[var(--color-gv-text)]">Up to ₹50,000</p>
            </div>
            <div className="bg-[#fcfaf5] p-3 rounded-xl border border-[var(--border)]">
              <p className="text-[10px] text-gray-500 mb-1">Interest Rate</p>
              <p className="text-sm font-bold text-[var(--color-gv-text)]">~1% per month</p>
            </div>
          </div>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle2 size={14} className="text-gray-400" /> No collateral required</li>
            <li className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle2 size={14} className="text-gray-400" /> Minimal processing fee</li>
          </ul>

          <button className="w-full bg-[#f4f1eb] hover:bg-[#e9e4de] text-[var(--color-gv-text)] font-semibold py-3 rounded-xl text-sm flex justify-center items-center gap-2 transition-colors">
            Start Application Draft &rarr;
          </button>
          
          <div className="absolute top-6 right-6 w-10 h-10 bg-[var(--color-gv-brown-dark)] rounded-full flex items-center justify-center text-white opacity-90">
             <Landmark size={18} />
          </div>
        </div>

        {/* Insight Card 2: Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold text-[var(--color-gv-text)] flex items-center gap-2">
              <TrendingUp size={18} className="text-[var(--color-gv-brown-dark)]" /> Local Demand Trend
            </h3>
            <span className="text-[10px] text-gray-500">Past 6 Months</span>
          </div>
          <p className="text-[11px] text-gray-600 mb-6">
            Demand for readymade garments and tailoring in your district is rising steadily.
          </p>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-gv-brown-dark)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-gv-brown-dark)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  labelStyle={{ display: 'none' }}
                />
                <Area type="monotone" dataKey="value" stroke="var(--color-gv-brown-dark)" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Insight Card 3: Image/News */}
        <div className="rounded-3xl overflow-hidden shadow-sm relative h-32 cursor-pointer group">
           <img 
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop" 
              alt="Local Market" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h4 className="text-white text-sm font-bold">Connect with local suppliers</h4>
              <p className="text-white/80 text-[10px]">Discover wholesale rates in your area</p>
            </div>
        </div>

      </div>

    </div>
  );
}
