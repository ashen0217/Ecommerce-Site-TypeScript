import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation and 30-hour battery life.',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery', 'Wireless Charging', 'Premium Materials']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Wearables',
    description: 'Track your fitness goals with advanced health monitoring and GPS capabilities.',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 89,
    originalPrice: 129,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'A sleek, minimalist backpack perfect for daily commutes and travel adventures.',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    features: ['Laptop Compartment', 'Water Resistant', 'Ergonomic Design', 'Premium Materials']
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    price: 79,
    image: 'https://images.pexels.com/photos/6648001/pexels-photo-6648001.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/6648001/pexels-photo-6648001.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Compact speaker delivering powerful sound with 12-hour battery life.',
    rating: 4.3,
    reviewCount: 203,
    inStock: false,
    features: ['12-hour Battery', 'Waterproof', 'Wireless Pairing', 'Compact Design']
  },
  {
    id: '5',
    name: 'Professional Camera Lens',
    price: 599,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Photography',
    description: 'Professional-grade camera lens for stunning photography and videography.',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    features: ['Professional Grade', 'Multiple Focal Lengths', 'Image Stabilization', 'Weather Sealed']
  },
  {
    id: '6',
    name: 'Luxury Skincare Set',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Beauty',
    description: 'Complete skincare routine with premium natural ingredients for radiant skin.',
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    features: ['Natural Ingredients', 'Anti-Aging Formula', 'Dermatologist Tested', 'Complete Set']
  }
];

export const categories = [
  'All Products',
  'Electronics',
  'Fashion',
  'Beauty',
  'Photography',
  'Wearables'
];