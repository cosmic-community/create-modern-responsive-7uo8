import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-400 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://imgix.cosmicjs.com/2466f590-5902-11f1-876b-2597f2099e23-autopilot-photo-1626224583764-f87db24ac4ea-1779800116065.jpeg?w=2000&h=1000&fit=crop&auto=format,compress"
          alt="Badminton"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏸</span>
            <span>Câu Lạc Bộ Cầu Lông</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Chào Mừng Đến Với<br />
            <span className="text-yellow-300">CLB Cầu Lông</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Nơi gắn kết những người yêu thích cầu lông. Tham gia với chúng tôi để rèn luyện sức khỏe, 
            kết bạn mới và tận hưởng niềm đam mê với môn thể thao tuyệt vời này.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Tham Gia Câu Lạc Bộ
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30"
            >
              Xem Hoạt Động
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}