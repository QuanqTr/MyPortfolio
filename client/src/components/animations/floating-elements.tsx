export default function FloatingElements() {
  return (
    <div className="floating-elements absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large floating shapes with enhanced visibility */}
      <div 
        className="floating-shape w-40 h-40 bg-gradient-to-br from-blue-500/40 to-cyan-400/30 top-10 left-10 absolute rounded-3xl backdrop-blur-sm border border-white/20"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-shape w-32 h-32 bg-gradient-to-br from-purple-500/35 to-pink-400/25 top-20 right-20 absolute rounded-2xl backdrop-blur-sm border border-white/15"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-shape w-28 h-28 bg-gradient-to-br from-emerald-500/30 to-green-400/20 bottom-20 left-20 absolute rounded-xl backdrop-blur-sm border border-white/10"
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="floating-shape w-36 h-36 bg-gradient-to-br from-amber-500/35 to-orange-400/25 bottom-10 right-10 absolute rounded-2xl backdrop-blur-sm border border-white/15"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Medium geometric shapes with glow effect */}
      <div 
        className="floating-shape w-20 h-20 bg-gradient-to-r from-indigo-500/40 to-purple-500/30 top-1/3 left-1/4 absolute rotate-45 backdrop-blur-sm border border-white/20 shadow-lg shadow-indigo-500/20"
        style={{ animationDelay: "3s" }}
      />
      <div 
        className="floating-shape w-16 h-16 bg-gradient-to-r from-rose-500/35 to-pink-500/25 top-2/3 right-1/3 absolute rounded-full backdrop-blur-sm border border-white/15 shadow-lg shadow-rose-500/20"
        style={{ animationDelay: "5s" }}
      />
      
      {/* Enhanced glowing particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="particle-glow-enhanced"
          style={{
            width: Math.random() * 8 + 3 + "px",
            height: Math.random() * 8 + 3 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 12 + "s",
            animationDuration: (Math.random() * 8 + 10) + "s"
          }}
        />
      ))}
      
      {/* Animated floating lines with glow */}
      <div className="floating-line-glow absolute top-1/4 left-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transform -rotate-45 shadow-lg shadow-blue-400/40" 
           style={{ animationDelay: "1.5s" }} />
      <div className="floating-line-glow absolute bottom-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform rotate-12 shadow-lg shadow-purple-400/30" 
           style={{ animationDelay: "3.5s" }} />
      <div className="floating-line-glow absolute top-1/2 left-1/3 w-28 h-1 bg-gradient-to-r from-transparent via-emerald-400/45 to-transparent transform -rotate-12 shadow-lg shadow-emerald-400/30" 
           style={{ animationDelay: "2.5s" }} />
    </div>
  );
}
