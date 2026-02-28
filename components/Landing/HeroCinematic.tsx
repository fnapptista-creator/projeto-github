'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';


export default function HeroCinematic() {
    const { openQuiz } = useQuiz();

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-[var(--bg-void)] px-6 md:px-16 pt-32 pb-20">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none grayscale opacity-40">
                <Image
                    src="/hero-bg.png"
                    alt="Restaurante Operação Alto Nível"
                    fill
                    className="object-cover object-[80%_center] md:object-center mix-blend-luminosity"
                    priority
                    quality={90}
                />
                {/* Harsh Vignette mimicking Brutalism */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[var(--bg-void)]/90 to-transparent"></div>
                <div className="absolute inset-0 bg-[var(--bg-void)]/30 backdrop-blur-[2px]"></div>
            </div>

            {/* Background Noise Texture (Optional enhancement) */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* Subtle Gradient Spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--accent-gold)] rounded-full blur-[160px] opacity-[0.05] z-0 pointer-events-none"></div>

            {/* Content Container - Refined Asymmetric */}
            <div className="z-10 flex flex-col md:flex-row items-end justify-between w-full max-w-[1400px] mx-auto">
                <div className="w-full md:w-[75%] flex flex-col items-start text-left">
                    {/* H1 SEO Camouflage */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                    >
                        <h1 className="text-[9px] md:text-[10px] text-[var(--accent-gold)] uppercase tracking-[0.3em] font-sans opacity-60 mb-4 pl-1">
                            Consultoria Gastronômica para Restaurantes em Itabuna, Ilhéus e Sul da Bahia
                        </h1>
                    </motion.div>

                    {/* Title Animation - Staggered (Now H2 for visual structure) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-serif)] text-white tracking-tighter leading-[1] uppercase">
                            O SEU RESTAURANTE <br className="hidden sm:block" />
                            PRECISA DAR <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--accent-gold)' }}>LUCRO.</span><br />
                            <span className="text-[0.6em] text-white/90 block mt-4 tracking-normal">NÃO DOR DE CABEÇA.</span>
                        </h2>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="mt-8 text-sm md:text-base text-[#aaa] max-w-2xl font-[var(--font-sans)] leading-relaxed uppercase tracking-widest border-l-2 border-[var(--accent-gold)] pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                    >
                        Diagnóstico operacional, treinamento de equipe, padronização e estratégias comerciais de alto nível.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="mt-12 flex flex-col sm:flex-row items-start gap-4 font-[var(--font-sans)] w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                    >
                        <button
                            onClick={() => openQuiz()}
                            className="px-10 py-5 bg-[var(--accent-gold)] text-black font-black uppercase text-xs tracking-[0.25em] rounded-none hover:bg-white transition-colors duration-300 w-full sm:w-auto"
                        >
                            Diagnóstico Gratuito
                        </button>
                        <Link
                            href="/consultoria"
                            className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] rounded-none hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto text-center"
                        >
                            Conhecer a Consultoria
                        </Link>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
