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
            Silence is not a productivity tool.
            <br/>
            It is not a timer.
            <br/>
            It is a boundary.
          </p>

          <div className="py-4"></div>

          <p>
            The internet is a loud place, designed to capture your attention and hold it. Every notification, every infinite scroll, every autoplay video is a claim on your mental space. Over time, these claims add up, leaving you drained and unable to think clearly.
          </p>
          <p>
            Silence is a conscious act of reclaiming that space. It’s an agreement you make with yourself — to be present, without being pulled.
          </p>

          <div className="py-4"></div>

          <h3 className="text-xl font-headline text-foreground pt-4">It's Not a Timer. It's a Choice.</h3>
          <p>
            A timer measures how long you can endure something. Silence isn't about endurance; it's about choosing absence. When you enter silence, you are not starting a race against the clock. You are stepping into a protected space.
          </p>
          <p>
            Whether for a few minutes or until you decide to end it, the goal is the same: to create a moment where you are not being acted upon by the digital world.
          </p>
          
          <div className="py-4"></div>

          <h3 className="text-xl font-headline text-foreground pt-4">How It Shapes You</h3>
          <p>
            By intentionally creating moments of quiet, you train your mind to be less reactive. You build the capacity to be with your own thoughts, without needing constant stimulation.
          </p>
          <p>
            This is what psychologists call "negative capability" — the ability to exist in uncertainty, without reaching for an immediate answer or distraction. It is in these quiet moments that creativity, self-reflection, and genuine rest can occur.
          </p>

          <div className="py-4"></div>

          <p className="text-lg text-foreground pt-4">
            Silence is not empty. It is defended.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
