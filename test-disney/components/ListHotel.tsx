import React from 'react'
import Image from 'next/image'
import hotels from '../pages/api/hotels.json'

function ListHotel() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-8 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Hotels</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {hotels.map(({ name, description, image, imageAlt }) => (
              <div key={name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">

                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                  {/* <Image className="w-full h-full object-center object-cover" alt={imageAlt} src={ image} width={150} height={50} /> */}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a >
                    <span className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListHotel
