import { useEffect, useState } from 'react';

export const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-2000 transform ${
      isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
    }`}>
      <div className="animate-float">
        <img 
          src="/lovable-uploads/68426b37-a58e-4716-9b96-a22c01eade6c.png" 
          alt="kali" 
          className="h-24 w-auto rounded-2xl"
        />
      </div>
    </div>
  );
};