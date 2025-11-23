import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RepresentacaoClient from './RepresentacaoClient';

export const metadata: Metadata = {
    title: "Representante Comercial Lyor, Wolff, Porto Brasil | Bahia - Felipe Nascimento",
    description: "Representante oficial das melhores marcas de utilidades domésticas e decoração (Lyor, Wolff, Porto Brasil, Tramontina) para lojistas na Bahia.",
    openGraph: {
        title: "Catálogo de Marcas - Felipe Nascimento Representações",
        description: "Abasteça sua loja com as melhores marcas do mercado. Lyor, Wolff, Porto Brasil e muito mais.",
        images: ['/representacao-bg.png'],
    },
};

export default function Representacao() {
    return (
        <main>
            <Navbar />
            <RepresentacaoClient />
            <Footer />
        </main>
    );
}
