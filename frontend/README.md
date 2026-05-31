# Ahoum Frontend

A React-based e-commerce/food delivery application frontend built with modern tooling.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript 6
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **State Management:** Zustand
- **Notifications:** React Toastify
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Pages

| Route              | Page             |
| ------------------ | ---------------- |
| `/`                | Splash Screen    |
| `/onboarding`      | Onboarding       |
| `/signin`          | Sign In          |
| `/number`          | Phone Number     |
| `/verification`    | Verification     |
| `/location`        | Location         |
| `/login`           | Login            |
| `/signup`          | Sign Up          |
| `/home`            | Home Screen      |
| `/explore`         | Explore          |
| `/products/:category` | Products by Category |
| `/cart`            | My Cart          |
| `/favourite`       | Favourites       |
| `/account`         | Account          |
| `/order-accepted`  | Order Accepted   |
| `/track-order`     | Track Order      |
| `/product-detail`  | Product Detail   |

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── api/          # API integration layer
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable UI components
├── pages/        # Page-level components (routes)
├── store/        # Zustand state stores
├── App.tsx       # Root component with routing
├── main.tsx      # Application entry point
├── index.css     # Global styles (Tailwind CSS)
└── types.ts      # Shared TypeScript type definitions
```

## 🧪 ESLint Configuration

The project uses ESLint with TypeScript-aware lint rules for production-grade code quality. See `eslint.config.js` for the full configuration.