import { RatingData } from '@/data/Data'
import React from 'react'
import Rating from './Rating'

export default function Feedback() {
  return (
    <section id="rating" className="slider  shadow-lg  overflow-hidden relative w-full bg-gray-lighter bg-primary hite py-8 success-metrics md:px-8 px-12">
    <div className="text-center mb-4">
      <h2 className="text-5xl font-bold text-secondary"><b className='text-secondary'>What clients say about </b> us </h2>
    </div>
    <div className="slide-track flex">
      <div className="flex overflow-x-auto whitespace-no-wrap">
        {RatingData.map((rating, index) => (
          <div key={index} className="flex-shrink-0 mr-4">
            <Rating key={rating.name} ratingProps={rating} />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
