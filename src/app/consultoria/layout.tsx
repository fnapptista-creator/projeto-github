import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Felipe Nascimento | Consultoria Gastronômica",
    description: "Consultoria especializada para restaurantes em Itabuna, Ilhéus e Bahia. Aumente seu lucro, calcule CMV, reduza desperdícios e treine sua equipe. Engenharia de cardápio e gestão.",
    keywords: [
        "consultoria gastronomica", "itabuna", "ilheus", "bahia", "extremo sul baiano",
        "porto seguro", "teixeira de freitas", "eunapolis", "gestão de restaurantes",
        "ficha técnica", "treinamento de garçom", "lucratividade restaurante",
        "consultor de alimentos", "felipe nascimento", "engenharia de cardápio",
        "como calcular cmv", "restaurante dando prejuizo", "consultoria para abrir restaurante",
        "controle de estoque restaurante", "legalização de cozinha"
    ],
    openGraph: {
        title: "Felipe Nascimento | Consultoria Gastronômica",
        description: "Transforme seu restaurante em uma máquina de lucro. Consultoria especializada no Extremo Sul da Bahia.",
        url: 'https://felipenb.com.br/consultoria',
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function ConsultoriaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Consultant",
        "name": "Felipe Nascimento Consultoria Gastronômica",
        "image": "https://felipenb.com.br/logo-felipe.png",
        "description": "Consultoria especializada em gestão de restaurantes, engenharia de cardápio e treinamento de equipe no Extremo Sul da Bahia.",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Bahia",
            "addressCountry": "BR"
        },
        "url": "https://felipenb.com.br/consultoria",
        "telephone": "+5573981349085",
        "areaServed": [
            "Itabuna",
            "Ilhéus",
            "Porto Seguro",
            "Teixeira de Freitas",
            "Eunápolis",
            "Bahia"
        ],
        "knowsAbout": [
            "Engenharia de Cardápio",
            "Gestão de Restaurantes",
            "Cálculo de CMV",
            "Ficha Técnica",
            "Treinamento de Equipe",
            "Layout de Cozinha"
        ],
        "priceRange": "$$$"
    };

    return (
        <>
            <Script
                id="consultoria-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
