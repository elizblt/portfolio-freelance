import { useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

interface TiltState {
  rx: number;
  ry: number;
  tz: number;
}

interface UseCardTiltReturn {
  tilt: TiltState;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
}

export function useCardTilt(intensity = 8, translateZ = 12): UseCardTiltReturn {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState<TiltState>({ rx: 0, ry: 0, tz: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce) return;

      const element = e.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();

      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      setTilt({
        rx: -(py - 0.5) * intensity,
        ry: (px - 0.5) * (intensity * 1.25),
        tz: translateZ,
      });
    },
    [reduce, intensity, translateZ],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0, tz: 0 });
  }, []);

  return { tilt, handleMouseMove, handleMouseLeave };
}
