import type {LucideIcon} from 'lucide-react'
import {
    PenLine,
    Cpu,
    Award,
    Dumbbell,
    Car,
    TrendingUp,
    Globe,
    Gamepad2,
    BookOpen,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

type Interest = {
    icon: LucideIcon
    label: string
    detail: string
    href?: string
}

const interests: Interest[] = [
    {
        icon: PenLine,
        label: 'Writing',
        detail: 'Medium blogger',
        href: 'https://medium.com/@benjaminlindeen',
    },
    {
        icon: Cpu,
        label: 'PC Hardware',
        detail: 'Builder & enthusiast',
        href: 'https://pcpartpicker.com/user/Asian_PC_Guy/saved/',
    },
    {
        icon: Award,
        label: 'Taekwondo',
        detail: 'Black Belt, 1st Degree',
    },
    {
        icon: Dumbbell,
        label: 'Weightlifting',
        detail: 'B: 215 · S: 325 · DL: 335 @ 150lb',
    },
    {
        icon: Car,
        label: 'Cars',
        detail: 'Auto enthusiast',
    },
    {
        icon: TrendingUp,
        label: 'Finance',
        detail: 'Personal finance & investing',
    },
    {
        icon: Globe,
        label: 'Politics',
        detail: 'Current events & public policy',
    },
    {
        icon: Gamepad2,
        label: 'Gaming',
        detail: 'PC gaming',
    },
    {
        icon: BookOpen,
        label: 'Reading',
        detail: 'Mostly Nonfiction about the topics above',
    },
]

function Card({icon: Icon, label, detail}: Omit<Interest, 'href'>) {
    return (
        <div
            className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-800/60">
            <div className="mb-3 rounded-xl bg-slate-800 p-3 transition-colors group-hover:bg-cyan-500/10">
                <Icon
                    size={22}
                    className="text-slate-400 transition-colors group-hover:text-cyan-400"
                />
            </div>
            <p className="text-sm font-semibold text-slate-200">{label}</p>
            <p className="mt-1 text-xs leading-snug text-slate-500">{detail}</p>
        </div>
    )
}

export default function Interests() {
    return (
        <section id="interests" className="py-24 bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeader label="Outside of work" title="Interests"/>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {interests.map((interest) =>
                        interest.href ? (
                            <a
                                key={interest.label}
                                href={interest.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Card icon={interest.icon} label={interest.label} detail={interest.detail}/>
                            </a>
                        ) : (
                            <Card
                                key={interest.label}
                                icon={interest.icon}
                                label={interest.label}
                                detail={interest.detail}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
