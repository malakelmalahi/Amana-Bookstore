// src/app/api/books/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Book from '@/lib/models/Book';

/**
 * GET /api/books
 * Returns all books from the database
 */
import { books as staticBooks } from '@/app/data/books';

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
    console.warn('MongoDB connection failed, falling back to static books data:', error);
    return NextResponse.json({
      success: true,
      count: staticBooks.length,
      data: staticBooks,
    }, { status: 200 });
  }
}