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
    const bgColor = isDark ? '' : 'bg-[#f2f2f0]';
    const textColor = isDark ? 'text-[var(--text-primary-dark)]' : 'text-[#111]';
    const subColor = isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[#555]';
    const borderColor = isDark ? 'border-white/10' : 'border-black/10';

    return (
        <section className={`py-20 md:py-32 relative ${bgColor} overflow-hidden`}>
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16 md:mb-24 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`inline-block py-1 px-3 border ${borderColor} rounded-full text-[10px] tracking-[0.25em] uppercase mb-6 ${isDark ? 'text-[var(--accent-gold)]' : 'text-[#999]'}`}
                    >
                        Modo {String(index).padStart(2, '0')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-[var(--font-serif)] mb-6 ${textColor}`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg md:text-xl ${isDark ? 'text-[var(--accent-gold)]' : 'text-[#666]'} italic font-serif`}
                    >
                        {subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`mt-4 text-base md:text-lg ${subColor} max-w-2xl`}
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-16">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="group"
                        >
                            <div className={`w-full h-[1px] ${borderColor} bg-current opacity-20 mb-6 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <h3 className={`text-xl font-medium mb-3 ${textColor}`}>{item.title}</h3>
                            <p className={`text-sm md:text-base leading-relaxed ${subColor} text-pretty`}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
