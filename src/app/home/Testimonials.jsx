import React from 'react'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {

    const testimonials = [
        {
            name: 'Rahul Sharma',
            role: 'Business Traveler',
            image: '/user1.jpg',
            review:
                'The apartment was spotless, well-equipped, and located in a great area. The booking process was smooth and the staff was always helpful.'
        },
        {
            name: 'Priya Verma',
            role: 'Family Vacation',
            image: '/user2.jpg',
            review:
                'We stayed for a week and felt completely at home. Spacious rooms, excellent amenities, and a peaceful environment.'
        },
        {
            name: 'Aman Singh',
            role: 'Long-Term Guest',
            image: '/user3.jpg',
            review:
                'One of the best rental stays I have experienced. Everything was thoughtfully arranged and the support team was responsive.'
        }
    ]

    return (
        <section className='lg:py-16 py-10 bg-[#f8fbfc]'>
            <div className='max-w-330 mx-auto px-4 lg:px-6'>

                {/* Heading */}
                <div className='text-center mb-16'>

                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className='uppercase tracking-[4px] text-cyan-700 font-medium'
                    >
                        Guest Experiences
                    </p>

                    <h2 className='text-4xl lg:text-5xl font-black mt-4 text-gray-800'>
                        What Our Guests <span className=' text-cyan-700'>
                            Are Saying
                        </span>
                    </h2>

                    <div className='w-24 h-1 bg-cyan-700 mx-auto mt-6'></div>

                </div>

                {/* Cards */}
                <div className='grid lg:grid-cols-3 gap-8'>

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-xl p-8 border border-gray-100 shadow-lg hover:-translate-y-2 duration-300'
                        >

                            <Quote
                                size={40}
                                className='text-cyan-700 mb-6'
                            />

                            <p
                                style={{ fontFamily: 'Poppins' }}
                                className='text-gray-600 leading-8'
                            >
                                "{item.review}"
                            </p>

                            {/* Rating */}
                            <div className='flex gap-1 mt-6'>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill='currentColor'
                                        className='text-cyan-700'
                                    />
                                ))}
                            </div>

                            {/* User */}
                            <div className='flex items-center gap-4 mt-8 pt-6 border-t border-gray-100'>

                                <div>
                                    <h4
                                        style={{ fontFamily: 'Poppins' }}
                                        className='font-semibold text-lg'
                                    >
                                        {item.name}
                                    </h4>

                                    <p className='text-gray-500 text-sm'>
                                        {item.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}