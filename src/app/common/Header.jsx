'use client'

import MobileHeader from "./MobileHeader"
import PcHeader from "./PcHeader"


export const header_data = [
    { title: 'Home', link: '/' },
    { title: 'Apartments', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Testimonials', link: '/' },
    { title: 'Contact', link: '/' },
]

export default function Header() {


    return (
        <header
            className="
                fixed
                top-0
                left-0
                w-full
                z-999
                backdrop-blur-xl
                bg-black/65
                border-b
                border-cyan-900/40
                text-white
            "
        >
            <PcHeader />
            <MobileHeader />

        </header>
    )
}