// src/app/api/cart/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Cart from '@/lib/models/Cart';
import { initialCart as staticCart } from '@/app/data/cart';

/**
 * GET /api/cart
 * Returns all carts from the database
 * Optional query parameter: userId to filter cart by user
 */
export async function GET(request: NextRequest) {
  try {
    try {
      await connectDB();

      // Get userId from query parameters if provided
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get('userId');

      let carts;
      if (userId) {
        // Filter cart by userId if provided
        carts = await Cart.find({ userId }).lean();
      } else {
        // Return all carts
        carts = await Cart.find({}).lean();
      }

      if (carts && carts.length > 0) {
        return NextResponse.json({
          success: true,
          count: carts.length,
          data: carts,
        }, { status: 200 });
      }
    } catch (dbError) {
      console.error('Database connection failed, falling back to static data:', dbError);
    }

    // Fallback to static data
    return NextResponse.json({
      success: true,
      count: staticCart.length,
      data: staticCart,
      isStatic: true,
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching carts:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch carts',
      message: errorMessage,
    }, { status: 500 });
  }
}