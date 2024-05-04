import { Service } from '@/types'
import React from 'react'

interface Details {
  details: Service
}
export default function Card({ details }: Details) {
  return (

      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4  h-64 dark:bg-slate-150">
        {/* <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div> */}
        <div>
          <h2 className="text-gray-800 text-xl font-semibold">{details.name}</h2>
          <p className="mt-4 text-gray-600 truncate-overflow">
            {details.description}
          </p>
        </div>

      </div>
  )
}
