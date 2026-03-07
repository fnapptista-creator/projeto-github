'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Vocês vão querer mudar a minha receita campeã que já vende há anos?",
        answer: "De forma alguma. O que vende e dá lucro é intocável. O nosso trabalho é pegar essa receita campeã, criar uma ficha técnica cravada e estabelecer padrões operacionais rigorosos. Assim, se o seu cozinheiro principal faltar num sábado à noite, o prato sai com o mesmo sabor e você não perde a mesa."
    },
    {
        question: "A minha equipe é muito antiga e 'torce o nariz' para mudanças. Isso vai funcionar?",
        answer: "Não usamos sistemas complexos ou reuniões de escritório para quem vive na operação quente. Implementamos ferramentas visuais e checklists que facilitam a vida de quem está na trincheira. O foco é mostrar para a equipe que a padronização reduz o estresse do salão e da cozinha durante o pico de movimento."
    },
    {
        question: "Em quanto tempo a consultoria 'se paga'?",
        answer: "O objetivo primário na maioria dos negócios não é só faturar mais, mas estancar o ralo financeiro do desperdício e do CMV oculto. Com ajustes na precificação e controle de estoque visual, o retorno costuma ser violento a partir do segundo mês, cobrindo o valor investido na consultoria e engordando o seu caixa."
    },
    {
        question: "A consultoria serve para o meu tamanho? Meu faturamento é entre R$ 50k a R$ 300k.",
        answer: "Exatamente. Nosso foco não é restaurante de prato minúsculo ou chef famoso onde o garçom explica a florzinha por 5 minutos. Nosso campo de batalha é a operação comercial de alto volume: a pizzaria de bairro, a lanchonete estourada do fim de semana, o gastrobar e a padaria movimentada. Entendemos a realidade de girar pedido rápido."
    },
    {
        question: "Qual o investimento? Vocês passam orçamento sem eu preencher o diagnóstico?",
        answer: "Não passamos tabela de preços porque não vendemos 'pacote pronto'. Precisamos do diagnóstico para fazer um Raio-X do seu negócio. Podemos identificar que você não precisa da consultoria completa de meses, mas sim de uma 'Micro-Intervenção' rápida em CMV ou Layout. Preencha o diagnóstico e nós bateremos o martelo na ligação."
    }
];

export default function ConsultingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[var(--bg-void)] text-white relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[var(--accent-gold)] font-mono text-sm tracking-widest uppercase mb-4 block">
                        Verdades Indigestas
                    </span>
                    <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] tracking-tight">
                        Aquilo que você está pensando, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">mas não disse.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border transition-colors duration-300 ${isOpen ? 'border-[var(--accent-gold)]/50 bg-[#111]' : 'border-white/10 bg-transparent hover:border-white/20'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-sans font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-[var(--accent-gold)]' : 'text-neutral-200'}`}>
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0 text-neutral-400">
                                        <svg
                                            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--accent-gold)]' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 pt-2 font-sans text-neutral-400 leading-relaxed">
                                                <div className="w-12 h-px bg-[var(--accent-gold)]/30 mb-4"></div>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
