'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
            method: 'POST',
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
            router.push('/');
            router.refresh();
        } else {
            alert('도서 등록 실패');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input
                type="text"
                placeholder="도서 제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded"
                required
            />

            <input
                type="text"
                placeholder="저자명"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border p-3 rounded"
                required
            />

            <input
                type="number"
                placeholder="가격"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-3 rounded"
                required
            />

            <button type="submit" className="bg-black text-white px-5 py-3 rounded">
                등록하기
            </button>
        </form>
    );
}