import { useEffect, useState } from 'react';
import kaliLogo from '@/assets/kali-logo.png';

export const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 transform ${
      isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
    }`}>
      <div className="relative animate-float">
        <img 
          src={kaliLogo} 
          alt="Kali" 
          className="h-16 w-auto drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 0 20px hsl(var(--kali-purple) / 0.4))'
          }}
        />
        <div 
          className="absolute -inset-4 opacity-30 animate-glow-pulse rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--kali-purple) / 0.2) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
};