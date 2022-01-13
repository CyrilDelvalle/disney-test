import React, { useState } from 'react'
import Image from 'next/image'
import hotels from '../pages/api/hotels.json'
import HotelItem  from './HotelItem'

export interface Hostel {
  id: number,
  name: string,
  description: string,
  image: string,
  imageAlt: string
}



// isSelected={currentBook.tome === book.tome ? true : false}
// book={book}
// onSetCurrentBook={onSetCurrentBook}
// handleAddBook={handleAddBook}
// handleRemoveBook={handleRemoveBook}

function ListHotel() {
  const [hostels, setHostels] = useState(hotels)

  const handleAddHostel = (id: number) => {
    if(hostels.find( hostel => hostel.id === id )){
      setHostels(hostels.filter(hostel => hostel.id !== id))
    } else {}
    
  };
  const handleRemoveHostel = (hostel: any) => {
    setHostels(
      hostels.map((item: Hostel) =>
        item.id === hostel.id
          ? { ...item, currentSelected: hostel.currentSelected - 1 }
          : item
      )
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Hotels</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {hostels.map((hostel: Hostel ) => (
              <HotelItem 
              key={hostel.id}
              hostel={hostel} 
              handleAddHostel= {handleAddHostel}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListHotel
