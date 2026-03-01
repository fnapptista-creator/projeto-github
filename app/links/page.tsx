'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LinksPage() {
    const [showQRCode, setShowQRCode] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // vCard Data
    const contactData = {
        fn: "Felipe Baptista",
        title: "Consultor Gastronômico",
        tel: "5573981349085",
        email: "eu@felipenb.com.br",
        url: "https://felipenb.com.br"
    };

    const handleDownloadVCard = () => {
        const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.fn}
TITLE:${contactData.title}
TEL;TYPE=CELL:${contactData.tel}
EMAIL;TYPE=WORK:${contactData.email}
URL:${contactData.url}
END:VCARD`;

        const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Felipe_Baptista.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <main className="min-h-screen w-full bg-[#050505] text-[var(--text-primary-dark)] overflow-x-hidden relative flex flex-col items-center py-12 px-6 shadow-none">

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-start pt-6 md:pt-10 pb-10">

                {/* Brutalist Header */}
                <div className="flex flex-row items-end gap-4 md:gap-6 mb-8 w-full">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0 border border-white/20 filter grayscale hover:grayscale-0 transition-all duration-700 bg-black">
                        <Image
                            src="/logo-new-main.png"
                            alt="Felipe Baptista"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col pb-1">
                        <h1 className="text-3xl md:text-5xl font-[var(--font-serif)] text-white tracking-tighter leading-none mb-1">
                            Felipe<br />Baptista.
                        </h1>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-bold font-sans">
                            Consultor Gastronômico
                        </span>
                    </div>
                </div>

                {/* Main Action Blocks */}
                <div className="w-full flex flex-col gap-3 mb-8 section-fade-in delay-100">
                    <Link href="/consultoria" className="w-full group">
                        <div className="w-full flex flex-row items-center justify-between border border-[var(--accent-gold)]/20 bg-black p-4 md:p-6 hover:bg-[var(--accent-gold)] transition-colors duration-500">
                            <div className="flex flex-col">
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] group-hover:text-black/60 mb-1 font-sans font-bold transition-colors">
                                    Diagnóstico & Solução
                                </span>
                                <h2 className="text-2xl md:text-4xl font-[var(--font-serif)] text-white group-hover:text-black transition-colors leading-none tracking-tight">
                                    Consultoria<br />Gastronômica
                                </h2>
                            </div>
                            <div className="text-3xl md:text-5xl font-sans font-light text-[var(--accent-gold)]/20 group-hover:text-black/30 group-hover:translate-x-2 transition-all duration-500">
                                →
                            </div>
                        </div>
                    </Link>

                    <Link href="/blog" className="w-full group">
                        <div className="w-full flex flex-row items-center justify-between border border-white/10 bg-[#0a0a0a] p-4 md:p-6 hover:bg-white transition-colors duration-500">
                            <div className="flex flex-col">
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-black/50 mb-1 font-sans font-bold transition-colors">
                                    Inteligência Aplicada
                                </span>
                                <h2 className="text-2xl md:text-4xl font-[var(--font-serif)] text-white group-hover:text-black transition-colors leading-none tracking-tight">
                                    Artigos &<br />Análises
                                </h2>
                            </div>
                            <div className="text-3xl md:text-5xl font-sans font-light text-white/10 group-hover:text-black/30 group-hover:translate-x-2 transition-all duration-500">
                                →
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Quick Actions (Brutalist Bento) */}
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-3 font-sans font-bold w-full text-left">Acesso Direto</span>
                <div className="grid grid-cols-2 gap-3 w-full mb-8 section-fade-in delay-200">
                    <a href={`https://wa.me/${contactData.tel}`} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between h-[72px] p-4 border border-white/10 bg-[#0a0a0a] hover:border-[var(--accent-gold)] transition-colors group items-start">
                        <div className="flex flex-row items-center justify-between w-full h-full">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-white/80 font-sans font-bold group-hover:text-white transition-colors">WhatsApp</span>
                            <div className="text-white/30 group-hover:text-[var(--accent-gold)] transition-colors scale-75 transform origin-right"><WhatsappIcon /></div>
                        </div>
                    </a>

                    <a href={`mailto:${contactData.email}`} className="flex flex-col justify-between h-[72px] p-4 border border-white/10 bg-[#0a0a0a] hover:border-white transition-colors group items-start">
                        <div className="flex flex-row items-center justify-between w-full h-full">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-white/80 font-sans font-bold group-hover:text-white transition-colors">E-mail</span>
                            <div className="text-white/30 group-hover:text-white transition-colors scale-75 transform origin-right"><MailIcon /></div>
                        </div>
                    </a>

                    <button onClick={handleDownloadVCard} className="flex flex-col justify-between h-[72px] p-4 border border-white/10 bg-[#0a0a0a] hover:border-[var(--accent-gold)] transition-colors group items-start text-left w-full">
                        <div className="flex flex-row items-center justify-between w-full h-full">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-white/80 font-sans font-bold group-hover:text-white transition-colors leading-tight">Salvar<br />Contato</span>
                            <div className="text-white/30 group-hover:text-[var(--accent-gold)] transition-colors scale-75 transform origin-right"><UserPlusIcon /></div>
                        </div>
                    </button>

                    <button onClick={() => setShowQRCode(true)} className="flex flex-col justify-between h-[72px] p-4 border border-white/10 bg-[#0a0a0a] hover:border-white transition-colors group items-start text-left w-full">
                        <div className="flex flex-row items-center justify-between w-full h-full">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-white/80 font-sans font-bold group-hover:text-white transition-colors leading-tight">Gerar<br />QR Code</span>
                            <div className="text-white/30 group-hover:text-white transition-colors scale-75 transform origin-right"><QrCodeIcon /></div>
                        </div>
                    </button>
                </div>

                {/* Footer Reference */}
                <div className="w-full flex justify-center mt-auto border-t border-white/5 pt-6 section-fade-in delay-300">
                    <Link href="/" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/20 hover:text-[var(--accent-gold)] transition-colors">
                        felipenb.com.br
                    </Link>
                </div>
            </div>

            {/* QR Code Modal (Unchanged) */}
            <AnimatePresence>
                {showQRCode && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowQRCode(false)}
                            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-black border border-white/10 p-10 max-w-sm w-full text-left"
                        >
                            <h3 className="text-3xl font-[var(--font-serif)] text-white mb-2 leading-none">Acesso Rápido</h3>
                            <p className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/40 mb-8">Escaneie o código abaixo</p>

                            <div className="bg-white p-6 inline-block mb-8 border border-white/20">
                                <Image
                                    src="/qr-code.png"
                                    alt="QR Code"
                                    width={240}
                                    height={240}
                                    className="w-full h-auto"
                                />
                            </div>

                            <button
                                onClick={() => setShowQRCode(false)}
                                className="block w-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 text-[#888] hover:text-white hover:border-white transition-colors"
                            >
                                Fechar
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-10 z-50 px-8 py-4 bg-[var(--accent-gold)] text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-lg"
                    >
                        Contato Salvo no Aparelho!
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}

// Icons (Unchanged)
function WhatsappIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>;
}

function MailIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

function UserPlusIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>;
}

function QrCodeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>;
}
