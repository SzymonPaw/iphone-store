import { useState, useMemo } from 'react';
import { Product, ProductConfiguration, CartItem } from '../types';
import { colorOptions, conditionOptions } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, ChevronLeft } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  onBack: () => void;
}

export function ProductPage({ product, onAddToCart, onBack }: ProductPageProps) {
  const [config, setConfig] = useState<ProductConfiguration>({
    model: product.models[0],
    storage: product.models[0].storageOptions[0],
    color: colorOptions[0],
    condition: conditionOptions[0],
  });

  const [addedToCart, setAddedToCart] = useState(false);

  const totalPrice = useMemo(() => {
    if (!config.model || !config.storage || !config.color || !config.condition) return 0;
    
    return (
      product.basePrice +
      config.model.priceModifier +
      config.storage.priceModifier +
      config.color.priceModifier +
      config.condition.priceModifier
    );
  }, [config, product.basePrice]);

  const handleAddToCart = () => {
    if (!config.model || !config.storage || !config.color || !config.condition) return;

    const cartItem: CartItem = {
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      modelName: config.model.name,
      storage: config.storage.size,
      color: config.color.name,
      condition: config.condition.name,
      price: totalPrice,
      quantity: 1,
    };

    onAddToCart(cartItem);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const isConfigComplete = config.model && config.storage && config.color && config.condition;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[var(--color-accent)] hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Wróć do sklepu</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Color preview */}
            {config.color && (
              <div className="mt-8 text-center">
                <p className="text-sm text-[var(--color-secondary)] mb-4">Wybrany kolor</p>
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg"
                    style={{ backgroundColor: config.color.hex }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Configuration Panel */}
          <div className="space-y-8">
            <div>
              <h2>{product.name}</h2>
              <p className="text-xl text-[var(--color-secondary)] mt-2">
                {product.description}
              </p>
            </div>

            {/* Model Selection */}
            <div className="space-y-4">
              <h4>Wybierz model</h4>
              <div className="grid gap-3">
                {product.models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setConfig({
                        ...config,
                        model,
                        storage: model.storageOptions[0],
                      });
                    }}
                    className={`relative p-4 border-2 rounded-2xl text-left transition-all ${
                      config.model?.id === model.id
                        ? 'border-[var(--color-accent)] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p>{model.name}</p>
                        <p className="text-sm text-[var(--color-secondary)] mt-1">
                          +{model.priceModifier.toLocaleString('pl-PL')} zł
                        </p>
                      </div>
                      {config.model?.id === model.id && (
                        <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            {config.model && (
              <div className="space-y-4">
                <h4>Pojemność</h4>
                <div className="grid grid-cols-2 gap-3">
                  {config.model.storageOptions.map((storage) => (
                    <button
                      key={storage.id}
                      onClick={() => setConfig({ ...config, storage })}
                      className={`p-4 border-2 rounded-2xl transition-all ${
                        config.storage?.id === storage.id
                          ? 'border-[var(--color-accent)] bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p>{storage.size}</p>
                      <p className="text-sm text-[var(--color-secondary)] mt-1">
                        +{storage.priceModifier.toLocaleString('pl-PL')} zł
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            <div className="space-y-4">
              <h4>Kolor</h4>
              <div className="flex gap-4">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setConfig({ ...config, color })}
                    className={`relative group transition-transform hover:scale-110 ${
                      config.color?.id === color.id ? 'scale-110' : ''
                    }`}
                    title={color.name}
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        config.color?.id === color.id
                          ? 'border-[var(--color-accent)] ring-2 ring-blue-200'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    {config.color?.id === color.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className="w-5 h-5 text-gray-700" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {config.color && (
                <p className="text-sm text-[var(--color-secondary)]">{config.color.name}</p>
              )}
            </div>

            {/* Condition Selection */}
            <div className="space-y-4">
              <h4>Stan urządzenia</h4>
              <div className="grid gap-3">
                {conditionOptions.map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => setConfig({ ...config, condition })}
                    className={`relative p-4 border-2 rounded-2xl text-left transition-all ${
                      config.condition?.id === condition.id
                        ? 'border-[var(--color-accent)] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p>{condition.name}</p>
                        <p className="text-sm text-[var(--color-secondary)] mt-1">
                          {condition.description}
                        </p>
                        <p className="text-sm mt-2">
                          {condition.priceModifier >= 0 ? '+' : ''}
                          {condition.priceModifier.toLocaleString('pl-PL')} zł
                        </p>
                      </div>
                      {config.condition?.id === condition.id && (
                        <div className="w-6 h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="sticky bottom-0 bg-white pt-8 pb-4 border-t border-gray-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[var(--color-secondary)]">Łączna cena:</span>
                <span className="text-4xl">{totalPrice.toLocaleString('pl-PL')} zł</span>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!isConfigComplete}
                className={`w-full py-4 rounded-full transition-all ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : isConfigComplete
                    ? 'bg-[var(--color-accent)] text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Dodano do koszyka
                  </span>
                ) : (
                  'Dodaj do koszyka'
                )}
              </button>
              
              {!isConfigComplete && (
                <p className="text-sm text-center text-[var(--color-secondary)]">
                  Wybierz wszystkie opcje, aby kontynuować
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
