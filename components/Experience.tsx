import {MapPin, Calendar} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

type Experience = {
    company: string
    role: string
    location: string
    period: string
    current?: boolean
    description: string[]
    tags: string[]
}

const experiences: Experience[] = [
    {
        company: 'Kiteworks',
        role: 'Junior Sales Engineer',
        location: 'San Mateo, CA, Remote',
        period: 'Aug 2026 – Present',
        current: true,
        description: [
            'Supported the Corporate AE team as technical liaison translating client requirements into tailored security solutions',
            'Secured sensitive corporate CMMC 2.0 and FedRAMP data compliance standards across regulated industries',
            'Bridged technical capabilities to business outcomes by delivering customized product demos for prospective clients',
            'Enabled secure AI adoption for corporate clients by architecting data governance solutions that protect sensitive\n' +
            'information from exposure to agentic AI/LLM systems\n'
        ],
        tags: ['Enterprise Software', 'Technical Demos', 'Cyber Security & Data Control'],
    },
    {
        company: 'Emerson | Aspen Technology',
        role: 'Associate Project Engineer',
        location: 'Medina, MN',
        period: 'Aug 2025 – Jul 2026',
        description: [
            'Served as primary liaison between enterprise clients and engineering teams on projects from $250,000 - $1 Million',
            'Managed project tasks in an Agile environment, ensuring on-time delivery of proprietary Monarch DGM software',
            'Supported regulatory compliance by applying data-informed decision-making for critical renewable electric energy',
            'Managed software and hardware deployments across enterprise clients such as Exelon and Xpansiv, balancing competing priorities and coordinating cross-functional stakeholders',
        ],
        tags: ['Enterprise Software', 'Cross-functional Engineering', 'Renewable Energy Infrastructure'],
    },
    {
        company: 'MultiTech',
        role: 'Software Engineering Intern',
        location: 'Mounds View, MN',
        period: 'May 2024 – Aug 2024',
        description: [
            'Performed software/hardware validation with wide area network gateways and next-generation IoT sensors',
            'Developed an analyzer dashboard with a small cross-functional team and presented it to senior leadership',
            'The project was deemed worthy for use in production with clients such as Ecolab, Chipotle, and Target',
        ],
        tags: ['Enterprise Hardware & Software', 'Fullstack Development', 'IoT'],
    },
    {
        company: 'University of Minnesota',
        role: 'Associate System Administrator',
        location: 'Minneapolis, MN',
        period: 'May 2023 – Aug 2023',
        description: [
            'Managed and optimized over 100 Linux servers and clients used for economics and psychology research',
            'Maintained system uptime and upgraded software support through Chef Workstation & GitHub Enterprise',
            'Documented complex internal procedures and created intuitive tutorials for user comprehension',
        ],
        tags: ['Distributed Computer Infrastructure', 'System Administration', 'Psychology and Economics Research'],
    },
    {
        company: 'Micro Center',
        role: 'Customer Sales Representative',
        location: 'St. Louis Park, MN',
        period: 'Oct 2020 – Jun 2021',
        description: [
            'Provided outstanding service and purchase advice for tech customers during the market frenzies of COVID-19',
            'Smashed the sales target of 6% and achieved a 20% lifetime conversion rate on in-store extended warranties',
            'Personally generated five figures of revenue in less than one month and was ranked as the number 1 storewide and in the top 5 nationwide during the 2020 holiday sales special',
        ],
        tags: ['Computer Electronics', 'Sales', 'Retail'],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <SectionHeader label="Where I've worked" title="Experience"/>

                <div className="mt-12">
                    {experiences.map((exp, i) => (
                        <div key={exp.company} className="flex gap-5">
                            {/* Timeline column */}
                            <div className="flex flex-col items-center">
                                <div className="relative mt-[1.375rem] h-4 w-4 shrink-0">
                                    {exp.current && (
                                        <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/40"/>
                                    )}
                                    <div
                                        className={`h-4 w-4 rounded-full border-2 ${
                                            exp.current
                                                ? 'border-cyan-400 bg-cyan-400/20'
                                                : 'border-slate-600 bg-slate-950'
                                        }`}
                                    />
                                </div>
                                {i < experiences.length - 1 && (
                                    <div className="my-2 w-px flex-1 bg-slate-800"/>
                                )}
                            </div>

                            {/* Card */}
                            <div className={`flex-1 ${i < experiences.length - 1 ? 'pb-8' : ''}`}>
                                <div
                                    className={`rounded-2xl border p-6 transition-colors hover:border-cyan-500/30 ${
                                        exp.current
                                            ? 'border-cyan-500/20 bg-slate-800/60'
                                            : 'border-slate-800 bg-slate-900/50'
                                    }`}
                                >
                                    <div className="mb-1 flex flex-wrap items-center gap-2">
                                        <h3 className="text-base font-bold text-slate-100">{exp.company}</h3>
                                        {exp.current && (
                                            <span
                                                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400">
                        Current
                      </span>
                                        )}
                                    </div>
                                    <p className="mb-3 text-sm font-medium text-cyan-400">{exp.role}</p>

                                    <div className="mb-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12}/>
                        {exp.period}
                    </span>
                                        <span className="flex items-center gap-1.5">
                      <MapPin size={12}/>
                                            {exp.location}
                    </span>
                                    </div>

                                    {exp.description.length > 0 && (
                                        <ul className="mb-4 space-y-2 text-sm leading-relaxed text-slate-400">
                                            {exp.description.map((line, idx) => (
                                                <li key={idx} className="flex gap-2">
                                                    <span className="text-cyan-400">•</span>
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-0.5 text-xs text-slate-400"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
