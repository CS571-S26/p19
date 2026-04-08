import { useMemo } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  twinkle: boolean;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const rand = Math.random();
    // ~10% large (2–3px), ~30% medium (1.5–2px), rest small (1–1.5px)
    const size = rand < 0.1 ? 2 + Math.random() : rand < 0.4 ? 1.5 + Math.random() * 0.5 : 1 + Math.random() * 0.5;
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      opacity: 0.25 + Math.random() * 0.55,
      duration: 2.5 + Math.random() * 3.5,
      twinkle: Math.random() < 0.35,
    };
  });
}

export default function StarBackground() {
  const stars = useMemo(() => generateStars(90), []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            opacity: star.opacity,
            animation: star.twinkle
              ? `twinkle ${star.duration}s ease-in-out infinite alternate`
              : 'none',
          }}
        />
      ))}
    </div>
  );
}
