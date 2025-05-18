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
    linksTitle: 'Quick Links',
    contactTitle: 'Contact',
    followUs: 'Follow us',
    rights: 'All rights reserved.',
    location: 'Cali, Colombia',
    newsletter: 'Join our networks and stay updated with the latest news.',
    quoteNow: 'Get a quote',
    terms: 'Terms',
    privacy: 'Privacy',
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

  // 🔽 Sección contact

  contact: {
    title: 'Contact Us',
    subtitle: 'We’re here to help you start your solar transition.',
    title2: 'Request Your Quote',
    description:
      'Fill out the form and one of our advisors will contact you via WhatsApp to provide personalized assistance.',
    form: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      message: 'How can we help you?',
      submit: 'Request quote',
      success: 'Your message has been sent. We’ll contact you shortly.',
      error: 'There was an error sending your message. Please try again.',
      termsError: 'You must accept the terms and conditions to continue.',
      acceptation: 'I accept the',
    },
    info: {
      heading: 'Prefer immediate assistance? Message us on WhatsApp',
      description:
        'Have questions or need faster support? Our team is available on WhatsApp to provide quick and personalized assistance.',
      submit: 'Send message',
      phone: 'Call us:',
      hours: 'Business hours',
      hoursDetail: 'Monday to Friday: 8:00 a.m. – 6:00 p.m. / Saturday: 9:00 a.m. – 1:00 p.m.',
      questions: 'Have questions? We have answers',
    },
    modal: {
      title: 'Thank you for your message!',
      description: 'We’ll reach out to you soon via WhatsApp or email.',
      button: 'Close',
    },
  },

  // 🔽 Sección FAQ

  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know before making a smart decision',
    questions: [
      {
        question: 'What maintenance do solar systems require?',
        answer:
          'Solar photovoltaic systems require very little maintenance. We recommend cleaning the panels every 6 months to prevent dust or debris buildup, which can reduce efficiency. Additionally, we conduct annual inspections to check the inverter, structure, connections, and overall system to ensure optimal performance and safety.',
      },
      {
        question: 'How much money can I really save?',
        answer:
          'Savings depend on your current electricity usage, location, and system size. However, most of our clients reduce their electricity bills by 50% to 90%. In many cases, the investment pays for itself in 3 to 5 years and continues to generate positive returns for over 20 years. It also protects you from rising utility rates.',
      },
      {
        question: 'Are there legal or financial benefits?',
        answer:
          'Yes. In Colombia, installing a solar system gives you access to multiple incentives: up to 50% income tax deduction over 5 years, VAT exemption on solar equipment, accelerated depreciation, and priority in environmental licensing. You may also generate income by selling excess energy back to the grid (Net Metering).',
      },
      {
        question: 'Do solar panels work on cloudy days or at night?',
        answer:
          'Yes. Although performance is lower on cloudy days, panels still generate energy thanks to diffused sunlight. For uninterrupted power, we offer hybrid systems with batteries or grid-tied configurations, ensuring consistent energy even at night or in less sunny climates.',
      },
      {
        question: 'What is the lifespan of a solar system?',
        answer:
          'Solar panels typically last 25 to 30 years. Inverters usually last 10 to 15 years. We use only certified TIER 1 equipment to ensure long-term high performance. All systems include full warranty and technical support.',
      },
      {
        question: 'Can I monitor my solar system in real time?',
        answer:
          'Absolutely. All our systems include real-time monitoring via mobile or desktop, so you can see how much energy you’re producing, consuming, and saving — giving you full control over your solar power.',
      },
      {
        question: 'What happens if I move or sell my property?',
        answer:
          'Your solar system adds value to your property. If you decide to move, you can include the system in the sale or contact us to explore relocation options.',
      },
      {
        question: 'How long does the full installation take?',
        answer:
          'From design to activation, the process typically takes 5 to 15 business days depending on the project size. At VOLT Solar Energy, we handle every step: assessment, design, legal registration, installation, and post-installation monitoring.',
      },
    ],
  },

  // 🔽 Sección blog

  // i18n/en.ts
  blog: {
    title: 'Energy Blog',
    subtitle: 'Explore ideas, tips and news about solar energy',
    readMore: 'Read more',
  },

  // 🔽 Sección terminos y condiciones

  terms: {
    title: 'Terms and Conditions of Use',
    updated: 'Last updated:',
    content: 'Content',
    intro:
      'This website is operated by Volt Solar Energy. By accessing or using our platform, you accept these Terms and Conditions. If you do not agree with any part of these terms, we recommend that you do not continue using the site.',
    sections: [
      {
        heading: 'Responsible party',
        text: 'Volt Solar Energy is a company specialized in photovoltaic solar energy solutions, registered in Colombia. You can contact us at voltsolarcol@gmail.com.',
      },
      {
        heading: 'Purpose of the site',
        text: 'This website is intended to provide information about our services, allow users to request consultations, quotes, commercial contact, and other activities related to the use of solar energy.',
      },
      {
        heading: 'Appropriate use of content',
        text: 'Users agree to use the published information appropriately, legally, and responsibly. It is prohibited to copy, distribute, modify, or reuse site content without express authorization.',
      },
      {
        heading: 'Intellectual property',
        text: 'All content on this website, including texts, logos, images, graphics, and designs, is the exclusive property of Volt Solar Energy or its providers and is protected under national and international copyright and intellectual property laws.',
      },
      {
        heading: 'Limited liability',
        text: 'Volt Solar Energy is not responsible for damages arising from misuse of the site, service interruptions, content errors, or external links.',
      },
      {
        heading: 'Third-party links',
        text: 'This site may contain links to third-party sites over which we have no control. We are not responsible for the content, practices, or privacy policies of such sites.',
      },
      {
        heading: 'Modifications',
        text: 'Volt Solar Energy reserves the right to modify these Terms and Conditions at any time. We recommend checking this page periodically to stay informed about changes.',
      },
      {
        heading: 'Applicable law',
        text: 'This site operates under the laws of the Republic of Colombia. Any dispute arising from the use of the site will be resolved in accordance with Colombian law.',
      },
    ],
  },

  // 🔽 Sección privacidad

  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated:',
    content: 'Content',
    intro:
      'In compliance with Colombian Law 1581 of 2012 on Personal Data Protection and related regulations, Volt Solar Energy shares its data processing policy, applicable to all users who browse or provide information through this website.',
    sections: [
      {
        heading: 'Data Controller',
        text: 'Volt Solar Energy\nEmail: voltsolarcol@gmail.com\nWhatsApp: +57 322 530 9005',
      },
      {
        heading: 'Data Collected',
        text: 'We collect name, email, phone number, city, estimated energy usage, and any other information voluntarily provided via forms, networks, or communication channels.',
      },
      {
        heading: 'Purpose of Processing',
        text: 'Personal data will be used for the following purposes:',
        list: [
          'Provide technical and commercial advice on solar energy solutions',
          'Send quotes, proposals, and informative material',
          'Manage communications via email, WhatsApp, or phone call',
          'Send promotional campaigns related to our services',
          'Analyze browsing behavior through analytics tools and cookies',
        ],
      },
      {
        heading: 'Rights of the Data Subject',
        text: 'As the data subject, you have the right to:',
        list: [
          'Access, update, and correct your personal data',
          'Request deletion or revoke consent',
          'Request proof of authorization',
          'File complaints with the Superintendence of Industry and Commerce (SIC)',
        ],
      },
      {
        heading: 'Contact Channels',
        text: 'You may contact us at voltsolarcol@gmail.com, including your full name and request. We will respond within a maximum of 15 business days.',
      },
      {
        heading: 'Data Sharing',
        text: 'Volt Solar Energy may share information with technology platforms such as Meta, WhatsApp Cloud API, or cloud services, exclusively for authorized purposes and under appropriate security standards.',
      },
      {
        heading: 'Use of Cookies',
        text: 'We use cookies and analytics tools to improve your browsing experience. By using this site, you accept this use. You may configure your browser to block them if preferred.',
      },
      {
        heading: 'Validity and Changes',
        text: 'This policy is effective from its publication and may be modified without prior notice. Updates will be published on this page.',
      },
    ],
  },
};

export default en;
