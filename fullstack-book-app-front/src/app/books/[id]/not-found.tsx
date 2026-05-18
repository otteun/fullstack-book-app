import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
            <span className="text-6xl mb-4">🔍</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">요청하신 도서를 찾을 수 없습니다.</h2>
            <p className="text-gray-500 mb-6">삭제되었거나 잘못된 경로입니다. 다른 ID로 시도해 주세요.</p>
            <Link
                href="/"
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-2.5 rounded-xl transition duration-200 text-sm"
            >
                메인으로 이동
            </Link>
        </div>
    );
}