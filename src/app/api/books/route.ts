// src/app/api/books/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Book from '@/lib/models/Book';
import { books as staticBooks } from '@/app/data/books';

/**
 * GET /api/books
 * Returns all books from the database
 */
export async function GET() {
  try {
    try {
      await connectDB();
      const books = await Book.find({}).lean();

      if (books && books.length > 0) {
        return NextResponse.json({
          success: true,
          count: books.length,
          data: books,
        }, { status: 200 });
      }
    } catch (dbError) {
      console.error('Database connection failed, falling back to static data:', dbError);
    }

    // Fallback to static data
    return NextResponse.json({
      success: true,
      count: staticBooks.length,
      data: staticBooks,
      isStatic: true,
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching books:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch books',
      message: errorMessage,
    }, { status: 500 });
  }
}