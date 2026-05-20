export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100 dark:bg-neutral-950/80 dark:border-neutral-900 sm:px-12 sm:py-5">
      <a href="/" className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">KARPAU</a>
      <nav className="flex items-center gap-4 sm:gap-8">
        <a href="#hero" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">Reel</a>
        <a href="#work" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">Work</a>
        <a href="#about" className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">About</a>
        <a href="/3D_Motion_Designer_Maksim_Karpau.pdf" download className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
          <span>CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </nav>
    </header>
  );
}