import { Product, ColorOption, ConditionOption } from '../types';

export const products: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    basePrice: 4999,
    image: 'https://images.unsplash.com/photo-1700805810965-bfea8f8109ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBwcm8lMjBibGFja3xlbnwxfHx8fDE3NjQyNDkwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tytan. Tak mocny. Tak lekki. Tak Pro.',
    models: [
      {
        id: 'iphone-15-pro',
        name: 'iPhone 15 Pro',
        priceModifier: 0,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 500 },
          { id: '512gb', size: '512 GB', priceModifier: 1200 },
          { id: '1tb', size: '1 TB', priceModifier: 2000 },
        ],
      },
      {
        id: 'iphone-15-pro-max',
        name: 'iPhone 15 Pro Max',
        priceModifier: 1000,
        storageOptions: [
          { id: '256gb', size: '256 GB', priceModifier: 0 },
          { id: '512gb', size: '512 GB', priceModifier: 700 },
          { id: '1tb', size: '1 TB', priceModifier: 1500 },
        ],
      },
    ],
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    basePrice: 3999,
    image: 'https://images.unsplash.com/photo-1692521726889-02fda2c15454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjB3aGl0ZSUyMG1pbmltYWx8ZW58MXx8fHwxNzY0MTYwMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nowy design. Nowe możliwości. Niewiarygodna wytrzymałość.',
    models: [
      {
        id: 'iphone-15',
        name: 'iPhone 15',
        priceModifier: 0,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 400 },
          { id: '512gb', size: '512 GB', priceModifier: 1000 },
        ],
      },
      {
        id: 'iphone-15-plus',
        name: 'iPhone 15 Plus',
        priceModifier: 800,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 400 },
          { id: '512gb', size: '512 GB', priceModifier: 1000 },
        ],
      },
    ],
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    basePrice: 4299,
    image: 'https://images.unsplash.com/photo-1727093493740-90af54b99738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjB0aXRhbml1bSUyMHNpbHZlcnxlbnwxfHx8fDE3NjQyNDkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Dynamic Island. Aparat 48 MP. Wyświetlacz Always-On.',
    models: [
      {
        id: 'iphone-14-pro',
        name: 'iPhone 14 Pro',
        priceModifier: 0,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 450 },
          { id: '512gb', size: '512 GB', priceModifier: 1100 },
          { id: '1tb', size: '1 TB', priceModifier: 1800 },
        ],
      },
      {
        id: 'iphone-14-pro-max',
        name: 'iPhone 14 Pro Max',
        priceModifier: 900,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 450 },
          { id: '512gb', size: '512 GB', priceModifier: 1100 },
          { id: '1tb', size: '1 TB', priceModifier: 1800 },
        ],
      },
    ],
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    basePrice: 3499,
    image: 'https://images.unsplash.com/photo-1560944959-0dbbee124a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBnb2xkJTIwcm9zZXxlbnwxfHx8fDE3NjQyNDkwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Duży i większy. Fantastyczny i fenomenalny.',
    models: [
      {
        id: 'iphone-14',
        name: 'iPhone 14',
        priceModifier: 0,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 350 },
          { id: '512gb', size: '512 GB', priceModifier: 900 },
        ],
      },
      {
        id: 'iphone-14-plus',
        name: 'iPhone 14 Plus',
        priceModifier: 700,
        storageOptions: [
          { id: '128gb', size: '128 GB', priceModifier: 0 },
          { id: '256gb', size: '256 GB', priceModifier: 350 },
          { id: '512gb', size: '512 GB', priceModifier: 900 },
        ],
      },
    ],
  },
];

export const colorOptions: ColorOption[] = [
  { id: 'natural-titanium', name: 'Naturalny tytan', hex: '#E4E1DC', priceModifier: 0 },
  { id: 'blue-titanium', name: 'Niebieski tytan', hex: '#4A5969', priceModifier: 0 },
  { id: 'white-titanium', name: 'Biały tytan', hex: '#F0F0F0', priceModifier: 0 },
  { id: 'black-titanium', name: 'Czarny tytan', hex: '#403E3D', priceModifier: 0 },
  { id: 'pink', name: 'Różowy', hex: '#F0D5D9', priceModifier: 0 },
];

export const conditionOptions: ConditionOption[] = [
  {
    id: 'new',
    name: 'Nowy',
    description: 'Fabrycznie nowe urządzenie w oryginalnym opakowaniu',
    priceModifier: 0,
  },
  {
    id: 'refurbished',
    name: 'Odnowiony',
    description: 'Urządzenie odnowione przez Apple, pełna gwarancja',
    priceModifier: -800,
  },
  {
    id: 'used-excellent',
    name: 'Używany - Doskonały',
    description: 'Lekkie ślady użytkowania, w pełni sprawny',
    priceModifier: -1500,
  },
  {
    id: 'used-good',
    name: 'Używany - Dobry',
    description: 'Widoczne ślady użytkowania, w pełni sprawny',
    priceModifier: -2200,
  },
];
