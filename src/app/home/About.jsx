import React from 'react'

export default function About() {
    return (
        <section className='lg:py-16 py-10 bg-[#f8fbfc]'>
            <div className='max-w-330 mx-auto px-4 lg:px-6'>

                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    {/* Left Content */}
                    <div>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className='uppercase tracking-[4px] text-cyan-700 font-medium mb-4'
                        >
                            About Us
                        </p>

                        <h2 className='text-4xl lg:text-5xl font-black leading-tight text-gray-800'>
                            Exceptional Stays
                            <span className='block text-cyan-700'>
                                 Modern Living
                            </span>
                        </h2>

                        <div className='w-24 h-1 bg-cyan-700 my-8'></div>

                        <p
                            style={{ fontFamily: 'Poppins' }}
                            className='text-gray-600 leading-8 text-lg'
                        >
                            Experience premium living with beautifully designed
                            apartments, world-class amenities, and exceptional
                            hospitality. Whether you're staying for a few days
                            or an extended period, our spaces are crafted to
                            provide comfort, privacy, and convenience.
                        </p>

                        <div className='flex flex-wrap gap-4 mt-10'>
                            <button
                                style={{ fontFamily: 'Poppins' }}
                                className='bg-cyan-700 hover:bg-cyan-800 text-white px-7 py-3 rounded-md font-medium duration-300 cursor-pointer'
                            >
                                View Apartments
                            </button>

                            <button
                                style={{ fontFamily: 'Poppins' }}
                                className='border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white px-7 py-3 rounded-md font-medium duration-300 cursor-pointer'
                            >
                                Call Now
                            </button>
                        </div>
                    </div>

                    {/* Right Side Card */}
                    <div className='bg-white p-10 border border-gray-100'>

                        <h3
                            style={{ fontFamily: 'Poppins' }}
                            className='text-2xl font-semibold text-gray-800 mb-8'
                        >
                            Our Achievements
                        </h3>

                        <div className='grid grid-cols-2 gap-8'>

                            <div>
                                <h4 className='Poppins text-4xl font-bold text-cyan-700'>
                                    500+
                                </h4>
                                <p className='text-gray-600 mt-2'>
                                    Happy Guests
                                </p>
                            </div>

                            <div>
                                <h4 className='Poppins text-4xl font-bold text-cyan-700'>
                                    50+
                                </h4>
                                <p className='text-gray-600 mt-2'>
                                    Premium Apartments
                                </p>
                            </div>

                            <div>
                                <h4 className='Poppins text-4xl font-bold text-cyan-700'>
                                    10+
                                </h4>
                                <p className='text-gray-600 mt-2'>
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h4 className='Poppins text-4xl font-bold text-cyan-700'>
                                    24/7
                                </h4>
                                <p className='text-gray-600 mt-2'>
                                    Customer Support
                                </p>
                            </div>

                        </div>

                        <div className='mt-10 pt-8 border-t border-gray-200'>
                            <p
                                style={{ fontFamily: 'Poppins' }}
                                className='text-gray-600 leading-8'
                            >
                                From luxury interiors to seamless booking and
                                dedicated guest support, we ensure every stay
                                feels like home—only better.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}