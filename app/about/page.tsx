import SectionTitle from '@/components/SectionTitle';
import MemberCard from '@/components/MemberCard';
import EmptyState from '@/components/EmptyState';
import { getAllMembers } from '@/lib/cosmic';

export const metadata = {
  title: 'Giới Thiệu | CLB Cầu Lông',
  description: 'Giới thiệu về câu lạc bộ, sứ mệnh, tầm nhìn và thành viên',
};

export default async function AboutPage() {
  const members = await getAllMembers();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Về Câu Lạc Bộ</h1>
          <p className="text-xl text-white/90">Đam mê - Đoàn kết - Vươn xa</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-500">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sứ Mệnh</h3>
              <p className="text-gray-700 leading-relaxed">
                Tạo môi trường thể thao lành mạnh, gắn kết những người yêu thích cầu lông, 
                rèn luyện sức khỏe và phát triển kỹ năng cá nhân.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-400">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tầm Nhìn</h3>
              <p className="text-gray-700 leading-relaxed">
                Trở thành câu lạc bộ cầu lông năng động hàng đầu, nơi mọi thành viên có thể 
                phát triển toàn diện cả về thể chất lẫn tinh thần.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Giá Trị Cốt Lõi" centered />
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: '💪', title: 'Đam mê', desc: 'Yêu thích cầu lông' },
              { icon: '🤝', title: 'Đoàn kết', desc: 'Gắn bó như gia đình' },
              { icon: '⚡', title: 'Năng động', desc: 'Luôn hứng khởi' },
              { icon: '🏆', title: 'Vươn xa', desc: 'Không ngừng phát triển' },
            ].map((v) => (
              <div key={v.title} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">{v.title}</h4>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="👥 Thành Viên CLB" subtitle="Gặp gỡ những thành viên năng động của chúng tôi" centered />
          {members.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <EmptyState message="Chưa có thông tin thành viên." />
          )}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="🏆 Thành Tựu" centered />
          <div className="grid md:grid-cols-4 gap-6 mt-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-yellow-300">100+</div>
              <div className="text-white/90 mt-2">Thành viên</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-yellow-300">50+</div>
              <div className="text-white/90 mt-2">Sự kiện tổ chức</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-yellow-300">20+</div>
              <div className="text-white/90 mt-2">Giải đấu</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-yellow-300">5+</div>
              <div className="text-white/90 mt-2">Năm hoạt động</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}