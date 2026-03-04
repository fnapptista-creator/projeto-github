'use client';

import MagneticLink from '@/components/MagneticLink';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';

export default function BlogCTA() {
    const { openQuiz } = useQuiz();

    return (
        <section className="py-24 bg-[var(--accent-gold)] text-center px-6 border-t border-black/5">
            <div className="max-w-3xl mx-auto">
                <span className="text-black font-sans font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block opacity-70">Chega de Teoria</span>
                <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] text-black mb-6">
                    Seu restaurante precisa ser blindado.
                </h2>
                <p className="text-black/70 mb-10 text-lg">
                    Agende um diagnóstico executivo de 15 minutos. Vamos encontrar a torneira aberta e estancar a perda de dinheiro do seu negócio.
                </p>
                <div className="flex justify-center w-full mt-4">
                    <MagneticLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            openQuiz();
                        }}
                        className="inline-flex flex-row items-center gap-4 px-8 md:px-10 py-5 cursor-pointer bg-black text-[var(--accent-gold)] rounded-none font-bold uppercase text-[10px] tracking-[0.2em] group outline-none whitespace-nowrap w-fit"
                    >
                        <span className="group-hover:text-white transition-colors duration-300">Agendar Diagnóstico Gratuito</span>
                        <div className="w-8 h-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-white/5 flex items-center justify-center transition-all duration-300">
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </MagneticLink>
                </div>
            </div>
        </section>
    );
}
