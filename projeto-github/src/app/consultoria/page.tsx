'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

type ServiceTab = 'pre-abertura' | 'gastronomia' | 'nutricao' | 'salao-bar' | 'precificacao';

export default function Consultoria() {
    const [activeTab, setActiveTab] = useState<ServiceTab>('pre-abertura');

    const services = {
        'pre-abertura': {
            title: 'Pré-Abertura',
            icon: '🏗️',
            description: 'Suporte completo desde a fase de planejamento para garantir uma base sólida ao seu negócio',
            items: [
                { title: 'Criação do Conceito do Negócio', desc: 'Orientação estratégica para definir o conceito que melhor atende ao público-alvo' },
                { title: 'Escolha do Ponto Ideal', desc: 'Auxílio na busca do local ideal para aluguel ou compra, considerando perfil do cliente e viabilidade comercial' },
                { title: 'Avaliação de Custos', desc: 'Assessoria para negociação de valor de luvas e aluguel' },
                { title: 'Alvarás e Licenças', desc: 'Indicação do caminho mais eficiente para obtenção de autorizações e licenças de funcionamento' },
                { title: 'Layout Operacional', desc: 'Orientação no layout de cozinha, bar e área de operações, em parceria com o arquiteto responsável' },
                { title: 'Indicação de Profissionais', desc: 'Recomendações de arquitetos, designers, fornecedores de equipamentos, assessoria de imprensa, entre outros' }
            ]
        },
        'gastronomia': {
            title: 'Gastronomia',
            icon: '👨‍🍳',
            description: 'Desenvolvimento do cardápio e estruturação da operação culinária para elevar a qualidade do estabelecimento',
            items: [
                { title: 'Elaboração de Cardápio', desc: 'Criação de um menu exclusivo, adaptado ao conceito do restaurante' },
                { title: 'Degustação e Padronização', desc: 'Testes e padronização para garantir qualidade e consistência nos pratos' },
                { title: 'Lista de Compras', desc: 'Elaboração de uma lista detalhada de ingredientes e produtos necessários' },
                { title: 'Aquisição de Equipamentos', desc: 'Orientação na compra de utensílios e equipamentos de cozinha' },
                { title: 'Seleção e Treinamento', desc: 'Apoio na contratação de funcionários, divisão de tarefas e treinamento prático' }
            ]
        },
        'nutricao': {
            title: 'Nutrição',
            icon: '🥗',
            description: 'Foco em segurança alimentar e qualidade nutricional com serviços personalizados',
            items: [
                { title: 'Higiene e Manipulação', desc: 'Treinamento sobre práticas seguras de manuseio e higiene alimentar' },
                { title: 'Organização de Tarefas', desc: 'Elaboração de roteiro de atividades, planilhas de escala e divisão de tarefas' },
                { title: 'Supervisão de Preparo', desc: 'Acompanhamento do processo de preparação dos alimentos, visando qualidade e eficiência' },
                { title: 'Armazenamento e Validade', desc: 'Treinamento para correta recepção, armazenamento e controle de validade dos ingredientes' },
                { title: 'Fichas Técnicas', desc: 'Criação de fichas técnicas para padronizar o preparo dos pratos' }
            ]
        },
        'salao-bar': {
            title: 'Salão e Bar',
            icon: '🍸',
            description: 'Transforme a experiência do cliente com um serviço de salão e bar bem estruturado e profissional',
            items: [
                { title: 'Contratação e Treinamento', desc: 'Seleção de profissionais e treinamento prático e técnicas em atendimento e hospitalidade' },
                { title: 'Carta de Bebidas', desc: 'Criação de uma carta de drinks e bebidas que complementa o conceito do estabelecimento' },
                { title: 'Integração Salão e Cozinha', desc: 'Planejamento para otimizar a comunicação entre salão e cozinha, garantindo um fluxo eficiente' },
                { title: 'Definição de Escalas', desc: 'Organização das escalas de trabalho dos funcionários' },
                { title: 'Operacional do Funcionamento', desc: 'Implementação de check-lists de abertura e fechamento, para garantir um funcionamento impecável' },
                { title: 'Montagem do Salão', desc: 'Orientação na disposição do salão para criar um ambiente acolhedor e funcional' }
            ]
        },
        'precificacao': {
            title: 'Precificação & CMV',
            icon: '💰',
            description: 'Engenharia financeira para maximizar lucros e garantir sustentabilidade do negócio',
            items: [
                { title: 'Análise de CMV', desc: 'Cálculo detalhado do Custo de Mercadoria Vendida para cada prato do cardápio' },
                { title: 'Precificação Estratégica', desc: 'Definição de preços baseada em margem de contribuição e posicionamento de mercado' },
                { title: 'Engenharia de Cardápio', desc: 'Reformulação do menu para maximizar rentabilidade e destacar pratos mais lucrativos' },
                { title: 'Controle de Estoque', desc: 'Implementação de rotinas de compras e gestão de estoque para reduzir desperdícios' },
                { title: 'Gestão Financeira', desc: 'Você passa a gerenciar o negócio com dados, não com "feeling"' }
            ]
        }
    };

    const whatsappLink = "https://wa.me/5573981349085";

    return (
        <main>
            <Navbar />

            <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.85), rgba(8,28,21,0.95)), url(/consultoria-bg.png)' }}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Consultoria Gastronômica Especializada</span>
                    <h1 className={styles.heroTitle}>Transforme seu Restaurante em uma Máquina de Lucro</h1>
                    <p className={styles.heroSubtitle}>
                        Consultoria completa para donos de restaurantes que querem sair do operacional e ver o dinheiro sobrar no caixa.
                    </p>
                    <div className={styles.heroButtons}>
                        <a
                            href={`${whatsappLink}?text=Olá Felipe, gostaria de agendar um diagnóstico gratuito para meu restaurante.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Agendar Diagnóstico Gratuito
                        </a>
                        <a href="#servicos" className="btn-outline">
                            Conhecer os Serviços
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.painSection}>
                <div className={`container ${styles.container}`}>
                    <h2 className={styles.sectionTitle}>O cenário comum (e perigoso)</h2>
                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>📉</div>
                            <h3 className={styles.painTitle}>Lucro Invisível</h3>
                            <p className={styles.painText}>
                                Você vende bem, o salão está cheio, mas no final do mês a conta não fecha. Onde está o dinheiro? Provavelmente em fichas técnicas erradas e desperdícios.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>🔥</div>
                            <h3 className={styles.painTitle}>Apagando Incêndios</h3>
                            <p className={styles.painText}>
                                Sua operação depende 100% de você. Se você não está lá, as coisas não andam. Você se tornou refém do seu próprio negócio.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>👥</div>
                            <h3 className={styles.painTitle}>Equipe sem Padrão</h3>
                            <p className={styles.painText}>
                                Rotatividade alta, atendimento inconstante e cozinha desorganizada. Falta cultura e processos definidos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicos" className={styles.servicesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Serviços de Consultoria Gastronômica</h2>
                    <p className={styles.sectionSubtitle}>
                        Soluções completas para cada fase do seu negócio gastronômico
                    </p>

                    <div className={styles.serviceTabs}>
                        {(Object.keys(services) as ServiceTab[]).map((key) => (
                            <button
                                key={key}
                                className={`${styles.tabButton} ${activeTab === key ? styles.active : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                <span className={styles.tabIcon}>{services[key].icon}</span>
                                <span className={styles.tabLabel}>{services[key].title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContent}>
                        <div className={styles.tabHeader}>
                            <h3 className={styles.tabTitle}>{services[activeTab].title}</h3>
                            <p className={styles.tabDescription}>{services[activeTab].description}</p>
                        </div>
                        <div className={styles.serviceGrid}>
                            {services[activeTab].items.map((item, index) => (
                                <div key={index} className={styles.serviceCard}>
                                    <div className={styles.serviceNumber}>{String(index + 1).padStart(2, '0')}</div>
                                    <h4 className={styles.serviceTitle}>{item.title}</h4>
                                    <p className={styles.serviceDesc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.authoritySection}>
                <div className="container">
                    <div className={styles.authorityContent}>
                        <div className={styles.authorityText}>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Por que posso ajudar?</h2>
                            <p>
                                Não sou apenas um consultor de palco. Tenho <strong>17 anos de experiência em vendas</strong> e <strong>9 anos de formação gastronômica</strong>.
                            </p>
                            <p>
                                Já estive do outro lado do balcão e sei exatamente as dores que você sente. Minha abordagem une a técnica da alta gastronomia com a agressividade comercial necessária para fazer um negócio lucrar.
                            </p>
                            <p>
                                Meu objetivo não é te entregar uma planilha bonita, é <strong>implementar processos que funcionam na vida real</strong>, com a equipe que você tem hoje.
                            </p>
                            <p className={styles.highlight}>
                                A consultoria gastronômica é essencial para quem busca minimizar erros e encurtar o caminho para um restaurante de sucesso.
                            </p>
                        </div>
                        <div className={styles.authorityStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>17+</span>
                                <span className={styles.statLabel}>Anos de Vendas</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>9+</span>
                                <span className={styles.statLabel}>Anos de Gastronomia</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Foco em Resultado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.targetSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Para quem é a consultoria?</h2>
                    <div className={styles.targetGrid}>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>🚀</div>
                            <h3>Novos Restaurantes</h3>
                            <p>Orientação completa para abrir um restaurante bem-sucedido, evitando erros comuns e estabelecendo uma base sólida desde o início.</p>
                        </div>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>📈</div>
                            <h3>Restaurantes em Operação</h3>
                            <p>Ajustes personalizados para otimizar o desempenho e explorar o potencial máximo do negócio que já está funcionando.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>Serve para pequenos negócios?</h3>
                            <p>Sim. A consultoria é adaptada para a realidade do seu faturamento. O objetivo é justamente fazer você crescer de forma organizada.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Quanto tempo dura?</h3>
                            <p>Depende do escopo, mas projetos de reestruturação completa costumam levar de 3 a 6 meses. Também ofereço diagnósticos pontuais.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Você monta o cardápio?</h3>
                            <p>Sim, trabalhamos a engenharia do cardápio, que envolve desde a seleção dos pratos até a precificação estratégica e design para venda.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Preciso fechar o restaurante?</h3>
                            <p>Não. A maior parte das implementações acontece com a operação rodando, ajustando os processos em tempo real.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Pare de perder dinheiro hoje.</h2>
                    <p style={{ marginBottom: '2rem', color: '#ccc', fontSize: '1.1rem' }}>
                        Agende uma conversa rápida de 15 minutos para eu entender seu momento.
                    </p>
                    <a
                        href={`${whatsappLink}?text=Olá Felipe, gostaria de conversar sobre a consultoria gastronômica.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                    >
                        Fale comigo no WhatsApp
                    </a>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', padding: '2rem 0', color: '#888', fontSize: '0.9rem' }}>
                <p>Atendimento presencial em <strong>Itabuna, Ilhéus, Porto Seguro, Teixeira de Freitas</strong> e todo o Extremo Sul da Bahia.</p>
                <p>Consultoria online disponível para todo o Brasil.</p>
            </div>

            <Footer />
        </main>
    );
}
