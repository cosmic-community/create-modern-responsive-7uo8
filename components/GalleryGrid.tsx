'use client';

import { useState } from 'react';
import { GalleryItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import { formatDate } from '@/lib/utils';

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        Chưa có ảnh trong thư viện.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const image = item.metadata?.image;
          if (!image) return null;
          return (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-sm font-medium line-clamp-2">{item.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {selected && selected.metadata?.image && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={`${selected.metadata.image.imgix_url}?w=1600&auto=format,compress`}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              {getMetafieldValue(selected.metadata?.description) && (
                <p className="mt-2 text-gray-300">{getMetafieldValue(selected.metadata.description)}</p>
              )}
              {getMetafieldValue(selected.metadata?.date) && (
                <p className="mt-1 text-sm text-gray-400">{formatDate(getMetafieldValue(selected.metadata.date))}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}