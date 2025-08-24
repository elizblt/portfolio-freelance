'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projects' },
  { name: 'Méthode', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [active, setActive] = useState<string>('#hero');
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);

  // lock body scroll when mobile menu open + Esc to close
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastScroll.current || y < 80);
      lastScroll.current = y;
      setScrolled(y > 8);

      // progress bar
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);

      // scrollspy
      const positions = navItems
        .filter(i => i.href.startsWith('#'))
        .map(({ href }) => {
          const el = document.querySelector(href);
          if (!el) return { href, top: Number.POSITIVE_INFINITY };
          const rect = (el as HTMLElement).getBoundingClientRect();
          return { href, top: rect.top + window.scrollY };
        });

      const offset = 120;
      const current = positions
        .sort((a, b) => a.top - b.top)
        .filter(p => y + offset >= p.top)
        .pop();

      setActive(current?.href ?? '#hero');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const smoothTo = (href: string) => {
    setOpen(false);
    if (!href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    const headerH = navRef.current?.getBoundingClientRect().height ?? 72;
    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - (headerH + 8);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] rounded-md bg-neutral-900 px-3 py-2 text-white">
        Aller au contenu
      </a>

      <nav
        ref={navRef as any}
        data-nav
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-transform duration-300',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
        aria-label="Navigation principale"
      >
        <div
          className={clsx(
            'mx-auto max-w-6xl px-4 md:px-6',
            'backdrop-blur supports-[backdrop-filter]:bg-white/70',
            'border-b',
            scrolled ? 'bg-white/80 border-gray-200' : 'bg-white/40 border-transparent'
          )}
        >
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Brand */}
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                smoothTo('#hero');
              }}
              className="font-extrabold tracking-tight text-gray-900 text-lg md:text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded"
            >
              Élise Boillat
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothTo(item.href);
                    }}
                    aria-current={active === item.href ? 'page' : undefined}
                    className={clsx(
                      'relative inline-flex items-center text-sm font-medium transition-colors',
                      active === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {item.name}
                    {/* underline indicator */}
                    <span
                      className={clsx(
                        'absolute -bottom-1 left-0 h-[2px] rounded-full bg-gray-900 transition-all',
                        active === item.href ? 'w-full opacity-100' : 'w-0 opacity-0'
                      )}
                    />
                  </a>
                </li>
              ))}

              {/* CTA Contact */}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothTo('#contact');
                  }}
                  className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white ring-1 ring-neutral-900 transition hover:scale-[1.02]"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Burger */}
            <button
              className="md:hidden p-2 -m-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Progress bar */}
          <div
            className="h-[2px] w-full origin-left bg-neutral-900 transition-[transform] duration-150"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden="true"
          />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Mobile drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[84vw] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <span className="font-semibold text-gray-900">Menu</span>
          <button
            className="p-2 -m-2 rounded text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="py-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                smoothTo(item.href);
              }}
              className={clsx(
                'block px-5 py-4 text-base font-medium transition',
                active === item.href
                  ? 'text-gray-900 bg-gray-50 border-l-4 border-neutral-900'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
              aria-current={active === item.href ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}

          <div className="px-5 pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothTo('#contact');
              }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-neutral-900"
            >
              Contact
            </a>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-5 text-xs text-gray-500">
          Développeuse web freelance — disponible pour nouveaux projets.
        </div>
      </aside>
    </>
  );
}
