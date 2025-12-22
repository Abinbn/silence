import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full animate-in fade-in duration-1000">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Silence Settings</CardTitle>
          <CardDescription>
            Configure how silence works for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="emergency-silence" className="flex flex-col space-y-1">
              <span>Enable Emergency Silence</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Allows starting a session from anywhere.
              </span>
            </Label>
            <Switch id="emergency-silence" disabled />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="auto-hide-timer" className="flex flex-col space-y-1">
              <span>Auto-hide timer</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Timer fades out automatically during session.
              </span>
            </Label>
            <Switch id="auto-hide-timer" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="restore-notifications" className="flex flex-col space-y-1">
              <span>Restore notifications after silence</span>
               <span className="font-normal leading-snug text-muted-foreground">
                Show notifications missed during a session.
              </span>
            </Label>
            <Switch id="restore-notifications" defaultChecked disabled />
          </div>
          <Separator />
          <div className="space-y-2">
             <h3 className="text-lg font-medium">Privacy</h3>
             <p className="text-sm text-muted-foreground">
                This app never reads or stores your data. For full details, see our privacy policy.
             </p>
             <Button variant="link" asChild className="p-0 h-auto">
                <Link href="/privacy">Read the Privacy Policy</Link>
             </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
