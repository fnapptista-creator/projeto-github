import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Página Não Encontrada | Felipe Nascimento',
    description: 'A página que você está procurando não existe ou foi removida.',
};

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--background)] px-4 text-center">
            <div className="relative mb-8">
                <h1 className="text-[8rem] font-bold leading-none text-[var(--gold-accent)] opacity-20 sm:text-[12rem]">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                        Página não encontrada
                    </h2>
                </div>
            </div>

            <p className="max-w-md text-lg text-[var(--foreground)] opacity-80 mb-8">
                Opa! Parece que o link que você seguiu está quebrado ou a página foi removida.
            </p>

            <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2"
            >
                <span>Voltar para o Início</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </Link>
        </div>
    );
}
