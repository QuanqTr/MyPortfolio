export default function FloatingElements() {
  return (
    <div className="floating-elements absolute inset-0 pointer-events-none">
      <div 
        className="floating-shape w-20 h-20 bg-white/20 top-10 left-10 absolute rounded-full"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-shape w-16 h-16 bg-accent/30 top-20 right-20 absolute rounded-full"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-shape w-12 h-12 bg-secondary/25 bottom-20 left-20 absolute rounded-full"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="floating-shape w-24 h-24 bg-primary/20 bottom-10 right-10 absolute rounded-full"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}
