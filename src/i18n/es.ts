import { Home } from 'lucide-astro';

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
    whatsapp: 'Whatsapp',
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
            'Reduce tu factura eléctrica hasta en un 90% con energía solar de última generación.',
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
      paragraph: `Volt Solar Energy nace con el propósito de transformar la forma en que hogares y empresas acceden a la energía. 
  Vimos la necesidad urgente de soluciones sostenibles y decidimos actuar: unir ingeniería, tecnología y conciencia ambiental. 
  Desde nuestros primeros proyectos, nos enfocamos en ofrecer instalaciones personalizadas, con equipos de calidad y acompañamiento total. 
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
  },
};

export default es;
