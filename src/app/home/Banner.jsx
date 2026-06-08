import React from 'react'

export default function Banner() {
    return (
        <section className='w-full lg:h-[85vh] h-[85vh] relative'>
            <img
                src='/z.png'
                className='w-full h-full object-cover absolute top-0 left-0'
            />

            <div className='w-full h-full absolute top-0 left-0 bg-linear-to-r from-black/90 via-black/70 to-transparent'></div>

            {/* left panel */}
            <div
                className='
            absolute
            top-1/2
            -translate-y-1/2
            z-50
            text-white

            left-4
            sm:left-6
            md:left-10
            lg:left-20
            xl:left-30

            pr-4
        '
            >
                <p className='flex items-center gap-2 my-3'>
                    <div className='w-[40] sm:w-[60] h-[1.2px] bg-white'></div>

                    <span
                        style={{ fontFamily: 'Poppins' }}
                        className='uppercase text-xs sm:text-sm md:text-base'
                    >
                        Premium stays, personalised for you
                    </span>
                </p>

                <h1
                    className='
                font-extrabold
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
            '
                >
                    Luxury Living

                    <p className='mt-2 sm:mt-5 text-cyan-500'>
                        Ready When You Are
                    </p>
                </h1>

                <p
                    style={{ fontFamily: 'Poppins' }}
                    className='
                my-5
                sm:my-7
                leading-7
                sm:leading-8

                max-w-sm
                sm:max-w-md
                md:max-w-lg
                lg:max-w-xl
            '
                >
                    Book Your favourite Room with the perfect Size to stay
                    comfortably with your trip members, Family and cousins
                </p>

                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5'>
                    <button
                        style={{ fontFamily: 'Poppins' }}
                        className='bg-cyan-500 tracking-tight px-8 text-md rounded lg:py-3.5 py-3 text-black cursor-pointer font-semibold hover:scale-x-105 duration-300'
                    >
                        Book Stay
                    </button>

                    <button
                        style={{ fontFamily: 'Poppins' }}
                        className='text-black px-8 text-md rounded lg:py-3.5 py-3 bg-white hover:border-transparent duration-300 hover:scale-x-105 cursor-pointer font-semibold'
                    >
                        Explore Apartments
                    </button>
                </div>
            </div>
        </section>
    )
}
