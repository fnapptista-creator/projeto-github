'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticLink from '@/components/MagneticLink';
import { useQuiz } from '@/components/LeadQuiz/QuizContext';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export default function Contato() {
    const { openQuiz } = useQuiz();

    return (
        <main className="min-h-screen bg-[var(--bg-void)] flex flex-col pt-32 selection:bg-[var(--accent-gold)] selection:text-black">
            <Navbar />

            <section className="flex-1 w-full px-6 md:px-16 pb-24 relative overflow-hidden">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pt-12">

                    {/* Left Column - Monumental Text */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-serif)] text-white tracking-tighter leading-[0.9] uppercase mb-10"
                        >
                            VAMOS ESTANCAR O <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--accent-gold)' }}>SANGRAMENTO</span> E GERAR LUCRO.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-[#aaa] text-lg md:text-xl font-sans max-w-xl leading-relaxed border-l-2 border-[var(--accent-gold)] pl-6 uppercase tracking-widest mb-16"
                        >
                            Chega de adiar o problema que está sugando o caixa da sua operação. Selecione seu canal de preferência e vamos traçar uma rota blindada pro seu restaurante crescer e lucrar.
                        </motion.p>
                    </motion.div>

                    {/* Right Column - Brutal Grid Contacts */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col gap-4 justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* WhatsApp Method */}
                        <motion.div variants={fadeInUp}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); openQuiz(); }}
                                className="group flex flex-col p-8 bg-black border border-white/5 hover:bg-white hover:text-black transition-all duration-300 w-full rounded-none"
                            >
                                <span className="text-[10px] text-[var(--accent-gold)] group-hover:text-black uppercase tracking-[0.3em] font-bold mb-4">Ação Rápida</span>
                                <h3 className="text-3xl font-[var(--font-serif)] uppercase mb-2 group-hover:text-black text-white">Chamar no WhatsApp</h3>
                                <div className="flex items-center gap-4 mt-8">
                                    <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)] group-hover:bg-black/10 flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:text-black">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <span className="font-sans text-xs tracking-[0.2em] font-bold text-[#888] group-hover:text-black/60">+55 73 98134-9085</span>
                                </div>
                            </a>
                        </motion.div>

                        {/* Email Method */}
                        <motion.div variants={fadeInUp}>
                            <a
                                href="mailto:eu@felipenb.com.br"
                                className="group flex flex-col p-8 bg-[var(--bg-void)] border border-white/10 hover:border-white transition-all duration-300 w-full rounded-none"
                            >
                                <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-4">Corporativo</span>
                                <h3 className="text-2xl font-[var(--font-serif)] uppercase mb-2 text-white">E-mail Direto</h3>
                                <p className="font-sans text-sm tracking-wide text-[#888] mt-4">eu@felipenb.com.br</p>
                            </a>
                        </motion.div>

                        {/* LinkedIn Method */}
                        <motion.div variants={fadeInUp}>
                            <a
                                href="https://linkedin.com/in/felipenascimentob/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col p-8 bg-[var(--bg-void)] border border-white/10 hover:border-[#0a66c2] transition-colors duration-300 w-full rounded-none"
                            >
                                <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold mb-4">Investidores & Network</span>
                                <h3 className="text-2xl font-[var(--font-serif)] uppercase mb-2 text-white group-hover:text-[#0a66c2] transition-colors">LinkedIn</h3>
                                <p className="font-sans text-sm tracking-wide text-[#888] mt-4 underline decoration-[#111] group-hover:decoration-[#0a66c2]/30 text-underline-offset-4">/felipenascimentob</p>
                            </a>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Massive Divider Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="max-w-[1400px] mx-auto h-[1px] bg-white/10 my-24 origin-left"
                />

                {/* Extreme CTA for Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center"
                >
                    <MagneticLink
                        href="#"
                        onClick={(e: React.MouseEvent) => { e.preventDefault(); openQuiz(); }}
                        className="group inline-flex flex-col items-center gap-6 cursor-pointer"
                    >
                        <span className="text-[var(--accent-gold)] font-sans font-black uppercase tracking-[0.5em] text-[10px] md:text-xs group-hover:text-white transition-colors duration-300">
                            Iniciar Raio-X Diagnóstico
                        </span>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-[var(--font-serif)] tracking-tighter text-white uppercase group-hover:scale-[1.02] transition-transform duration-500 origin-center leading-[0.8]">
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>AGENDAR</span><br />
                            SESSÃO
                        </h2>
                    </MagneticLink>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
