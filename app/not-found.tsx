import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-7xl mb-4">🏸</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">Không tìm thấy trang bạn đang tìm.</p>
        <Link
          href="/"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}