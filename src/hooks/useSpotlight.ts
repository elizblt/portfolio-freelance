import { useState, useCallback } from "react";

interface SpotlightPosition {
  x: string;
  y: string;
}

interface UseSpotlightReturn {
  position: SpotlightPosition;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
}

export function useSpotlight(): UseSpotlightReturn {
  const [position, setPosition] = useState<SpotlightPosition>({ x: "50%", y: "50%" });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    
    setPosition({ 
      x: `${px * 100}%`, 
      y: `${py * 100}%` 
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: "50%", y: "50%" });
  }, []);

  return { position, handleMouseMove, handleMouseLeave };
}