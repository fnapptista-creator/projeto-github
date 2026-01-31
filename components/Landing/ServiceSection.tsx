'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

interface ServiceSectionProps {
    theme: 'dark' | 'light';
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    align: 'left' | 'right';
    index: number;
    imagePath?: string;
}

export default function ServiceSection({ theme, title, subtitle, description, ctaText, ctaLink, align, index, imagePath }: ServiceSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);

    const isDark = theme === 'dark';
    const bgColor = isDark ? 'bg-[var(--bg-void)]' : 'bg-[var(--bg-paper)]';
    const textColor = isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]';
    const subTextColor = isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]';
    const accentColor = isDark ? 'text-[var(--accent-gold)]' : 'text-[#333]';
    const buttonBorder = isDark ? 'border-[var(--accent-gold)] text-[var(--accent-gold)]' : 'border-[#333] text-[#333]';

    return (
        <section
            ref={containerRef}
            className={`relative min-h-[90vh] py-20 md:py-32 flex items-center justify-center overflow-hidden ${bgColor}`}
        >
            <div className={`container mx-auto px-6 md:px-12 relative z-10`}>
                <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                    {/* Text Content */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className={`inline-block py-1 px-3 border ${isDark ? 'border-white/10' : 'border-black/5'} rounded-full text-xs tracking-[0.3em] uppercase mb-6 ${accentColor} font-[var(--font-sans)] backdrop-blur-sm`}>
                                0{index} — {subtitle}
                            </span>
                            <h2 className={`text-4xl sm:text-5xl md:text-7xl font-[var(--font-serif)] mb-8 leading-[1] ${textColor}`}>
                                {title}
                            </h2>
                            <p className={`text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto md:mx-0 ${subTextColor} font-[var(--font-sans)] text-pretty`}>
                                {description}
                            </p>

                            <Link href={ctaLink} className={`inline-block group`}>
                                <div className={`px-10 py-5 border ${buttonBorder} rounded-full transition-all duration-500 hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:text-black uppercase text-xs font-bold tracking-[0.2em]`}>
                                    {ctaText}
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual/Image Area */}
                    <motion.div
                        className="flex-1 w-full"
                        style={{ y }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1 }}
                            className={`relative aspect-[3.5/5] w-full max-w-xs md:max-w-sm mx-auto overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f0f0f0]'} shadow-2xl rounded-sm`}
                        >
                            {imagePath ? (
                                <>
                                    <img
                                        src={imagePath}
                                        alt={title}
                                        className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 md:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`text-[12rem] font-[var(--font-serif)] opacity-5 ${textColor}`}>{index}</span>
                                </div>
                            )}

                            {/* Texture/Noise Overlay */}
                            <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none"></div>

                            {/* Decorative Elements */}
                            <div className={`absolute top-8 left-8 right-8 bottom-8 border opacity-10 ${isDark ? 'border-white' : 'border-black'} pointer-events-none`}></div>
                            <div className={`absolute bottom-12 left-0 right-0 text-center text-xs tracking-[0.4em] uppercase opacity-40 ${isDark ? 'text-white' : 'text-black'} z-10 font-[var(--font-sans)]`}>Felipe Nascimento</div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
