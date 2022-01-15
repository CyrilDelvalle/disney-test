import React from 'react'
import logo from '../public/disneylandParis.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const NB_STEP = 5

function Header() {
    const step = useSelector((state: any) => state.step.value)
    const percentage = (step / NB_STEP) * 100;

    return (
        <div>
            <div className="header-2  border-b-2">
                <nav className="bg-white py-2 md:py-4">
                    <div className="container align-items: center px-4 mx-auto md:flex md:items-center ">
                        <div className="flex  items-center ">
                            <a href="#" className='content-center' > <Image alt='logo' src={ logo} width={150} height={50} /> </a>
                        </div>
                        <div className="w-full bg-gray-200 h-1 mb-6">
                            <div className="bg-blue-400 h-1" style= {{ width: `${percentage}%` }}></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
