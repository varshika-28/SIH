import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [animationClass, setAnimationClass] = useState('page-transition-enter');

  useEffect(() => {
    if (location !== displayLocation) {
      // Small delay to allow react to prep, then trigger animation class re-run
      setAnimationClass('');
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setAnimationClass('page-transition-enter');
      }, 50); // very short delay to trigger reflow
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className={`flex-1 h-full perspective-[1200px] overflow-hidden ${animationClass}`}>
      <div className="h-full w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
