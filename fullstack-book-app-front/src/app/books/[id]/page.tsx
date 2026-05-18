import DeleteButton from '@/components/DeleteButton';
import Link from 'next/link';

type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
    available: boolean;
};

async function getBook(id: string): Promise<Book> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("도서 정보를 불러올 수 없습니다.");
    }

    return res.json();
}

type Props = {
    params: Promise<{ id: string }>;
};

export default async function BookDetailPage({ params }: Props) {
    const { id } = await params;
    const book = await getBook(id);

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">도서 상세 페이지</h1>

            <div className="border p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>
                <p className="mb-2">저자: {book.author}</p>
                <p className="mb-2">가격: {book.price}원</p>
                <p>상태: {book.available ? " 대출 가능" : " 대출 불가"}</p>
            </div>

            <Link
                href={`/edit/${book.id}`}
                className="inline-block mt-6 mr-4 bg-blue-500 text-white px-5 py-3 rounded"
            >
                수정하기
            </Link>
            <DeleteButton id={book.id} />
        </main>
    );
}