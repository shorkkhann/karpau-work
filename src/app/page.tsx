import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col justify-center min-h-screen max-w-xl mx-auto p-6 sm:p-8 font-[family-name:var(--font-geist-sans)] text-neutral-900 dark:text-neutral-50">
            <main className="flex flex-col gap-6">
                
                {/* Заголовок и Роль */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Motion Designer & 3D Generalist
                    </h1>
                    <p className="text-base text-neutral-500 dark:text-neutral-400">
                        Creating immersive 3D experiences and dynamic motion graphics.
                    </p>
                </div>

                {/* Короткий понятный абзац (Био) */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                    3D Motion Designer with 5+ years of experience in creating high-quality visual content for brands, startups, and creative agencies. Specializing in product animation, video explainers, and motion graphics for marketing campaigns.
                </p>
				
				<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                 I’m comfortable designing multiple projects from concept to final delivery independently or working as part of established, feedback focused teams.
                </p>

                {/* Ссылки / Кнопки */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <a
                        href="https://www.linkedin.com/in/maksim-karpau/" // Замени на свою ссылку
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                        LinkedIn
                    </a>
                    
                    <a
                        href="https://vimeo.com/" // Замени на свой рил / портфолио
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                        Showreel
                    </a>

                    <a
                        href="mailto:shorkkhann@gmail.com" // Твоя почта
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                    >
                        Contact
                    </a>
                </div>

            </main>
        </div>
    );
}