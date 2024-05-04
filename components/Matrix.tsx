import React from 'react'

import { Works } from '../data/Data'; // Adjust the file path as needed

export default function Matrix() {
    return (
        <section id="results" className="bg-gray-lighter bg-gray-200 dark:bg-slate-700 dark:text-white hite py-16 success-metrics md:px-8 px-12">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4"><b className='text-blue-600'>Success</b> Metrics</h2>
                    <p className="text-lg text-primary font-semibold">Measuring our achievements and milestones</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {Works?.map(val => (<div key={val.name}
                        className="success-metric  text-black  bounceBottom-animation bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-yellow-500 hover:text-white  transition-all duration-300">
                        <h3 className="text-2xl font-bold text-primary counter   py-2" data-target-value="20">{val.count}</h3>
                        <p className="text-lg  font-semibold">{val.name}</p>
                    </div>))}

                </div>
            </div>
        </section>
    )
}
