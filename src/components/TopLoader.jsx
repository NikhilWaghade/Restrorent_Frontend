import React from 'react';

const TopLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <>
      {/* Top Loading Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
        {/* Main loading bar with gradient and pulse */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 shadow-lg overflow-hidden animate-pulse">
          {/* Animated moving shimmer */}
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-loading-bar" 
               style={{ 
                 backgroundSize: '200% 100%',
                 opacity: 0.7 
               }} 
          />
        </div>
        {/* Glow effect underneath */}
        <div className="h-1 bg-gradient-to-r from-red-500/40 via-pink-500/40 to-red-500/40 blur-md" />
      </div>
    </>
  );
};

export default TopLoader;

