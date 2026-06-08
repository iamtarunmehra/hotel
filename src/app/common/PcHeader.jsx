import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { header_data } from './Header';

export default function PcHeader() {
    return (
        <div className='lg:block hidden'>
            <div className="max-w-330 mx-auto lg:px-6 px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-4">

                    <div
                        className="
                            w-11
                            h-11
                            rounded-full
                            border
                            border-cyan-500/40
                            bg-cyan-500/10
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <span className="text-cyan-400 font-bold">
                            H
                        </span>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black tracking-wider">
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

                {/* Navigation */}
                <ul className="hidden lg:flex items-center gap-7">

                    {header_data.map((item, index) => (
                        <li
                            key={index}
                            style={{ fontFamily: 'Poppins' }}
                            className="
                                relative
                                cursor-pointer
                                text-md
                                uppercase
                                tracking-[1px]
                                group
                            "
                        >
                            <span className="Poppins hover:text-cyan-400 duration-300">
                                {item.title}
                            </span>

                            <div
                                className="
                                    absolute
                                    left-1/2
                                    -translate-x-1/2
                                    -bottom-3
                                    w-0
                                    h-[2]
                                    bg-cyan-400
                                    group-hover:w-1/2
                                    duration-300
                                "
                            />
                        </li>
                    ))}

                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <div
                        style={{ fontFamily: 'Poppins' }}
                        className="hidden xl:flex items-center gap-2 text-md"
                    >
                        <FaPhone className="text-cyan-400" />
                        <span className="Poppins">+91 98765 43210</span>
                    </div>

                    <button
                        style={{ fontFamily: 'Poppins' }}
                        className="
                            flex
                            items-center
                            gap-2
                            bg-cyan-600
                            hover:bg-cyan-500
                            px-5
                            py-3
                            rounded-lg
                            font-medium
                            duration-300
                            hover:scale-105
                            shadow-lg
                            shadow-cyan-900/40
                        "
                    >
                        Book Stay
                        <MdOutlineArrowOutward size={18} />
                    </button>

                </div>

            </div>
        </div>
    )
}
