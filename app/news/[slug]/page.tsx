// app/news/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsBySlug, getAllNews, getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) notFound();

  const featuredImage = article.metadata?.featured_image;
  const excerpt = getMetafieldValue(article.metadata?.excerpt);
  const content = getMetafieldValue(article.metadata?.content);
  const author = getMetafieldValue(article.metadata?.author);
  const category = getMetafieldValue(article.metadata?.category);
  const publishedDate = getMetafieldValue(article.metadata?.published_date);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/news" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
        ← Quay lại Tin Tức
      </Link>

      {category && (
        <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
          {category}
        </span>
      )}

      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{article.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
        {author && <span>✍️ <strong>{author}</strong></span>}
        {publishedDate && <span>📅 {formatDate(publishedDate)}</span>}
      </div>

      {featuredImage && (
        <img
          src={`${featuredImage.imgix_url}?w=1600&auto=format,compress`}
          alt={article.title}
          className="w-full rounded-xl mb-8 shadow-lg"
        />
      )}

      {excerpt && (
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium italic border-l-4 border-primary-500 pl-4">
          {excerpt}
        </p>
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