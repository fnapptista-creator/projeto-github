'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BioModal({ isOpen, onClose }: BioModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
                    >
                        {/* Header Sticky */}
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
                            <div>
                                <h3 className="text-xl font-[var(--font-serif)] text-white">Minha Trajetória</h3>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-gold)] mt-1">A Visão de Vendas na Alta Gastronomia</p>
                            </div>
                            <button onClick={onClose} className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 md:p-10 text-[#a0a0a0] font-sans leading-relaxed space-y-6 text-sm md:text-base">
                            <p>
                                <strong className="text-white font-medium">Nasci em Curitiba, mas cresci em Itabuna.</strong> Voltei às minhas raízes na capital paranaense para me formar em Tecnologia em Gastronomia pela UniOpet (2016) e viver a rotina intensa de cozinha ao lado do meu pai, que era cozinheiro profissional e me inspirou a entrar na área.
                            </p>

                            <p>
                                Porém, a minha escola primária de negócios começou muito antes. <strong className="text-white font-medium">Desde os 14 anos de idade eu respiro o comércio.</strong> Passei por diversos segmentos — de bijuterias e brinquedos a utilidades e foodservice. Essa vivência me construiu uma bagagem de quase 18 anos lidando com os mais diferentes e complexos perfis de clientes, me ensinando a maestria do atendimento e da conversão muito antes de eu entrar em uma cozinha.
                            </p>

                            <div className="p-6 border-l-2 border-[var(--accent-gold)] bg-[var(--accent-gold)]/[0.03] rounded-r-xl my-8">
                                <p className="text-white italic text-lg">
                                    "Quando entrei na linha de frente dos restaurantes, atuando em gerência e buffets, um padrão saltou aos meus olhos: o setor de gastronomia não entendia quase nada de vendas."
                                </p>
                            </div>

                            <p>
                                Vi muitos empreendedores que dominavam as panelas brilhantemente, mas cujos restaurantes sangravam dinheiro pela total falta de agressividade comercial e por não entenderem a arte de vender.
                            </p>

                            <p>
                                Como minha mente foi forjada na conversão e no trato direto com clientes, <strong className="text-white font-medium">eu consigo enxergar o ato de vender inserido em cada mínima ação operacional.</strong> Esse é o meu maior diferencial estratégico. Não entrego planilhas teóricas; entrego uma máquina comercial adaptada para o restaurante.
                            </p>

                            <h4 className="text-white font-[var(--font-serif)] text-xl mt-8 mb-4">Aprimoramento e Metodologia Executiva</h4>
                            <p>
                                Para garantir que minha entrega estratégica permaneça impecável e resolva os problemas dos empresários, acumulei dezenas de formações e certificações focadas em resultado prático, incluindo:
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Gestão para Pequenas e Médias Empresas</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Liderança para Crises Complexas</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Gestão de Qualidade de Bares e Restaurantes</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Gerenciamento de Mudanças e Desafios Diários</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Construção de Máquina de Vendas</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Gestão Financeira Descomplicada</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>Boas Práticas nos Serviços de Alimentação</span></li>
                                <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"><span className="text-[var(--accent-gold)] mt-1">✦</span> <span>7 Passos de Prospecção Avançada</span></li>
                            </ul>

                            <p className="text-sm italic text-[#666] mb-8">
                                * Além de dezenas de outros cursos corporativos, palestras e fóruns do setor de alimentação.
                            </p>

                            <p>
                                Atualmente, continuo elevando a barra técnica cursando o <strong className="text-[var(--accent-gold)]">primeiro semestre da Pós-Graduação em Consultoria na consolidada UESC</strong>, consolidando a ponte entre o empirismo da experiência prática com a validação acadêmica superior.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
