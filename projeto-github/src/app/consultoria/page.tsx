import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultoriaClient from './ConsultoriaClient';

export const metadata: Metadata = {
    title: "Consultoria Gastronômica em Itabuna e Ilhéus | Felipe Nascimento",
    description: "Consultoria especializada para restaurantes, bares e hotéis. Engenharia de cardápio, precificação, treinamento de equipe e processos operacionais no Extremo Sul da Bahia.",
    openGraph: {
        title: "Consultoria Gastronômica - Felipe Nascimento",
        description: "Transforme seu restaurante em uma máquina de lucro. Soluções para gestão, cardápio e equipe.",
        images: ['/consultoria-bg.png'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Felipe Nascimento - Consultoria Gastronômica",
    "image": "https://felipenb.com.br/logo-felipe.png",
    "url": "https://felipenb.com.br/consultoria",
    "telephone": "+5573981349085",
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "Bahia",
        "addressCountry": "BR"
    },
    "priceRange": "$$$",
    "description": "Consultoria especializada para restaurantes, bares e hotéis no Extremo Sul da Bahia."
};

export default function Consultoria() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <ConsultoriaClient />
            <Footer />
        </main>
    );
}
