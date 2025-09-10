import { useParallax } from "@/hooks/use-parallax";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxSectionProps) {
  const { ref, transform } = useParallax(speed);

  return (
    <div 
      ref={ref} 
      className={`parallax-element ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
