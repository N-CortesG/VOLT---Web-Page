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
    linksTitle: 'Enlaces Rapidos',
    contactTitle: 'Contáctanos',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    location: 'Cali, Colombia',
    newsletter: 'Únete a nuestras redes y mantente actualizado con las últimas novedades.',
    quoteNow: 'Solicitar cotización',
    terms: 'Términos y condiciones',
    privacy: 'Privacidad',
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

  // 🔽 Sección contact

  contact: {
    title: 'Contáctanos',
    subtitle: 'Estamos aquí para ayudarte a comenzar tu transición solar.',
    title2: 'Solicita tu cotización',
    description:
      'Rellena el formulario y uno de nuestros asesores te contactará a través de WhatsApp para brindarte atención personalizada.',
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: '¿En qué podemos ayudarte?',
      submit: 'Solicitar cotización',
      success: 'Tu mensaje ha sido enviado. Te contactaremos pronto.',
      error: 'Hubo un error al enviar tu mensaje. Inténtalo nuevamente.',
      termsError: 'Debes aceptar los términos y condiciones para continuar.',
      acceptation: 'Acepto los',
    },
    info: {
      heading: '¿Prefieres atención inmediata? Escríbenos por WhatsApp',
      description:
        '¿Tienes dudas, preguntas o deseas atención más rápida? Nuestro equipo está disponible vía WhatsApp para brindarte una atención ágil y personalizada.',
      submit: 'Enviar mensaje',
      phone: 'Llámanos:',
      hours: 'Horario de atención',
      hoursDetail: 'Lunes a viernes: 8:00 a.m. - 6:00 p.m. / Sábados: 9:00 a.m. - 1:00 p.m.',
      questions: '¿Tienes preguntas? Tenemos respuestas',
    },
    modal: {
      title: '¡Gracias por tu mensaje!',
      description: 'Te contactaremos muy pronto vía WhatsApp o correo electrónico.',
      button: 'Cerrar',
    },
  },

  // 🔽 Sección terminos y condiciones

  terms: {
    title: 'Términos y Condiciones de Uso',
    updated: 'Última actualización:',
    content: 'Contenido',
    intro:
      'Este sitio web es operado por Volt Solar Energy. Al acceder o utilizar nuestra plataforma web, usted acepta los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no continuar con el uso del sitio.',
    sections: [
      {
        heading: 'Identificación del responsable',
        text: 'Volt Solar Energy es una empresa especializada en soluciones de energía solar fotovoltaica, registrada en Colombia. Puede contactarnos a través del correo voltsolarcol@gmail.com.',
      },
      {
        heading: 'Objeto del sitio',
        text: 'El objetivo de este sitio web es ofrecer información sobre nuestros servicios, permitir la solicitud de asesorías, cotizaciones, contacto comercial y demás actividades relacionadas con el uso de energía solar.',
      },
      {
        heading: 'Uso adecuado del contenido',
        text: 'El usuario se compromete a hacer un uso adecuado, lícito y responsable de la información publicada. Se prohíbe copiar, distribuir, modificar o reutilizar los contenidos del sitio sin autorización expresa.',
      },
      {
        heading: 'Propiedad intelectual',
        text: 'Todo el contenido de este sitio web, incluyendo textos, logotipos, imágenes, gráficos y diseños, son propiedad exclusiva de Volt Solar Energy o sus proveedores y están protegidos por la legislación nacional e internacional sobre derechos de autor y propiedad industrial.',
      },
      {
        heading: 'Responsabilidad limitada',
        text: 'Volt Solar Energy no se responsabiliza por daños derivados del mal uso del sitio, interrupciones del servicio, errores de contenido o enlaces a sitios externos.',
      },
      {
        heading: 'Enlaces a terceros',
        text: 'Este sitio puede contener enlaces a sitios de terceros sobre los cuales no tenemos control. No nos hacemos responsables del contenido, prácticas o políticas de privacidad de estos sitios.',
      },
      {
        heading: 'Modificaciones',
        text: 'Volt Solar Energy se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Se recomienda revisar esta página periódicamente para estar al tanto de los cambios.',
      },
      {
        heading: 'Legislación aplicable',
        text: 'Este sitio opera bajo la legislación vigente de la República de Colombia. Cualquier controversia derivada del uso del sitio será resuelta bajo las leyes colombianas.',
      },
    ],
  },

  // 🔽 Sección privacy

  privacy: {
    title: 'Política de Privacidad',
    updated: 'Última actualización:',
    content: 'Contenido',
    intro:
      'En cumplimiento de la Ley 1581 de 2012 de Protección de Datos Personales y demás normas concordantes, Volt Solar Energy informa su política de tratamiento de datos personales, aplicable a todos los usuarios que naveguen o proporcionen información a través de este sitio web.',
    sections: [
      {
        heading: 'Responsable del tratamiento',
        text: 'Volt Solar Energy\nCorreo electrónico: voltsolarcol@gmail.com\nWhatsApp: +57 322 530 9005',
      },
      {
        heading: 'Datos recolectados',
        text: 'A través de nuestros formularios, redes y canales de atención recolectamos: nombre, correo electrónico, número de contacto, ciudad, consumo energético estimado y cualquier otra información proporcionada voluntariamente.',
      },
      {
        heading: 'Finalidad del tratamiento',
        text: 'Los datos personales serán utilizados para las siguientes finalidades:',
        list: [
          'Brindar asesoría técnica y comercial en soluciones de energía solar',
          'Enviar cotizaciones, propuestas y material informativo',
          'Gestionar comunicaciones a través de correo electrónico, WhatsApp o llamada',
          'Enviar campañas publicitarias relacionadas con nuestros servicios',
          'Analizar el comportamiento de navegación mediante herramientas de análisis y cookies',
        ],
      },
      {
        heading: 'Derechos del titular',
        text: 'Como titular de los datos, usted tiene derecho a:',
        list: [
          'Conocer, actualizar y rectificar su información',
          'Solicitar la supresión o revocar la autorización otorgada',
          'Solicitar prueba del consentimiento otorgado',
          'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)',
        ],
      },
      {
        heading: 'Canales de atención',
        text: 'Puede escribir al correo voltsolarcol@gmail.com indicando su nombre completo y tipo de solicitud. Responderemos en un plazo no mayor a 15 días hábiles.',
      },
      {
        heading: 'Transferencia de datos',
        text: 'Volt Solar Energy puede compartir información con plataformas tecnológicas como Meta, WhatsApp Cloud API o servicios en la nube, exclusivamente para finalidades autorizadas y bajo estándares de protección adecuados.',
      },
      {
        heading: 'Uso de cookies',
        text: 'Utilizamos cookies y herramientas de analítica para mejorar su experiencia de navegación. Al usar este sitio, usted acepta su uso. Puede configurar su navegador para bloquearlas si lo prefiere.',
      },
      {
        heading: 'Vigencia y cambios',
        text: 'Esta política entra en vigencia a partir de su publicación y puede ser modificada sin previo aviso. Las actualizaciones estarán disponibles en esta misma página.',
      },
    ],
  },
};

export default es;
