import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import EmptyState from '@/components/EmptyState';
import { getAllNews } from '@/lib/cosmic';

export const metadata = {
  title: 'Tin Tức | CLB Cầu Lông',
  description: 'Tin tức mới nhất từ Câu Lạc Bộ Cầu Lông',
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="📰 Tin Tức" subtitle="Cập nhật tin tức và thông báo mới nhất từ câu lạc bộ" />
      {news.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <EmptyState message="Chưa có tin tức nào được đăng." />
      )}
    </div>
  );
}