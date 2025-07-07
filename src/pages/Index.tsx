import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Typewriter } from '@/components/Typewriter';
import { WaitlistForm } from '@/components/WaitlistForm';
import { LearnMore } from '@/components/LearnMore';

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/lovable-uploads/d9596a57-25ed-4e96-b6c2-886ba69c7f4d.png)',
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
            variant="default"
            size="lg"
            className="px-12 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            join waitlist
          </Button>
        </div>

        {/* Subtle encouragement text */}
        <button 
          onClick={() => setShowLearnMore(true)} 
          className="text-muted-foreground text-sm mt-8 opacity-70 animate-fade-in hover:opacity-100 hover:text-foreground transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
        >
          be among the first to navigate safely
        </button>
      </div>

      {/* Learn More button */}
      <LearnMore isOpen={showLearnMore} onClose={() => setShowLearnMore(false)} onOpen={() => setShowLearnMore(true)} />

      {/* Waitlist Form */}
      <WaitlistForm 
        isOpen={showWaitlist} 
        onClose={() => setShowWaitlist(false)} 
      />
    </div>
  );
};

export default Index;