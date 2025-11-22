import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Consultoria Gastronômica em Itabuna e Ilhéus | Felipe Nascimento",
    description: "Consultoria especializada para restaurantes, bares e hotéis no Extremo Sul da Bahia. Engenharia de cardápio, treinamento de equipe e gestão financeira para maximizar lucros.",
    keywords: ["consultoria gastronomica", "itabuna", "ilheus", "bahia", "gestão de restaurantes", "ficha técnica", "treinamento de garçom"],
};

export default function ConsultoriaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
