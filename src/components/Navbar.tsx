'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projects' },
  { name: 'À propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollRef.current || current < 80);
      lastScrollRef.current = current;

      // Scrollspy - detect active section
      const positions = navItems
        .filter(({ href }) => href.startsWith('#'))
        .map(({ href }) => {
          const el = document.querySelector(href);
          if (!el) return { href, top: 999999 };
          return { href, top: el.getBoundingClientRect().top + window.scrollY };
        });
      
      const scrollPos = window.scrollY + 100;
      const currentItem = positions
        .reverse()
        .find(p => scrollPos >= p.top - 100);
      
      if (currentItem) {
        setActive(currentItem.href);
      } else if (scrollPos < 100) {
        setActive('#hero');
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-200/50 px-4 md:px-6 py-4 flex justify-between items-center bg-white/90',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      )}>
        <Link 
          href="#hero" 
          className="font-bold text-gray-900 text-lg hover:text-blue-600 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
        >
          Élise Boillat
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={clsx(
                  'text-sm font-medium transition-all duration-200 hover:text-blue-600 relative',
                  active === item.href 
                    ? 'text-blue-600' 
                    : 'text-gray-600'
                )}
              >
                {item.name}
                {active === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Mobile */}
        <button
          className="md:hidden z-60 relative p-2 -m-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? 
            <X size={24} className="text-gray-900" /> : 
            <Menu size={24} className="text-gray-900" />
          }
        </button>
      </nav>

      {/* Overlay Mobile */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu Mobile */}
      <div className={clsx(
        'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out',
        open ? 'translate-x-0' : 'translate-x-full'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-2 -m-2 text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className={clsx(
                'flex items-center px-6 py-4 text-lg font-medium transition-colors hover:bg-gray-50',
                active === item.href 
                  ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600' 
                  : 'text-gray-700'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Développeuse web freelance
          </p>
        </div>
      </div>
    </>
  );
}
