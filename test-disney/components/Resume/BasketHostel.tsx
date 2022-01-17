import React from 'react'
import Hostel from '../../interfaces/Hostel'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { remove } from '../../store/hostelSlice'

interface Props {
    hostel: Hostel
  }

function BasketHostel({ hostel }: Props ) {
    const { id, name, image, imageAlt, description, price } = hostel;
    const dispatch = useDispatch()

    return (
        <li key={id} className="py-4 flex">
        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
      <Image className="w-full h-full object-center object-cover" alt={imageAlt} src={image} width={360} height={360} />
        </div>
        <div className="ml-4 flex-1 flex flex-col">
        <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
                {name}
            </h3>      
            <p className='italic text-gray-500'> {description} </p>                        
            {
              price > 0 ?
                  <p className="ml-4">{price} € / nuit</p>
              : <p className="ml-4">Gratuit</p>
            }
            </div>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
            <div className="flex">
            <button onClick={() => dispatch(remove(hostel))} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                Supprimer
            </button>
            </div>
        </div>
        </div>
    </li>
    )
}

export default BasketHostel
