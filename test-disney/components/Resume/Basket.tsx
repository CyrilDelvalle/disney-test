import router from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/hostelSlice'
import Image from 'next/image'
import Hostel from '../../interfaces/Hostel'
import Show from '../../interfaces/Show'
import getTotal from '../../utils/getTotal'
import Schedule from '../../interfaces/Schedule'
import BasketHostel from './BasketHostel'
import BasketShow from './BasketShow'
import BascketTotal from './BascketTotal'

function Basket() {
    const dispatch = useDispatch();
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
                {hostelList.map((hostel: Hostel ) => (
                  <BasketHostel hostel={hostel} />
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
                    {showList.map((show: Show ) => (
                      <BasketShow show={show} />
                    ))}
                </ul>
                    </div>    
                    : null
                }
              </div>
            </div>
          </div>

          <BascketTotal total={total} />
        </div>
    </div>
    )
}

export default Basket
