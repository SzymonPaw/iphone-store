import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductPage } from './components/ProductPage';
import { Cart } from './components/Cart';
import { products } from './data/products';
import { CartItem } from './types';

type View = 'home' | 'product';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if item with same config exists
      const existingIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.modelName === item.modelName &&
          cartItem.storage === item.storage &&
          cartItem.color === item.color &&
          cartItem.condition === item.condition
      );

      if (existingIndex >= 0) {
        // Update quantity
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += item.quantity;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity = quantity;
      return newItems;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedProduct = selectedProductId
    ? products.find((p) => p.id === selectedProductId)
    : null;

  return (
    <div className="min-h-screen">
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleBack}
      />

      <main>
        {currentView === 'home' && (
          <HomePage products={products} onProductClick={handleProductClick} />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductPage
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={handleBack}
          />
        )}
      </main>

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4">Sklep</h4>
              <ul className="space-y-2 text-sm text-[var(--color-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-primary)]">iPhone 15 Pro</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">iPhone 15</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">iPhone 14</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Akcesoria</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Pomoc</h4>
              <ul className="space-y-2 text-sm text-[var(--color-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-primary)]">Wsparcie techniczne</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Dostawa</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Zwroty</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Gwarancja</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">O nas</h4>
              <ul className="space-y-2 text-sm text-[var(--color-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-primary)]">O firmie</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Kontakt</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Kariera</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)]">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Newsletter</h4>
              <p className="text-sm text-[var(--color-secondary)] mb-4">
                Bądź na bieżąco z najnowszymi ofertami
              </p>
              <input
                type="email"
                placeholder="Twój email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-[var(--color-secondary)]">
            <p>© 2025 iPhone Store. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
