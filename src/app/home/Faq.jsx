'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {

    const [active, setActive] = useState(0)

    const faqs = [
        {
            question: 'What time is check-in and check-out?',
            answer:
                'Check-in starts at 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request.'
        },
        {
            question: 'Do you provide free Wi-Fi?',
            answer:
                'Yes, complimentary high-speed Wi-Fi is available in all apartments and common areas.'
        },
        {
            question: 'Is parking available for guests?',
            answer:
                'Yes, secure parking facilities are available for our guests at no additional cost.'
        },
        {
            question: 'Can I cancel my booking?',
            answer:
                'Cancellation policies vary depending on the booking type. Please review the booking terms before confirming your reservation.'
        },
        {
            question: 'Are pets allowed?',
            answer:
                'Pet policies may vary by apartment. Please contact us before booking if you plan to bring a pet.'
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
                        Frequently Asked Questions
                    </p>

                    <h2 className='text-4xl lg:text-5xl font-black mt-4 text-gray-800'>
                        Read To Know <span className='text-cyan-700'>
                            For Comfort
                        </span>
                    </h2>

                    <div className='w-24 h-1 bg-cyan-700 mx-auto mt-6'></div>

                </div>

                {/* FAQ Items */}
                <div className='space-y-4'>

                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm'
                        >

                            <button
                                onClick={() =>
                                    setActive(active === index ? null : index)
                                }
                                className='w-full flex items-center justify-between p-6 text-left cursor-pointer'
                            >
                                <h3
                                    style={{ fontFamily: 'Poppins' }}
                                    className='font-semibold text-lg'
                                >
                                    {item.question}
                                </h3>

                                <ChevronDown
                                    size={22}
                                    className={`text-cyan-700 duration-300 ${active === index
                                            ? 'rotate-180'
                                            : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${active === index
                                        ? 'grid-rows-[1fr]'
                                        : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className='overflow-hidden'>
                                    <p
                                        style={{ fontFamily: 'Poppins' }}
                                        className='px-6 pb-6 text-gray-600 leading-8'
                                    >
                                        {item.answer}
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