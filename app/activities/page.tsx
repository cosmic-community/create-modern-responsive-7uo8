import SectionTitle from '@/components/SectionTitle';
import ActivityCard from '@/components/ActivityCard';
import EmptyState from '@/components/EmptyState';
import { getAllActivities } from '@/lib/cosmic';

export const metadata = {
  title: 'Hoạt Động | CLB Cầu Lông',
  description: 'Các hoạt động cầu lông của câu lạc bộ',
};

export default async function ActivitiesPage() {
  const activities = await getAllActivities();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="🏸 Hoạt Động" subtitle="Buổi tập, giao hữu, giải đấu và các sự kiện cộng đồng" />
      {activities.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      ) : (
        <EmptyState message="Chưa có hoạt động nào." />
      )}
    </div>
  );
}