'use client';

import { motion } from 'framer-motion';
import MagneticLink from '@/components/MagneticLink';

const whatsappLink = "https://wa.me/5573981349085";

export default function ConsultoriaHero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-void)] px-6 md:px-12 pt-20 pb-20">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[var(--accent-gold)] rounded-full blur-[180px] opacity-[0.04] pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Tagline */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block py-1 px-4 mb-8 border border-white/10 rounded-full text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] backdrop-blur-sm"
                >
                    Estratégia Gastronômica
                </motion.span>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-8xl font-[var(--font-serif)] text-[var(--text-primary-dark)] leading-[1.05] tracking-tight mb-8"
                >
                    Transforme seu Restaurante em uma <br className="hidden md:block" />
                    <span className="italic text-[var(--accent-gold)]">Máquina de Lucro</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-base md:text-xl text-[var(--text-secondary-dark)] max-w-2xl mx-auto leading-relaxed mb-12 font-[var(--font-sans)] text-pretty"
                >
                    Maximize seus lucros, padronize seus processos e eleve a experiência do seu cliente com uma gestão de alta performance.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-8 items-center justify-center"
                >
                    <MagneticLink
                        href={`${whatsappLink}?text=Olá Felipe, gostaria de agendar um diagnóstico gratuito para meu restaurante.`}
                        className="flex items-center justify-center px-8 py-4 bg-[var(--accent-gold)] text-black rounded-full font-bold uppercase text-xs tracking-[0.15em] hover:bg-white transition-colors duration-300 min-w-[240px]"
                    >
                        Agendar Diagnóstico
                    </MagneticLink>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary-dark)] opacity-50 hidden md:block mt-[2px]">
                        — ou —
                    </span>

                    <motion.a
                        href="#expertise"
                        whileHover={{ scale: 1.05, color: "var(--accent-gold)" }}
                        className="flex items-center justify-center text-xs uppercase tracking-[0.2em] text-[var(--text-primary-dark)] border-b border-transparent hover:border-[var(--accent-gold)] pb-1 transition-all cursor-pointer min-w-[240px] h-full mt-[2px]"
                    >
                        Descobrir Estratégia
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--text-secondary-dark)] to-transparent opacity-30"></div>
            </motion.div>
        </section>
    );
}
