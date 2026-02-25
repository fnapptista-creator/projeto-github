'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from './QuizContext';
import { X, ArrowRight, Check, ArrowLeft } from 'lucide-react';

const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.3 } }
};

export default function LeadQuizModal() {
    const { isOpen, closeQuiz, quizData, updateQuizData, resetQuiz } = useQuiz();
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');

    // Prevenir scroll do body quando o modal abre
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Resetar step após um tempo se fechar
            const t = setTimeout(() => { setStep(1); setError(''); }, 500);
            return () => clearTimeout(t);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleNext = () => {
        setError('');
        if (step === 1 && !quizData.name.trim()) return setError('Por favor, me diga o seu nome.');
        if (step === 2 && !quizData.city.trim()) return setError('Por favor, informe a sua cidade.');
        if (step === 3 && !quizData.businessStage) return setError('Selecione uma fase do negócio.');
        if (step === 4 && quizData.painPoints.length === 0) return setError('Selecione ao menos um desafio.');

        if (step < 4) {
            setStep(prev => prev + 1);
        } else {
            finishAndRedirect();
        }
    };

    const togglePainPoint = (point: string) => {
        const current = quizData.painPoints;
        if (current.includes(point)) {
            updateQuizData({ painPoints: current.filter(p => p !== point) });
        } else {
            updateQuizData({ painPoints: [...current, point] });
        }
    };

    const finishAndRedirect = () => {
        // Formatar envio pro WhatsApp
        const businessMap: Record<string, string> = {
            'novo': 'Estou validando uma ideia nova ou pretendo abrir um restaurante.',
            'operando': 'Já possuo um negócio em funcionamento.',
            'expansao': 'Quero transformar minha marca em rede/franquia.'
        };

        const text = `Olá Felipe! Me chamo *${quizData.name.trim()}* e falo de *${quizData.city.trim()}*.\n\n` +
            `🏢 *Momento do Negócio:* ${businessMap[quizData.businessStage]}\n\n` +
            `🚨 *Principais Desafios Atuais:*\n${quizData.painPoints.map(p => `- ${p}`).join('\n')}\n\n` +
            `Gostaria de saber como a consultoria pode me ajudar com esse cenário!`;

        const encoded = encodeURIComponent(text);

        // Timeout para UX + redirect
        setTimeout(() => {
            window.open(`https://wa.me/5573981349085?text=${encoded}`, '_blank');
            closeQuiz();
            resetQuiz();
            setStep(1);
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeQuiz}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Box */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[500px]"
                    >
                        {/* Header Progress */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex gap-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div
                                        key={i}
                                        className={`h-1.5 w-8 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[var(--accent-gold)]' : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                            <button onClick={closeQuiz} className="text-white/50 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 relative overflow-hidden p-6 md:p-10 flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div key="s1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                                        <h2 className="text-3xl font-[var(--font-serif)] text-white mb-2">Primeiro, como posso te chamar?</h2>
                                        <p className="text-[#888] mb-8 font-sans">Vamos iniciar nosso atendimento da melhor forma.</p>
                                        <input
                                            type="text"
                                            autoFocus
                                            placeholder="Ex: João da Silva"
                                            value={quizData.name}
                                            onChange={e => updateQuizData({ name: e.target.value })}
                                            onKeyDown={e => e.key === 'Enter' && handleNext()}
                                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-5 text-xl font-sans text-white focus:outline-none focus:border-[var(--accent-gold)] placeholder:text-white/20 transition-colors"
                                        />
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="s2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                                        <h2 className="text-3xl font-[var(--font-serif)] text-white mb-2">Muito prazer, {quizData.name.split(' ')[0]}!</h2>
                                        <p className="text-[#888] mb-8 font-sans">E de qual Cidade / Estado você fala?</p>
                                        <input
                                            type="text"
                                            autoFocus
                                            placeholder="Ex: Salvador - BA"
                                            value={quizData.city}
                                            onChange={e => updateQuizData({ city: e.target.value })}
                                            onKeyDown={e => e.key === 'Enter' && handleNext()}
                                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-5 text-xl font-sans text-white focus:outline-none focus:border-[var(--accent-gold)] placeholder:text-white/20 transition-colors"
                                        />
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="s3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                                        <h2 className="text-3xl font-[var(--font-serif)] text-white mb-8">E qual o momento atual de vocês?</h2>
                                        <div className="flex flex-col gap-3">
                                            {[
                                                { id: 'novo', label: 'Tirando a ideia (do zero) do papel' },
                                                { id: 'operando', label: 'Operando, mas precisando de lucro' },
                                                { id: 'expansao', label: 'Tendo sucesso e pensando em expansão' }
                                            ].map(opt => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => { updateQuizData({ businessStage: opt.id }); setError(''); }}
                                                    className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-center justify-between ${quizData.businessStage === opt.id ? 'bg-[var(--accent-gold)]/[0.05] border-[var(--accent-gold)] text-[var(--accent-gold)]' : 'bg-[#1a1a1a] border-white/5 text-white/80 hover:border-white/20'}`}
                                                >
                                                    <span className="font-sans text-lg">{opt.label}</span>
                                                    {quizData.businessStage === opt.id && <Check className="w-5 h-5" />}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="s4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                                        <h2 className="text-3xl font-[var(--font-serif)] text-white mb-2">Para fechar: Qual sua maior dor principal?</h2>
                                        <p className="text-[#888] mb-6 font-sans text-sm">Pode selecionar mais de uma opção.</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {[
                                                'CMV Alto e Desperdício',
                                                'Precificação sem Ficha Técnica',
                                                'Falta de Padrão e Manuais',
                                                'Equipe Desmotivada / Rotatividade',
                                                'Preso na Operação 14h por dia',
                                                'Elaborar Projeto Inicial'
                                            ].map(point => (
                                                <button
                                                    key={point}
                                                    onClick={() => togglePainPoint(point)}
                                                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start gap-4 ${quizData.painPoints.includes(point) ? 'bg-[var(--accent-gold)]/[0.05] border-[var(--accent-gold)] text-[var(--accent-gold)]' : 'bg-[#1a1a1a] border-white/5 text-white/80 hover:border-white/20'}`}
                                                >
                                                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${quizData.painPoints.includes(point) ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)]' : 'border-white/20'}`}>
                                                        {quizData.painPoints.includes(point) && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
                                                    </div>
                                                    <span className="font-sans text-sm md:text-base leading-tight pt-0.5">{point}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer Controls */}
                        <div className="p-6 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-4 order-2 sm:order-1">
                                {step > 1 && (
                                    <button
                                        onClick={() => { setStep(prev => prev - 1); setError(''); }}
                                        className="px-6 py-3 bg-transparent text-white/60 border border-white/10 font-bold uppercase tracking-widest text-xs rounded-full hover:text-white hover:border-white/30 transition-colors flex items-center gap-2"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Voltar
                                    </button>
                                )}
                            </div>

                            <div className="order-1 sm:order-2 text-right sm:text-left flex-1 sm:flex-none">
                                <span className="text-red-400 text-sm font-sans px-2">{error}</span>
                            </div>

                            <button
                                onClick={handleNext}
                                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[var(--accent-gold)] transition-colors flex items-center gap-2 order-3"
                            >
                                {step === 4 ? 'Avançar' : 'Próximo'}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    );
}
