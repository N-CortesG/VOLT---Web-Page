import { Home } from 'lucide-astro';
import Faq from 'src/pages/[lang]/faq.astro';

const es = {
  seo: {
    title: 'VOLT Solar Energy | Energía Solar Fotovoltaica en Colombia',
    description:
      'Diseño, instalación y mantenimiento de sistemas solares personalizados para hogares, negocios e industrias. Ahorra energía con tecnología verde de última generación.',
    keywords:
      'paneles solares, energía solar, eficiencia energética, fotovoltaica, instalación solar Colombia',
    ogSiteName: 'VOLT Solar Energy',
    twitterHandle: '@volt_solar',
    locale: 'es_CO',
    url: 'https://voltsolarcol.com/es/',
  },
  header: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    services: 'Servicios',
    contact: 'Contacto',
    projects: 'Proyectos',
    blog: 'Blog',
    faq: 'Preguntas Frecuentes',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
  },
  footer: {
    linksTitle: 'Enlaces',
    contactTitle: 'Contáctanos',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    location: 'Cali, Colombia',
    newsletter: 'Únete a nuestras redes y mantente actualizado con las últimas novedades.',
    quoteNow: 'Solicitar cotización',
    description:
      'Volt Solar Energy impulsa un futuro sostenible con soluciones solares innovadoras para hogares y negocios.',
  },
  comingSoon: {
    title: 'Esta página no está disponible',
    message: 'Estamos trabajando para mejorar esta sección. Estará disponible pronto.',
    buttonText: 'Volver al inicio',
  },

  // 🔽 Sección Not Found 404
  notFound: {
    title: 'Página no encontrada',
    description:
      'Lo sentimos, la página que estás buscando no existe o fue movida. Pero no te preocupes, aún puedes explorar nuestro sitio y descubrir cómo transformar tu mundo con energía solar.',
    cta: 'Volver al inicio',
  },

  // 🔽 Sección index (página principal)
  index: {
    hero: {
      title: 'Energía solar a tu medida',
      subtitle: 'Ahorra con soluciones limpias, eficientes y personalizadas.',
      cta: 'Cotiza ahora',
    },
    benefits: {
      title: '¿Por qué elegir Volt Solar Energy?',
      items: [
        {
          title: 'Ahorro garantizado',
          description:
            'Reduce tu factura eléctrica hasta en un 100% con energía solar de última generación.',
        },
        {
          title: 'Soluciones a medida',
          description:
            'Diseñamos e instalamos sistemas adaptados a tu consumo, espacio y presupuesto.',
        },
        {
          title: 'Soporte experto',
          description:
            'Equipo técnico certificado y acompañamiento en todo el proceso: diseño, legalización y monitoreo.',
        },
        {
          title: 'Tecnología confiable',
          description:
            'Trabajamos con paneles e inversores TIER 1: Huawei, Solis, Growatt, Trina Solar y más.',
        },
      ],
    },
    testimonials: {
      title: 'Clientes que ya confían en nosotros',
      items: [
        {
          name: 'Juan Rodríguez',
          feedback:
            'Desde el primer día noté la diferencia. La instalación fue rápida y el equipo estuvo muy atento en todo momento.',
        },
        {
          name: 'Laura Méndez',
          feedback:
            'Excelente servicio. Me explicaron cada detalle y ahora entiendo perfectamente cómo aprovechar la energía solar.',
        },
        {
          name: 'Carlos Torres',
          feedback:
            'El ahorro es real y visible. Recomiendo Volt a quienes buscan una solución profesional y eficiente.',
        },
        {
          name: 'Andrea Salazar',
          feedback:
            'Todo el proceso fue claro y transparente. Me dieron confianza desde el primer contacto.',
        },
        {
          name: 'Felipe Castro',
          feedback:
            'Me ayudaron a entender mi consumo energético y diseñaron una solución perfecta para mi hogar.',
        },
        {
          name: 'Natalia López',
          feedback:
            'Lo que más me gustó fue el acompañamiento. Siempre estuvieron disponibles para resolver mis dudas.',
        },
      ],
    },
  },

  // 🔽 Sección about
  about: {
    history: {
      title: 'Nuestra historia',
      subtitle: 'Comprometidos con un futuro sostenible',
      paragraph: `Volt Solar Energy nace con el propósito de transformar la manera en que hogares y empresas acceden a la energía. 
                  Identificamos la necesidad urgente de soluciones sostenibles y decidimos actuar: unir ingeniería, tecnología y conciencia ambiental. 
                  Desde nuestros primeros proyectos, nos enfocamos en ofrecer instalaciones personalizadas, con equipos de calidad y acompañamiento en todo momento. 
                  Hoy somos una marca que representa confianza, innovación y compromiso con el planeta.`,
    },
    identity: {
      title: 'Nuestra esencia',
      mission: {
        tag: 'MISIÓN',
        title: 'Impulsamos la energía solar del futuro',
        description:
          'Diseñamos e implementamos soluciones de energía solar fotovoltaica para los sectores residencial, comercial e industrial, promoviendo una transición energética sostenible. Nos comprometemos a entregar proyectos innovadores, de alta calidad y a la medida, maximizando el valor para nuestros clientes.',
      },
      vision: {
        tag: 'VISIÓN',
        title: 'Lideramos la innovación energética en Colombia',
        description:
          'Impulsamos la transición hacia un modelo energético sostenible mediante soluciones solares inteligentes, expandiendo nuestra presencia en los sectores residencial, comercial e industrial a nivel nacional.',
      },
      values: {
        tag: 'VALORES',
        title: 'Lo que nos define',
        items: [
          'Compromiso con el medio ambiente',
          'Excelencia técnica y humana',
          'Transparencia en cada proyecto',
          'Innovación continua',
          'Orientación al cliente',
        ],
      },
    },
    team: {
      title: 'Conoce a nuestro equipo',
      subtitle: 'Personas reales, pasión verdadera por la energía limpia.',
      members: [
        {
          name: 'Steven Aldana García',
          role: 'Director de Ingeniería y Operaciones',
          bio: 'Especialista en energías renovables y automatización. Lidera los procesos técnicos y de instalación con enfoque en eficiencia y sostenibilidad.',
          cita: 'Cada instalación es una oportunidad para aplicar tecnología con propósito. Nuestro compromiso es con la calidad y el planeta.',
        },
        {
          name: 'Isabella Rojas Samboni',
          role: 'Directora Comercial',
          bio: 'Experta en relaciones comerciales y atención al cliente. Conecta a las personas con soluciones solares de alto impacto.',
          cita: 'No vendemos paneles, brindamos confianza, acompañamiento y la posibilidad de transformar la forma en que usamos la energía.',
        },
        {
          name: 'Nicolás Cortés Gómez',
          role: 'Director General',
          bio: 'Encargado de la dirección estratégica y la visión empresarial. Su liderazgo impulsa la innovación y el crecimiento de la compañía.',
          cita: 'Creemos que la transición energética es posible si trabajamos con pasión, propósito y tecnología. Volt nace de ese compromiso.',
        },
      ],
    },
    aboutUs: {
      title: 'Quiénes somos',
      paragraph: `En Volt Solar Energy somos un equipo de ingenieros mecatrónicos egresados de la Universidad Autónoma de Occidente, especializados en energías renovables y eficiencia energética. Nuestra formación y experiencia nos permiten diseñar e implementar soluciones inteligentes que optimizan el uso de energía limpia en hogares, empresas e industrias.
      Creemos firmemente que la transición energética es posible cuando se combina tecnología de vanguardia con un enfoque responsable y personalizado. Por eso, cada uno de nuestros proyectos está pensado para maximizar el ahorro, reducir el impacto ambiental y generar valor sostenible a largo plazo.
      Nuestra pasión por la innovación y la automatización se traduce en instalaciones seguras, eficientes y alineadas con los más altos estándares de calidad. Más que ofrecer paneles solares, entregamos confianza, compromiso y resultados medibles.`,
      tagline: 'Más que energía solar, una forma de cambiar tu vida.',
    },
  },

  // 🔽 Sección services

  services: {
    title: 'Nuestros servicios',
    subtitle: 'Soluciones solares integrales para hogares, negocios e industrias.',
    list: [
      {
        title: 'Instalación de paneles solares',
        description:
          'Realizamos instalaciones profesionales y seguras de sistemas solares fotovoltaicos, adaptados a tu espacio, consumo y necesidades energéticas.',
      },
      {
        title: 'Asesoría en eficiencia energética',
        description:
          'Te ayudamos a entender y optimizar tu consumo eléctrico mediante análisis, diagnóstico técnico y recomendaciones personalizadas.',
      },
      {
        title: 'Diseño personalizado',
        description:
          'Cada proyecto se diseña a medida, combinando ingeniería, automatización y normativa local para maximizar el rendimiento del sistema.',
      },
      {
        title: 'Mantenimiento de SSFV',
        description:
          'Ofrecemos planes de mantenimiento preventivo y correctivo para asegurar el funcionamiento óptimo, seguro y duradero del sistema solar.',
      },
      {
        title: 'Equipos certificados',
        description:
          'Trabajamos con tecnología de alta calidad y certificación TIER 1: Huawei, Solis, Growatt, Trina Solar, JA Solar, entre otros.',
      },
    ],
    whyChooseUs: {
      badge: '¡Por qué elegirnos!',
      title: 'Sistemas solares comerciales y residenciales completos',
      description:
        'Nuestro equipo altamente capacitado y dedicado trabaja incansablemente para ofrecer soluciones innovadoras que superen las expectativas de nuestros clientes. Valoramos la transparencia y la comunicación abierta en cada etapa del proceso, asegurando una colaboración efectiva y resultados excepcionales.',
      benefits: [
        {
          label: 'Calidad',
          value: 'Servicio',
          icon: 'Check',
        },
        {
          label: 'Expertos',
          value: 'Ingenieros',
          icon: 'Users2',
        },
        {
          label: 'Gratis',
          value: 'Consulta',
          icon: 'Handshake',
        },
        {
          label: 'Cliente',
          value: 'Apoyo',
          icon: 'Headphones',
        },
      ],
    },
  },
};

export default es;
