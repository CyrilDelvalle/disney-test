import React, { useState } from 'react'
import hostels from '../../api/hotels.json'
import HotelItem  from './HotelItem'
import Hostel from '../../interfaces/Hostel'

function ListHotel() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Hotels</h2>
          <div className="my-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4 ">
            {hostels.map((hostel: Hostel ) => (
              <HotelItem 
              key={hostel.id}
              hostel={hostel}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default ListHotel
