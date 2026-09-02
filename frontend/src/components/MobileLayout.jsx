import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Store, Brain, ClipboardCheck, User } from 'lucide-react';

export default function MobileLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/business', icon: Store, label: 'Business' },
    { path: '/advisor', icon: Brain, label: 'Advisor' },
    { path: '/schemes', icon: ClipboardCheck, label: 'Schemes' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="flex flex-col h-full bg-[var(--color-gv-bg)] relative pb-[70px]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[var(--color-gv-bg)] sticky top-0 z-10">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-6 h-6 rounded-full bg-[var(--color-gv-green-light)] flex items-center justify-center">
            <span className="text-[10px] text-[var(--color-gv-green-dark)] font-bold">GV</span>
          </div>
          <span className="text-xl font-bold text-[var(--color-gv-brown-dark)]">GraminVeda</span>
        </div>
        {/* User Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-white">
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full h-[70px] bg-[var(--color-gv-bg)] border-t border-gray-100 flex items-center justify-around px-2 z-20">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path || (path === '/advisor' && location.pathname.includes('/advisor'));
          return (
            <Link 
              key={path} 
              to={path} 
              className={`flex flex-col items-center justify-center w-16 gap-1 ${isActive ? 'text-[var(--color-gv-brown-dark)]' : 'text-gray-500'}`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
