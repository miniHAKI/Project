import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center mt-16 sm:mt-20 md:mt-28 px-4 text-center">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-7xl">404 Not Found</h1>
      <p className="font-medium tracking-tighter pt-6 sm:pt-8 text-sm sm:text-base md:text-lg">
        The page you were looking for does not exist. You may return to the home page.
      </p>
      <button className="bg-[#DB4444] hover:bg-[#ba3530] text-white px-4 py-2 sm:px-6 sm:py-3 mt-6 sm:mt-8 rounded-md">
        Back to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
