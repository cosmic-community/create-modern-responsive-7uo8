import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🏸</span>
              <span className="font-bold text-xl text-white">CLB Cầu Lông</span>
            </div>
            <p className="text-sm">
              Câu lạc bộ cầu lông năng động, thân thiện - nơi gắn kết những người yêu thích bộ môn cầu lông.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/news" className="hover:text-primary-400">Tin Tức</Link></li>
              <li><Link href="/activities" className="hover:text-primary-400">Hoạt Động</Link></li>
              <li><Link href="/events" className="hover:text-primary-400">Sự Kiện</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-400">Thư Viện Ảnh</Link></li>
              <li><Link href="/about" className="hover:text-primary-400">Giới Thiệu</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 info@badmintonclub.vn</li>
              <li>📞 (+84) 123 456 789</li>
              <li>📍 Hà Nội, Việt Nam</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white">f</a>
              <a href="#" className="w-9 h-9 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white">in</a>
              <a href="#" className="w-9 h-9 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white">@</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} CLB Cầu Lông. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}