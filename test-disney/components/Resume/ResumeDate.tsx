import React from 'react'
import { useSelector } from 'react-redux'
import Schedule from '../../interfaces/Schedule'

function ResumeDate() {
    const startDate = new Date(useSelector((state: Schedule) => state.schedule.startDate))
    const endDate = new Date(useSelector((state: Schedule) => state.schedule.endDate))

    return (
        <div className="lg:text-center">
            {
                !isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) ?
                    <p className='text-center font-bold tracking-tight text-white sm:text-4xl'>
                    Votre séjour du {startDate.toLocaleDateString() } au {endDate.toLocaleDateString()} 
                    </p>     
                : null
            }
        </div>
    )
}

export default ResumeDate
