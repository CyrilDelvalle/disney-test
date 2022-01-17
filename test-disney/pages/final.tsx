import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setDescription, setStep } from '../store/stepSlice';

function final() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setStep(4));
        dispatch(setDescription('Merci'))
      }, [])
      
    return (
        <div className="min-h-screen flex flex-col mx-16">
                <div className='relative flex flex-grow'>
                    <main className='flex-1 p-6'>
                        <p className='absolute w-full text-center text-white font-bold sm:text-2xl mt-36'>Merci beaucoup pour votre réservation</p>
                    <img src="https://media.disneylandparis.com/d4th/fr-fr/images/hd15954_2050dec31_world_generic-key-visual-dreams-matter-more-than-ever-boy-mickey-emotion-castle_5-2_tcm808-226131.jpg?w=1920" alt=""></img>
                    </main>
                </div>
        </div>

    )
}

export default final;

