/**
 * DADOS CENTRALIZADOS DO SITE
 * -----------------------------------------------------------------
 * Edite apenas este arquivo para atualizar textos, imagens e projetos.
 * Nenhum texto de conteúdo real deve ficar espalhado pelo HTML/JS.
 * -----------------------------------------------------------------
 */

const SITE_DATA = {
  // ---------------------------------------------------------------
  // INFORMAÇÕES GERAIS DO ESCRITÓRIO
  // ---------------------------------------------------------------
  brand: {
    name: "COTTAR",
    fullName: "COTTAR ARQUITETURA",
  },

  // ---------------------------------------------------------------
  // HERO / HOME
  // ---------------------------------------------------------------
  hero: {
    // Vídeo de fundo (opcional). Coloque o arquivo gerado em
    // assets/video/hero.mp4 - enquanto não existir, o navegador
    // mostra "poster" (a imagem abaixo) no lugar.
    video: "assets/video/hero.mp4",
    poster: "assets/img/portfolio/residencia-geminada-04-05/cover.jpg",
    videoLabel: "Vídeo institucional: fachada de edifício contemporâneo projetado pelo escritório Cottar Arquitetura",
    title: "COTTAR ARQUITETURA",
    slogan: "Projetos que unem forma, função e tempo.",
    ctaLabel: "Ver Portfólio",
    ctaTarget: "#portfolio",
  },

  // ---------------------------------------------------------------
  // SOBRE / O ARQUITETO
  // ---------------------------------------------------------------
  about: {
    photo: "assets/img/arquiteto.jpg",
    photoAlt: "Retrato do arquiteto responsável pelo escritório Cottar Arquitetura",
    kicker: "O Arquiteto",
    name: "João Victor Henriques Cotta",
    bio: [
      "Meu nome é João Victor Henriques Cotta, Arquiteto e Urbanista formado pela Universidade Vila Velha.",
      "Acredito que a arquitetura vai além da estética: ela deve promover bem-estar, funcionalidade e qualidade de vida. Por isso, busco constantemente criar soluções que integrem design, eficiência e responsabilidade ambiental.",
      "Cada projeto é conduzido de forma autoral e personalizada, do estudo de viabilidade ao acompanhamento de obra, garantindo coerência entre o desenho e o resultado construído.",
    ],
    philosophy: "Meu portfólio reúne projetos que demonstram minha capacidade de equilibrar funcionalidade, estética e sustentabilidade, sempre com atenção aos detalhes e foco na experiência do usuário.",
    values: [
      "Atenção ao detalhe em cada etapa do projeto",
      "Diálogo próximo e transparente com o cliente",
      "Uso consciente de materiais e recursos naturais",
      "Compromisso com prazos e viabilidade da obra",
    ],
  },

  // ---------------------------------------------------------------
  // CATEGORIAS DO PORTFÓLIO (usadas nos filtros)
  // ---------------------------------------------------------------
  categories: [
    { id: "all", label: "Todos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "interiores", label: "Interiores" },
  ],

  // ---------------------------------------------------------------
  // PROJETOS DO PORTFÓLIO
  // ---------------------------------------------------------------
  // Para adicionar um novo projeto, basta copiar um objeto do array
  // abaixo e substituir os campos. "gallery" e "floorPlans" aceitam
  // quantas imagens forem necessárias.
  // ---------------------------------------------------------------
  projects: [
    {
      id: "residencia-geminada-04-05",
      name: "Residência Geminada - Casas 04 e 05",
      category: "residencial",
      categoryLabel: "Residencial",
      location: "Itapebussu, Guarapari - ES",
      year: 2025,
      area: "≈150 m² por unidade (estimativa - confirmar)",
      cover: "assets/img/portfolio/residencia-geminada-04-05/cover.jpg",
      description:
        "Par de residências geminadas com fachada em concreto aparente, tons de chumbo e branco, marcenaria e iluminação embutida marcando a entrada. Programa compacto e verticalizado, com garagem coberta, área social integrada e piscina nos fundos.",
      gallery: [
        "assets/img/portfolio/residencia-geminada-04-05/g-01.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-02.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-03.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-04.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-05.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-06.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-07.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-08.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-09.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-10.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-11.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-12.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-13.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-14.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-15.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-16.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-17.jpg",
        "assets/img/portfolio/residencia-geminada-04-05/g-18.jpg",
      ],
      floorPlans: [
        "assets/img/portfolio/residencia-geminada-04-05/plan-1.jpg",
      ],
    },
    {
      id: "residencia-geminada-02-03",
      name: "Residência Geminada - Casas 02 e 03",
      category: "residencial",
      categoryLabel: "Residencial",
      location: "Rua Vereador Jorge Simões, Itapebussu, Guarapari - ES",
      year: 2025,
      area: "≈86 m² (pavimento térreo, por unidade)",
      cover: "assets/img/portfolio/residencia-geminada-02-03/cover.jpg",
      description:
        "Segundo par de residências geminadas para o mesmo cliente, com sobrado em dois pavimentos, varanda com brise de madeira no volume superior e área gourmet com piscina no térreo. Layout espelhado entre as duas unidades.",
      gallery: [
        "assets/img/portfolio/residencia-geminada-02-03/g-01.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-02.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-03.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-04.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-05.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-06.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-07.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-08.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-09.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-10.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-11.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-12.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-13.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-14.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-15.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-16.jpg",
        "assets/img/portfolio/residencia-geminada-02-03/g-17.jpg",
      ],
      floorPlans: [
        "assets/img/portfolio/residencia-geminada-02-03/plan-1.jpg",
      ],
    },
    {
      id: "academia-brumfit",
      name: "Academia BrumFit",
      category: "comercial",
      categoryLabel: "Comercial",
      location: "Rua Horácio Santana, 155, Parque Areia Preta, Guarapari - ES",
      year: 2023,
      area: "≈1.200 m² (área construída, 4 pavimentos - estimativa)",
      cover: "assets/img/portfolio/academia-paulo/cover.jpg",
      description:
        "Edifício comercial de quatro pavimentos para academia de ginástica, com estacionamento próprio, sala de spinning, musculação, recepção e salão de eventos no último pavimento. Identidade visual em preto, cinza e amarelo.",
      gallery: [
        "assets/img/portfolio/academia-paulo/g-01.jpg",
        "assets/img/portfolio/academia-paulo/g-02.jpg",
        "assets/img/portfolio/academia-paulo/g-03.jpg",
        "assets/img/portfolio/academia-paulo/g-04.jpg",
        "assets/img/portfolio/academia-paulo/g-05.jpg",
        "assets/img/portfolio/academia-paulo/g-06.jpg",
        "assets/img/portfolio/academia-paulo/g-07.jpg",
        "assets/img/portfolio/academia-paulo/g-08.jpg",
        "assets/img/portfolio/academia-paulo/g-09.jpg",
        "assets/img/portfolio/academia-paulo/g-10.jpg",
        "assets/img/portfolio/academia-paulo/g-11.jpg",
        "assets/img/portfolio/academia-paulo/g-12.jpg",
        "assets/img/portfolio/academia-paulo/g-13.jpg",
        "assets/img/portfolio/academia-paulo/g-14.jpg",
        "assets/img/portfolio/academia-paulo/g-15.jpg",
        "assets/img/portfolio/academia-paulo/g-16.jpg",
      ],
      floorPlans: [
        "assets/img/portfolio/academia-paulo/plan-1.jpg",
        "assets/img/portfolio/academia-paulo/plan-2.jpg",
      ],
    },
    {
      id: "apartamento-domingos",
      name: "Apartamento Brisa do Mar",
      category: "interiores",
      categoryLabel: "Interiores",
      location: "R. Sizenaldo Matos Bourguignon, Morro Atalaia, Guarapari - ES",
      year: 2026,
      area: "≈82 m²",
      cover: "assets/img/portfolio/apartamento-domingos/cover.jpg",
      description:
        "Reforma completa de apartamento de praia com vista para o mar, marcenaria em tom azul na cozinha integrada, varanda com deck de madeira e suíte com vista. Planta otimizada com dois quartos e área de serviço independente.",
      gallery: [
        "assets/img/portfolio/apartamento-domingos/g-01.jpg",
        "assets/img/portfolio/apartamento-domingos/g-02.jpg",
        "assets/img/portfolio/apartamento-domingos/g-03.jpg",
        "assets/img/portfolio/apartamento-domingos/g-04.jpg",
        "assets/img/portfolio/apartamento-domingos/g-05.jpg",
        "assets/img/portfolio/apartamento-domingos/g-06.jpg",
        "assets/img/portfolio/apartamento-domingos/g-07.jpg",
        "assets/img/portfolio/apartamento-domingos/g-08.jpg",
        "assets/img/portfolio/apartamento-domingos/g-09.jpg",
        "assets/img/portfolio/apartamento-domingos/g-10.jpg",
        "assets/img/portfolio/apartamento-domingos/g-11.jpg",
        "assets/img/portfolio/apartamento-domingos/g-12.jpg",
        "assets/img/portfolio/apartamento-domingos/g-13.jpg",
        "assets/img/portfolio/apartamento-domingos/g-14.jpg",
        "assets/img/portfolio/apartamento-domingos/g-15.jpg",
        "assets/img/portfolio/apartamento-domingos/g-16.jpg",
        "assets/img/portfolio/apartamento-domingos/g-17.jpg",
        "assets/img/portfolio/apartamento-domingos/g-18.jpg",
      ],
      floorPlans: [
        "assets/img/portfolio/apartamento-domingos/plan-1.jpg",
      ],
    },
    {
      id: "restaurante-canecao",
      name: "Restaurante e Choperia Canecão",
      category: "comercial",
      categoryLabel: "Comercial",
      location: "Guarapari - ES",
      year: 2024,
      area: "≈285 m² (pavimento térreo - estimativa)",
      cover: "assets/img/portfolio/restaurante-canecao/cover.jpg",
      description:
        "Restaurante e choperia de esquina com fachada em tijolo aparente, madeira e telhado cerâmico. Salão interno com pé-direito duplo, bar central, cozinha industrial e área de convivência com telões para eventos esportivos.",
      gallery: [
        "assets/img/portfolio/restaurante-canecao/g-01.jpg",
        "assets/img/portfolio/restaurante-canecao/g-02.jpg",
        "assets/img/portfolio/restaurante-canecao/g-03.jpg",
        "assets/img/portfolio/restaurante-canecao/g-04.jpg",
        "assets/img/portfolio/restaurante-canecao/g-05.jpg",
        "assets/img/portfolio/restaurante-canecao/g-06.jpg",
        "assets/img/portfolio/restaurante-canecao/g-07.jpg",
        "assets/img/portfolio/restaurante-canecao/g-08.jpg",
        "assets/img/portfolio/restaurante-canecao/g-09.jpg",
        "assets/img/portfolio/restaurante-canecao/g-10.jpg",
        "assets/img/portfolio/restaurante-canecao/g-11.jpg",
        "assets/img/portfolio/restaurante-canecao/g-12.jpg",
        "assets/img/portfolio/restaurante-canecao/g-13.jpg",
        "assets/img/portfolio/restaurante-canecao/g-14.jpg",
        "assets/img/portfolio/restaurante-canecao/g-15.jpg",
      ],
      floorPlans: [
        "assets/img/portfolio/restaurante-canecao/plan-1.jpg",
      ],
    },
    {
      id: "apartamento-elci",
      name: "Apartamento Lumière Blanche",
      category: "interiores",
      categoryLabel: "Interiores",
      location: "Guarapari - ES",
      year: 2025,
      area: "A confirmar",
      cover: "assets/img/portfolio/apartamento-elci/cover.jpg",
      description:
        "Projeto de interiores completo para apartamento residencial, com boiserie clássica nas paredes, cozinha em tom cinza com ilha central e sala de estar/jantar em paleta neutra, do lavabo à área de serviço.",
      gallery: [
        "assets/img/portfolio/apartamento-elci/g-01.jpg",
        "assets/img/portfolio/apartamento-elci/g-02.jpg",
        "assets/img/portfolio/apartamento-elci/g-03.jpg",
        "assets/img/portfolio/apartamento-elci/g-04.jpg",
        "assets/img/portfolio/apartamento-elci/g-05.jpg",
        "assets/img/portfolio/apartamento-elci/g-06.jpg",
        "assets/img/portfolio/apartamento-elci/g-07.jpg",
        "assets/img/portfolio/apartamento-elci/g-08.jpg",
        "assets/img/portfolio/apartamento-elci/g-09.jpg",
        "assets/img/portfolio/apartamento-elci/g-10.jpg",
        "assets/img/portfolio/apartamento-elci/g-11.jpg",
        "assets/img/portfolio/apartamento-elci/g-12.jpg",
        "assets/img/portfolio/apartamento-elci/g-13.jpg",
        "assets/img/portfolio/apartamento-elci/g-14.jpg",
        "assets/img/portfolio/apartamento-elci/g-15.jpg",
        "assets/img/portfolio/apartamento-elci/g-16.jpg",
        "assets/img/portfolio/apartamento-elci/g-17.jpg",
        "assets/img/portfolio/apartamento-elci/g-18.jpg",
        "assets/img/portfolio/apartamento-elci/g-19.jpg",
      ],
      floorPlans: [],
    },
  ],

  // ---------------------------------------------------------------
  // CONTATO
  // ---------------------------------------------------------------
  contact: {
    address: "Grande Vitória/ES",
    phone: "+55 (27) 99883-2205",
    email: "cottararquitetura@gmail.com",
    instagram: "https://www.instagram.com/cottararquitetura",
    linkedin: "https://www.linkedin.com/in/jvhc/",
    // Gerado a partir do link do Google Maps compartilhado (Vila Velha/ES),
    // convertido para o formato de embed via iframe.
    mapEmbedUrl: "https://www.google.com/maps?q=-20.3477818,-40.2949184&z=13&output=embed",
  },

  // ---------------------------------------------------------------
  // ENVIO DO FORMULÁRIO DE CONTATO (EmailJS - emailjs.com)
  // ---------------------------------------------------------------
  emailjs: {
    publicKey: "J6iCRADfnzig5i0Uu",
    serviceId: "Cottar-Arquitetura",
    templateId: "template_sifzshr",
  },

  // ---------------------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------------------
  footer: {
    year: new Date().getFullYear(),
    tagline: "Arquitetura autoral, projetos atemporais.",
  },
};
