'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal';

interface Brand {
    name: string;
    category: string;
    description: string;
    features: string[];
    leadTime?: string;
    logoUrl: string;
}

const brands: Brand[] = [
    {
        name: 'Lyor',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/br-11134207-7r98o-lyf690nn0so534-Yg2qjVpoX4i1ZXMb.jpg',
        description: 'Fundada em 2014, a Lyor é especializada em utilidades domésticas, presentes finos e decoração. Parte do Grupo Rojemac, oferece mais de 2000 itens que aliam beleza, design e bom preço, transitando do clássico ao contemporâneo. Distribui também marcas como Bohemia, DeKor Cam e Arcopal.',
        features: ['Mesa Posta: Taças, Copos, Pratos e Talheres', 'Cozinha: Panelas, Utensílios e Potes', 'Bar em Casa: Canecas, Taças e Petisqueiras', 'Decoração: Bombonieres, Centros de Mesa e Vasos', 'Banheiro e Organização'],
        leadTime: '7 a 10 dias'
    },
    {
        name: 'Wolff',
        category: 'Mesa Posta',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/272901689_1932006740336167_5860914756273933617_n-A3QO2kqbxOuoZyga.jpeg',
        description: 'Fundada em 1894 na Alemanha e estabelecida no Brasil desde 1930, a Wolff é tradição centenária em luxo. Adquirida pela Rojemac em 2002, mantém seu padrão de sofisticação em prata, inox, cristais e porcelanas. Suas peças atravessam gerações com elegância atemporal.',
        features: ['Prataria e Inox: Bandejas, Jarras e Champanheiras', 'Cristais: Vasos, Fruteiras, Bombonieres e Taças', 'Faqueiros em Prata e Inox', 'Porcelanas: Aparelhos de Jantar', 'Linha Premium para Ocasiões Especiais'],
        leadTime: 'Imediato'
    },
    {
        name: 'Porto Brasil',
        category: 'Mesa Posta',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/a5203a12897bf80c8184ded05c520a9c.w400.h400-Aq2qWVpPyZFXxJ3w.jpg',
        description: 'Sediada em Porto Ferreira/SP, a Porto Brasil é referência em cerâmica grés (stoneware) com design contemporâneo. Primeira do segmento globalmente a usar sistema de pegada digital, oferece coleções como Bio Stoneware e Avant Garde, além de itens decorativos.',
        features: ['Aparelhos de Jantar em Grés', 'Coleções: Bio Stoneware, Avant Garde, Linha Branca', 'Pratos, Bowls, Xícaras e Canecas', 'Peças Decorativas: Bandejas, Vasos e Centros de Mesa', 'Design Inovador e Sustentável'],
        leadTime: '15 a 20 dias'
    },
    {
        name: 'Porcelana Schmidt',
        category: 'Mesa Posta',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/ps-dJo5ZKazLNCWL1Ne.png',
        description: 'Desde 1945, a Porcelana Schmidt é sinônimo de tradição e qualidade brasileira. Oferece duas linhas principais: Linha Casa (decorações clássicas e assinadas) e Linha Gastronomia (profissional para hotéis e restaurantes). Brancura excepcional e resistência superior.',
        features: ['Linha Casa: Coleções Decoradas e Clássicas', 'Linha Gastronomia: Porcelanas Profissionais', 'Aparelhos de Jantar Completos', 'Peças Avulsas e Personalização', 'Indicada para Hotelaria e Alta Gastronomia'],
    },
    {
        name: 'Devitro',
        category: 'Vidros',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/l-dOq8ao5JveCpbQ87.png',
        description: 'Com mais de 35 anos de experiência, a Devitro Decorações é especializada em peças artesanais em vidro. Localizada em Pedreira/SP, maior polo de decoração do Brasil, oferece vasos, castiçais, centros de mesa e esculturas que aliam sofisticação, qualidade e design exclusivo.',
        features: ['Vasos Decorativos em Vidro', 'Castiçais e Porta-Velas', 'Centros de Mesa', 'Esculturas e Peças Artísticas', 'Produção Artesanal Exclusiva'],
    },
    {
        name: 'Grillo',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/414823041_710158124433025_5496920956595658740_n-Aq2qWVpP2ECl8DEl.jpg',
        description: 'Com mais de 25 anos de história, a Grillo é importadora especializada em plantas permanentes e decoração natalina. Atende exclusivamente atacado e profissionais, oferecendo tendências mundiais em flores artificiais e sendo líder nacional em produtos para o Natal.',
        features: ['Plantas Permanentes: Flores, Folhagens e Árvores', 'Decoração de Natal: Árvores, Enfeites e Guirlandas', 'Vasos e Cachepots Decorativos', 'Almofadas e Adornos Natalinos', 'Mesa Posta Natalina'],
    },
    {
        name: 'Ingá Import',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/300963773_516292023764894_1202790754973443016_n-mP42OKEbXwHXp9O2.jpg',
        description: 'Estabelecida em 2010 em Maringá/PR, a Ingá Import é especializada em importação e distribuição para atacado. Gerencia as marcas exclusivas "Em Casa Tem" (utilidades domésticas) e "Mimo Pets" (produtos para animais de estimação).',
        features: ['Marca Em Casa Tem: Utilidades Domésticas', 'Marca Mimo Pets: Acessórios, Brinquedos e Camas', 'Comedouros, Escovas e Coleiras para Pets', 'Ferramentas e Utilidades Gerais', 'Foco em Atacado Nacional'],
    },
    {
        name: 'Soprano',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/763a24e91a91cab80b194d4e4ea75669-AwvD4op3XESOzp0W.jpg',
        description: 'Com mais de 65 anos de história, a Soprano é líder nacional em produtos térmicos e fechaduras. Possui cinco unidades de negócios: Utilidades Térmicas, Fechaduras e Ferragens, Materiais Elétricos, além de soluções de Acesso, Segurança e Bem-Estar.',
        features: ['Térmicos: Garrafas, Bules, Caixas e Marmitas', 'Fechaduras: Mecânicas, Elétricas e Digitais', 'Fechaduras Biométricas e para Vidro', 'Cadeados e Travas de Segurança', 'Materiais Elétricos: Interruptores e Tomadas'],
    },
    {
        name: 'Ou',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/356623163_635668398592754_8607733311474645119_n-Y4LxD0NwaQIj0avx.jpg',
        description: 'A Ou revolucionou a organização no Brasil com design premiado e cores tendência. Seus organizadores plásticos premium transformam a funcionalidade em decoração, oferecendo soluções completas para casa, cozinha e escritório com foco em estética e qualidade.',
        features: ['Organizadores de Geladeira: Clear e Block', 'Linha Banheiro e Lavabo', 'Organizadores de Gavetas e Armários', 'Lixeiras de Design', 'Utensílios e Acessórios de Cozinha'],
    },
    {
        name: 'Arthi',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/295244960_5365948610187240_756267249493179842_n-A85Ee0n81ZIWlk3B.jpg',
        description: 'Líder nacional em utilidades domésticas, a Arthi é especialista em produtos de aço cromado, emborrachado e plástico. Reconhecida pela qualidade, design moderno e funcionalidade, oferece soluções práticas para cozinha, banheiro e lavanderia.',
        features: ['Escorredores de Louça em Aço Cromado', 'Organizadores: Fruteiras e Porta-Rolos', 'Carrinhos Multiuso e Dispensers', 'Acessórios para Banheiro', 'Produtos para Lavanderia'],
    },
    {
        name: 'Tritec',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/tritec_plasticos_logo-YleqWVpBOEIoaOjB.jpg',
        description: 'Sediada em Jaraguá do Sul/SC, a Tritec transforma plástico em produtos com usabilidade única. Especializada em potes herméticos, bacias e utilidades domésticas, investe em tecnologia e logística reversa para criar soluções práticas e sustentáveis.',
        features: ['Potes Herméticos: Retangulares, Quadrados e Redondos', 'Potes Multiuso Reforçados', 'Bacias com Tampa em Diversos Tamanhos', 'Linha Doméstica: Jarras, Lixeiras e Bandejas', 'Livre de BPA e Seguro para Micro-ondas'],
    },
    {
        name: 'Rio Master',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/riomaster_logo-YD0wB305aNuv2OGj.jpeg',
        description: 'A Rio Master é especialista em decoração sazonal e produtos importados. Líder nacional em artigos de Natal, oferece árvores, enfeites, iluminação LED e guirlandas. Também trabalha com utilidades domésticas e itens para festas com preços competitivos.',
        features: ['Natal: Árvores Decoradas, Enfeites e Bolas', 'Iluminação: Pisca-Piscas LED e Cordões Luminosos', 'Guirlandas, Presépios e Laços Decorativos', 'Decoração de Páscoa e Festas Sazonais', 'Utilidades Domésticas Importadas'],
    },
    {
        name: 'Nutriplan',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/448005235_989307783201686_3492784596980488691_n-AR0MLKvXqPs8Vlvz.jpg',
        description: 'Líder da América Latina em soluções para jardinagem e paisagismo, a Nutriplan oferece mais de 1.600 produtos. Com marcas como Terraza, Vitaplan, Produtor e Jardins, atende desde a horticultura doméstica até a produção em grande escala. 80% dos vasos são feitos com plástico reciclado.',
        features: ['Vasos Plásticos: Rotomoldados e Decorativos', 'Vasos de Fibra de Coco (Nutricoco)', 'Adubos e Fertilizantes Premium', 'Bandejas de Mudas e Sementeiras', 'Acessórios de Jardinagem e Composteiras'],
    },
    {
        name: 'Mistral',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/ms-dOq8ao5Ja4CGjJbm.png',
        description: 'Sediada em Ferraz de Vasconcelos/SP, a Mistral Vidros é fabricante especializada em vasos e utilidades domésticas em vidro. Reconhecida pela produção artesanal de peças únicas criadas por mestres vidreiros, combina funcionalidade e design elegante.',
        features: ['Vasos Decorativos em Vidro', 'Taças, Pratos e Bowls', 'Peças para Iluminação', 'Utensílios de Cozinha em Vidro', 'Produção Artesanal com Formas Exclusivas'],
    },
    {
        name: 'Mel Toys',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/b78dc741-d256-49d2-a980-f3733d18ea1b-mnlqWVpoGgHG4rog.jpg',
        description: 'A Mel Toys é especializada em ursinhos de pelúcia e brinquedos afetivos que transmitem carinho e emoção. Seus produtos são caracterizados por designs acolhedores com laços, corações e acessórios únicos. Utiliza pelúcia macia e segura, ideal para presentear, decorar e servir como companheiros afetivos.',
        features: ['Ursinhos de Pelúcia: Diversos Tamanhos e Cores', 'Ursinhos Temáticos: Abelhinha com Pote de Mel', 'Ursinhos com Coração: "Love You" e "Te Amo"', 'Bolsas e Mochilas de Pelúcia Infantil', 'Lembrancinhas para Eventos Especiais'],
    },
    {
        name: 'Tropical Aromas',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/302155370_585603662996093_4122212148476902174_n-mePbxVpoK3ip2e6Q.jpg',
        description: 'Líder em difusores elétricos de aromas no Brasil, a Tropical Aromas oferece soluções completas de aromatização. Com tecnologia ultrassônica e fragrâncias tropicais envolventes, possui linhas de difusores (250ml e 300ml), home sprays, odorizadores de tecidos e produtos para pet care.',
        features: ['Difusores Elétricos: 250ml e 300ml', 'Home Sprays e Perfumes de Ambiente', 'Odorizadores de Tecidos', 'Linha Sentimentos: Amor e Sucesso', 'Fragrâncias: Limão Siciliano, Orquídea, Vanilla'],
    },
    {
        name: 'Wellmix',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/321804489_868969254225380_1342971905365308913_n-mxBM4VpeGjCaNk97.jpg',
        description: 'A Wellmix é importadora completa de variedades. Seu catálogo abrange utilidades domésticas, papelaria criativa, brinquedos, acessórios pessoais e artigos de festa. Parceira ideal para lojistas que buscam novidades constantes e produtos de impulso.',
        features: ['Papelaria Criativa e Escolar', 'Utilidades Domésticas Importadas', 'Brinquedos Diversos', 'Acessórios Pessoais e Beleza', 'Artigos de Festa e Decoração'],
    },
    {
        name: 'Hipertextil',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop,trim=36.29032258064516;0;36.29032258064516;0/YrDqW8L9qqhQZkxM/channels4_profile-A1aBP0vWoZinzZWD.jpg',
        description: 'Fundada em 2001 em Ibiaçá/RS, a Hiper Têxtil é atacadista especializada em cama, mesa e banho. Com marcas próprias como Bene Casa e Tessi, oferece roupas de cama, toalhas de banho e mesa, e produtos têxteis com qualidade e design sofisticado para todo o Brasil.',
        features: ['Roupas de Cama: Lençóis e Edredons', 'Toalhas de Banho, Rosto e Lavabo', 'Toalhas de Mesa e Panos de Copa', 'Roupões e Tapetes de Banheiro', 'Marcas Próprias: Bene Casa e Tessi'],
    },
    {
        name: 'Belfix',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/01_logobel-azul-1-Yg2qjVpoobS4L9zd.png',
        description: 'A Belfix é marca brasileira líder em produtos para lazer e praia. Oferece cadeiras reclináveis, piscinas com armação, infláveis e tendas gazebo. Seus produtos são sinônimo de verão, atividades ao ar livre e diversão em família, com qualidade e durabilidade.',
        features: ['Cadeiras de Praia: Reclináveis e Dobráveis', 'Piscinas: Com Armação e Infláveis', 'Guarda-Sóis e Tendas Gazebo', 'Pranchas de Bodyboard e Esteiras', 'Bolsas Térmicas e Carrinhos de Mesa'],
    },
    {
        name: 'Max Aluminios',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/mx-YbNqBVpkqzhQJOnD.png',
        description: 'Fundada em 2017 em Cambé/PR, a Max Alumínios é fabricante de utensílios em alumínio para cozinha. Focada em qualidade e praticidade, oferece caldeirões linha Hotel para uso industrial, panelas de pudim, caçarolas e frigideiras com acabamento polido.',
        features: ['Caldeirões Linha Hotel: 10L a 68L', 'Panelas de Pudim em Diversas Cores', 'Caçarolas e Frigideiras Polidas', 'Tachos Pergaminho', 'Formas de Pizza e Assadeiras'],
    },
    {
        name: 'Dolce Home',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/21226114-vgjldgnz2e-mp8qWVplGKFDqg8E.jpeg',
        description: 'A Dolce Home é marca brasileira que combina estilo, conforto e qualidade em utilidades para o lar. Especializada em produtos de inox e bambu, oferece potes, tábuas de corte, organizadores e acessórios que unem funcionalidade e design moderno.',
        features: ['Potes de Vidro com Tampa de Bambu', 'Tábuas de Corte em Fibra de Bambu', 'Organizadores de Temperos em Bambu', 'Boleiras e Saladeiras de Inox', 'Porta Condimentos Giratórios'],
    },
    {
        name: 'Ke Home',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/227113-800-auto-YbNqBVpkOOSWBwW3.jpg',
        description: 'Fundada em 2009 no Rio de Janeiro, a Ke Home é importadora e distribuidora de utilidades domésticas em aço inoxidável. Atua em todo o Brasil com foco em utensílios de cozinha, buscando inovação e acessibilidade em seus produtos.',
        features: ['Escumadeiras e Espátulas para Fritura', 'Conjuntos de Talheres e Utensílios', 'Tigelas e Bacias em Aço Inox', 'Batedores, Amassadores e Fouets', 'Acessórios para Confeitaria'],
    },
    {
        name: 'Vitazza',
        category: 'Vidros',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/channels4_profile-1-m5KLM06X2RuELvMO.jpg',
        description: 'Sediada em Mogi das Cruzes/SP, a Vitazza é pioneira em vidro 100% reciclado no Brasil. Comprometida com sustentabilidade e economia circular, transforma cacos de vidro em potes, boleiras e centros de mesa com design clássico e resistência única.',
        features: ['Potes e Tigelas de Vidro Reciclado', 'Boleiras: Pétalas de Jasmin e Pluma', 'Queijeiras de Vidro', 'Jarras, Copos e Suqueiras', 'Centros de Mesa e Vasos Decorativos'],
    },
    {
        name: 'Aj Import',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/270049332_2045859402239799_7808812426989656060_n-m2Wa80zJP2IoqP8v.png',
        description: 'A AJ Import é importadora especializada em variedades, trazendo novidades do mundo para o Brasil. Oferece mix dinâmico de brinquedos, utilidades domésticas, artigos de presente e decoração popular, sempre buscando tendências de consumo.',
        features: ['Brinquedos Importados', 'Utilidades Domésticas Variadas', 'Artigos de Presente', 'Decoração Popular', 'Acessórios Diversos de Impulso'],
    },
    {
        name: 'Secalux',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/sx-AzG3XVpBlofvpZnP.png',
        description: 'Com mais de 30 anos de experiência, a Secalux é a maior fabricante de varais do Brasil e pioneira em varais de chão. Especializada em soluções completas para lavanderia, oferece produtos para lavar, secar, passar, cuidar e organizar roupas.',
        features: ['Varais de Chão: Com e Sem Abas', 'Varais Portáteis e de Teto', 'Araras e Organizadores para Roupas', 'Tábuas de Passar e Suportes para Ferro', 'Prendedores, Seca Meias e Acessórios'],
    },
    {
        name: 'Casa Ambiente',
        category: 'Mesa Posta',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/ca-mjEq7VpoqNc9VoPW.png',
        description: 'Fundada em 2002, a Casa Ambiente é importadora e distribuidora brasileira de utilidades domésticas e decoração. Com quase duas décadas no mercado, oferece produtos inovadores que tornam as casas mais aconchegantes e funcionais, focando em design e praticidade.',
        features: ['Potes de Vidro e Organizadores', 'Utensílios de Cozinha', 'Artigos de Decoração', 'Itens para Mesa Posta', 'Acessórios para o Lar'],
    },
    {
        name: 'Grilazer',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/312408823_819299639195675_846635169432526387_n-A0x1lp7641ukz3qB.jpg',
        description: 'Fundada em 1999 no Sudoeste do Paraná, a Grilazer é especialista em churrasco gaúcho. Oferece espetos com designs exclusivos, grelhas em alumínio e inox para diversos tipos de preparo, e acessórios práticos para um churrasco autêntico.',
        features: ['Espetos: Duplos, Simples e para Queijo', 'Grelhas: Hambúrguer, Peixe, Linguiça e Parrilla', 'Grelhas Duplas para Assados', 'Tábuas de Carne e Garfos', 'Escovas de Limpeza e Acendedores'],
    },
    {
        name: 'Tutipan',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/design-sem-nome-Aq2qWVpPzyfxjz38.jpg',
        description: 'A Tutipan é fabricante brasileira especializada em produtos para panificação e confeitaria. Oferece formas, assadeiras e utensílios em alumínio e aço inoxidável para uso profissional e doméstico, com foco em qualidade e resistência.',
        features: ['Formas com Fundo Removível', 'Assadeiras para Altas Temperaturas', 'Aros e Telas para Pizza', 'Utensílios para Confeitaria', 'Baldes para Sorvete em Alumínio'],
    },
    {
        name: 'Mek',
        category: 'Mesa Posta',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/305090322_508243061302049_584915706215759888_n-mjEq7Vpogvuv7Pgk.png',
        description: 'A Mek é a marca moderna da Jolitex Ternille, focada em decoração e mesa posta contemporânea. Oferece caminhos de mesa rendados, jogos americanos, sousplats e centros de mesa com designs sofisticados, laser-cut e toque acetinado.',
        features: ['Caminhos de Mesa: Delhi, Denver, Barcelona', 'Jogos Americanos Redondos', 'Sousplats em Diversos Modelos', 'Centros de Mesa Rendados', 'Decoração Têxtil para Casa'],
    },
    {
        name: 'Sapico Toys',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/br-11134207-7r98o-lz17dxagy1ideb-mk3qvVpoGrtqzNlr.jpeg',
        description: 'Fundada em São Paulo, a Sapico Toys é fabricante brasileira especializada em brinquedos divertidos e criativos. Reconhecida por suas linhas de carrinhos Crazy Cars e Street Monsters, investe constantemente em design e inovação, criando brinquedos que estimulam a imaginação infantil.',
        features: ['Carrinhos Crazy Cars', 'Linha Street Monsters', 'Veículos em Miniatura', 'Brinquedos de Plástico', 'Jogos e Brinquedos Recreativos'],
    },
    {
        name: 'Class Home',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/448237275_454963433834400_8844869469338753204_n-mk3qvVpoDNt7Bgjv.jpg',
        description: 'Com mais de 30 anos de experiência, a Class Home oferece utilidades e decoração para o lar brasileiro. Sediada em Assis/SP com distribuição em Joinville/SC, atende todo o país com produtos de qualidade e custo-benefício, incluindo linhas profissionais para buffets.',
        features: ['Rechauds para Buffet', 'Travessas em Cerâmica e Inox', 'Garrafas Térmicas', 'Conjuntos de Panelas e Copos', 'Linha Profissional para Restaurantes'],
    },
    {
        name: 'Santana Import',
        category: 'Variedades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/asd-YyvZ9Vp13oS0V0VX.png',
        description: 'Fundada em 1989 em São Paulo, a Santana Import é importadora e distribuidora especializada em produtos eletrônicos, informática e ferramentas. Com mais de 3 décadas de experiência, atende extensa rede de lojistas em todo o Brasil com produtos inovadores.',
        features: ['Informática e Telefonia', 'Áudio e Vídeo', 'Material Elétrico', 'Segurança Eletrônica', 'Ferramentas e Componentes Eletrônicos'],
    },
    {
        name: 'Eddi Casa',
        category: 'Decoração',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/326409980_1515863592156355_8924626989083125270_n-mk3qvVpo3Mf4rw4q.jpg',
        description: 'Fundada em 2016 em Ibitinga/SP, a EDDI Casa é especializada em têxteis para o lar. Iniciou com cortinas e expandiu para cama, mesa e banho. Oferece cortinas blackout, colchas, lençóis, toalhas de mesa, tapetes e capas de almofada com design sofisticado.',
        features: ['Cortinas: Blackout e Decorativas', 'Cama: Colchas, Lençóis e Jogos de Cama', 'Toalhas de Mesa e Banho', 'Tapetes Jacquard com Látex', 'Capas de Almofada em Diversos Prints'],
    },
    {
        name: 'Dayhome',
        category: 'Utilidades',
        logoUrl: '/dayhome_logo_large.png',
        description: 'A Dayhome atua em duas frentes: Dayhome Food Service (desde 2007) especializada em equipamentos para cozinhas profissionais, restaurantes e franquias; e Dayhome Houseware (desde 2002) focada em utilidades domésticas e decoração, com mais de 30 representantes no Brasil.',
        features: ['Food Service: Equipamentos para Cozinhas Industriais', 'Utensílios para Buffet, Padaria e Restaurantes', 'Houseware: Organizadores e Itens para Banheiro', 'Utensílios Plásticos e Recipientes', 'Soluções de Armazenamento e Decoração'],
    },
    {
        name: 'Tt Brasil',
        category: 'Utilidades',
        logoUrl: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=345,fit=crop/YrDqW8L9qqhQZkxM/12dsad-d9571Vw28Mt8jolb.png',
        description: 'A TT Brasil é distribuidora ágil de utilidades domésticas. Focada em abastecer o varejo com produtos de alto giro, oferece um mix variado de plásticos, vidros, alumínios e miudezas que atendem as necessidades básicas do lar com preços competitivos.',
        features: ['Utilidades em Geral para o Lar', 'Plásticos: Potes, Bacias e Jarras', 'Vidros: Copos e Recipientes', 'Alumínios: Panelas e Formas', 'Miudezas Domésticas Diversas']
    }
];

const categories = ['Todos', 'Decoração', 'Utilidades', 'Mesa Posta', 'Vidros', 'Variedades'];

export default function Representacao() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

    const filteredBrands = activeCategory === 'Todos'
        ? brands
        : brands.filter(brand => brand.category === activeCategory);

    const whatsappLink = "https://wa.me/5573981349085";

    return (
        <main>
            <Navbar />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Representação Comercial Especializada</span>
                    <h1 className={styles.heroTitle}>Leve as Melhores Marcas para a Sua Loja</h1>
                    <p className={styles.heroSubtitle}>
                        Curadoria estratégica de utilidades domésticas e decoração para lojistas que buscam giro rápido e alta lucratividade.
                    </p>
                    <div className={styles.heroButtons}>
                        <a
                            href="https://felipe.rep.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Área do Cliente
                        </a>
                    </div>
                </div>
            </section>

            <ScrollReveal>
                <section className={styles.catalogSection}>
                    <div className="container">
                        <div className={styles.filterBar}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className={styles.brandGrid}>
                            {filteredBrands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className={styles.brandCard}
                                    onClick={() => setSelectedBrand(brand)}
                                >
                                    <div className={styles.logoContainer}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={brand.logoUrl}
                                            alt={brand.name}
                                            className={styles.brandLogo}
                                        />
                                    </div>
                                    <span className={styles.viewMore}>Ver Detalhes</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Modal isOpen={!!selectedBrand} onClose={() => setSelectedBrand(null)}>
                {selectedBrand && (
                    <div className={styles.modalInner}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalLogoWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={selectedBrand.logoUrl}
                                    alt={selectedBrand.name}
                                    className={styles.modalLogo}
                                />
                            </div>
                            <div className={styles.modalHeaderText}>
                                <h2 className={styles.modalTitle}>{selectedBrand.name}</h2>
                                <span className={styles.modalCategory}>{selectedBrand.category}</span>
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.modalDescription}>{selectedBrand.description}</p>
                            <div className={styles.modalSection}>
                                <h3>Produtos & Segmentos</h3>
                                <ul className={styles.featureList}>
                                    {selectedBrand.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <a
                                href={`${whatsappLink}?text=Olá Felipe, gostaria de solicitar o catálogo da marca ${selectedBrand.name}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ width: '100%', textAlign: 'center' }}
                            >
                                Solicitar Catálogo via WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </Modal>

            <ScrollReveal>
                <section className={styles.ctaSection}>
                    <div className="container">
                        <h2 style={{ marginBottom: '2rem' }}>Não encontrou o que procura?</h2>
                        <p style={{ marginBottom: '2rem', color: '#ccc' }}>Tenho acesso a um portfólio ainda maior de parceiros.</p>
                        <a
                            href={`${whatsappLink}?text=Olá Felipe, gostaria de saber sobre outras marcas que você representa.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            Falar com Representante
                        </a>
                    </div>
                </section>
            </ScrollReveal>

            <div className="container" style={{ textAlign: 'center', padding: '2rem 0', color: '#888', fontSize: '0.8rem', lineHeight: '1.6' }}>
                <p><strong>Marcas Representadas na Bahia:</strong> Lyor, Wolff, Tramontina, Porto Brasil, Schmidt, Devitro, Grillo, Ingá Import, Soprano, Ou, Arthi, Tritec, Rio Master, Nutriplan, Mistral, Mel Toys, Tropical Aromas, Wellmix, Hiper Têxtil, Belfix, Max Alumínios, Dolce Home, Ke Home, Vitazza, AJ Import, Secalux, Casa Ambiente, Grilazer, Tutipan, Mek, Sapico Toys, Class Home, Santana Import, EDDI Casa, Dayhome, TT Brasil.</p>
            </div>

            <Footer />
        </main >
    );
}
