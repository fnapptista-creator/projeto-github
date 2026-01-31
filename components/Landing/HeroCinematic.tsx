'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function HeroCinematic() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-void)] px-6 md:px-12 lg:px-20 pt-20 pb-32">
            {/* Background Noise Texture (Optional enhancement) */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* Subtle Gradient Spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--accent-gold)] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>

            {/* Content Container */}
            <div className="z-10 flex flex-col items-center text-center px-4 md:px-0 max-w-5xl mx-auto">

                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-32 h-32 md:w-56 md:h-56 -mb-6 md:-mb-10 z-20"
                >
                    <Image
                        src="/logo-new.png"
                        alt="Felipe Nascimento Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Title Animation - Staggered */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[var(--font-serif)] text-[var(--text-primary-dark)] tracking-tight leading-[1.1] md:leading-[1.05]">
                        A ponte entre a <span className="italic text-[var(--accent-gold)]">Gastronomia</span>
                        <br className="hidden md:block" />
                        <span className="md:inline hidden"> e o </span>
                        <span className="md:hidden block my-2 text-sm tracking-widest uppercase opacity-50 font-sans">E O</span>
                        <span className="italic text-[var(--accent-gold)]">Lucro Real</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="mt-8 md:mt-10 text-base sm:text-lg md:text-2xl text-[var(--text-secondary-dark)] max-w-sm md:max-w-3xl font-[var(--font-sans)] leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    Estratégia comercial e gestão de alto nível para quem não aceita o básico.
                </motion.p>
            </div>

            {/* Scroll Indicator - Animated */}
            <motion.div
                className="absolute bottom-2 flex flex-col items-center gap-2 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                whileHover={{ y: 5 }}
            >
                <span className="text-[10px] tracking-[0.3em] font-sans text-[var(--accent-gold)] uppercase opacity-80">Explore</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--accent-gold)] to-transparent opacity-40"></div>
            </motion.div>
        </section>
    );
}
