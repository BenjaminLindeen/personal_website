import {Github, Linkedin} from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-slate-600">
                        © {new Date().getFullYear()} Benjamin Lindeen. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/BenjaminLindeen"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-slate-600 transition-colors hover:text-cyan-400"
                        >
                            <Github size={18}/>
                        </a>
                        <a
                            href="https://linkedin.com/in/benjaminlindeen"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-slate-600 transition-colors hover:text-cyan-400"
                        >
                            <Linkedin size={18}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
