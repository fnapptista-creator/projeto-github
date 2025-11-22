import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Consultoria Gastronômica em Itabuna, Ilhéus e Bahia | Felipe Nascimento",
    description: "Consultoria especializada para restaurantes, bares e hotéis no Extremo Sul da Bahia (Itabuna, Ilhéus, Porto Seguro). Engenharia de cardápio, ficha técnica e gestão de lucros.",
    keywords: [
        "consultoria gastronomica", "itabuna", "ilheus", "bahia", "extremo sul baiano",
        "porto seguro", "teixeira de freitas", "eunapolis", "gestão de restaurantes",
        "ficha técnica", "treinamento de garçom", "lucratividade restaurante",
        "consultor de alimentos", "felipe nascimento"
    ],
};

export default function ConsultoriaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
