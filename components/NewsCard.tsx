import Link from 'next/link';
import { NewsArticle } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export default function NewsCard({ article }: { article: NewsArticle }) {
  const featuredImage = article.metadata?.featured_image;
  const excerpt = getMetafieldValue(article.metadata?.excerpt);
  const author = getMetafieldValue(article.metadata?.author);
  const category = getMetafieldValue(article.metadata?.category);
  const publishedDate = getMetafieldValue(article.metadata?.published_date);

  return (
    <Link href={`/news/${article.slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {featuredImage && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={article.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5 flex-grow flex flex-col">
          {category && (
            <span className="inline-block self-start text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full mb-2">
              {category}
            </span>
          )}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          {excerpt && (
            <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          )}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
            {author && <span>✍️ {author}</span>}
            {publishedDate && <span>📅 {formatDate(publishedDate)}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}