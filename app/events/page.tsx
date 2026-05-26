import SectionTitle from '@/components/SectionTitle';
import EventCard from '@/components/EventCard';
import EmptyState from '@/components/EmptyState';
import { getAllEvents } from '@/lib/cosmic';

export const metadata = {
  title: 'Sự Kiện & Lịch Tập | CLB Cầu Lông',
  description: 'Lịch tập và các sự kiện sắp tới của CLB',
};

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle title="📅 Sự Kiện & Lịch Tập" subtitle="Lịch tập và các sự kiện sắp tới của câu lạc bộ" />
      {events.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <EmptyState message="Chưa có sự kiện nào." />
      )}
    </div>
  );
}