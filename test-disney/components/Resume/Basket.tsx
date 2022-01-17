import router from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Hostel from '../../interfaces/Hostel'
import Show from '../../interfaces/Show'
import getTotal from '../../utils/getTotal'
import Schedule from '../../interfaces/Schedule'

function Basket() {
    const hostelList = useSelector((state: { hostel: {value: Hostel[] }}) => state.hostel.value)
    const showList = useSelector((state: { show: {value: Show[] }}) => state.show.value)
    const startDate = new Date(useSelector((state: { schedule: Schedule }) => state.schedule.startDate))
    const endDate = new Date(useSelector((state: { schedule: Schedule }) => state.schedule.endDate))
    const total = getTotal(hostelList, showList, startDate, endDate)

    return (
        <div className="shadow overflow-hidden sm:rounded-md">
        <div className="h-full flex flex-col bg-white shadow-xl">
          <div className="flex-1 px-4 sm:px-6">
            <div className="mt-4">
              <div className="flow-root">
                {
                    hostelList.length ?
                    <div>
                        <p className='mt-2 text-center font-bold tracking-tight  sm:text-2xl mb-6'> Hotels </p>
                        <div className='mb-4'>
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                {hostelList.map(({id, image, name, description ,imageAlt, price}: Hostel ) => (
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
                        <p className='italic text-gray-500'>
                                {description}
                        </p>                        
                        {
                          price > 0 ?
                              <p className="ml-4">{price} € / nuit</p>
                          : <p className="ml-4">Gratuit</p>
                        }
                        </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Supprimer
                        </button>
                        </div>
                    </div>
                    </div>
                </li>
                ))}
                </ul>
                        </div>
                    </div>
                    : null
                }
                {
                    showList.length ?  
                    <div className='mt-4'>
                    <p className='mt-2 text-center font-bold tracking-tight  sm:text-2xl mb-6'> Shows </p>
                <ul role="list" className="-my-6 divide-y divide-gray-200 border-t-2" >
                    {showList.map(({id, image, title, description ,imageAlt, price}: Show ) => (
                    <li key={id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <Image className="w-full h-full object-center object-cover" alt={imageAlt} src={image} width={360} height={360} />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                {title}
                            </h3>
                            <p className='italic text-gray-500'>
                                {description}
                            </p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Supprimer
                            </button>
                            </div>
                            {
                            price > 0 ?
                                <p className="ml-4">{price} € / nuit</p>
                            : <p className="ml-4">Gratuit</p>
                            }
                        
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                    </div>    
                    : null
                }
              </div>
            </div>
          </div>

          <div className="border border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Sous total</p>
              {
                  total ? <p>{total} €</p> : null
              }
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Coup total de votre séjour, hotels et shows</p>
            <div className="mt-6 bg-red-500">
              <button
                type='submit'
                className=" w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Confirmer
              </button>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                ou{' '}
                <button
                  type="button"
                  onClick={() => { router.push('/') }}
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Retour aux hôtels<span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Basket
