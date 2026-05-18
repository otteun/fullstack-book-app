import BookCard from "@/components/BookCard";

type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
    available: boolean;
};

async function getBooks(): Promise<Book[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("도서 목록 불러오기 실패");
    }

    return res.json();
}

export default async function HomePage() {
    const books = await getBooks();

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">도서 목록</h1>

            <div className="space-y-4">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        available={book.available}
                    />
                ))}
            </div>
        </main>
    );
}