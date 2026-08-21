import type {LucideIcon} from 'lucide-react'
import {Mail, Phone, Linkedin, Github, ExternalLink} from 'lucide-react'

type ContactLink = {
    icon: LucideIcon
    label: string
    value: string
    href: string
}

const contactLinks: ContactLink[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'benjaminlindeen@outlook.com',
        href: 'mailto:benjaminlindeen@outlook.com',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/benjaminlindeen',
        href: 'https://linkedin.com/in/benjaminlindeen',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/BenjaminLindeen',
        href: 'https://github.com/BenjaminLindeen',
    },
    {
        icon: ExternalLink,
        label: 'Medium',
        value: 'medium.com/@benjaminlindeen',
        href: 'https://medium.com/@benjaminlindeen',
    },
]

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        Let&apos;s connect
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">Get In Touch</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-cyan-500"/>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {contactLinks.map(({icon: Icon, label, value, href}) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 py-4 text-left transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-800"
                        >
                            <div
                                className="rounded-lg bg-slate-700/50 p-2.5 transition-colors group-hover:bg-cyan-500/10">
                                <Icon
                                    size={18}
                                    className="text-slate-400 transition-colors group-hover:text-cyan-400"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-medium text-slate-500">{label}</p>
                                <p className="truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-cyan-400">
                                    {value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
