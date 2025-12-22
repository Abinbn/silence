import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '/what-is-silence', label: 'What is Silence?' },
    { href: '/pricing', label: 'Access' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <header className="p-4 bg-transparent z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-headline tracking-tight">
          SILENCE
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-2xl font-bold font-headline tracking-tight mb-4">
                  SILENCE
                </Link>
                {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" asChild className="justify-start text-lg">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
