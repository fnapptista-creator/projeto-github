'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PostData {
    slug: string;
    title: string;
    date: string;
    description: string;
    coverImage?: string;
}

interface LatestPostsProps {
    posts: PostData[];
}

export default function LatestPosts({ posts }: LatestPostsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-[#0c0c0c] relative overflow-hidden text-white border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="inline-block py-1 px-3 border border-[var(--accent-gold)] rounded-full text-[10px] tracking-[0.25em] uppercase mb-6 text-[var(--accent-gold)]"
                        >
                            Inteligência Aplicada
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] tracking-tighter leading-none"
                        >
                            Aprenda antes de <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>executar.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-bold text-white hover:text-[var(--accent-gold)] transition-colors group"
                        >
                            Ver Todo o Acervo
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 -mx-6 px-6 md:mx-0 md:px-0 pb-4">
                    {posts.slice(0, 3).map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                            transition={{ delay: 0.15 * i, duration: 0.6 }}
                            className="h-full group snap-start snap-always shrink-0 w-[85vw] md:w-auto block relative"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex flex-col h-full bg-[#111] hover:bg-[#1a1a1a] transition-all duration-500 border border-white/5 hover:border-white/10"
                            >
                                {/* Imagem de Capa do MDX */}
                                {post.coverImage && (
                                    <div className="relative w-full aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                )}

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[var(--accent-gold)] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('pt-BR', {
                                                timeZone: 'UTC', day: '2-digit', month: '2-digit', year: '2-digit'
                                            })}
                                        </time>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] mb-4 text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300 leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-3 mt-auto">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
