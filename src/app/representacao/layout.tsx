import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Representante Comercial Lyor, Wolff, Tramontina e Mais | Felipe Nascimento",
    description: "Representante oficial de grandes marcas: Lyor, Wolff, Tramontina, Porto Brasil, Schmidt, Devitro, Grillo, Soprano, Ou, Arthi, Tritec e mais. Catálogo completo para lojistas na Bahia.",
    keywords: [
        "representante comercial", "representação bahia", "lyor", "wolff", "tramontina",
        "porto brasil", "schmidt", "devitro", "grillo", "ingá import", "soprano", "ou",
        "arthi", "tritec", "rio master", "nutriplan", "mistral", "mel toys",
        "tropical aromas", "wellmix", "hipertextil", "belfix", "max aluminios",
        "dolce home", "ke home", "vitazza", "aj import", "secalux", "casa ambiente",
        "grilazer", "tutipan", "mek", "sapico toys", "class home", "santana import",
        "eddi casa", "dayhome", "tt brasil", "utilidades domesticas atacado"
    ],
};

export default function RepresentacaoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
