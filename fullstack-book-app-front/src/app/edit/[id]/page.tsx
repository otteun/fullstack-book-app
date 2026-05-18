'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    params: Promise<{ id: string }>;
};

export default function EditPage({ params }: Props) {
    const router = useRouter();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        async function fetchBook() {
            const { id } = await params;
            setId(id);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`);
            const data = await res.json();

            setTitle(data.title);
            setAuthor(data.author);
            setPrice(String(data.price));
        }

        fetchBook();
    }, [params]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                author,
                price: Number(price),
                available: true,
            }),
        });

        if (res.ok) {
            alert('수정 완료');
            router.push(`/books/${id}`);
            router.refresh();
        } else {
            alert('수정 실패');
        }
    };

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">도서 수정</h1>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border p-3 rounded"
                />

                <button type="submit" className="bg-blue-500 text-white px-5 py-3 rounded">
                    수정하기
                </button>
            </form>
        </main>
    );
}