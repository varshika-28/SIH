import React from 'react';
import { Search, SlidersHorizontal, Building2, Tractor, CheckSquare, ArrowRight, Bookmark, RotateCcw, PhoneCall } from 'lucide-react';

export default function GovtSchemes() {
  return (
    <div className="flex max-w-[1400px] mx-auto p-8 gap-8 min-h-full">
      
      {/* Left Sidebar - Filters */}
      <div className="w-[280px] shrink-0 flex flex-col gap-6">
        
        {/* Filters Box */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
          <h2 className="text-sm font-bold text-[var(--color-gv-text)] tracking-wider mb-4 border-b border-[var(--border)] pb-2">
            FILTERS
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-800 mb-3">Category</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Agriculture</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded bg-[var(--color-gv-brown-dark)] flex items-center justify-center text-white">
                  <CheckSquare size={14} />
                </div>
                <span className="text-sm text-gray-700">Livestock</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Retail</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Artisans</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-800 mb-3 border-t border-[var(--border)] pt-4">Benefit Type</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Subsidies</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Loans</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Training</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-800 mb-3 border-t border-[var(--border)] pt-4">Eligibility Focus</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center"></div>
                <span className="text-sm text-gray-700">Women Entrepreneurs</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded bg-[var(--color-gv-brown-dark)] flex items-center justify-center text-white">
                  <CheckSquare size={14} />
                </div>
                <span className="text-sm text-gray-700">SC/ST Category</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-[#f4f3ec] hover:bg-[#e9e4de] text-[var(--color-gv-text)] font-semibold py-3 rounded-xl text-sm flex justify-center items-center gap-2 transition-colors border border-[var(--border)]">
            <RotateCcw size={16} /> Reset Filters
          </button>
        </div>

        {/* Guidance Box */}
        <div className="bg-[#c8e6c9] rounded-3xl p-6 shadow-sm border border-[#a5d6a7]">
          <div className="mb-4">
             <PhoneCall size={28} className="text-[#2e7d32]" />
          </div>
          <h3 className="text-xl font-bold text-[#1b5e20] mb-2">Need Guidance?</h3>
          <p className="text-sm text-[#2e7d32] mb-6 leading-relaxed">
            Our advisors can help match you with the right schemes.
          </p>
          <button className="text-[#1b5e20] font-bold text-sm flex items-center justify-between w-full hover:bg-white/20 p-2 -mx-2 rounded-lg transition-colors">
            Schedule a call
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-[var(--color-gv-text)] mb-3">Government Schemes</h1>
        <p className="text-[var(--color-gv-text-light)] text-lg mb-8 max-w-3xl">
          Discover financial support, subsidies, and training programs tailored for rural enterprises. We simplify the application process.
        </p>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 bg-white rounded-2xl flex items-center px-6 shadow-sm border border-[var(--border)]">
            <Search size={20} className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search for your business type, e.g., 'Dairy Farm'..." 
              className="w-full bg-transparent border-none outline-none py-4 text-sm text-[var(--color-gv-text)] placeholder-gray-400"
            />
          </div>
          <button className="bg-[var(--color-gv-brown-dark)] text-white px-8 rounded-2xl font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity shrink-0">
            <SlidersHorizontal size={18} /> Filter
          </button>
        </div>

        {/* Scheme Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm flex flex-col relative border-t-8 border-t-[#81c784]">
            <div className="p-8 flex-1">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-14 h-14 bg-[#e8f5e9] rounded-2xl flex items-center justify-center shrink-0 border border-[#c8e6c9]">
                  <Building2 size={28} className="text-[#2e7d32]" />
                </div>
                <div>
                  <div className="inline-block bg-[#c8e6c9] text-[#1b5e20] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-2">
                    ELIGIBLE FOR YOU
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-gv-text)]">PM Mudra Yojana</h3>
                </div>
              </div>
              
              <p className="text-[var(--color-gv-text-light)] text-sm mb-6 leading-relaxed">
                Provides collateral-free loans to micro and small enterprises to help them grow their business operations.
              </p>

              <div className="bg-[#fcfaf5] rounded-2xl p-4 flex gap-8 mb-6 border border-[var(--border)]">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Key Benefit</p>
                  <p className="text-xl font-bold text-[var(--color-gv-brown-dark)]">₹ Up to 50k</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Loan Type</p>
                  <p className="text-sm font-bold text-[var(--color-gv-text)] mt-1">Shishu (Startups)</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-[var(--color-gv-text)] mb-3">Required Documents:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#e9e4de] text-[var(--color-gv-text)] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-[#d6cfc7]">
                    <span className="w-3 h-3 bg-white rounded-sm border border-gray-300"></span> Aadhaar Card
                  </span>
                  <span className="bg-[#e9e4de] text-[var(--color-gv-text)] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-[#d6cfc7]">
                    <span className="w-3 h-3 bg-white rounded-sm border border-gray-300"></span> Business Proof
                  </span>
                  <span className="bg-[#e9e4de] text-[var(--color-gv-text)] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-[#d6cfc7]">
                    <span className="w-3 h-3 bg-white rounded-sm border border-gray-300"></span> Bank Statement
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-8 pb-8 flex gap-4 mt-auto">
              <button className="flex-1 bg-[var(--color-gv-brown-dark)] hover:opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-opacity">
                Start Application <ArrowRight size={18} />
              </button>
              <button className="w-14 h-14 bg-[#f4f3ec] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--color-gv-brown-dark)] hover:bg-[#e9e4de] transition-colors shrink-0">
                <Bookmark size={20} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-[var(--border)] overflow-hidden shadow-sm flex flex-col relative border-t-8 border-t-[#ffb74d]">
            <div className="p-8 flex-1">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-14 h-14 bg-[#fff3e0] rounded-2xl flex items-center justify-center shrink-0 border border-[#ffe0b2]">
                  <Tractor size={28} className="text-[#e65100]" />
                </div>
                <div>
                  <div className="inline-block bg-[#e9e4de] text-gray-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-2 border border-[var(--border)]">
                    REQUIRES CHECKS
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-gv-text)] leading-tight">National Livestock Mission</h3>
                </div>
              </div>
              
              <p className="text-[var(--color-gv-text-light)] text-sm mb-6 leading-relaxed">
                Financial assistance and subsidies for setting up dairy farms, poultry, and goat rearing units.
              </p>

              <div className="bg-[#fcfaf5] rounded-2xl p-4 flex gap-8 mb-6 border border-[var(--border)]">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Key Benefit</p>
                  <p className="text-xl font-bold text-[var(--color-gv-brown-dark)]">50% Subsidy</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Focus Area</p>
                  <p className="text-sm font-bold text-[var(--color-gv-text)] mt-1">Animal Husbandry</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-[var(--color-gv-text)] mb-3">Required Documents:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#e9e4de] text-[var(--color-gv-text)] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-[#d6cfc7]">
                    <span className="w-3 h-3 bg-white rounded-sm border border-gray-300"></span> Land Ownership Proof
                  </span>
                  <span className="bg-[#e9e4de] text-[var(--color-gv-text)] text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-[#d6cfc7]">
                    <span className="w-3 h-3 bg-white rounded-sm border border-gray-300"></span> Project Report
                  </span>
                </div>
              </div>
            </div>
            
            <div className="px-8 pb-8 flex gap-4 mt-auto">
              <button className="flex-1 bg-[#f4f3ec] hover:bg-[#e9e4de] border border-[#d6cfc7] text-[var(--color-gv-text)] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                Check Eligibility <CheckSquare size={18} />
              </button>
              <button className="w-14 h-14 bg-[#f4f3ec] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--color-gv-brown-dark)] hover:bg-[#e9e4de] transition-colors shrink-0">
                <Bookmark size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
