import Link from 'next/link'
import React from 'react'

export default function BookAppointment() {
  return (
    <button className="hidden md:flex items-center space-x-3">
    <Link href="/appointment"
        className="py-2 font-medium md:text-sm text-base  rounded-full text-white bg-yellow-500 px-4 shadow-2xl hover:bg-blue-700 transition duration-300"
      >
      Book Appointment
      </Link>
    </button>
  )
}
