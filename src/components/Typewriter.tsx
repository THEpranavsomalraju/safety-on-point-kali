import { useTypewriter } from '@/hooks/useTypewriter';

const taglines = [
  "Never walk down a sketchy street again",
  "Your GPS doesn't care if you're scared", 
  "Get home safely, not just quickly",
  "Finally, navigation that gets it",
  "Because 2 minutes saved isn't worth the risk",
  "Built by women who've been there",
  "Stop ignoring your gut feeling",
  "The app that shouldn't have to exist"
];

export const Typewriter = () => {
  const { displayText, isCompleted } = useTypewriter(taglines, 60, 30, 3000);

  return (
    <div className="min-h-[4rem] flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
          {displayText}
          <span 
            className={`inline-block w-0.5 h-8 ml-1 bg-primary animate-blink ${
              isCompleted ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </p>
      </div>
    </div>
  );
};