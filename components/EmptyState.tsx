export default function EmptyState({ message = 'Chưa có nội dung.' }: { message?: string }) {
  return (
    <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <div className="text-5xl mb-4">📭</div>
      <p className="text-gray-500 text-lg">{message}</p>
    </div>
  );
}