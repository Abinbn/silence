'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SilenceSessionProps = {
  duration: number | null; // in minutes
  onFinish: () => void;
  onEndFromSession: () => void;
};

export function SilenceSession({ duration, onFinish, onEndFromSession }: SilenceSessionProps) {
  const [timeLeft, setTimeLeft] = useState(duration ? duration * 60 : Infinity);
  const [opacity, setOpacity] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isInfinite = duration === null;
  const initialTime = duration ? duration * 60 : null;

  useEffect(() => {
    // Threshold moment: fade in
    const fadeInTimer = setTimeout(() => {
      // Opacity is already 1 from initial state, this is for logic timing
    }, 2000);
    
    return () => clearTimeout(fadeInTimer);
  }, []);


  useEffect(() => {
    try {
      if (navigator.vibrate) {
        navigator.vibrate(100); // Soft vibration on start
      }
    } catch(e) {
      // Vibrate may not be supported
    }


    const onEnd = () => {
       try {
        if (navigator.vibrate) {
          navigator.vibrate(100); // Soft vibration on end
        }
      } catch(e) {
        // Vibrate may not be supported
      }
      onFinish();
    }

    if (isInfinite) return;
    
    // Forgive quick exits
    if (initialTime && timeLeft < initialTime - 10) {
      //
    }

    // Soft Exit
    if (initialTime && timeLeft <= 10 && !isFadingOut) {
       setIsFadingOut(true);
    }

    if (timeLeft <= 0) {
      onEnd();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onFinish, isInfinite, initialTime, isFadingOut]);

  useEffect(() => {
    // Auto-hide timer
    const timer = setTimeout(() => {
      setOpacity(0.05);
    }, 10000); // Fades after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    if (seconds === Infinity) {
      return '∞';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  
  const handleEndClick = () => {
     if (initialTime && timeLeft > initialTime - 10) {
      onEndFromSession();
      return;
    }
    try {
      if (navigator.vibrate) {
        navigator.vibrate(100); // Soft vibration on end
      }
    } catch(e) {
      // Vibrate may not be supported
    }
    onEndFromSession();
  }

  return (
    <div 
      className={`flex items-center justify-center flex-grow bg-black animate-in fade-in duration-[2000ms] relative ${isFadingOut ? 'transition-colors duration-[10000ms] ease-in-out bg-opacity-0' : ''}`}
    >
      {isInfinite && (
         <Button
            variant="ghost"
            className="absolute bottom-10 text-accent hover:text-accent-foreground z-20 uppercase tracking-widest"
            onClick={handleEndClick}
            aria-label="Exit Silence"
          >
            Exit Silence
        </Button>
      )}
      <h1
        className="text-8xl md:text-9xl font-mono text-accent transition-opacity duration-1000 ease-in-out select-none"
        style={{ opacity }}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0.05)}
        onClick={() => setOpacity(opacity === 1 ? 0.05 : 1)}
      >
        {formatTime(timeLeft)}
      </h1>
       {!isInfinite && (
         <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-accent hover:text-accent-foreground z-20"
            onClick={handleEndClick}
            aria-label="Exit Silence"
          >
            <X size={32} />
        </Button>
      )}
    </div>
  );
}
