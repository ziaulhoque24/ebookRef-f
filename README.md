# E-book Referral & Credit System - Frontend

A modern Next.js 15 application for the FileSure E-book platform featuring a referral system and credit-based purchasing.

## 📋 Overview

This is the frontend application for the E-book Referral & Credit System. Built with Next.js 15, it provides a seamless user experience for browsing e-books, managing referrals, and using credits for purchases.

## 🚀 Features

- **Modern UI/UX**: Responsive design with Tailwind CSS and Framer Motion animations
- **User Authentication**: NextAuth.js integration with session management
- **E-book Browsing**: Browse, search, and filter e-books by genre
- **Shopping Cart**: Add books to cart with real-time price calculations
- **Referral Dashboard**: Track referrals, view conversion status, and share referral links
- **Credit Management**: View earned credits and apply them to purchases
- **Order History**: Complete purchase history with downloadable e-books
- **State Management**: Redux Toolkit for global state management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js
- **State Management**: Redux Toolkit with RTK Query
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Backend API running

### Setup Steps

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Configure environment variables**:
   Create a `.env.local` file in the frontend directory:

   ```env
   # Backend API
   NEXT_PUBLIC_API_URL="http://localhost:4001/api"

   # NextAuth Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key"

   # App Configuration
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

3. **Start development server**:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server

## 🎨 Key Features & Pages

### Public Pages

- **Home** (`/`) - Hero section with featured e-books
- **Book Details** (`/books/[id]`) - Detailed book information with Add to Cart
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration with optional referral code
- **Terms** (`/terms`) - Terms and conditions
- **Privacy** (`/privacy`) - Privacy policy
- **Contact** (`/contact`) - Contact information

### Protected Pages (Require Authentication)

- **Dashboard** (`/dashboard`) - User dashboard with:
  - Referral link and sharing functionality
  - Credit balance display
  - Referral statistics (pending/converted)
  - Purchase history
  - Active referrals list with status
- **Cart** (`/cart`) - Shopping cart with credit application

## 🔐 Authentication Flow

The application uses NextAuth.js v5 with credentials provider:

1. Users register with email, password, and optional referral code
2. Login returns JWT token stored in session
3. Protected routes automatically redirect unauthenticated users to login
4. Session data includes user ID, email, name, and credits

## 💳 Referral & Credit System

### User Journey

1. **New User Registration**:

   - User can optionally enter a referral code during signup
   - System validates and links referral relationship
   - User receives unique referral code

2. **Sharing Referrals**:

   - Users access referral dashboard
   - Copy unique referral link
   - Share with friends via social media or direct link

3. **Earning Credits**:

   - **Referrer**: Earns 2 credits when referred user makes first purchase
   - **Referred User**: Earns 2 credits on their first purchase
   - Credits displayed in dashboard and cart

4. **Using Credits**:
   - During checkout, users can apply available credits
   - Credits reduce the total purchase amount (1 credit = 1 currency unit)
   - Remaining balance is charged

## 🛒 Shopping Experience

1. **Browse**: View all e-books with pagination
2. **Add to Cart**: Add books to shopping cart
3. **Review**: View cart with total and available credits
4. **Checkout**: Apply credits and complete purchase
5. **Confirmation**: Receive order confirmation with download links

## 🗂️ Project Structure

```
frontend/
├── app/
│   ├── (auth)/              # Auth routes (login, register)
│   ├── actions/             # Server actions
│   ├── api/                 # API routes (NextAuth)
│   ├── books/               # Book pages
│   ├── cart/                # Shopping cart
│   ├── components/          # React components
│   │   ├── Cart/           # Cart components
│   │   ├── Dashboard/      # Dashboard components
│   │   └── Home/           # Home page components
│   ├── dashboard/          # User dashboard
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy page
│   ├── terms/              # Terms page
│   └── order-success/      # Order confirmation
├── lib/
│   ├── api/                # API client functions
│   └── functions.ts        # Utility functions
├── redux/
│   ├── app/                # Redux store configuration
│   └── feature/            # Feature slices & APIs
│       ├── api/            # Base API slice
│       ├── book/           # Book API
│       ├── cart/           # Cart state
│       ├── order/          # Order API
│       └── user/           # User API
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── auth.ts                 # NextAuth configuration
├── next.config.ts          # Next.js configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🎯 Redux Store Structure

The application uses Redux Toolkit with the following slices:

- **Cart Slice**: Shopping cart state (add, remove, clear items)
- **Book API**: E-book fetching and caching
- **User API**: User profile and credits data
- **Order API**: Order creation and history

RTK Query handles API caching, loading states, and automatic refetching.
