import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Hostel from '../../interfaces/Hostel'
import { add, remove } from '../../store/hostelSlice'

interface Props {
  hostel: Hostel
}

function HotelItem({ hostel }: Props  ) {
  const dispatch = useDispatch()
  const hostelList = useSelector((state: { hostel: {value: Hostel[] }}) => state.hostel.value)
  const { id, name, image, imageAlt, description, price, services } = hostel;
  const isSelected = hostelList.find((hostel: Hostel) => hostel.id === id)
        
    return (
      <div key={name} className={` group relative border-2 ${ hostelList.find((hostel: Hostel) => hostel.id === id) ? " border-blue-500 rounded" :  null   }` } >
          <div
            className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image className="w-full h-full object-center object-cover" alt={imageAlt} src={image} width={360} height={300} />
          </div>
          <div className='px-2'>
            <h3 className="mt-6 text-sm text-gray-500">
              <a>
                <span 
                    className="absolute inset-0"
                    onClick={() => {
                        if(!isSelected) {
                          dispatch(add(hostel))
                        } else {
                          dispatch(remove(hostel))
                        }
                    }}
                />
                {name}
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">{description}</p>
            <div className='grid py-2 grid-cols-4 gap-4 text-center text-white ' >
              {
                services.map((service) => {
                  return <div className='uppercase px-2 py-1 text-xs font-semibold rounded-full bg-blue-900' key={service}>{service} </div>
                })
              }
              </div>
            <p className="text-base italic text-right mr-2  ">{price}€ / nuit</p>
          </div>
        </div>
    )
}

export default HotelItem
