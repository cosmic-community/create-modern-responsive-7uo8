import { createBucketClient } from '@cosmicjs/sdk';
import { NewsArticle, Activity, EventItem, GalleryItem, ClubMember, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getAllNews(): Promise<NewsArticle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    const news = response.objects as NewsArticle[];
    return news.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || a.created_at).getTime();
      const dateB = new Date(b.metadata?.published_date || b.created_at).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'news', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.object as NewsArticle;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw error;
  }
}

export async function getAllActivities(): Promise<Activity[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'activities' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    const activities = response.objects as Activity[];
    return activities.sort((a, b) => {
      const dateA = new Date(a.metadata?.activity_date || a.created_at).getTime();
      const dateB = new Date(b.metadata?.activity_date || b.created_at).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'activities', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.object as Activity;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw error;
  }
}

export async function getAllEvents(): Promise<EventItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    const events = response.objects as EventItem[];
    return events.sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date || a.created_at).getTime();
      const dateB = new Date(b.metadata?.event_date || b.created_at).getTime();
      return dateA - dateB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getAllGallery(): Promise<GalleryItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'gallery' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    const items = response.objects as GalleryItem[];
    return items.sort((a, b) => {
      const dateA = new Date(a.metadata?.date || a.created_at).getTime();
      const dateB = new Date(b.metadata?.date || b.created_at).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getAllMembers(): Promise<ClubMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'club-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as ClubMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function submitJoinRequest(data: {
  full_name: string;
  phone: string;
  email: string;
  skill_level: string;
  message: string;
}) {
  return await cosmic.objects.insertOne({
    type: 'join-requests',
    title: data.full_name,
    metadata: {
      full_name: data.full_name,
      phone: data.phone,
      email: data.email,
      skill_level: data.skill_level,
      message: data.message,
      submitted_at: new Date().toISOString(),
    },
  });
}