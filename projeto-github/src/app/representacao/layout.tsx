import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Representante Comercial Lyor, Wolff, Tramontina | Felipe Nascimento",
    description: "Representante oficial de marcas líderes como Lyor, Wolff, Tramontina, Dayhome e outras. Catálogo completo para lojistas de utilidades e decoração na Bahia.",
    keywords: ["representante comercial", "lyor", "wolff", "tramontina", "dayhome", "utilidades domesticas", "bahia", "itabuna", "ilheus"],
};

export default function RepresentacaoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
