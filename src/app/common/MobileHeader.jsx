import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { IoClose } from "react-icons/io5";

export default function MobileHeader() {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='lg:hidden block'>
            <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <div className='max-w-330 mx-auto px-4 py-3.5 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div onClick={() => setMobileMenu(true)} className='w-10 h-10 rounded-xl  bg-cyan-950/20 text-white flex items-center justify-center'>
                        <FaBars size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-wider">
                            Hotel <span className="text-cyan-400">Luxury</span>
                        </h2>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className="
                                text-[10px]
                                uppercase
                                tracking-[4px]
                                text-cyan-200
                            "
                        >
                            Apartments & Suites
                        </p>
                    </div>
                </div>
                <button
                    style={{ fontFamily: 'Poppins' }}
                    className="
                                            flex
                                            items-center
                                            gap-1
                                            bg-cyan-600
                                            hover:bg-cyan-500
                                            px-4
                                            py-2.5
                                            rounded-lg
                                            font-medium
                                            duration-300
                                            hover:scale-105
                                            shadow-lg
                                            text-sm
                                            shadow-cyan-900/40
                                        "
                >
                    Book <span className='sm:inline hidden'>Stay</span>
                    <MdOutlineArrowOutward size={18} />
                </button>
            </div>
        </div>
    )
}


function MobileMenu({ mobileMenu, setMobileMenu }) {

    const menuItems = [
        "Home",
        "Apartments",
        "About",
        "Testimonials",
        "FAQ",
        "Contact"
    ];

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setMobileMenu(false)}
                className={`
                    absolute
                    w-full h-screen 
                    top-0 left-0
                    bg-black/80
                    z-100
                    duration-500
                    ${mobileMenu
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'}
                `}
            />

            {/* Drawer */}
            <div
                className={`
                    fixed
                    top-0
                    left-0
                    w-[85%]
                    max-w-[340]
                    h-screen
                    overflow-y-scroll
                    z-999
                    duration-500
                    bg-linear-to-br
                    from-cyan-950
                    via-cyan-900
                    to-black

                    ${mobileMenu
                        ? 'translate-x-0'
                        : '-translate-x-full'}
                `}
            >

                {/* Top */}
                <div className="p-6 border-b border-cyan-800/50 flex items-center justify-between">

                    <div>
                        <h2 className="text-2xl font-black tracking-wider text-white">
                            Hotel <span className="text-cyan-400">Luxury</span>
                        </h2>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className="text-[10px] uppercase tracking-[4px] text-cyan-200 mt-1"
                        >
                            Apartments & Suites
                        </p>
                    </div>

                    <button
                        onClick={() => setMobileMenu(false)}
                        className="text-white"
                    >
                        <IoClose size={30} />
                    </button>

                </div>

                {/* Navigation */}
                <div className="px-6 py-8">

                    <ul className="space-y-6">

                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                style={{ fontFamily: 'Poppins' }}
                                className="
                                    text-white
                                    text-lg
                                    flex
                                    items-center
                                    justify-between
                                    cursor-pointer
                                    hover:text-cyan-400
                                    duration-300
                                "
                            >
                                {item}

                                <MdOutlineArrowOutward
                                    size={18}
                                    className="opacity-60"
                                />
                            </li>
                        ))}

                    </ul>

                </div>

                {/* Bottom CTA */}
                <div className="mx-4">

                    <div
                        className="
                            bg-white/10
                            border
                            border-cyan-700/40
                            rounded-2xl
                            p-5
                            backdrop-blur-md
                        "
                    >
                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className="text-cyan-100 text-sm leading-6"
                        >
                            Looking for a comfortable stay?
                            Book your apartment today.
                        </p>

                        <button
                            className="
                                mt-4
                                w-full
                                bg-cyan-500
                                text-black
                                py-3
                                rounded-xl
                                font-semibold
                                cursor-pointer
                            "
                        >
                            Book Stay
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}
