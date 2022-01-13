import React, { useState } from 'react'
import { Hostel } from './HotelList'

function HotelItem(props: { hostel: Hostel, handleAddHostel(id: number): void  }) {
    const [isSelected, setIsSelected] = useState(false)    
    const {id, name, image, imageAlt, description } = props.hostel;
        
    return (
            <div key={name} className={`group relative border-2 ${ isSelected ? " border-blue-500 rounded" :  null   }` } >
                <div
                  className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                  {/* <Image className="w-full h-full object-center object-cover" alt={imageAlt} src={ image} width={150} height={50} /> */}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a >
                    <span 
                        className="absolute inset-0"
                        onClick={() => {
                            setIsSelected(!isSelected)
                        }}
                    />
                    {name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{description}</p>
              </div>
    )
}

export default HotelItem
