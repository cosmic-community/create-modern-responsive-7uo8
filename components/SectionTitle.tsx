export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
      <div className={`mt-3 h-1 w-20 bg-primary-500 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}