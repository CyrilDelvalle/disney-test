import React from 'react'
import logo from '../public/disneylandParis.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Step from '../interfaces/Step'

const NB_STEP = 4

function Header() {
    const step = useSelector((state: { step: Step }) => state.step.value)
    const title = useSelector((state: { step: Step }) => state.step.title)
    const percentage = (step / NB_STEP) * 100;

    return (
        <div className=' px-8 flex items-center justify-between shadow-s min-w-screen flex-col'>
            <nav className="py-2 md:py-4 w-full">
                <div className="container align-items: center px-4 mx-auto md:flex md:items-center">
                    <div className="flex items-center ">
                        <a href="/" className='content-center' > <Image alt='logo' src={ logo} width={150} height={50} /> </a>
                    </div>
                          <div className="w-full bg-gray-200 h-3 mb-6 mx-24 mt-4 ">
                             <div className={ step === NB_STEP ? "bg-green-500 h-3" : "bg-blue-500 h-3"} style= {{ width: `${percentage}%` }}>
                             </div>
                     </div>
                </div>
                     <p className='text-centermt-2 text-center leading-8 tracking-tight italic text-gray-900 sm:text-xl '>{title}</p>
            </nav>
        </div>
    )
}

export default Header
