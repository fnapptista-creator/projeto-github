
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Felipe Baptista | Consultoria Gastronômica Especializada",
    description: "Transforme seu restaurante em uma máquina de lucro. Consultoria especializada em redução de custos, engenharia de cardápio e padronização operacional. Atendimento em todo o Brasil e focado no Sul da Bahia.",
    keywords: [
        "consultoria gastronômica",
        "gestão de restaurantes",
        "ficha técnica",
        "engenharia de cardápio",
        "reduzir cmv",
        "treinar garçom",
        "treinar equipe",
        "meu restaurante ta falindo o que fazer",
        "abrir restaurante",
        "plano de negócios gastronomia",
        "auditoria operacional para restaurantes",
        "padronização de processos",
        "POP restaurante",
        "como abrir filial de restaurante",
        "cozinha central",
        "consultor de restaurantes bahia",
        "felipe baptista consultoria",
        "consultoria de restaurante em itabuna",
        "consultoria de restaurante em ilhéus",
        "consultoria de restaurante em porto seguro",
        "consultor sul da bahia"
    ],
    openGraph: {
        title: "Consultoria Gastronômica | Máquina de Lucro",
        description: "Aumente seus lucros e organize sua operação. Diagnóstico gratuito para restaurantes, bares e deliverys no Sul da Bahia.",
        type: "website",
        locale: "pt_BR",
        url: "https://felipenb.com.br/consultoria",
        images: [
            {
                url: "/logo-new-main.png",
                width: 1200,
                height: 630,
                alt: "Felipe Baptista Consultoria Gastronômica",
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
