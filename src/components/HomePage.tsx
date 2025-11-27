import { Product } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export function HomePage({ products, onProductClick }: HomePageProps) {
  const featuredProduct = products[0];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl">
                {featuredProduct.name}
              </h1>
              <p className="text-2xl text-gray-300 max-w-lg">
                {featuredProduct.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => onProductClick(featuredProduct.id)}
                  className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Kup teraz
                </button>
                <button
                  onClick={() => onProductClick(featuredProduct.id)}
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-colors"
                >
                  Zobacz więcej
                </button>
              </div>
              <p className="text-lg text-gray-400">
                Od {featuredProduct.basePrice.toLocaleString('pl-PL')} zł
              </p>
            </div>
            <div className="relative h-[500px] flex items-center justify-center">
              <ImageWithFallback
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none" />
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="mb-4">Wybierz swojego iPhone'a</h2>
          <p className="text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
            Znajdź idealny model dla siebie. Wszystkie iPhone'y z gwarancją i wsparciem technicznym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => onProductClick(product.id)}
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-center">{product.name}</h3>
                <p className="text-center text-[var(--color-secondary)] text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-center">
                  Od {product.basePrice.toLocaleString('pl-PL')} zł
                </p>
                <button className="w-full flex items-center justify-center gap-2 text-[var(--color-accent)] hover:gap-3 transition-all">
                  <span>Konfiguruj</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4>Gwarancja Apple</h4>
              <p className="text-[var(--color-secondary)]">
                Każdy iPhone objęty jest roczną gwarancją producenta z możliwością przedłużenia
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4>Darmowa dostawa</h4>
              <p className="text-[var(--color-secondary)]">
                Bezpłatna dostawa kurierem dla zamówień powyżej 2000 zł
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4>14 dni na zwrot</h4>
              <p className="text-[var(--color-secondary)]">
                Nie jesteś zadowolony? Zwróć produkt w ciągu 14 dni bez podania przyczyny
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
