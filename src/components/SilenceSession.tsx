'use client';

import { useState, useEffect } from 'react';

type SilenceSessionProps = {
  duration: number; // in minutes
  onFinish: () => void;
};

export function SilenceSession({ duration, onFinish }: SilenceSessionProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onFinish]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0.05);
    }, 10000); // Fades after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center flex-grow bg-primary animate-in fade-in duration-1000">
      <h1
        className="text-8xl md:text-9xl font-mono text-accent transition-opacity duration-1000 ease-in-out"
        style={{ opacity }}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => {
            if (opacity !== 1) setOpacity(0.05);
        }}
        onClick={() => setOpacity(opacity === 1 ? 0.05 : 1)}
      >
        {formatTime(timeLeft)}
      </h1>
    </div>
  );
}
