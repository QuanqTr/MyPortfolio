import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Hide loading screen after a short delay
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] loading-screen-overlay">
      <div className="loading-container">
        {/* Spinning Circles */}
        <div className="relative flex items-center justify-center">
          {/* Outer spinning circle */}
          <div className="spinning-circle-outer">
            <svg width="200" height="200" viewBox="0 0 200 200" className="spinning-outer">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 20"
                opacity="0.8"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Inner spinning circle */}
          <div className="spinning-circle-inner absolute">
            <svg width="140" height="140" viewBox="0 0 140 140" className="spinning-inner">
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5 15"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Central Logo */}
          <div className="absolute logo-container">
            <div className="central-logo">
              <div className="logo-shape">
                <img 
                  src="/Logo.png" 
                  alt="Logo" 
                  className="w-16 h-16 object-contain animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text-container">
          <h2 className="loading-title">Portfolio</h2>
          <p className="loading-subtitle">tdquang.203</p>
          <div className="loading-progress-indicator">
            <div className="progress-dots">
              <span className="dot active"></span>
              <span className="dot active"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="progress-percentage">{Math.round(loadingProgress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}