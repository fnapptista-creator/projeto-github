'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

interface ShareArticleProps {
    title: string;
    urlPath: string; // Ex: /blog/meu-post
    coverImage?: string;
}

export default function ShareArticle({ title, urlPath, coverImage }: ShareArticleProps) {
    const [baseUrl, setBaseUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const storyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    const fullUrl = `${baseUrl}${urlPath}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = () => {
        const text = `Olha esse artigo do Felipe Baptista:\n\n*${title}*\n\nLeia aqui: ${fullUrl}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
        window.open(url, '_blank');
    };

    const generateStory = async () => {
        if (!storyRef.current) return;
        setIsGenerating(true);
        try {
            // Render to 1080x1920 via html-to-image
            const dataUrl = await toPng(storyRef.current, {
                cacheBust: true,
                quality: 0.95,
                pixelRatio: 1
            });
            download(dataUrl, `felipebaptista-story-${urlPath.replace(/\//g, '')}.png`);
        } catch (err) {
            console.error('Error generating story:', err);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="py-12 border-t border-b border-black/10 my-16 flex flex-col items-center text-center">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-black/40 mb-6 block">
                Compartilhe e ajude outros profissionais
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopy}
                    className="px-6 py-3 border border-black/10 rounded-full text-sm font-sans hover:bg-black/5 transition-colors flex items-center gap-2"
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copiado!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Copiar Link
                        </>
                    )}
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    className="px-6 py-3 bg-[#25D366] text-white rounded-full text-sm font-sans font-medium hover:bg-[#20bd5a] transition-colors flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLinkedIn}
                    className="px-6 py-3 bg-[#0a66c2] text-white rounded-full text-sm font-sans font-medium hover:bg-[#084e96] transition-colors flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generateStory}
                    disabled={isGenerating}
                    className="px-6 py-3 bg-[var(--accent-gold)] text-black rounded-full text-sm font-sans font-bold hover:bg-white transition-colors flex items-center gap-2"
                >
                    {isGenerating ? (
                        <svg className="animate-spin w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    )}
                    Gerar Banner Story
                </motion.button>
            </div>

            {/* Template Oculto para o Story (9:16) */}
            <div className="overflow-hidden absolute top-[-9999px] left-[-9999px]">
                <div
                    ref={storyRef}
                    className="w-[1080px] h-[1920px] bg-[#050505] flex flex-col justify-between p-24 font-sans text-white relative border-8 border-black shadow-2xl"
                    style={{ WebkitFontSmoothing: 'antialiased' }}
                >
                    {/* Background Gradients/Noise */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                    {coverImage && (
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            {/* Using standard img for html-to-image compatibility */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={coverImage} alt="Cover" className="w-full h-full object-cover opacity-30 grayscale" crossOrigin="anonymous" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-transparent"></div>
                        </div>
                    )}

                    {/* Top Header */}
                    <div className="relative z-10 flex items-center gap-8 pt-12">
                        <div className="w-24 h-24 bg-[var(--accent-gold)] rounded-none flex items-center justify-center text-black font-[var(--font-serif)] text-5xl">
                            F
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-widest text-white uppercase">Felipe Baptista</span>
                            <span className="text-2xl text-[var(--accent-gold)] uppercase tracking-[0.3em] mt-2">Consultoria Gastronômica</span>
                        </div>
                    </div>

                    {/* Middle: Title */}
                    <div className="relative z-10 flex flex-col gap-12 mt-auto pb-48">
                        <span className="text-4xl uppercase tracking-[0.5em] text-[var(--accent-gold)] border-l-8 border-[var(--accent-gold)] pl-8 font-bold">Novo Artigo Liberado</span>
                        <h1 className="text-8xl font-[var(--font-serif)] leading-[1.05] uppercase tracking-tighter" style={{ textWrap: 'balance' }}>
                            {title}
                        </h1>
                    </div>

                    {/* Bottom CTA (Safe Area) */}
                    <div className="relative z-10 w-full bg-white text-black p-12 flex items-center justify-between mt-auto mb-16">
                        <span className="text-5xl font-black uppercase tracking-[0.1em]">Leia o artigo completo</span>
                        <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center bg-transparent">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Footer / URL Mention */}
                    <div className="relative z-10 text-center pb-12 opacity-50">
                        <span className="text-3xl tracking-[0.4em] font-bold uppercase">felipenb.com.br/blog</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
