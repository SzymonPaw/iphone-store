export interface Product {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  description: string;
  models: Model[];
}

export interface Model {
  id: string;
  name: string;
  priceModifier: number;
  storageOptions: StorageOption[];
}

export interface StorageOption {
  id: string;
  size: string;
  priceModifier: number;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  priceModifier: number;
}

export interface ConditionOption {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
}

export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  modelName: string;
  storage: string;
  color: string;
  condition: string;
  price: number;
  quantity: number;
}

export interface ProductConfiguration {
  model: Model | null;
  storage: StorageOption | null;
  color: ColorOption | null;
  condition: ConditionOption | null;
}
