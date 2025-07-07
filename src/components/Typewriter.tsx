import { useTypewriter } from '@/hooks/useTypewriter';

const taglines = [
  "your phone doesn't know you're scared",
  "google maps has never been followed home", 
  "2 minutes faster isn't worth your life",
  "every woman knows this feeling",
  "your gps has never walked alone at night",
  "your fearless journey starts here"
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