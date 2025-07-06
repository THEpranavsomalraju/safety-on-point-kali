import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Typewriter } from '@/components/Typewriter';
import { WaitlistForm } from '@/components/WaitlistForm';
import { LearnMore } from '@/components/LearnMore';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/8732755e-c06a-4650-9733-f5f36ff6b0ee.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="fixed inset-0 bg-background/20" />
      
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
            className="px-12 py-6 text-lg rounded-none"
            style={{
              boxShadow: '0 8px 32px hsl(var(--kali-purple) / 0.3)',
            }}
          >
            join waitlist
          </Button>
        </div>

        {/* Subtle encouragement text */}
        <p className="text-muted-foreground text-sm mt-8 opacity-70 animate-fade-in" 
           style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          be among the first to navigate safely
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