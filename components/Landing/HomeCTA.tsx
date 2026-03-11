'use client';

import { motion } from 'framer-motion';
import MagneticLink from '@/components/MagneticLink';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';

export default function HomeCTA() {
    const { openQuiz } = useQuiz();

    return (
        <section className="py-12 md:py-16 bg-[var(--accent-gold)] text-center px-6 relative overflow-hidden flex items-center justify-center">
            {/* Subtle noise for luxury texture */}
            <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <span className="text-black font-sans font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-4 block opacity-70">Consultoria para Restaurantes</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-serif)] text-black mb-6 leading-[0.9] tracking-tighter uppercase">
                    Chega de trabalhar<br />
                    Para pagar <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>boletos.</span>
                </h2>
                <p className="text-black/70 text-sm md:text-base mb-8 font-sans max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
                    A sua operação gastronômica nasceu para gerar lucro e liberdade, não para ser um trabalho escravo de 16 horas. Selecione a opção abaixo e agende um diagnóstico com nosso consultor especialista.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <MagneticLink
                        href="#"
                        onClick={(e: React.MouseEvent) => { e.preventDefault(); openQuiz(); }}
                        className="inline-flex flex-row items-center gap-4 px-8 md:px-10 py-5 cursor-pointer bg-black text-[var(--accent-gold)] rounded-none font-bold uppercase text-[10px] tracking-[0.2em] group outline-none whitespace-nowrap mb-6"
                    >
                        <span className="group-hover:text-white transition-colors duration-300">Agendar Diagnóstico</span>
                        <div className="w-8 h-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-white/5 flex items-center justify-center transition-all duration-300">
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </MagneticLink>
                </div>

                {/* Secondary CTA: Sessão Estratégica (Opção A) */}
                <span className="text-black/60 text-[10px] md:text-xs font-sans block mt-2">
                    Buscando apenas um direcionamento rápido? <br className="md:hidden" />
                    <a href="/consultoria#mentoria" className="text-black/90 font-bold hover:underline decoration-[var(--accent-gold)] underline-offset-4 transition-all">
                        Conheça a Mentoria (Sessão Estratégica)
                    </a>
                </span>
            </motion.div>
        </section>
    );
}
