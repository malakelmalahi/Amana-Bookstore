// src/app/api/books/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Book from '@/lib/models/Book';
import { books as staticBooks } from '@/app/data/books';

/**
 * GET /api/books
 * Returns all books from the database, or falls back to static data if MongoDB is offline
 */
export async function GET() {
  try {
    await connectDB();

    const books = await Book.find({}).lean();

    return NextResponse.json({
      success: true,
      count: books.length,
      data: books,
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching books, falling back to static data:', error);
    return NextResponse.json({
      success: true,
      count: staticBooks.length,
      data: staticBooks,
    }, { status: 200 });
  }
}