import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

interface WaitlistFormProps {
  onClose: () => void;
  isOpen: boolean;
}

export const WaitlistForm = ({ onClose, isOpen }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual Supabase integration
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      toast({
        title: "Welcome to Kali!",
        description: "Check your email for confirmation",
        className: "bg-card border-primary"
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className={`w-full max-w-md p-8 bg-card border-border transform transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
              <p className="text-muted-foreground">Be the first to know when Kali launches</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-transparent border-border hover:bg-muted"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">✓</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">You're In!</h2>
            <p className="text-muted-foreground mb-6">
              Check your email for confirmation. We'll be in touch soon.
            </p>
            <Button 
              onClick={onClose}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground"
            >
              Close
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};