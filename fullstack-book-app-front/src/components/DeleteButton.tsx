'use client';

import { useRouter } from 'next/navigation';

type Props = {
    id: number;
};

export default function DeleteButton({ id }: Props) {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = confirm('정말 삭제하시겠습니까?');
        if (!confirmed) return;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            alert('삭제 완료');
            router.push('/');
            router.refresh();
        } else {
            alert('삭제 실패');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="mt-6 bg-red-500 text-white px-5 py-3 rounded">
            삭제하기
        </button>
    );
}