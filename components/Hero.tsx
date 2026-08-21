import Image from 'next/image'
import {Github, Linkedin, Mail, ExternalLink, ChevronDown} from 'lucide-react'

const socialLinks = [
    {href: 'https://github.com/BenjaminLindeen', icon: Github, label: 'GitHub'},
    {href: 'https://linkedin.com/in/benjaminlindeen', icon: Linkedin, label: 'LinkedIn'},
    {href: 'mailto:benjaminlindeen@outlook.com', icon: Mail, label: 'Email'},
    {href: 'https://medium.com/@benjaminlindeen', icon: ExternalLink, label: 'Medium'},
]

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"/>
                <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"/>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Text */}
                    <div className="animate-fade-in-up [animation-fill-mode:both]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            Portfolio
                        </p>
                        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
                            Benjamin
                            <br/>
                            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Lindeen
              </span>
                        </h1>
                        <p className="mb-2 text-lg text-slate-400 sm:text-xl">
                            Junior Sales Engineer
                            <span className="mx-2 text-slate-600">·</span>
                            <span className="text-slate-300">Kiteworks</span>
                        </p>
                        <p className="mb-8 max-w-md text-base leading-relaxed text-slate-500">
                            CS graduate bridging technical depth with business acumen. Building at the
                            intersection of technology and customer success.
                        </p>

                        <div className="mb-8 flex flex-wrap gap-3">
                            <a
                                href="#experience"
                                className="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-200 hover:bg-cyan-400"
                            >
                                View Experience
                            </a>
                            <a
                                href="#contact"
                                className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-400"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            {socialLinks.map(({href, icon: Icon, label}) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    aria-label={label}
                                    className="text-slate-500 transition-colors hover:text-cyan-400"
                                >
                                    <Icon size={20}/>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Photo */}
                    <div
                        className="flex justify-center animate-fade-in [animation-fill-mode:both] [animation-delay:300ms] lg:justify-end">
                        <div className="relative">
                            <div
                                className="h-64 w-64 overflow-hidden rounded-full ring-4 ring-cyan-500/20 ring-offset-4 ring-offset-slate-950 sm:h-80 sm:w-80">
                                <Image
                                    src="/profile_picture.png"
                                    alt="Benjamin Lindeen"
                                    width={320}
                                    height={320}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                            <div
                                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-cyan-500/10"/>
                            <div
                                className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-cyan-500/10"/>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-600">
                <span className="text-xs tracking-widest">scroll</span>
                <ChevronDown size={16} className="animate-bounce"/>
            </div>
        </section>
    )
}
