import React, { useState } from 'react';

export default function Header({ searchTerm, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Action Figures', href: '#figures' },
    { label: 'Vestuário', href: '#vestuario' },
    { label: 'Colecionáveis', href: '#colecionaveis' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* LOGO */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <span className="font-mono text-2xl font-black tracking-wider text-amber-500">
              OP<span className="text-orange-500">•</span>GEAR
            </span>
            <span className="hidden rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 sm:inline-block">
              Store
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-amber-400 transition-colors duration-200 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* BARRA DE BUSCA */}
          <div className="flex-1 max-w-xs md:max-w-sm relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar tesouros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 pl-9 pr-4 py-2 text-sm text-neutral-200 placeholder-neutral-500 transition-all duration-200 focus:border-amber-500 focus:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* HAMBURGER MOBILE */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 border-t border-neutral-900' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="space-y-1 px-2 pb-4 pt-3 bg-neutral-950">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-400 hover:bg-neutral-900 hover:text-amber-400 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
