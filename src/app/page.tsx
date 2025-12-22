'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SilenceSession } from '@/components/SilenceSession';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

type SilenceContext = {
  label: string;
  duration: number | null; // null for indefinite
};

const silenceContexts: SilenceContext[] = [
  { label: 'For 10 minutes', duration: 10 },
  { label: 'Before sleep', duration: 30 },
  { label: 'When overwhelmed', duration: 60 },
  { label: 'Until I choose to stop', duration: null },
];

export default function Home() {
  const router = useRouter();
  const [view, setView] = useState<'landing' | 'session' | 'end'>('landing');
  const [duration, setDuration] = useState<number | null>(0);
  const [showEndScreen, setShowEndScreen] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const monthlyNotificationEnabled = localStorage.getItem('monthly-notification-enabled') === 'true';
    if (monthlyNotificationEnabled) {
      const lastNotificationDate = localStorage.getItem('last-monthly-notification');
      const now = new Date();
      if (lastNotificationDate) {
        const lastDate = new Date(lastNotificationDate);
        const oneMonth = 30 * 24 * 60 * 60 * 1000; // Approx 30 days
        if (now.getTime() - lastDate.getTime() > oneMonth) {
          toast({
            description: "If the internet feels loud today, silence is here.",
          });
          localStorage.setItem('last-monthly-notification', now.toISOString());
        }
      } else {
        toast({
          description: "If the internet feels loud today, silence is here.",
        });
        localStorage.setItem('last-monthly-notification', now.toISOString());
      }
    }
    
    const noEndScreen = localStorage.getItem('no-end-screen-enabled') === 'true';
    setShowEndScreen(!noEndScreen);
  }, [toast]);

  const handleStart = (minutes: number | null) => {
    setDuration(minutes);
    setView('session');
  };

  const handleFinish = () => {
    if (showEndScreen) {
      setView('end');
    } else {
      setView('landing');
    }
  };
  
  const handleEndFromSession = () => {
    setView('landing');
  }

  const handleClose = () => {
    setView('landing');
  };

  if (view === 'session') {
    return <SilenceSession duration={duration} onFinish={handleFinish} onEndFromSession={handleEndFromSession} />;
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
      <p className="text-muted-foreground mb-4 max-w-sm">
        You don’t need to do anything.
        <br />
        You just need silence.
      </p>
      <p className="text-sm text-muted-foreground/70 mb-12">
        Silence is not something you earn. It’s something you allow.
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        {silenceContexts.map((context) => (
          <Button
            key={context.label}
            onClick={() => handleStart(context.duration)}
            variant="secondary"
            size="lg"
          >
            {context.label === 'Until I choose to stop' ? 'Enter Silence' : context.label}
          </Button>
        ))}
      </div>
       <p className="text-xs text-muted-foreground mt-12">
        You can leave silence at any moment. Silence is not confinement.
      </p>
    </div>
  );
}
