// app/activities/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getActivityBySlug, getAllActivities, getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const activities = await getAllActivities();
  return activities.map((activity) => ({ slug: activity.slug }));
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);

  if (!activity) notFound();

  const image = activity.metadata?.image;
  const description = getMetafieldValue(activity.metadata?.description);
  const content = getMetafieldValue(activity.metadata?.content);
  const activityDate = getMetafieldValue(activity.metadata?.activity_date);
  const location = getMetafieldValue(activity.metadata?.location);
  const status = getMetafieldValue(activity.metadata?.status);

  const isUpcoming = status.toLowerCase().includes('upcoming') || status.toLowerCase().includes('sắp');

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/activities" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
        ← Quay lại Hoạt Động
      </Link>

      <div className="flex items-center gap-3 mb-4">
        {status && (
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              isUpcoming ? 'bg-yellow-100 text-yellow-800' : 'bg-primary-100 text-primary-800'
            }`}
          >
            {isUpcoming ? 'Sắp diễn ra' : 'Đã hoàn thành'}
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{activity.title}</h1>

      <div className="bg-gray-50 rounded-xl p-5 mb-8 grid sm:grid-cols-2 gap-3">
        {activityDate && (
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">📅</span>
            <div>
              <div className="text-xs text-gray-500">Ngày</div>
              <div className="font-semibold">{formatDate(activityDate)}</div>
            </div>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">📍</span>
            <div>
              <div className="text-xs text-gray-500">Địa điểm</div>
              <div className="font-semibold">{location}</div>
            </div>
          </div>
        )}
      </div>

      {image && (
        <img
          src={`${image.imgix_url}?w=1600&auto=format,compress`}
          alt={activity.title}
          className="w-full rounded-xl mb-8 shadow-lg"
        />
      )}

      {description && (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
      )}

      {content && (
        <div
          className="prose-content text-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  );
}