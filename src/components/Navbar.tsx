'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projects' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll || current < 80);
      lastScroll = current;

      // scrollspy
        const positions = navItems
        .filter(({ href }) => href.startsWith('#'))
        .map(({ href }) => {
            const el = document.querySelector(href);
            if (!el) return { href, top: 999999 };
            return { href, top: el.getBoundingClientRect().top + window.scrollY };
        });
      const scrollPos = window.scrollY + 150;
      const currentItem = positions.findLast(p => scrollPos >= p.top);
      if (currentItem) setActive(currentItem.href);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-black/5 px-6 md:px-20 py-4 flex justify-between items-center bg-white/70',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
    )}>
      <Link href="#hero" className="font-bold text-[#111] text-base">Elise Boillat</Link>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={clsx(
                'transition-colors hover:text-[#111] text-[#666]',
                active === item.href && 'text-[#111] font-medium'
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Burger Mobile */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Menu Mobile */}
      <div className={clsx(
        'fixed inset-0 bg-white px-6 py-24 z-40 transition-transform duration-300 flex flex-col gap-6 text-xl font-medium text-[#111]',
        open ? 'translate-x-0' : 'translate-x-full'
      )}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
