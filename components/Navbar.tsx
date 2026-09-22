'use client'

import {useState, useEffect} from 'react'
import {Menu, X} from 'lucide-react'

const links = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#interests', label: 'Interests'},
    {href: '#contact', label: 'Contact'},
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled ? 'border-b border-slate-800 bg-slate-950/90 backdrop-blur-md' : ''
            }`}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#"
                        className="text-lg font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                        BL
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="mailto:benjaminlindeen@outlook.com"
                            className="rounded-lg border border-cyan-400 px-4 py-1.5 text-sm font-medium text-cyan-400 transition-all duration-200 hover:bg-cyan-400 hover:text-slate-950"
                        >
                            Get In Touch
                        </a>
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="text-slate-400 transition-colors hover:text-cyan-400 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-slate-800 bg-slate-950/95 py-4 backdrop-blur-md md:hidden">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                            >
                                {l.label}
                            </a>
                        ))}
                        <div className="px-4 pt-2">
                            <a
                                href="mailto:benjaminlindeen@outlook.com"
                                className="block rounded-lg border border-cyan-400 py-2 text-center text-sm font-medium text-cyan-400"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
