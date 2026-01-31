
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Felipe Nascimento | Consultoria Gastronômica Especializada",
    description: "Transforme seu restaurante em uma máquina de lucro. Consultoria especializada em redução de custos, engenharia de cardápio e padronização operacional. Atendimento em todo o Brasil.",
    keywords: [
        "consultoria gastronômica",
        "gestão de restaurantes",
        "ficha técnica",
        "engenharia de cardápio",
        "reduzir cmv",
        "consultor de restaurantes bahia",
        "felipe nascimento consultoria"
    ],
    openGraph: {
        title: "Consultoria Gastronômica | Máquina de Lucro",
        description: "Aumente seus lucros e organize sua operação. Diagnóstico gratuito para restaurantes, bares e deliverys.",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://felipenb.com.br/og-consultoria.jpg", // Placeholder, user needs to add real image
                width: 1200,
                height: 630,
                alt: "Felipe Nascimento Consultoria Gastronômica",
            },
        ],
    },
};

export default function ConsultoriaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
