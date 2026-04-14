// src/app/api/books/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Book from '@/lib/models/Book';
import { books as staticBooks } from '@/app/data/books';

/**
 * GET /api/books/[id]
 * Returns a single book by ID
 */
export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        try {
            await connectDB();

            // Try to find by MongoDB _id first, then by custom id field
            let book = await Book.findById(id).lean();

            if (!book) {
                book = await Book.findOne({ id: id }).lean();
            }

            if (book) {
                return NextResponse.json({
                    success: true,
                    data: book,
                }, { status: 200 });
            }
        } catch (dbError) {
            console.error('Database connection failed, falling back to static data:', dbError);
        }

        // Fallback to static data
        const staticBook = staticBooks.find(b => b.id === id);

        if (staticBook) {
            return NextResponse.json({
                success: true,
                data: staticBook,
                isStatic: true,
            }, { status: 200 });
        }

        return NextResponse.json({
            success: false,
            error: 'Book not found',
        }, { status: 404 });

    } catch (error) {
        console.error('Error fetching book:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch book',
            message: errorMessage,
        }, { status: 500 });
    }
}
