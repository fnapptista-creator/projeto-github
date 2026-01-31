'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brand, brands, categories } from './brandData';

const whatsappLink = "https://wa.me/5573981349085";

export default function BrandCatalog() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

    const filteredBrands = activeCategory === 'Todos'
        ? brands
        : brands.filter(brand => brand.categories.includes(activeCategory));

    return (
        <section id="catalogo" className="py-20 md:py-32 bg-[#050505] relative min-h-screen">
            <div className="container mx-auto px-6 md:px-12">

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-24">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                text-[10px] md:text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-300
                                ${activeCategory === cat
                                    ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-black font-bold'
                                    : 'bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white'}
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredBrands.map((brand) => (
                            <motion.div
                                layout
                                key={brand.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedBrand(brand)}
                                className="group relative aspect-square bg-[#0a0a0a] border border-white/5 rounded-sm cursor-pointer overflow-hidden flex items-center justify-center p-4 md:p-8 hover:border-[var(--accent-gold)] transition-colors duration-500"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <img
                                    src={brand.logoUrl}
                                    alt={brand.name}
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 transform group-hover:scale-105"
                                />

                                <div className="absolute bottom-4 left-0 w-full text-center">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 block">
                                        Ver Detalhes
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Premium Modal */}
            <AnimatePresence>
                {selectedBrand && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-0">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBrand(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-4xl bg-[#080808] border border-white/10 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/80"
                        >
                            <button
                                onClick={() => setSelectedBrand(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                ✕
                            </button>

                            {/* Left: Visual Identity */}
                            <div className="w-full md:w-1/3 bg-[#0c0c0c] p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                                <img
                                    src={selectedBrand.logoUrl}
                                    alt={selectedBrand.name}
                                    className="w-40 md:w-full object-contain relative z-10"
                                />
                                <div className="mt-8 flex flex-wrap gap-2 justify-center relative z-10">
                                    {selectedBrand.categories.map(cat => (
                                        <span key={cat} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-white/60">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col">
                                <h3 className="text-3xl font-[var(--font-serif)] text-white mb-6">
                                    {selectedBrand.name}
                                </h3>

                                <p className="text-sm md:text-base text-[#888] leading-relaxed mb-8 flex-grow">
                                    {selectedBrand.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold)] mb-4">Destaques do Mix</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {selectedBrand.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs md:text-sm text-[#bbb] flex items-center gap-2">
                                                <span className="w-1 h-1 bg-[var(--accent-gold)] rounded-full"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={`${whatsappLink}?text=Olá Felipe, gostaria de solicitar o catálogo da marca ${selectedBrand.name}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-[var(--accent-gold)] text-black font-bold uppercase text-xs tracking-[0.2em] text-center hover:bg-white transition-colors duration-300 rounded-sm"
                                >
                                    Solicitar Catálogo Digital
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
