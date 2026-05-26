import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import ActivityCard from '@/components/ActivityCard';
import EmptyState from '@/components/EmptyState';
import { getAllNews, getAllActivities } from '@/lib/cosmic';

export default async function HomePage() {
  const [news, activities] = await Promise.all([getAllNews(), getAllActivities()]);
  const latestNews = news.slice(0, 3);
  const recentActivities = activities.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">🏸</div>
              <h3 className="font-bold text-xl mb-2">Đam mê thể thao</h3>
              <p className="text-gray-600">Cùng nhau rèn luyện và phát triển kỹ năng cầu lông mỗi ngày.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-2">Cộng đồng thân thiện</h3>
              <p className="text-gray-600">Kết bạn với những người có cùng sở thích và đam mê.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-xl mb-2">Giải đấu sôi nổi</h3>
              <p className="text-gray-600">Tham gia các giải đấu nội bộ và giao lưu với các CLB khác.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <SectionTitle title="📰 Tin Tức Mới Nhất" subtitle="Cập nhật những thông tin mới nhất từ câu lạc bộ" />
            <Link href="/news" className="text-primary-600 font-semibold hover:text-primary-700 mt-2">
              Xem tất cả →
            </Link>
          </div>
          {latestNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState message="Chưa có tin tức nào." />
          )}
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <SectionTitle title="🏸 Hoạt Động Gần Đây" subtitle="Theo dõi các hoạt động của câu lạc bộ" />
            <Link href="/activities" className="text-primary-600 font-semibold hover:text-primary-700 mt-2">
              Xem tất cả →
            </Link>
          </div>
          {recentActivities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          ) : (
            <EmptyState message="Chưa có hoạt động nào." />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Sẵn sàng tham gia cùng chúng tôi?</h2>
          <p className="text-xl text-white/90 mb-8">
            Đăng ký ngay hôm nay và trở thành một phần của cộng đồng cầu lông năng động!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-xl"
          >
            Tham Gia Ngay 🏸
          </Link>
        </div>
      </section>
    </div>
  );
}