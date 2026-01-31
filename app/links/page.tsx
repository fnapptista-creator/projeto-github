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
        fn: "Felipe Nascimento",
        title: "Consultor & Representante Comercial",
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
        link.setAttribute("download", "Felipe_Nascimento.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <main className="min-h-screen w-full bg-[#050505] text-white overflow-hidden relative flex flex-col items-center justify-center py-12 px-4">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent-gold)] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center"
            >
                {/* Avatar */}
                <div className="relative mb-8 group cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-[var(--accent-gold)] to-white opacity-20 group-hover:opacity-50 blur rounded-full transition duration-500"></div>
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/10 bg-black">
                        <Image
                            src="/logo-new-main.png"
                            alt="Felipe Nascimento"
                            width={112}
                            height={112}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            priority
                        />
                    </div>
                </div>

                {/* Header */}
                <h1 className="text-2xl md:text-3xl font-[var(--font-serif)] text-white mb-2 text-center">
                    Felipe Nascimento
                </h1>
                <p className="text-sm uppercase tracking-[0.2em] text-[#888] mb-10 text-center font-[var(--font-sans)]">
                    Performance & Estratégia
                </p>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-4 gap-4 w-full px-4 mb-10">
                    <button
                        onClick={() => setShowQRCode(true)}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-white/5 transition-colors text-[#ccc] group-hover:text-white">
                            <QrCodeIcon />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#666]">QR</span>
                    </button>

                    <a
                        href={`https://wa.me/${contactData.tel}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-white/5 transition-colors text-[#ccc] group-hover:text-white">
                            <WhatsappIcon />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#666]">Whats</span>
                    </a>

                    <button
                        onClick={handleDownloadVCard}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-white/5 transition-colors text-[#ccc] group-hover:text-white">
                            <UserPlusIcon />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#666]">Salvar</span>
                    </button>

                    <a
                        href={`mailto:${contactData.email}`}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-white/5 transition-colors text-[#ccc] group-hover:text-white">
                            <MailIcon />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#666]">Email</span>
                    </a>
                </div>

                {/* Primary Actions */}
                <div className="w-full flex flex-col gap-4 mb-12 font-[var(--font-sans)]">
                    <Link href="/consultoria" className="w-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 px-6 rounded-sm bg-[#111] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)] hover:text-black group transition-all duration-300 flex items-center justify-between"
                        >
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent-gold)] group-hover:text-black">
                                Consultoria Gastronômica
                            </span>
                            <span className="text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-transform">→</span>
                        </motion.div>
                    </Link>

                    <Link href="/representacao" className="w-full">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 px-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 flex items-center justify-between group"
                        >
                            <span className="text-xs uppercase tracking-[0.2em] text-[#ccc] group-hover:text-white">
                                Representação Comercial
                            </span>
                            <span className="text-lg text-[#666] group-hover:text-white group-hover:translate-x-1 transition-transform">→</span>
                        </motion.div>
                    </Link>
                </div>

                <Link
                    href="/"
                    className="text-[10px] uppercase tracking-[0.3em] text-[#444] hover:text-[var(--accent-gold)] transition-colors"
                >
                    felipenb.com.br
                </Link>

            </motion.div>

            {/* QR Code Modal */}
            <AnimatePresence>
                {showQRCode && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowQRCode(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-[#111] border border-white/10 p-8 rounded-lg max-w-sm w-full text-center shadow-2xl"
                        >
                            <h3 className="text-xl font-[var(--font-serif)] text-white mb-6">Escaneie para acessar</h3>
                            <div className="bg-white p-4 rounded-lg inline-block mb-4">
                                <Image
                                    src="/qr-code.png"
                                    alt="QR Code"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <button
                                onClick={() => setShowQRCode(false)}
                                className="block w-full py-3 mt-4 text-xs uppercase tracking-widest text-[#666] hover:text-white transition-colors"
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
                        className="fixed bottom-10 z-50 px-6 py-3 bg-[var(--accent-gold)] text-black font-bold uppercase text-xs tracking-wider rounded-full shadow-lg"
                    >
                        Contato Salvo!
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}

// Icons
function WhatsappIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>;
}

function MailIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

function UserPlusIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>;
}

function QrCodeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>;
}
