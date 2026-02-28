'use client';

import { motion } from 'framer-motion';

const items = [
    "DIAGNÓSTICO OPERACIONAL",
    "REDUÇÃO DE CMV",
    "ENGENHARIA DE CARDÁPIO",
    "TREINAMENTO DE EQUIPE",
    "PADRONIZAÇÃO (POPS)",
    "SEGURANÇA ALIMENTAR",
    "LAYOUT DE COZINHA",
];

export default function InfiniteMarquee() {
    return (
        <div className="w-full bg-[var(--accent-gold)] relative overflow-hidden py-3 border-y border-[var(--accent-gold)]/20 shadow-[0_0_30px_rgba(197,160,89,0.15)] z-20">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            <div className="flex w-full whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap items-center"
                    animate={{
                        x: [0, -1000]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render twice for seamless looping */}
                    {[...items, ...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-black font-bold font-sans text-xs md:text-sm tracking-[0.25em] uppercase px-8">
                                {item}
                            </span>
                            <span className="text-black/30 px-2">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
