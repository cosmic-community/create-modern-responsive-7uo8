import { ClubMember } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function MemberCard({ member }: { member: ClubMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title;
  const avatar = member.metadata?.avatar;
  const role = getMetafieldValue(member.metadata?.role);
  const bio = getMetafieldValue(member.metadata?.bio);
  const skillLevel = getMetafieldValue(member.metadata?.skill_level);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center p-6">
      {avatar ? (
        <img
          src={`${avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
          alt={name}
          width={150}
          height={150}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-100"
        />
      ) : (
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-100 flex items-center justify-center text-3xl mx-auto mb-4">
          👤
        </div>
      )}
      <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      {role && <p className="text-primary-600 text-sm font-medium mb-2">{role}</p>}
      {skillLevel && (
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {skillLevel}
        </span>
      )}
      {bio && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{bio}</p>}
    </div>
  );
}