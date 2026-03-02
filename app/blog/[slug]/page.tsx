import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShareArticle from '@/components/Blog/ShareArticle';
import MagneticLink from '@/components/MagneticLink';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import Head from 'next/head'; // Used occasionally for JSON-LD, but in App Router we can use <script>

// Gera os parâmetros estáticos para SSG
export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

// Gera a Metadata (SEO Dinâmico)
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return {
        title: `${postData.title} | Felipe Baptista`,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            type: 'article',
            publishedTime: postData.date,
            // Pode injetar imagem aqui a partir de postData.coverImage
        },
        twitter: {
            card: 'summary_large_image',
            title: postData.title,
            description: postData.description,
        }
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    // Schema.org JSON-LD for rich snippets
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: postData.title,
        description: postData.description,
        author: [{
            '@type': 'Person',
            name: 'Felipe Baptista',
            url: 'https://felipenb.com.br'
        }],
        datePublished: postData.date,
    };

    return (
        <main className="min-h-screen bg-[#f7f7f5] text-black scroll-smooth">
            <Navbar />

            {/* Inject JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />

            <article className="pt-32 pb-4 px-6 md:px-12 max-w-3xl mx-auto">
                {/* Header (Brutalista e Elegante) */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <time
                            dateTime={postData.date}
                            className="text-xs tracking-[0.2em] font-sans font-bold uppercase text-[var(--accent-gold)]"
                        >
                            {new Date(postData.date).toLocaleDateString('pt-BR', {
                                day: '2-digit', month: 'short', year: 'numeric'
                            })}
                        </time>
                        <span className="w-12 h-[1px] bg-black/20"></span>
                        <span className="text-xs tracking-[0.2em] font-sans uppercase text-black/40">Felipe Baptista</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] leading-[1.1] mb-8 tracking-tight">
                        {postData.title}
                    </h1>

                    <p className="text-xl md:text-2xl font-serif italic text-black/60 leading-relaxed border-l-2 border-[var(--accent-gold)] pl-6">
                        {postData.description}
                    </p>
                </header>

                {/* Content Body (Texto do MDX) */}
                <div
                    className="prose prose-lg md:prose-xl prose-stone max-w-none 
                        prose-headings:font-[var(--font-serif)] prose-headings:mt-16 prose-headings:mb-6
                        prose-p:font-sans prose-p:leading-relaxed prose-p:text-black/80 prose-p:mb-8
                        prose-li:font-sans prose-li:text-black/80
                        prose-strong:font-bold prose-strong:text-black
                        prose-a:text-[var(--accent-gold)] hover:prose-a:text-black prose-a:transition-colors"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Viral Ecosystem (Share) */}
                <ShareArticle title={postData.title} urlPath={`/blog/${postData.slug}`} coverImage={postData.coverImage} />

                {/* Post Navigation */}
                {(postData.prevPost || postData.nextPost) && (
                    <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 pb-16">
                        {postData.prevPost ? (
                            <Link
                                href={`/blog/${postData.prevPost.slug}`}
                                className="flex-1 group flex flex-col items-start p-8 bg-white border border-black/10 hover:border-black hover:shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all text-left"
                            >
                                <div className="flex items-center gap-2 mb-4 text-black/40 group-hover:text-black transition-colors">
                                    <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Artigo Anterior</span>
                                </div>
                                <span className="font-serif text-xl leading-[1.2] text-black group-hover:text-[var(--accent-gold)] transition-colors">{postData.prevPost.title}</span>
                            </Link>
                        ) : <div className="flex-1 hidden md:block"></div>}

                        {postData.nextPost ? (
                            <Link
                                href={`/blog/${postData.nextPost.slug}`}
                                className="flex-1 group flex flex-col items-end p-8 bg-white border border-black/10 hover:border-black hover:shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:-translate-x-1 transition-all text-right"
                            >
                                <div className="flex items-center gap-2 mb-4 text-black/40 group-hover:text-black transition-colors">
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Próximo Artigo</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                                <span className="font-serif text-xl leading-[1.2] text-black group-hover:text-[var(--accent-gold)] transition-colors">{postData.nextPost.title}</span>
                            </Link>
                        ) : <div className="flex-1 hidden md:block"></div>}
                    </div>
                )}
            </article>

            {/* Inbound Conversion Block (CTA Dourado) */}
            <section className="py-24 bg-[var(--accent-gold)] text-center px-6 border-t border-black/5">
                <div className="max-w-3xl mx-auto">
                    <span className="text-black font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block opacity-70">Chega de Teoria</span>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] text-black mb-6">
                        Seu restaurante precisa ser blindado.
                    </h2>
                    <p className="text-black/70 mb-10 text-lg">
                        Agende um diagnóstico executivo de 15 minutos. Vamos encontrar a torneira aberta e estancar a perda de dinheiro do seu negócio.
                    </p>
                    <div className="flex justify-center w-full mt-4">
                        <MagneticLink
                            href="https://wa.me/5573981349085"
                            className="inline-flex flex-row items-center gap-4 px-8 md:px-10 py-5 cursor-pointer bg-black text-[var(--accent-gold)] rounded-none font-bold uppercase text-[10px] tracking-[0.2em] group outline-none whitespace-nowrap w-fit"
                        >
                            <span className="group-hover:text-white transition-colors duration-300">Agendar Diagnóstico Gratuito</span>
                            <div className="w-8 h-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-white/5 flex items-center justify-center transition-all duration-300">
                                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </MagneticLink>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
