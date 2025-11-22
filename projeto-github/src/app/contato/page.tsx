import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Contato() {
    return (
        <main>
            <Navbar />

            <section className={styles.container}>
                <div className={`container ${styles.content}`}>
                    <div className={styles.info}>
                        <h1>Vamos Conversar?</h1>
                        <p>
                            Seja para transformar a gestão do seu restaurante ou para abastecer sua loja com as melhores marcas, estou pronto para ajudar.
                        </p>

                        <div className={styles.contactMethods}>
                            <div className={styles.method}>
                                <span className={styles.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
                                    </svg>
                                </span>
                                <a href="https://wa.me/5573981349085" target="_blank" rel="noopener noreferrer">
                                    (73) 9 8134-9085
                                </a>
                            </div>
                            <div className={styles.method}>
                                <span className={styles.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                                    </svg>
                                </span>
                                <a href="mailto:eu@felipenb.com.br">eu@felipenb.com.br</a>
                            </div>
                            <div className={styles.method}>
                                <span className={styles.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="currentColor" />
                                    </svg>
                                </span>
                                <a href="https://linkedin.com/in/felipenascimentob/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </div>
                            <div className={styles.method}>
                                <span className={styles.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                                    </svg>
                                </span>
                                <a href="https://felipenb.com.br">felipenb.com.br</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Envie uma mensagem rápida</h3>
                        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
                            A forma mais rápida de falar comigo é pelo WhatsApp. Clique no botão abaixo para iniciar a conversa.
                        </p>

                        <a
                            href="https://wa.me/5573981349085"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ width: '100%', textAlign: 'center', display: 'block' }}
                        >
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
