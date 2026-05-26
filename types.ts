export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface NewsArticle extends CosmicObject {
  type: 'news';
  metadata: {
    title?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    excerpt?: string;
    content?: string;
    author?: string;
    published_date?: string;
    category?: string;
  };
}

export interface Activity extends CosmicObject {
  type: 'activities';
  metadata: {
    title?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    content?: string;
    activity_date?: string;
    location?: string;
    status?: string;
  };
}

export interface EventItem extends CosmicObject {
  type: 'events';
  metadata: {
    title?: string;
    event_date?: string;
    start_time?: string;
    end_time?: string;
    location?: string;
    description?: string;
    status?: string;
  };
}

export interface GalleryItem extends CosmicObject {
  type: 'gallery';
  metadata: {
    title?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    date?: string;
  };
}

export interface ClubMember extends CosmicObject {
  type: 'club-members';
  metadata: {
    name?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    role?: string;
    bio?: string;
    skill_level?: string;
  };
}

export interface JoinRequest extends CosmicObject {
  type: 'join-requests';
  metadata: {
    full_name?: string;
    phone?: string;
    email?: string;
    skill_level?: string;
    message?: string;
    submitted_at?: string;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}