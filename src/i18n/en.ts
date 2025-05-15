import { Projector } from 'lucide-astro';
import Faq from 'src/pages/[lang]/faq.astro';
import Projects from 'src/pages/[lang]/projects.astro';

const en = {
  seo: {
    title: 'VOLT Solar Energy | Photovoltaic Solar Energy in Colombia',
    description:
      'Design, installation and maintenance of customized solar systems for homes, businesses, and industries. Save energy with cutting-edge green technology.',
    keywords:
      'solar panels, solar energy, energy efficiency, photovoltaic, solar installation Colombia',
    ogSiteName: 'VOLT Solar Energy',
    twitterHandle: '@volt_solar',
    locale: 'en_US',
    url: 'https://voltsolarcol.com/en/',
  },
  header: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    projects: 'Projects',
    blog: 'Blog',
    faq: 'FAQ',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
  },
  footer: {
    linksTitle: 'Links',
    contactTitle: 'Contact',
    followUs: 'Follow us',
    rights: 'All rights reserved.',
    location: 'Cali, Colombia',
    newsletter: 'Join our networks and stay updated with the latest news.',
    quoteNow: 'Get a quote',
    description:
      'Volt Solar Energy drives a sustainable future with innovative solar solutions for homes and businesses.',
  },
  comingSoon: {
    title: 'This page is not available',
    message: 'We are working to improve this section. It will be available soon.',
    buttonText: 'Back to home',
  },

  // 🔽 Sección Not Found 404
  notFound: {
    title: 'Page not found',
    description:
      'Sorry, the page you are looking for doesn’t exist or has been moved. But don’t worry, you can still explore our site and discover how to transform your world with solar energy.',
    cta: 'Return to homepage',
  },

  // 🔽 Sección index (página principal)
  index: {
    hero: {
      title: 'Solar energy made for you',
      subtitle: 'Save more with clean, smart, and custom solutions.',
      cta: 'Get a quote',
    },
    benefits: {
      title: 'Why Choose Volt Solar Energy?',
      items: [
        {
          title: 'Guaranteed Savings',
          description: 'Cut your electricity bill by up to 100% with next-gen solar technology.',
        },
        {
          title: 'Tailored Solutions',
          description: 'We design and install systems based on your usage, space, and budget.',
        },
        {
          title: 'Expert Support',
          description:
            'Certified technicians guide you through the entire process: design, legalization, and monitoring.',
        },
        {
          title: 'Reliable Technology',
          description:
            'We work with TIER 1 panels and inverters: Huawei, Solis, Growatt, Trina Solar and more.',
        },
      ],
    },
    testimonials: {
      title: 'Clients Who Trust Us',
      items: [
        {
          name: 'Juan Rodríguez',
          feedback:
            'I noticed the difference right away. The installation was quick and the team was very attentive throughout.',
        },
        {
          name: 'Laura Méndez',
          feedback:
            'Excellent service. They explained every detail and now I fully understand how to use solar energy efficiently.',
        },
        {
          name: 'Carlos Torres',
          feedback:
            'The savings are real and noticeable. I recommend Volt to anyone looking for a professional and effective solution.',
        },
        {
          name: 'Andrea Salazar',
          feedback:
            'The whole process was clear and transparent. They gained my trust from the first contact.',
        },
        {
          name: 'Felipe Castro',
          feedback:
            'They helped me understand my energy usage and designed the perfect solution for my home.',
        },
        {
          name: 'Natalia López',
          feedback:
            'What I liked most was the guidance. They were always available to answer my questions.',
        },
      ],
    },
  },

  // 🔽 Sección about
  about: {
    history: {
      title: 'Our History',
      subtitle: 'Committed to a sustainable future',
      paragraph: `Volt Solar Energy was born with the purpose of transforming the way homes and businesses access energy.
    We identified the urgent need for sustainable solutions and decided to act by uniting engineering, technology, and environmental awareness.
    From our very first projects, we focused on delivering customized installations with high-quality equipment and continuous support.
    Today, we are a brand that stands for trust, innovation, and commitment to the planet.`,
    },
    identity: {
      title: 'Our Essence',
      mission: {
        tag: 'MISSION',
        title: 'We Drive the Future of Solar Energy',
        description:
          'We design and implement solar energy solutions for the residential, commercial, and industrial sectors, promoting a sustainable energy transition. We are committed to delivering innovative, high-quality, and customized projects that maximize value for our clients.',
      },
      vision: {
        tag: 'VISION',
        title: 'We Lead Energy Innovation in Colombia',
        description:
          'We drive the transition toward a sustainable energy model through intelligent solar solutions, expanding our presence in the residential, commercial, and industrial sectors nationwide.',
      },
      values: {
        tag: 'VALUES',
        title: 'What Defines Us',
        items: [
          'Commitment to the environment',
          'Technical and human excellence',
          'Transparency in every project',
          'Continuous innovation',
          'Customer-oriented approach',
        ],
      },
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'Real people, true passion for clean energy.',
      members: [
        {
          name: 'Steven Aldana García',
          role: 'Engineering and Operations Director',
          bio: 'Specialist in renewable energy and automation. Leads all technical and installation processes with a focus on efficiency and sustainability.',
          cita: 'Each installation is a chance to apply technology with purpose. Our commitment is to quality and the planet.',
        },
        {
          name: 'Isabella Rojas Samboni',
          role: 'Commercial Director',
          bio: 'Expert in commercial relationships and customer service. Connects people with high-impact solar solutions.',
          cita: 'We don’t just sell panels — we offer trust, guidance, and the opportunity to transform how energy is used.',
        },
        {
          name: 'Nicolás Cortés Gómez',
          role: 'General Director',
          bio: 'In charge of strategic direction and business vision. His leadership drives the company’s innovation and growth.',
          cita: 'We believe the energy transition is possible if we work with passion, purpose, and technology. Volt was born from that commitment.',
        },
      ],
    },
    aboutUs: {
      title: 'About Us',
      paragraph: `At Volt Solar Energy, we are a team of mechatronics engineers from Universidad Autónoma de Occidente, specialized in renewable energy and energy efficiency. Our academic background and professional experience allow us to design and implement intelligent solutions that optimize clean energy usage in residential, commercial, and industrial environments.
    We firmly believe that the energy transition is achievable when cutting-edge technology is combined with a responsible, customer-centered approach. That’s why every project we deliver is designed to maximize savings, reduce environmental impact, and create long-term sustainable value.
    Our passion for innovation and automation is reflected in safe, efficient installations that meet the highest quality standards. More than just installing solar panels, we deliver trust, commitment, and measurable results.`,
      tagline: 'More than solar energy, a way to change your life.',
    },
  },

  // 🔽 Sección services
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive solar solutions for homes, businesses, and industries.',
    list: [
      {
        title: 'Solar Panel Installation',
        description:
          'We deliver professional and safe solar system installations tailored to your space, energy usage, and power needs.',
      },
      {
        title: 'Energy Efficiency Consulting',
        description:
          'We help you understand and optimize your electricity use through analysis, technical diagnostics, and personalized recommendations.',
      },
      {
        title: 'Custom System Design',
        description:
          'Every project is uniquely engineered to meet your requirements, combining automation and regulatory standards to ensure optimal performance.',
      },
      {
        title: 'Solar System Maintenance',
        description:
          'We offer preventive and corrective maintenance plans to ensure safe, efficient, and long-lasting solar system performance.',
      },
      {
        title: 'Certified Equipment',
        description:
          'We work with TIER 1 certified technology: Huawei, Solis, Growatt, Trina Solar, JA Solar, among others.',
      },
    ],
    whyChooseUs: {
      badge: 'Why Choose Us!',
      title: 'Complete solar systems for homes and businesses',
      description:
        'Our highly trained and dedicated team works tirelessly to deliver innovative solutions that exceed client expectations. We value transparency and open communication at every stage, ensuring effective collaboration and outstanding results.',
      benefits: [
        {
          label: 'Quality',
          value: 'Service',
          icon: 'Check',
        },
        {
          label: 'Experts',
          value: 'Engineers',
          icon: 'Users2',
        },
        {
          label: 'Free',
          value: 'Consultation',
          icon: 'Handshake',
        },
        {
          label: 'Client',
          value: 'Support',
          icon: 'Headphones',
        },
      ],
    },
  },
};

export default en;
