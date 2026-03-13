'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';


export default function HeroCinematic() {
    const { openQuiz } = useQuiz();

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-[var(--bg-void)] px-6 md:px-16 pt-32 pb-20">
            {/* 2026 Cinematic Atmos Background - Iluminação Volumétrica Dinâmica Filtrada */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden bg-black">
                
                {/* 1. Base Image - "Lens Breathing" suave, porém óbvio e visível RÁPIDO */}
                <motion.div
                    initial={{ scale: 1.05, opacity: 0.6, filter: 'blur(4px)' }}
                    animate={{ scale: 1.15, opacity: 0.9, filter: 'blur(0px)' }}
                    transition={{ 
                        scale: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
                        opacity: { duration: 2, ease: "easeOut" },
                        filter: { duration: 2, ease: "easeOut" }
                    }}
                    className="absolute inset-0 w-full h-full transform-gpu origin-center mix-blend-luminosity grayscale"
                >
                    <Image
                        src="/uploads/nova imagem.jpeg"
                        alt="Restaurante Operação Alto Nível"
                        fill
                        className="object-cover object-[25%_20%]"
                        priority
                        quality={100}
                    />
                </motion.div>

                {/* 2. Feixe de Luz Interativa (Relighting RÁPIDO) */}
                <motion.div
                    initial={{ opacity: 0, x: '-50%', y: '-10%' }}
                    animate={{ 
                        opacity: [0, 0.6, 0.2, 0.7, 0],
                        x: ['-50%', '10%', '60%', '20%', '-50%'],
                        y: ['-10%', '30%', '10%', '0%', '-10%']
                    }}
                    transition={{ 
                        duration: 8, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                    }}
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(204, 163, 100, 0.35) 0%, transparent 50%)'
                    }}
                />

                {/* 3. Gold Flare / Lens Glint (Refração Óbvia e Pulsante) */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: [0.1, 0.35, 0.1],
                        scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{ 
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                    }}
                    className="absolute top-1/4 right-[5%] w-[50vw] h-[50vw] bg-[#CCA364] rounded-full blur-[120px] mix-blend-screen z-10 pointer-events-none"
                />

                {/* 4. Densa Degrade para Legibilidade Perfeita */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[#0a0a0a]/80 to-transparent z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-void)] via-[#0a0a0a]/50 to-transparent z-20"></div>

                {/* 5. Granulado Premium Animado */}
                <div className="absolute inset-0 z-30 opacity-[0.05]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
            </div>

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
