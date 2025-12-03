import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FoodItemSkeleton = ({ count = 4 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow text-center h-full flex flex-col items-center"
          >
            {/* Circular Image Skeleton */}
            <Skeleton circle width={96} height={96} className="mb-4" />
            
            {/* Title Skeleton */}
            <Skeleton height={20} width="70%" className="mb-2" />
            
            {/* Price Skeleton */}
            <Skeleton height={18} width="40%" />
          </div>
        ))}
    </>
  );
};

export default FoodItemSkeleton;

