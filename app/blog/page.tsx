import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog estratégico para Restaurantes | Felipe Baptista',
    description: 'Artigos brutais e sem filtro sobre redução de CMV, gestão de equipe e engenharia de cardápio para donos de restaurantes.',
};

export const revalidate = 86400; // ISR: Revalida a página 1x por dia (24h) para ativar os agendamentos automáticos

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
                    {allPostsData.map(({ slug, title, date, description, coverImage }) => (
                        <Link
                            key={slug}
                            href={`/blog/${slug}`}
                            className="group relative block border-b border-white/10 py-12 transition-colors duration-500 hover:bg-white/[0.02]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-center">
                                {/* Meta & Image */}
                                <div className="flex flex-col w-full h-full justify-start gap-6">
                                    <div className="text-sm font-sans tracking-[0.2em] uppercase text-white/40 group-hover:text-[var(--accent-gold)] transition-colors">
                                        <time dateTime={date}>
                                            {new Date(date).toLocaleDateString('pt-BR', {
                                                timeZone: 'UTC',
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                    {/* Cover Image Desktop */}
                                    {coverImage && (
                                        <div className="hidden md:block w-full aspect-[4/3] relative overflow-hidden bg-black/50 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border border-white/5 group-hover:border-white/20">
                                            <Image
                                                src={coverImage}
                                                alt={`Capa do artigo: ${title}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col w-full">
                                    {/* Cover Image Mobile */}
                                    {coverImage && (
                                        <div className="md:hidden w-full aspect-[16/9] mb-6 relative overflow-hidden bg-black/50 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border border-white/5">
                                            <Image
                                                src={coverImage}
                                                alt={`Capa do artigo: ${title}`}
                                                fill
                                                sizes="100vw"
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    )}
                                    <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] mb-4 text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300 leading-tight mt-0">
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
