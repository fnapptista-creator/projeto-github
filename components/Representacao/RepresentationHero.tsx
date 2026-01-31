'use client';

import { motion } from 'framer-motion';
import MagneticLink from '@/components/MagneticLink';

export default function RepresentationHero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-void)] px-6 md:px-12 pt-20 pb-20">
            {/* Background Texture & Decor */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#111] via-transparent to-[var(--bg-void)] opacity-80 pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-white/20"></div>
                    <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60">
                        Conexão B2B Premium
                    </span>
                    <div className="h-[1px] w-12 bg-white/20"></div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-8xl font-[var(--font-serif)] text-[var(--text-primary-dark)] leading-[1.05] tracking-tight mb-8"
                >
                    As Melhores Marcas <br />
                    <span className="italic text-[var(--accent-gold)] font-medium">Na Sua Prateleira</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-base md:text-xl text-[var(--text-secondary-dark)] max-w-2xl mx-auto leading-relaxed mb-12 font-[var(--font-sans)] text-pretty"
                >
                    Acesso direto de fábrica às maiores indústrias de utilidades, decoração e brinquedos do Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <MagneticLink
                        href="#catalogo"
                        className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-[var(--accent-gold)] transition-colors duration-300 min-w-[200px] flex justify-center"
                    >
                        Conhecer Empresas
                    </MagneticLink>

                    <MagneticLink
                        href="https://felipe.rep.br"
                        className="px-10 py-4 border border-white/20 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-colors duration-300 min-w-[200px] flex justify-center"
                    >
                        Área do Cliente
                    </MagneticLink>
                </motion.div>
            </div>
        </section>
    );
}
