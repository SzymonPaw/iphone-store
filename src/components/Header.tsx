import { useState } from 'react';
import { ShoppingCart, Apple, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

export function Header({ cartItemsCount, onCartClick, onLogoClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = (
    <>
      <a href="#" className="text-sm hover:text-[var(--color-accent)] transition-colors">
        iPhone 15 Pro
      </a>
      <a href="#" className="text-sm hover:text-[var(--color-accent)] transition-colors">
        iPhone 15
      </a>
      <a href="#" className="text-sm hover:text-[var(--color-accent)] transition-colors">
        iPhone 14
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)]/80 backdrop-blur-xl border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={onLogoClick}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Apple className="w-7 h-7" />
            <span className="text-xl tracking-tight">iPhone Store</span>
          </button>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="nav-links">
              {navigationLinks}
            </div>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`mobile-nav-toggle p-2 rounded-full border border-gray-200 hover:border-[var(--color-accent)] transition-colors ${mobileMenuOpen ? 'text-[var(--color-accent)]' : ''}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              onClick={onCartClick}
              className="relative hover:text-[var(--color-accent)] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav-panel text-sm">
            {navigationLinks}
          </div>
        )}
      </nav>
    </header>
  );
}
