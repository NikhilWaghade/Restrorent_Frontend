import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogSkeleton = ({ count = 3 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-full"
          >
            {/* Image Skeleton */}
            <Skeleton height={192} className="w-full" />
            
            {/* Content Skeleton */}
            <div className="p-4">
              {/* Title */}
              <Skeleton height={20} className="mb-2" />
              <Skeleton height={20} width="80%" className="mb-3" />
              
              {/* Meta Info */}
              <Skeleton height={14} width="40%" />
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogSkeleton;

