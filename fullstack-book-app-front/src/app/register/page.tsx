import BookForm from '@/components/BookForm';

export default function RegisterPage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">도서 등록</h1>

            <BookForm />
        </main>
    );
}