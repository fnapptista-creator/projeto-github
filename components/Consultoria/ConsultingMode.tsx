'use client';

import { motion } from 'framer-motion';

interface Item {
    title: string;
    desc: string;
}

interface ConsultingModeProps {
    title: string;
    subtitle: string;
    description: string;
    items: Item[];
    index: number;
    theme?: 'dark' | 'light';
}

export default function ConsultingMode({ title, subtitle, description, items, index, theme = 'dark' }: ConsultingModeProps) {
    const isDark = theme === 'dark';
    const bgColor = isDark ? 'bg-[var(--bg-void)]' : 'bg-white';
    const textColor = isDark ? 'text-[var(--text-primary-dark)]' : 'text-black';
    const subColor = isDark ? 'text-[var(--text-secondary-dark)]' : 'text-black/60';
    const borderColor = isDark ? 'border-white/[0.05]' : 'border-black/[0.05]';
    const hoverLineColor = isDark ? 'group-hover:bg-[var(--accent-gold)]' : 'group-hover:bg-black';
    const hoverTitleColor = isDark ? 'group-hover:text-[var(--accent-gold)]' : 'group-hover:text-black';

    return (
        <section className={`py-16 md:py-20 relative ${bgColor} overflow-hidden min-h-[100svh] flex flex-col justify-center`}>
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-12 md:mb-16 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className={`inline-block py-1 px-3 border ${borderColor} rounded-full text-[10px] tracking-[0.25em] uppercase mb-6 ${isDark ? 'text-[var(--accent-gold)]' : 'text-[#999]'}`}
                    >
                        Modo {String(index).padStart(2, '0')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-[var(--font-serif)] mb-6 ${textColor}`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg md:text-xl ${isDark ? 'text-[var(--accent-gold)]' : 'text-[#666]'} italic font-serif`}
                    >
                        {subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.3 }}
                        className={`mt-4 text-base md:text-lg ${subColor} max-w-2xl`}
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-10 pb-4 -mx-6 px-6 md:mx-0 md:px-0 mt-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                            transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                            className={`group snap-center shrink-0 w-[85vw] md:w-auto py-6 md:py-8 border-t ${borderColor} transition-all duration-500 ease-out block relative`}
                        >
                            <div className={`absolute top-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ${hoverLineColor}`}></div>
                            <h3 className={`text-xl lg:text-2xl font-[var(--font-serif)] mb-3 ${textColor} opacity-60 ${hoverTitleColor} group-hover:opacity-100 transition-all duration-300 tracking-tight uppercase`}>{item.title}</h3>
                            <p className={`text-sm leading-relaxed ${subColor} max-w-[95%]`}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
