import { EventItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export default function EventCard({ event }: { event: EventItem }) {
  const eventDate = getMetafieldValue(event.metadata?.event_date);
  const startTime = getMetafieldValue(event.metadata?.start_time);
  const endTime = getMetafieldValue(event.metadata?.end_time);
  const location = getMetafieldValue(event.metadata?.location);
  const description = getMetafieldValue(event.metadata?.description);
  const status = getMetafieldValue(event.metadata?.status);

  const isUpcoming = status.toLowerCase().includes('upcoming') || status.toLowerCase().includes('sắp');

  let dateObj: Date | null = null;
  if (eventDate) {
    try {
      dateObj = new Date(eventDate);
    } catch {}
  }

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex">
        {dateObj && (
          <div className="bg-primary-500 text-white p-4 flex flex-col items-center justify-center min-w-[100px]">
            <div className="text-3xl font-bold">{dateObj.getDate()}</div>
            <div className="text-xs uppercase">
              {dateObj.toLocaleDateString('vi-VN', { month: 'short' })}
            </div>
            <div className="text-xs">{dateObj.getFullYear()}</div>
          </div>
        )}
        <div className="p-5 flex-grow">
          <div className="flex items-start justify-between mb-2 gap-2">
            <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
            {status && (
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                  isUpcoming
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {isUpcoming ? 'Sắp tới' : 'Đã qua'}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
          )}
          <div className="space-y-1 text-xs text-gray-500">
            {(startTime || endTime) && (
              <div>🕐 {startTime}{endTime && ` - ${endTime}`}</div>
            )}
            {location && <div>📍 {location}</div>}
            {eventDate && !dateObj && <div>📅 {formatDate(eventDate)}</div>}
          </div>
        </div>
      </div>
    </article>
  );
}