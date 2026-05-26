import Link from 'next/link';
import { Activity } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export default function ActivityCard({ activity }: { activity: Activity }) {
  const image = activity.metadata?.image;
  const description = getMetafieldValue(activity.metadata?.description);
  const activityDate = getMetafieldValue(activity.metadata?.activity_date);
  const location = getMetafieldValue(activity.metadata?.location);
  const status = getMetafieldValue(activity.metadata?.status);

  const isUpcoming = status.toLowerCase().includes('upcoming') || status.toLowerCase().includes('sắp');

  return (
    <Link href={`/activities/${activity.slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {image && (
          <div className="aspect-video overflow-hidden bg-gray-100 relative">
            <img
              src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={activity.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {status && (
              <span
                className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                  isUpcoming
                    ? 'bg-yellow-400 text-yellow-900'
                    : 'bg-primary-500 text-white'
                }`}
              >
                {isUpcoming ? 'Sắp diễn ra' : 'Đã hoàn thành'}
              </span>
            )}
          </div>
        )}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
            {activity.title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{description}</p>
          )}
          <div className="space-y-1 text-xs text-gray-500 pt-3 border-t border-gray-100">
            {activityDate && <div>📅 {formatDate(activityDate)}</div>}
            {location && <div>📍 {location}</div>}
          </div>
        </div>
      </article>
    </Link>
  );
}