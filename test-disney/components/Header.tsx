import React from 'react'
import logo from '../public/disneylandParis.png'
import Image from 'next/image'


function Header() {
    return (
        <div>
            <div className="header-2  border-b-2">
                <nav className="bg-white py-2 md:py-4">
                    <div className="container align-items: center px-4 mx-auto md:flex md:items-center ">
                        <div className="flex  items-center ">
                            <a href="#" className='content-center' > <Image alt='logo' src={ logo} width={150} height={50} /> </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
