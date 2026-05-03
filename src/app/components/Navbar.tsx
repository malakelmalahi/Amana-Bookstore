// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';
import { CartItem } from '../types';

const Navbar: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // This function updates the cart count from localStorage.
    // It's designed to run on the client side only.
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          const cart: CartItem[] = JSON.parse(storedCart);
          const count = cart.reduce((total, item) => total + item.quantity, 0);
          setCartItemCount(count);
        } catch (error) {
          console.error('Failed to parse cart from localStorage', error);
          setCartItemCount(0);
        }
      } else {
        setCartItemCount(0);
      }
    };

    // Initial update
    updateCartCount();

    // Listen for custom event to update cart count
    window.addEventListener('cartUpdated', updateCartCount);

    // Clean up the event listener
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);
  
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 cursor-pointer">
          Amana Bookstore
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`text-gray-600 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-colors cursor-pointer outline-none ${pathname === '/' ? 'text-blue-500 font-semibold' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/cart"
            aria-current={pathname === '/cart' ? 'page' : undefined}
            aria-label={`My Cart, ${cartItemCount} ${cartItemCount === 1 ? 'item' : 'items'}`}
            className={`text-gray-600 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 flex items-center transition-colors cursor-pointer outline-none ${pathname === '/cart' ? 'text-blue-500 font-semibold' : ''}`}
          >
            My Cart
            {cartItemCount > 0 && (
              <span
                aria-hidden="true"
                className="ml-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
