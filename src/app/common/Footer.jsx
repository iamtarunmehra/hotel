import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className='bg-linear-to-br
from-[#022c43]
via-[#075985]
via-40%
to-[#0f172a]
 text-white'>

            {/* Top Section */}
            <div className='max-w-7xl mx-auto px-4 lg:px-6 py-20'>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12'>

                    {/* Brand */}
                    <div>
                        <h2  className='Poppins tracking-wide text-3xl font-black mb-5'>
                            Hotel <span className='text-cyan-400'>Luxury</span> 
                        </h2>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className='text-cyan-100 leading-8'
                        >
                            Thoughtfully designed apartments and comfortable
                            stays for travelers, families, and professionals.
                            Experience convenience, comfort, and hospitality
                            in every booking.
                        </p>

                        <div className='flex gap-3 mt-8'>

                            <a
                                href='#'
                                className='w-11 h-11 rounded-full border border-cyan-800 flex items-center justify-center hover:bg-cyan-700 duration-300'
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href='#'
                                className='w-11 h-11 rounded-full border border-cyan-800 flex items-center justify-center hover:bg-cyan-700 duration-300'
                            >
                                <BsInstagram size={18} />
                            </a>

                            <a
                                href='#'
                                className='w-11 h-11 rounded-full border border-cyan-800 flex items-center justify-center hover:bg-cyan-700 duration-300'
                            >
                                <BsTwitter size={18} />
                            </a>

                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>
                            Quick Links
                        </h3>

                        <ul
                            style={{ fontFamily: 'Poppins' }}
                            className='space-y-4 text-cyan-100'
                        >
                            <li>
                                <a
                                    href='#'
                                    className='hover:text-white duration-300'
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='hover:text-white duration-300'
                                >
                                    Apartments
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='hover:text-white duration-300'
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='hover:text-white duration-300'
                                >
                                    Testimonials
                                </a>
                            </li>

                            <li>
                                <a
                                    href='#'
                                    className='hover:text-white duration-300'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>
                            Contact Info
                        </h3>

                        <div
                            style={{ fontFamily: 'Poppins' }}
                            className='space-y-5 text-cyan-100'
                        >

                            <div className='flex gap-3'>
                                <MapPin
                                    size={20}
                                    className='text-cyan-400 mt-1 shrink-0'
                                />
                                <p>
                                    123 Residency Road,
                                    Jaipur, Rajasthan
                                </p>
                            </div>

                            <div className='flex gap-3'>
                                <Phone
                                    size={20}
                                    className='text-cyan-400 shrink-0'
                                />
                                <p>
                                    +91 98765 43210
                                </p>
                            </div>

                            <div className='flex gap-3'>
                                <Mail
                                    size={20}
                                    className='text-cyan-400 shrink-0'
                                />
                                <p>
                                    info@stayease.com
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className='text-xl font-bold mb-6'>
                            Stay Updated
                        </h3>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className='text-cyan-100 leading-7 mb-5'
                        >
                            Subscribe to receive updates, offers, and
                            travel inspiration directly in your inbox.
                        </p>

                        <div className='relative'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='w-full bg-cyan-900 border border-cyan-800 rounded-lg py-4 px-4 outline-none'
                            />

                            <button
                                className='absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-600 hover:bg-cyan-500 duration-300 p-3 rounded-md cursor-pointer'
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className='border-t border-cyan-900'></div>

            {/* Bottom */}
            <div className='max-w-7xl mx-auto px-4 lg:px-6 py-6'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>

                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className='text-cyan-200 text-sm'
                    >
                        © 2026 HotelLuxury. All rights reserved.
                    </p>

                    <div
                        style={{ fontFamily: 'Poppins' }}
                        className='flex gap-6 text-sm text-cyan-200'
                    >
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms & Conditions</a>
                        <a href='#'>Cookie Policy</a>
                    </div>

                </div>

            </div>

        </footer>
    )
}