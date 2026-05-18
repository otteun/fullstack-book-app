import Link from 'next/link';

type BookCardProps = {
    id: number;
    title: string;
    author: string;
    price: number;
    available: boolean;
};

export default function BookCard({ id, title, author, price, available }: BookCardProps) {
    return (
        <Link href={`/books/${id}`}>
            <div className="border p-4 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>저자: {author}</p>
                <p>가격: {price}원</p>
                <p>상태: {available ? ' 대출 가능' : ' 대출 불가'}</p>
            </div>
        </Link>
    );
}