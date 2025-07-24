# StyleHub - Modern Ecommerce Website

A beautiful, fully-featured ecommerce website built with React, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse products with search and filtering capabilities
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Product Details**: View detailed product information with image galleries
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean design with smooth animations and micro-interactions
- **Category Filtering**: Filter products by category and sort by various criteria
- **User Interface**: Professional header, footer, and navigation

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd stylehub-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── ProductCard.tsx # Product display card
│   ├── ProductModal.tsx# Product detail modal
│   ├── Cart.tsx        # Shopping cart sidebar
│   ├── ProductFilters.tsx # Category and sort filters
│   └── Footer.tsx      # Site footer
├── data/               # Static data
│   └── products.ts     # Product catalog data
├── hooks/              # Custom React hooks
│   └── useCart.ts      # Cart management hook
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99,
  originalPrice: 129, // Optional sale price
  image: 'https://example.com/image.jpg',
  images: ['https://example.com/image1.jpg'], // Gallery images
  category: 'Category Name',
  description: 'Product description',
  rating: 4.5,
  reviewCount: 100,
  inStock: true,
  features: ['Feature 1', 'Feature 2']
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

### Adding Categories

Update the `categories` array in `src/data/products.ts`:

```typescript
export const categories = [
  'All Products',
  'Electronics',
  'Fashion',
  'Beauty',
  'Photography',
  'Wearables',
  'Your New Category'
];
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@stylehub.com or create an issue in the repository.