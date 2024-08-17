import { RatingData } from '@/data/Data'
import React from 'react'
import Rating from './Rating'

export default function Feedback() {
  return (
    <section id="rating" className="slider shadow-lg overflow-hidden relative w-full bg-gray-lighter bg-primary py-8 md:px-8 px-12">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-secondary">
          <b className='text-secondary'>What clients say about </b> us
        </h2>
      </div>
      <div className="slide-track">
        <div className="flex">
          {RatingData.concat(RatingData).map((rating, index) => ( // Duplicate the data for continuous scrolling
            <div key={index} className="flex-shrink-0 mr-4">
              <Rating ratingProps={rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
