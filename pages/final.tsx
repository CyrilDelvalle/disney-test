import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Hostel from '../interfaces/Hostel';
import { setDescription, setStep } from '../store/stepSlice';

function final() {
    const dispatch = useDispatch();
    const hostelList = useSelector((state: { hostel: {value: Hostel[]}} ) => state.hostel.value)
    const router = useRouter()
    
    useEffect(() => {
        if(!hostelList.length) {
            router.push('/')
          }
        dispatch(setStep(4));
        dispatch(setDescription('Merci'))
      }, [])
      
    return (
        <div className="flex flex-col mx-16">
            <div className='relative flex flex-grow'>
                <main className='flex-1 p-6'>
                    <img src="https://media.disneylandparis.com/d4th/fr-fr/images/hd15954_2050dec31_world_generic-key-visual-dreams-matter-more-than-ever-boy-mickey-emotion-castle_5-2_tcm808-226131.jpg?w=1920" alt=""></img>
                </main>
            </div>
            <p className='w-full text-center text-white font-bold sm:text-2xl '>Merci beaucoup pour votre réservation <br/> Un email va vous être envoyé sous peu. <br/> La magie de Disneyland Paris vous attend. <br/>A bientot.</p>
        </div>

    )
}

export default final;

