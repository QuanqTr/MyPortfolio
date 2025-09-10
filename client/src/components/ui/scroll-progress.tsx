import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${scrollProgress}%` }}
      data-testid="scroll-progress"
    />
  );
}
