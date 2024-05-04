import React from 'react'
import { RatingProps } from '../types';

interface Rating {
    ratingProps: RatingProps
}

export default function Rating({ ratingProps }: Rating) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < ratingProps.rating; i++) {
            stars.push(
                <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>
            );
        }
        return stars;
    };
    return (

        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg m-4 w-72 ">
            <div className="bg-white w-full flex flex-col items-center rounded-xl p-8">
                <div className="flex flex-col items-center py-2 space-y-3">
                    <div className="flex space-x-3">

                        {renderStars()}
                    </div>
                    <span className="text-gray-600 text-sm font-semibold text-right opacity-85 font-mono">{ratingProps?.service}</span>
  <span className="text-base text-gray-800">&quot;{ratingProps?.description}&quot;</span>
                </div>
                <span className="text-gray-600 text-sm font-semibold text-right opacity-85 font-mono"> By - {ratingProps?.name}</span>
            </div>
        </div>
    )
}
