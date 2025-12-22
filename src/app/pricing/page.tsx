import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const freeFeatures = [
  "1 session per day",
  "Max 30 minutes per session",
];

const paidFeatures = [
  "Unlimited silence",
  "Custom duration",
  "Emergency silence",
  "Offline mode",
];

export default function PricingPage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          This app does nothing. That's the point.
        </h1>
        <p className="text-muted-foreground text-lg">
          Choose a plan that protects your silence. No ads. Ever.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Free</CardTitle>
            <CardDescription>For occasional silence.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <p className="text-4xl font-bold">₹0 <span className="text-lg font-normal text-muted-foreground">/ month</span></p>
            <ul className="space-y-2">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full" disabled>Your Current Plan</Button>
          </CardFooter>
        </Card>

        <Card className="border-accent flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Paid</CardTitle>
            <CardDescription>For unlimited peace.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
             <p className="text-4xl font-bold">₹1 <span className="text-lg font-normal text-muted-foreground">/ month</span></p>
            <ul className="space-y-2">
              {paidFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
