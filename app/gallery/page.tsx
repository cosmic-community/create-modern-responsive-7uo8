import SectionTitle from '@/components/SectionTitle';
import GalleryGrid from '@/components/GalleryGrid';
import { getAllGallery } from '@/lib/cosmic';

export const metadata = {
  title: 'Thư Viện Ảnh | CLB Cầu Lông',
  description: 'Hình ảnh từ các buổi tập, giải đấu và sự kiện',
};

export default async function GalleryPage() {
  const items = await getAllGallery();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="🖼️ Thư Viện Ảnh" subtitle="Khoảnh khắc đáng nhớ từ các buổi tập, giải đấu và sự kiện" />
      <GalleryGrid items={items} />
    </div>
  );
}