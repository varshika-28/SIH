import { useEffect, useState } from 'react';

export default function SplashEntry({ children }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Trigger the 3D entry animation shortly after mount
    const timer = setTimeout(() => {
      setEntered(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="perspective-container">
      <div className={`app-3d-wrapper ${entered ? 'entered' : ''}`}>
        {children}
      </div>
    </div>
  );
}
