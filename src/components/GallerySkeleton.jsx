import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GallerySkeleton = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="overflow-hidden rounded shadow-md">
            {/* Gallery Image Skeleton */}
            <Skeleton height={256} className="w-full" />
          </div>
        ))}
    </>
  );
};

export default GallerySkeleton;

