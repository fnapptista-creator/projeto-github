'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sectors = [
    { label: 'Restaurante', image: '/sectors/alacarte.png?v=6' },
    { label: 'Pizzaria', image: '/sectors/pizzaria.png?v=6' },
    { label: 'Hamburgueria', image: '/sectors/hamburgueria.png?v=6' },
    { label: 'Gastrobar', image: '/sectors/gastrobar.png?v=6' },
    { label: 'Delivery', image: '/sectors/delivery.png?v=6' },
    { label: 'Conveniência', image: '/sectors/conveniencia.png?v=6' },
];

export default function SectorsStrip() {
    return (
        <section className="bg-[#080808] border-t border-b border-white/[0.05] py-9 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--accent-gold)] border-l-2 border-[var(--accent-gold)] pl-4 mb-10"
                >
                    Operações Atendidas
                </motion.p>

                {/* Grid de ícones 3D - Ajustado para 6 colunas (3x2 mobile) */}
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {sectors.map(({ label, image }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group flex flex-col items-center gap-4 cursor-default"
                        >
                            {/* Container da Imagem 3D - Reduzido para w-16 */}
                            <div className="relative w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-gold)]/40 group-hover:bg-gradient-to-b group-hover:from-[var(--accent-gold)]/5 group-hover:to-transparent transition-all duration-500 rounded-sm overflow-hidden">

                                {/* Glow Effect Background */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_70%)] transition-opacity duration-700 pointer-events-none" />

                                <div className="relative w-12 h-12 transition-transform duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                    <Image
                                        src={image}
                                        alt={label}
                                        fill
                                        sizes="48px"
                                        className="object-contain filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)]"
                                        priority={i < 4}
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.1em] uppercase text-white/70 group-hover:text-white transition-colors duration-300 text-center font-medium leading-tight px-2">
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
