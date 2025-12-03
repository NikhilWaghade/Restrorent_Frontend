import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MenuItemSkeleton = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
          >
            {/* Image Skeleton */}
            <Skeleton height={288} className="w-full" />

            {/* Content Skeleton */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                {/* Title */}
                <Skeleton height={24} width="80%" className="mb-2" />
                
                {/* Price */}
                <Skeleton height={20} width="40%" className="mb-3" />
                
                {/* Description */}
                <Skeleton count={2} height={16} className="mb-2" />
              </div>
              
              {/* Button Skeleton */}
              <Skeleton height={40} className="mt-4 rounded" />
            </div>
          </div>
        ))}
    </>
  );
};

export default MenuItemSkeleton;

