import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatIsSilencePage() {
  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full animate-in fade-in duration-1000">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">What is Silence?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground">
            Silence is not a productivity tool. It is not a timer to measure your focus. It is a boundary.
          </p>
          <p>
            The internet is a loud place. It is designed to capture your attention and hold it. Every notification, every infinite scroll, every autoplay video is a small claim on your mental space. Over time, these claims add up, leaving you feeling drained, anxious, and unable to think clearly.
          </p>
          <p>
            Silence is a conscious act of reclaiming that space. It’s an agreement you make with yourself to be present, without the pull of digital noise.
          </p>
          <h3 className="text-xl font-headline text-foreground pt-4">It's Not a Timer. It's a Choice.</h3>
          <p>
            A timer measures how long you can endure something. Silence isn't about endurance. It's about choosing absence. When you start a session, you are not starting a race against the clock. You are stepping into a protected space.
          </p>
          <p>
            Whether you choose silence for a few minutes before sleep or until you decide to end it, the goal is the same: to create a moment where you are not being acted upon by the digital world.
          </p>
          <h3 className="text-xl font-headline text-foreground pt-4">How It Shapes You</h3>
          <p>
            By intentionally creating moments of quiet, you are training your mind to be less reactive. You are building the capacity to be with your own thoughts, without needing constant stimulation.
          </p>
          <p>
            This is what psychologists call "negative capability" — the ability to exist in uncertainty, without reaching for an immediate answer or distraction. It is in these quiet moments that creativity, self-reflection, and genuine rest can occur.
          </p>
          <p className="text-lg text-foreground pt-4">
            Silence is not empty. It’s protected.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
