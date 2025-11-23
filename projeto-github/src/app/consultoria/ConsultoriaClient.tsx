'use client';

import { useState } from 'react';
import styles from './page.module.css';

type ServiceTab = 'pre-abertura' | 'gastronomia' | 'nutricao' | 'salao-bar' | 'precificacao';

export default function ConsultoriaClient() {
    const [activeTab, setActiveTab] = useState<ServiceTab>('pre-abertura');

    const services = {
        'pre-abertura': {
            title: 'Pré-Abertura',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4 8 4v14" />
                    <path d="M13 21V11l-4-2-4 2v10" />
                </svg>
            ),
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
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-18 0v1.5a2.5 2.5 0 0 0 5 0V12" />
                </svg>
            ),
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
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 17-1.4-1.4" />
                    <path d="m19 12-2 0" />
                    <path d="m17 7-1.4 1.4" />
                    <path d="m7 17 1.4-1.4" />
                    <path d="m5 12 2 0" />
                    <path d="m7 7 1.4 1.4" />
                </svg>
            ),
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
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8" />
                    <path d="M12 21v-8" />
                    <path d="M5 3a7 7 0 0 0 14 0" />
                    <path d="M5 3h14" />
                </svg>
            ),
            description: 'Transforme a experiência do cliente com um serviço de salão e bar bem estruturado e profissional',
            items: [
                { title: 'Contratação e Treinamento', desc: 'Seleção de profissionais e treinamento prático e teórico em atendimento e hospitalidade' },
                { title: 'Carta de Bebidas', desc: 'Criação de uma carta de drinks e bebidas que complementa o conceito do estabelecimento' },
                { title: 'Integração Salão e Cozinha', desc: 'Planejamento para otimizar a comunicação entre salão e cozinha, garantindo um fluxo eficiente' },
                { title: 'Definição de Escalas', desc: 'Organização das escalas de trabalho dos funcionários' },
                { title: 'Operacional do Funcionamento', desc: 'Implementação de check-lists de abertura e fechamento, para garantir um funcionamento impecável' },
                { title: 'Montagem do Salão', desc: 'Orientação na disposição do salão para criar um ambiente acolhedor e funcional' }
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

    return (
        <>
            <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(rgba(8,28,21,0.85), rgba(8,28,21,0.95)), url(/consultoria-bg.png)' }}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>CONSULTORIA GASTRONÔMICA</span>
                    <h1 className={styles.heroTitle}>Transforme seu Restaurante em uma Máquina de Lucro</h1>
                    <p className={styles.heroSubtitle}>
                        Gestão eficiente, processos padronizados e uma equipe treinada para entregar a melhor experiência ao seu cliente.
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
                    <h2 className={styles.sectionTitle}>Você enfrenta esses problemas?</h2>
                    <p className={styles.sectionSubtitle}>Identificamos e resolvemos os gargalos que impedem o crescimento do seu negócio.</p>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>📉</div>
                            <h3 className={styles.painTitle}>Lucro Baixo ou Inexistente</h3>
                            <p className={styles.painText}>Vende bem mas não vê a cor do dinheiro no final do mês? O problema pode estar no CMV ou na precificação.</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>🐢</div>
                            <h3 className={styles.painTitle}>Operação Lenta e Confusa</h3>
                            <p className={styles.painText}>Pedidos demorados, erros na cozinha e clientes insatisfeitos com a espera.</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>👥</div>
                            <h3 className={styles.painTitle}>Equipe Desmotivada</h3>
                            <p className={styles.painText}>Alta rotatividade de funcionários e falta de padrão no atendimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.tabHeader}>
                        <h2 className={styles.sectionTitle}>Como Posso Ajudar</h2>
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
                        <p className={styles.tabDescription}>{services[activeTab].description}</p>

                        <div className={styles.serviceGrid} style={{ marginTop: '3rem' }}>
                            {services[activeTab].items.map((item, index) => (
                                <div key={index} className={styles.serviceCard}>
                                    <span className={styles.serviceNumber}>0{index + 1}</span>
                                    <h4 className={styles.serviceTitle}>{item.title}</h4>
                                    <p className={styles.serviceDesc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.authoritySection}>
                <div className={styles.container}>
                    <div className={styles.authorityContent}>
                        <div>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Por que confiar?</h2>
                            <div className={styles.authorityText}>
                                <p>
                                    Com anos de experiência prática no setor de A&B (Alimentos e Bebidas), combino conhecimento técnico com visão de dono.
                                    Não entrego apenas relatórios; entrego resultados práticos e mensuráveis.
                                </p>
                                <p>
                                    Minha metodologia foca em três pilares: <strong>Pessoas, Processos e Produto</strong>.
                                    Quando esses três estão alinhados, o lucro é consequência inevitável.
                                </p>
                                <div className={styles.highlight}>
                                    "Não é sobre trabalhar mais, é sobre trabalhar de forma mais inteligente e estratégica."
                                </div>
                            </div>
                        </div>
                        <div className={styles.authorityStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+50</span>
                                <span className={styles.statLabel}>Projetos Realizados</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+15%</span>
                                <span className={styles.statLabel}>Média de Aumento de Lucro</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.targetSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Para quem é esta consultoria?</h2>
                    <div className={styles.targetGrid}>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>🚀</div>
                            <h3>Novos Empreendedores</h3>
                            <p>Que desejam abrir um negócio gastronômico com segurança, evitando erros comuns que podem custar caro.</p>
                        </div>
                        <div className={styles.targetCard}>
                            <div className={styles.targetIcon}>🔄</div>
                            <h3>Donos de Restaurantes</h3>
                            <p>Que já possuem um negócio mas sentem que estão "pagando para trabalhar" e precisam profissionalizar a gestão.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>A consultoria é presencial?</h3>
                            <p>Atendo presencialmente em Itabuna, Ilhéus e região. Para outras localidades, ofereço consultoria híbrida ou online, dependendo da necessidade do projeto.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Quanto tempo dura o processo?</h3>
                            <p>Depende do escopo. Projetos pontuais (como Engenharia de Cardápio) podem durar 2-3 semanas. Consultorias de gestão completa geralmente variam de 3 a 6 meses.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Pronto para mudar o jogo?</h2>
                    <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
                        Não deixe seu lucro escorrer pelo ralo. Vamos estruturar seu negócio para o sucesso.
                    </p>
                    <a href="https://wa.me/5573981349085?text=Ol%C3%A1%20Felipe,%20quero%20saber%20mais%20sobre%20a%20consultoria." className="btn-primary">
                        Falar com Consultor
                    </a>
                </div>
            </section>
        </>
    );
}
