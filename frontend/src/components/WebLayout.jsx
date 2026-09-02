import { Outlet, Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import PageTransition from './PageTransition';

export default function WebLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/business', label: 'My Business' },
    { path: '/advisor', label: 'AI Advisor' },
    { path: '/schemes', label: 'Govt. Schemes' },
    { path: '/reports', label: 'Reports' }
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[var(--color-gv-bg)] relative overflow-hidden">
      
      {/* Top Navbar */}
      <header className="h-20 bg-[var(--color-gv-bg)] border-b border-[var(--border)] flex items-center justify-between px-8 z-20 shrink-0">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-gv-green-light)] flex items-center justify-center shrink-0">
            <span className="text-xs text-[var(--color-gv-green-dark)] font-bold">GV</span>
          </div>
          <span className="text-2xl font-bold text-[var(--color-gv-brown-dark)] tracking-tight">GraminVeda</span>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path || (path === '/advisor' && location.pathname.includes('/advisor')) || (path === '/schemes' && location.pathname.includes('/schemes'));
            return (
              <Link 
                key={path} 
                to={path} 
                className={`text-sm font-semibold relative py-2 ${
                  isActive ? 'text-[var(--color-gv-brown-dark)]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-gv-brown-dark)] rounded-t-full"></div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-900">
            <Bell size={20} />
          </button>
          <div className="h-8 w-px bg-[var(--border)]"></div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-medium">Welcome,</p>
              <p className="text-sm font-bold text-[var(--color-gv-text)] leading-tight">Ramesh Kumar</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden shrink-0 border border-gray-200">
              <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area with 3D Page Transition */}
      <main className="flex-1 overflow-hidden relative">
        <PageTransition>
          <div className="w-full min-h-full flex flex-col">
            <div className="flex-1">
               <Outlet />
            </div>
            
            {/* Footer */}
            <footer className="bg-[#f4f3ec] border-t border-[var(--border)] pt-12 pb-6 mt-16">
              <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-gv-green-light)] flex items-center justify-center shrink-0">
                      <span className="text-[8px] text-[var(--color-gv-green-dark)] font-bold">GV</span>
                    </div>
                    <span className="text-sm font-bold text-[var(--color-gv-brown-dark)] tracking-wider">GRAMINVEDA</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed pr-4">
                    Empowering rural micro-entrepreneurs through AI-driven financial wisdom and accessible capital.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-4 text-[var(--color-gv-text)]">Platform</h4>
                  <ul className="space-y-3 text-xs text-gray-600">
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Market Intelligence</a></li>
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Credit Access</a></li>
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Mentorship</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-4 text-[var(--color-gv-text)]">Support</h4>
                  <ul className="space-y-3 text-xs text-gray-600">
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Help Center</a></li>
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[var(--color-gv-brown-dark)]">Terms of Service</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm mb-4 text-[var(--color-gv-text)]">Contact</h4>
                  <ul className="space-y-3 text-xs text-gray-600">
                    <li>support@graminveda.in</li>
                    <li>+91 1800-Veda-Help</li>
                  </ul>
                </div>
              </div>
              <div className="text-center text-[10px] text-gray-500 border-t border-[var(--border)] pt-6">
                © 2024 GraminVeda Technologies. All rights reserved. Rooted in rural India.
              </div>
            </footer>
          </div>
        </PageTransition>
      </main>
    </div>
  );
}
