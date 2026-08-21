export default function SectionHeader({
                                          label,
                                          title,
                                          center,
                                      }: {
    label: string
    title: string
    center?: boolean
}) {
    return (
        <div className={center ? 'text-center' : ''}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">{label}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
            <div className={`mt-3 h-1 w-12 rounded-full bg-cyan-500${center ? ' mx-auto' : ''}`}/>
        </div>
    )
}
