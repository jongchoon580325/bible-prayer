import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          <span>© {currentYear} 말씀기도. </span>
          <Link
            href="https://github.com/najongchoon/bible-prayer"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
} 