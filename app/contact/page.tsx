import SectionTitle from '@/components/SectionTitle';
import JoinForm from '@/components/JoinForm';

export const metadata = {
  title: 'Liên Hệ & Đăng Ký | CLB Cầu Lông',
  description: 'Liên hệ và đăng ký tham gia CLB Cầu Lông',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="✉️ Liên Hệ & Tham Gia" subtitle="Đăng ký ngay để trở thành thành viên của CLB Cầu Lông" centered />

      <div className="grid lg:grid-cols-5 gap-8 mt-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-primary-600 to-emerald-500 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="text-white/80 text-sm">Email</div>
                  <div className="font-semibold">info@badmintonclub.vn</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-white/80 text-sm">Điện thoại</div>
                  <div className="font-semibold">(+84) 123 456 789</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-white/80 text-sm">Địa chỉ</div>
                  <div className="font-semibold">Hà Nội, Việt Nam</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <div className="text-white/80 text-sm">Giờ tập</div>
                  <div className="font-semibold">Thứ 2, 4, 6 - 18:00 - 21:00</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-white/80 text-sm mb-3">Theo dõi chúng tôi</div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center font-bold">f</a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center font-bold">in</a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center font-bold">@</a>
                <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center font-bold">▶</a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-2">🏸 Tại sao tham gia?</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Rèn luyện sức khỏe</li>
              <li>✓ Kết bạn mới</li>
              <li>✓ Tham gia giải đấu</li>
              <li>✓ Huấn luyện viên kinh nghiệm</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký tham gia CLB</h3>
          <p className="text-gray-600 mb-6">Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
          <JoinForm />
        </div>
      </div>
    </div>
  );
}