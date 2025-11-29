import { useEffect, useState } from "react";
import logo from "@/assets/turtle_Logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 600); // Wait for fade out animation
    }, 3600); // Match the 3s animation + 600ms fade out

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f3eee7] transition-opacity duration-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="relative">
        <svg className="absolute inset-0 -m-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)]" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="50%"
            cy="50%"
            r="calc(50% - 4px)"
            fill="none"
            stroke="#446471"
            strokeWidth="3"
            strokeDasharray="440"
            strokeDashoffset="0"
            className="animate-[spin_3s_linear_forwards]"
            style={{
              animation: "loadingRing 3s linear forwards",
            }}
          />
        </svg>
        <div
          className="relative"
          style={{
            animation: "logoFloat 2s ease-in-out infinite",
          }}>
          {/* Rounded wrapper clips the moving wave so it passes through the logo */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden bg-white/10 p-4">
            <img src={logo} alt="Resort Logo" className="h-full w-full object-contain" />
            {/* SVG wave overlay that moves left->right using animateTransform */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 160 160" preserveAspectRatio="none" style={{ mixBlendMode: "overlay", opacity: 0.95 }} aria-hidden="true">
              <g fill="#446471">
                <path d="M-40 80 C -20 60, 0 100, 20 80 C 40 60, 60 100, 80 80 C 100 60, 120 100, 140 80 L140 160 L-40 160 Z" />
                <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-180 0" to="180 0" dur="2.2s" repeatCount="indefinite" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
