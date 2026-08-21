import SectionHeader from '@/components/SectionHeader'

const skillGroups = [
    {
        category: 'Languages',
        skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
        category: 'Frameworks & Libraries',
        skills: ['React.js', 'Next.js', 'Flask'],
    },
    {
        category: 'Databases',
        skills: ['MongoDB', 'MySQL'],
    },
    {
        category: 'APIs & Tools',
        skills: ['Anthropic API', 'OpenAI API', 'REST APIs', 'GitHub', 'MS Excel', 'Jira', 'Vercel'],
    },
    {
        category: 'Professional',
        skills: [
            'Sales',
            'Finance',
            'Data Analysis',
            'Data Visualization',
            'Public Speaking',
            'Technical Writing',
            'Customer Service',
            'Robotics',
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeader label="What I know" title="Skills"/>

                <div className="mt-12 space-y-7">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                            <div className="w-44 shrink-0 pt-0.5">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {group.category}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="cursor-default rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
