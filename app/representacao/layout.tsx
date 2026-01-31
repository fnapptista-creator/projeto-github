
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Felipe Nascimento | Representação Comercial B2B (Bahia)",
    description: "Representante oficial das maiores marcas de utilidades e decoração: Wolff, Lyor, Porto Brasil, Ou, Arthi. Acesso direto de fábrica para lojistas.",
    keywords: [
        "representante comercial bahia",
        "representante wolff",
        "representante lyor",
        "comprar direto da fábrica",
        "utilidades domésticas atacado",
        "porto brasil cerâmica representante"
    ],
    openGraph: {
        title: "Catálogo Digital B2B | Melhores Marcas na Sua Loja",
        description: "Conecte seu negócio às indústrias líderes. Tabela de fábrica e suporte especializado. Solicite seu catálogo.",
        type: "website",
        locale: "pt_BR",
    },
};

export default function RepresentacaoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
