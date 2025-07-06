import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Info, X, Shield, Users, Brain, Zap } from 'lucide-react';

export const LearnMore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Smart Safety Routing",
      description: "AI-powered routing that considers safety factors like lighting, foot traffic, and recent incidents"
    },
    {
      icon: Users,
      title: "Community Reports", 
      description: "Real-time safety updates from other users to keep everyone informed and protected"
    },
    {
      icon: Brain,
      title: "AI-Powered Rerouting",
      description: "Intelligent system that automatically suggests safer alternatives when conditions change"
    },
    {
      icon: Zap,
      title: "Real-time Adjustments",
      description: "Dynamic route updates based on current conditions, time of day, and safety data"
    }
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 w-10 h-10 rounded-full bg-card/10 border border-border/20 hover:bg-card/20 hover:border-border/40 transition-all duration-200 backdrop-blur-sm"
      >
        <Info className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">About Kali</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-muted"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    Kali is a safety-first navigation app designed for people who shouldn't have to choose 
                    between getting somewhere fast and getting there safely. Built by women who understand 
                    the reality of navigating urban spaces.
                  </p>
                </div>

                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Everyone deserves to feel safe while getting from point A to point B. 
                    Kali uses technology to restore that fundamental right, one route at a time.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};