import { CartItem } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
}

export function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3>Koszyk</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-16 h-16 text-gray-300" />
              <p className="text-xl text-[var(--color-secondary)]">
                Twój koszyk jest pusty
              </p>
              <button
                onClick={onClose}
                className="text-[var(--color-accent)] hover:underline"
              >
                Kontynuuj zakupy
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-2xl relative"
                >
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>

                  <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <ImageWithFallback
                      src={item.productImage}
                      alt={item.productName}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="pr-6">{item.productName}</h4>
                    <div className="text-sm text-[var(--color-secondary)] space-y-1">
                      <p>{item.modelName}</p>
                      <p>{item.storage} • {item.color}</p>
                      <p>{item.condition}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-white rounded-full p-1">
                        <button
                          onClick={() =>
                            onUpdateQuantity(index, Math.max(1, item.quantity - 1))
                          }
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <p>{(item.price * item.quantity).toLocaleString('pl-PL')} zł</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-secondary)]">Suma częściowa:</span>
              <span className="text-2xl">{total.toLocaleString('pl-PL')} zł</span>
            </div>

            <button className="w-full bg-[var(--color-accent)] text-white py-4 rounded-full hover:bg-blue-600 transition-colors">
              Przejdź do kasy
            </button>

            <button
              onClick={onClose}
              className="w-full text-[var(--color-accent)] hover:underline"
            >
              Kontynuuj zakupy
            </button>
          </div>
        )}
      </div>
    </>
  );
}
