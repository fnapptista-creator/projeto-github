import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultoriaClient from './ConsultoriaClient';

export const metadata: Metadata = {
    title: "Consultoria Gastronômica Estratégica | Felipe Nascimento",
    description: "Transforme seu restaurante com uma metodologia atualizada e gestão baseada em dados. Consultoria especializada em Itabuna, Ilhéus e Extremo Sul da Bahia.",
    openGraph: {
        title: "Consultoria Gastronômica - Felipe Nascimento",
        description: "Gestão baseada em dados e processos estruturados para eliminar o 'achismo' do seu restaurante.",
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
    "description": "Consultoria especializada em gestão de restaurantes com metodologia atualizada e foco em resultados financeiros."
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
