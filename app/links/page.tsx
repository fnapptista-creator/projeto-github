"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./links.module.css";
import ThemeToggle from "../../components/ThemeToggle";

export default function LinksPage() {
    const [showQRCode, setShowQRCode] = useState(false);

    // vCard Data
    const contactData = {
        fn: "Felipe Nascimento",
        title: "Representante Comercial e Consultor Gastronômico", // Updated Title
        subHeadline: "Soluções Estratégicas para Varejo e Foodservice", // Kept for display if needed
        tel: "5573981349085",
        email: "eu@felipenb.com.br",
        url: "https://felipenb.com.br",
        portal: "https://felipe.rep.br"
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
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.cardContainer}>

                {/* Header Section */}
                <header className={styles.header}>
                    <div className={styles.avatarWrapper}>
                        <Image
                            src="/logo-felipe.png"
                            alt="Felipe Nascimento"
                            width={110}
                            height={110}
                            className={styles.avatar}
                            priority
                        />
                    </div>
                    <h1 className={styles.name}>{contactData.fn}</h1>
                    <p className={styles.title}>{contactData.title}</p>
                </header>

                {/* Quick Actions (Horizontal) */}
                <div className={styles.quickActions}>
                    <a
                        href={`https://wa.me/${contactData.tel}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="WhatsApp"
                    >
                        <WhatsappIcon />
                    </a>
                    <a
                        href={`mailto:${contactData.email}`}
                        className={styles.iconBtn}
                        aria-label="E-mail"
                    >
                        <MailIcon />
                    </a>
                    <ThemeToggle />
                </div>

                {/* Main Actions (Vertical) */}
                <div className={styles.linksList}>

                    <button onClick={handleDownloadVCard} className={`${styles.linkBtn} ${styles.primaryBtn}`}>
                        <span>Salvar Contato</span>
                        <UserPlusIcon className={styles.btnIcon} />
                    </button>

                    <Link href="/" className={styles.linkBtn}>
                        <span>Meu Site</span>
                        <GlobeIcon className={styles.btnIcon} />
                    </Link>

                    <a
                        href={contactData.portal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                    >
                        <span>Portal do Cliente</span>
                        <BriefcaseIcon className={styles.btnIcon} />
                    </a>

                    <button onClick={() => setShowQRCode(true)} className={styles.linkBtn}>
                        <span>Meu QR Code</span>
                        <QrCodeIcon className={styles.btnIcon} />
                    </button>
                </div>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Felipe Nascimento</p>
                </footer>
            </div>

            {/* QR Code Modal */}
            {showQRCode && (
                <div className={styles.modalOverlay} onClick={() => setShowQRCode(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setShowQRCode(false)}>
                            <XIcon />
                        </button>
                        <h3 className={styles.modalTitle}>Escaneie para acessar</h3>
                        <div className={styles.qrWrapper}>
                            <Image
                                src="/qr-code.png"
                                alt="QR Code Felipe Nascimento"
                                width={250}
                                height={250}
                                className={styles.qrImage}
                            />
                        </div>
                        <p className={styles.modalText}>felipenb.com.br/links</p>
                    </div>
                </div>
            )}
        </div>
    );
}

// Icons
function WhatsappIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>;
}

function MailIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

function UserPlusIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>;
}

function GlobeIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
}

function BriefcaseIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
}

function QrCodeIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>;
}

function XIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
}
