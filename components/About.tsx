import {GraduationCap, MapPin, Calendar} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const minors = ['Business Management', 'Technology Management', 'Political Science']

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeader label="Get to know me" title="About Me"/>

                <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-5 text-base leading-relaxed text-slate-400">
                        <p>
                            I&apos;m a Computer Science graduate from the University of Minnesota with a unique
                            blend of technical and business expertise. My triple minor in Business Management,
                            Technology Management, and Political Science gives me a holistic view of how
                            technology intersects with organizations and society.
                        </p>
                        <p>
                            Currently working as a Junior Sales Engineer at Kiteworks, I
                            bridge the gap between complex technical solutions and customer needs.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="rounded-lg bg-cyan-500/10 p-2">
                                    <GraduationCap size={18} className="text-cyan-400"/>
                                </div>
                                <h3 className="font-semibold text-slate-100">Education</h3>
                            </div>
                            <p className="font-semibold text-slate-200">University of Minnesota</p>
                            <p className="mt-0.5 text-sm text-slate-500">College of Science and Engineering</p>
                            <p className="mt-2 text-sm font-medium text-cyan-400">B.S. Computer Science</p>
                            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12}/>
                  May 2025
                </span>
                                <span className="flex items-center gap-1.5">
                  <MapPin size={12}/>
                  Minneapolis, MN
                </span>
                            </div>
                            <div className="mt-4 border-t border-slate-700 pt-4">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Minors
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {minors.map((m) => (
                                        <span
                                            key={m}
                                            className="rounded-full border border-slate-600 bg-slate-700/50 px-3 py-1 text-xs text-slate-300"
                                        >
                      {m}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
