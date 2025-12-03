import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ChefSkeleton = ({ count = 3 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 text-center"
          >
            {/* Profile Image Skeleton */}
            <Skeleton circle width={128} height={128} className="mx-auto mb-4" />
            
            {/* Name Skeleton */}
            <Skeleton height={24} width="80%" className="mx-auto mb-2" />
            
            {/* Specialty Skeleton */}
            <Skeleton height={18} width="60%" className="mx-auto mb-3" />
            
            {/* Description Skeleton */}
            <Skeleton count={2} height={14} className="mb-1" />
          </div>
        ))}
    </>
  );
};

export default ChefSkeleton;

