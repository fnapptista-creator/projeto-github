import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog estratégico para Restaurantes | Felipe Baptista',
    description: 'Artigos brutais e sem filtro sobre redução de CMV, gestão de equipe e engenharia de cardápio para donos de restaurantes.',
};

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary-dark)] scroll-smooth">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <header className="mb-24">
                    <span className="text-[var(--accent-gold)] font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Editorial</span>
                    <h1 className="text-5xl md:text-8xl font-[var(--font-serif)] tracking-tighter leading-none mb-6">
                        Inteligência<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Aplicada.</span>
                    </h1>
                    <p className="text-white/60 max-w-xl text-lg md:text-xl font-serif italic">
                        Não escrevemos teoria. Aqui estão as técnicas invisíveis que usamos para gerar lucro nas maiores cozinhas do Brasil.
                    </p>
                </header>

                <div className="flex flex-col border-t border-white/10">
                    {allPostsData.map(({ slug, title, date, description }) => (
                        <Link
                            key={slug}
                            href={`/blog/${slug}`}
                            className="group relative block border-b border-white/10 py-12 transition-colors duration-500 hover:bg-white/[0.02]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-baseline">
                                {/* Meta */}
                                <div className="text-sm font-sans tracking-[0.2em] uppercase text-white/40 group-hover:text-[var(--accent-gold)] transition-colors">
                                    <time dateTime={date}>
                                        {new Date(date).toLocaleDateString('pt-BR', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] mb-4 text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300 leading-tight">
                                        {title}
                                    </h2>
                                    <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
