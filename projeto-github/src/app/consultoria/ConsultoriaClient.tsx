'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ServiceTab = 'pre-abertura' | 'gastronomia' | 'nutricao' | 'salao-bar' | 'precificacao';

export default function ConsultoriaClient() {
    const [activeTab, setActiveTab] = useState<ServiceTab>('pre-abertura');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const services = {
        'pre-abertura': {
            title: 'Pré-Abertura',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h20" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="M12 2 2 12h10v10" />
                    <path d="m12 2 10 10h-10v10" />
                </svg>
            ),
            subtitle: 'Suporte completo desde a fase de planejamento para garantir uma base sólida ao seu negócio.',
            items: [
                'Criação do Conceito do Negócio: Orientação estratégica para definir o público-alvo.',
                'Escolha do Ponto Ideal: Auxílio na busca considerando viabilidade comercial.',
                'Avaliação de Custos: Assessoria para negociação de luvas e aluguel.',
                'Alvarás e Licenças: Caminho eficiente para obtenção de autorizações.',
                'Layout Operacional: Orientação de fluxo para cozinha e bar (em parceria com arquiteto).',
                'Indicação de Profissionais: Conexão com fornecedores e prestadores de serviço confiáveis.'
            ]
        },
        'gastronomia': {
            title: 'Gastronomia',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-18 0v1.5a2.5 2.5 0 0 0 5 0V12" />
                </svg>
            ),
            subtitle: 'Desenvolvimento do cardápio e estruturação da operação culinária para elevar a qualidade.',
            items: [
                'Elaboração de Cardápio: Menu exclusivo adaptado ao conceito.',
                'Degustação e Padronização: Testes para garantir consistência nos pratos.',
                'Lista de Compras: Detalhamento de ingredientes e produtos necessários.',
                'Aquisição de Equipamentos: Orientação técnica na compra de utensílios.',
                'Seleção e Treinamento: Apoio na contratação e treinamento prático da brigada.'
            ]
        },
        'nutricao': {
            title: 'Nutrição & Segurança',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            subtitle: 'Foco em segurança alimentar, qualidade nutricional e padronização técnica.',
            items: [
                'Higiene e Manipulação: Treinamento sobre práticas seguras (Boas Práticas).',
                'Organização de Tarefas: Roteiros de atividades e planilhas de escala.',
                'Supervisão de Preparo: Acompanhamento visando eficiência e qualidade.',
                'Armazenamento e Validade: Treinamento para controle de estoque perecível.',
                'Fichas Técnicas: Criação de fichas para padronização de custos e preparo.'
            ]
        },
        'salao-bar': {
            title: 'Salão e Bar',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8" />
                    <path d="M12 21v-8" />
                    <path d="M5 3a7 7 0 0 0 14 0" />
                    <path d="M5 3h14" />
                </svg>
            ),
            subtitle: 'Transforme a experiência do cliente com um serviço de salão e bar bem estruturado.',
            items: [
                'Contratação e Treinamento: Foco em atendimento e hospitalidade.',
                'Carta de Bebidas: Criação de drinks que complementam o conceito.',
                'Integração Salão e Cozinha: Planejamento para otimizar a comunicação e fluxo.',
                'Definição de Escalas: Organização eficiente da equipe de atendimento.',
                'Operacional do Funcionamento: Implementação de check-lists de abertura/fechamento.',
                'Montagem do Salão: Orientação para um ambiente funcional e acolhedor.'
            ]
        },
        'precificacao': {
            title: 'Precificação & CMV',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            subtitle: 'Engenharia financeira para maximizar lucros e garantir sustentabilidade do negócio.',
            items: [
                'Análise de CMV: Cálculo detalhado do custo de cada item.',
                'Precificação Estratégica: Definição de preços baseada em margem de contribuição.',
                'Engenharia de Cardápio: Reformulação para destacar pratos mais rentáveis.',
                'Controle de Estoque: Rotinas para reduzir desperdícios e furos.',
                'Gestão Financeira: Transição para uma gestão baseada em dados, não em "feeling".'
            ]
        }
    };

    const faqList = [
        {
            question: "Qual a diferença da sua metodologia para consultores tradicionais?",
            answer: "Minha abordagem é baseada em metodologias atuais (fundamentadas em especialização recente na UESC) e numa visão analítica de mercado, fugindo de fórmulas prontas ou ultrapassadas. Foco em estruturar processos que funcionam hoje, usando dados para tomada de decisão, e não apenas 'feeling'."
        },
        {
            question: "Como sua experiência como representante comercial ajuda meu restaurante?",
            answer: "Eu conheço o outro lado do balcão: a indústria e os fornecedores. Tenho uma visão realista sobre custos de equipamentos, utensílios e insumos, o que me permite orientar compras mais estratégicas e negociações melhores para o seu negócio, impactando diretamente no seu investimento inicial ou custo operacional."
        },
        {
            question: "A consultoria é presencial?",
            answer: "Atendo presencialmente com foco na região de Itabuna, Ilhéus e Extremo Sul da Bahia. Para outras localidades, ofereço formatos híbridos ou online, dependendo da complexidade e necessidade do projeto."
        },
        {
            question: "Quanto tempo dura um projeto de consultoria?",
            answer: "Varia conforme o escopo. Projetos pontuais, como uma Engenharia de Cardápio ou Precificação, podem levar de 2 a 4 semanas. Consultorias completas de reestruturação de gestão ou pré-abertura geralmente variam de 3 a 6 meses para implementação total."
        }
    ];

    return (
        <>
            <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.9), rgba(8,28,21,0.95)), url(/consultoria-bg.png)' }}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Transforme seu Restaurante em um Negócio Rentável e Organizado.</h1>
                    <p className={styles.heroSubtitle}>
                        Gestão baseada em dados, processos estruturados e uma metodologia atualizada para eliminar o "achismo" operacional e financeiro da sua empresa.
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="https://wa.me/5573981349085?text=Ol%C3%A1%20Felipe,%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20para%20meu%20restaurante." className="btn-primary">
                            Agendar Diagnóstico Gratuito
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.painSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Você enfrenta estes gargalos na sua operação?</h2>
                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20V10" />
                                    <path d="M18 20V4" />
                                    <path d="M6 20v-4" />
                                    <path d="m18 4-2 2" />
                                    <path d="m18 4 2 2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Lucro Baixo ou Inexistente</h3>
                            <p className={styles.painText}>Vende bem mas não vê a cor do dinheiro no final do mês? O problema geralmente está no CMV descontrolado ou na precificação baseada em "feeling".</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Operação Lenta e Confusa</h3>
                            <p className={styles.painText}>Cozinha que não bate com o salão, pedidos demorados, alto índice de erros e clientes insatisfeitos com a experiência.</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>Equipe Desmotivada e Sem Padrão</h3>
                            <p className={styles.painText}>Alta rotatividade de funcionários, dificuldade na contratação e falta de processos claros de atendimento e produção.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.authoritySection}>
                <div className={styles.container}>
                    <div className={styles.authorityContent}>
                        <div className={styles.authorityTextBlock}>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Uma Nova Abordagem para a Consultoria Gastronômica.</h2>
                            <p className={styles.authorityLeadText}>
                                O mercado de alimentação fora do lar mudou drasticamente. Não há mais espaço para gestão baseada apenas em intuição ou modelos de negócios ultrapassados de décadas atrás.
                            </p>

                            <div className={styles.authorityGrid}>
                                <div className={styles.authorityFeature}>
                                    <div className={styles.authorityIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                        </svg>
                                    </div>
                                    <div className={styles.authorityFeatureContent}>
                                        <h3>Rigor Metodológico e Dados</h3>
                                        <p>Combinamos a metodologia mais atualizada do mercado, fruto da minha <strong>especialização contínua na UESC</strong>, fugindo de fórmulas prontas e focando em estruturar seu negócio com dados, não "feeling".</p>
                                    </div>
                                </div>

                                <div className={styles.authorityFeature}>
                                    <div className={styles.authorityIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </div>
                                    <div className={styles.authorityFeatureContent}>
                                        <h3>Visão Analítica de Mercado</h3>
                                        <p>Visão prática de quem conhece profundamente a cadeia de suprimentos e os custos reais do setor, atuando como <strong>representante comercial das maiores marcas do mercado</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.tabHeader}>
                        <h2 className={styles.sectionTitle}>Como Posso Ajudar: Soluções Estruturadas</h2>
                        <p className={styles.sectionSubtitle}>Soluções personalizadas para cada etapa do seu negócio.</p>
                    </div>

                    <div className={styles.serviceTabs}>
                        {Object.entries(services).map(([key, service]) => (
                            <button
                                key={key}
                                className={`${styles.tabButton} ${activeTab === key ? styles.active : ''}`}
                                onClick={() => setActiveTab(key as ServiceTab)}
                            >
                                <span className={styles.tabIcon}>{service.icon}</span>
                                <span className={styles.tabLabel}>{service.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContent}>
                        <h3 className={styles.tabTitle}>{services[activeTab].title}</h3>
                        <p className={styles.tabDescription}>{services[activeTab].subtitle}</p>

                        <div className={styles.serviceListGrid}>
                            {services[activeTab].items.map((item, index) => (
                                <div key={index} className={styles.serviceListItem}>
                                    <span className={styles.checkIcon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.targetSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Para quem é esta consultoria?</h2>
                    <div className={styles.targetGrid}>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                            </div>
                            <h3>Novos Empreendedores (Pré-Abertura)</h3>
                            <p>Para quem deseja entrar no mercado gastronômico com o pé direito. Utilize uma metodologia estruturada para evitar erros amadores de planejamento e custos que quebram negócios no primeiro ano.</p>
                        </div>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                    <path d="M16 16h5v5" />
                                </svg>
                            </div>
                            <h3>Donos de Restaurantes em Operação</h3>
                            <p>Para empresários que sentem que "pagam para trabalhar". O foco é profissionalizar a gestão, sair do operacional e implementar controles financeiros e de processos para ver o lucro real.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
                    <div className={styles.faqAccordion}>
                        {faqList.map((item, index) => (
                            <div key={index} className={`${styles.faqItem} ${openFaqIndex === index ? styles.open : ''}`} onClick={() => toggleFaq(index)}>
                                <div className={styles.faqHeader}>
                                    <h3>{item.question}</h3>
                                    <span className={styles.faqIcon}>
                                        {openFaqIndex === index ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        )}
                                    </span>
                                </div>
                                <div className={styles.faqContent}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Pronto para profissionalizar a gestão do seu negócio?</h2>
                    <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
                        Chega de perder dinheiro por falta de processos e controle. Agende uma conversa inicial sem compromisso e entenda como uma metodologia atualizada pode mudar o jogo do seu restaurante.
                    </p>
                    <a href="https://wa.me/5573981349085?text=Ol%C3%A1%20Felipe,%20quero%20saber%20mais%20sobre%20a%20consultoria." className="btn-primary">
                        Solicitar Diagnóstico Agora
                    </a>
                </div>
            </section>
        </>
    );
}
