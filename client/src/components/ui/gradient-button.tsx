import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  gradient?: "primary" | "secondary" | "accent" | "rainbow";
}

const gradientVariants = {
  primary: "bg-gradient-to-r from-primary to-secondary",
  secondary: "bg-gradient-to-r from-secondary to-accent",
  accent: "bg-gradient-to-r from-accent to-primary",
  rainbow: "bg-gradient-to-r from-primary via-secondary to-accent",
};

export default function GradientButton({ 
  gradient = "primary", 
  className, 
  children, 
  ...props 
}: GradientButtonProps) {
  return (
    <Button 
      className={cn(
        gradientVariants[gradient],
        "text-white hover:opacity-90 transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
