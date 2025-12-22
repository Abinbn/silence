'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SilenceSession } from '@/components/SilenceSession';

export default function Home() {
  const [view, setView] = useState<'landing' | 'session' | 'end'>('landing');
  const [duration, setDuration] = useState(0); // in minutes

  const handleStart = (minutes: number) => {
    setDuration(minutes);
    setView('session');
  };

  const handleFinish = () => {
    setView('end');
  };

  const handleClose = () => {
    setView('landing');
  };

  if (view === 'session') {
    return <SilenceSession duration={duration} onFinish={handleFinish} />;
  }

  if (view === 'end') {
    return (
      <div className="flex flex-col items-center justify-center flex-grow text-center p-4 animate-in fade-in duration-1000">
        <h1 className="text-4xl font-headline mb-4">You survived without noise.</h1>
        <Button onClick={handleClose} variant="secondary" size="lg">
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center flex-grow text-center p-4 animate-in fade-in duration-1000">
      <h1 className="text-6xl md:text-8xl font-bold font-headline mb-4 tracking-tighter">
        SILENCE
      </h1>
      <p className="text-muted-foreground mb-12 max-w-sm">
        You don’t need to do anything.
        <br />
        You just need silence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => handleStart(10)} variant="secondary" size="lg">
          10 minutes
        </Button>
        <Button onClick={() => handleStart(30)} variant="secondary" size="lg">
          30 minutes
        </Button>
        <Button onClick={() => handleStart(60)} variant="secondary" size="lg">
          60 minutes
        </Button>
      </div>
    </div>
  );
}
