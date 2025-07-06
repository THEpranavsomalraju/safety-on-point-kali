import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Typewriter } from '@/components/Typewriter';
import { WaitlistForm } from '@/components/WaitlistForm';
import { LearnMore } from '@/components/LearnMore';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--kali-purple) / 0.1) 0%, transparent 50%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* Typewriter taglines */}
        <div className="mb-16">
          <Typewriter />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <Button
            onClick={() => setShowWaitlist(true)}
            variant="kali"
            size="lg"
            className="px-12 py-6 text-lg rounded-full"
            style={{
              boxShadow: '0 8px 32px hsl(var(--kali-purple) / 0.3)',
            }}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Subtle encouragement text */}
        <p className="text-muted-foreground text-sm mt-8 opacity-70 animate-fade-in" 
           style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          Be among the first to navigate safely
        </p>
      </div>

      {/* Learn More button */}
      <LearnMore />

      {/* Waitlist Form */}
      <WaitlistForm 
        isOpen={showWaitlist} 
        onClose={() => setShowWaitlist(false)} 
      />
    </div>
  );
};

export default Index;