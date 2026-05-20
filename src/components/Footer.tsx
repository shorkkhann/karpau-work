export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 py-8 mt-16 border-t border-neutral-200 dark:border-neutral-800 sm:flex-row sm:justify-between sm:items-center">
      <span className="text-xs text-neutral-400 order-2 sm:order-1">© 2026 Maksim Karpau</span>
      <div className="flex items-center gap-4 order-1 sm:order-2">
        <a href="https://linkedin.com/in/maksim-karpau/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">LinkedIn</a>
        <a href="https://vimeo.com/maksimkarpau" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">Vimeo</a>
        <a href="https://wa.me/+48732976459" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">WhatsApp</a>
        <a href="mailto:shorkkhann@gmail.com" className="text-xs text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">Email</a>
      </div>
    </footer>
  );
}