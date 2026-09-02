import React from 'react';
import { Lightbulb, CheckSquare, BrainCircuit, Rocket, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-full max-w-7xl mx-auto pt-10">
      
      {/* Split Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 px-8 mb-24">
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-gv-text)] leading-[1.1] tracking-tight">
            Grow your business with confidence.
          </h1>
          <p className="text-[var(--color-gv-text-light)] mb-10 text-lg leading-relaxed pr-4">
            GraminVeda provides AI-driven advice, feasibility checks, and market insights tailored for rural entrepreneurs. We are your partner in building a sustainable future.
          </p>
          
          <div className="flex items-center gap-4 mb-12">
            <button className="bg-[var(--color-gv-brown-dark)] text-white py-3.5 px-8 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              <Rocket size={18} />
              Start My Plan
            </button>
            <button className="bg-gray-200 text-gray-800 py-3.5 px-8 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors whitespace-nowrap">
              <PlayCircle size={18} />
              How it works
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 border-2 border-[var(--color-gv-bg)] rounded-full z-30" src="https://i.pravatar.cc/150?img=68" alt="User" />
              <img className="w-10 h-10 border-2 border-[var(--color-gv-bg)] rounded-full z-20" src="https://i.pravatar.cc/150?img=47" alt="User" />
              <img className="w-10 h-10 border-2 border-[var(--color-gv-bg)] rounded-full z-10" src="https://i.pravatar.cc/150?img=33" alt="User" />
              <div className="w-10 h-10 border-2 border-[var(--color-gv-bg)] rounded-full bg-[var(--color-gv-accent)] flex items-center justify-center text-[10px] font-bold text-white z-0">
                +2k
              </div>
            </div>
            <span className="text-xs text-[var(--color-gv-text-light)] font-medium">
              Trusted by 2,000+ local entrepreneurs
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full h-[550px]">
          <div className="absolute inset-0 rounded-[48px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600868779919-61ab931bc151?q=80&w=1200&auto=format&fit=crop" 
              alt="Woman in shop" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-12 -left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[var(--color-gv-green-dark)] text-white flex items-center justify-center">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-medium">Loan Approved</p>
              <p className="text-sm font-bold text-[var(--color-gv-text)]">₹50,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-8 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[#ba5645] text-[10px] font-bold tracking-widest mb-4">
          CORE SERVICES
        </div>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-gv-text)]">Everything you need to succeed</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          From initial idea to securing funding, our tools are designed to guide you every step of the way.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#fcf7ec] to-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[var(--color-gv-accent)] text-white flex items-center justify-center mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="font-bold text-xl text-[var(--color-gv-text)] mb-3">Explore Ideas</h3>
            <p className="text-sm text-[var(--color-gv-text-light)] mb-8 leading-relaxed">
              Discover businesses tailored to your local resources, skills, and market demand. Find your niche.
            </p>
            <Link to="/business" className="text-[var(--color-gv-brown-dark)] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View Ideas &rarr;
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#f5eee9] to-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[var(--color-gv-brown-dark)] text-white flex items-center justify-center mb-6">
              <CheckSquare size={28} />
            </div>
            <h3 className="font-bold text-xl text-[var(--color-gv-text)] mb-3">Check Feasibility</h3>
            <p className="text-sm text-[var(--color-gv-text-light)] mb-8 leading-relaxed">
              Understand costs, potential profits, and risks before you invest. Make decisions based on data, not guesswork.
            </p>
            <Link to="/schemes" className="text-[var(--color-gv-brown-dark)] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Analyze Now &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#eef7f0] to-white rounded-3xl p-8 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[var(--color-gv-green-dark)] text-white flex items-center justify-center mb-6">
              <BrainCircuit size={28} />
            </div>
            <h3 className="font-bold text-xl text-[var(--color-gv-text)] mb-3">AI Advisor</h3>
            <p className="text-sm text-[var(--color-gv-text-light)] mb-8 leading-relaxed">
              Get 24/7 personalized guidance on everything from registering your business to finding government schemes.
            </p>
            <Link to="/advisor" className="text-[var(--color-gv-brown-dark)] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Chat with AI &rarr;
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
