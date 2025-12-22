import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full animate-in fade-in duration-1000">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground">
            Silence was built to reduce noise — not collect data.
          </p>
          <p>This app does <strong className="text-foreground">not</strong>:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Read your messages</li>
            <li>Track your activity</li>
            <li>Know which apps you use</li>
            <li>Store or send personal information</li>
          </ul>
          <p>
            All silence sessions happen locally on your device. No data leaves your phone.
          </p>
          <p>
            Accessibility permissions are used only to pause infinite scrolling and autoplay patterns{' '}
            <strong className="text-foreground">during silence sessions you start</strong>.
          </p>
          <p>
            When silence ends, everything returns to normal.
          </p>
          <p className="text-lg text-foreground pt-4">
            You don’t owe us your data. Just your trust.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
