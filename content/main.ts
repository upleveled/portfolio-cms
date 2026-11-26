export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio' as const,
      text: 'Portfolio',
    },
    heading: "I'm Paco Cu, and I create",
    image: '/img/hero.jpeg',
    secondButton: {
      icon: 'whatsapp',
      link: '/#about' as const,
      text: 'About me',
    },
    social: {
      facebook: { link: 'https://facebook.com' as const, show: true },
      instagram: { link: 'https://instagram.com' as const, show: true },
      linkedin: { link: 'https://linkedin.com' as const, show: true },
    },
    typed: [
      { text: 'fast websites.' },
      { text: 'beautiful logos.' },
      { text: 'great experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/about.jpeg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi, sit amet consequat leo. Integer non dolor non elit sodales consequat. Integer tempor sollicitudin massa, vel sollicitudin ante dictum eu.\n',
  },
  features: [
    {
      icon: 'monitor-screenshot',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Logo Design',
    },
    {
      icon: 'xml',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Web Development',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-1.jpeg',
        title: 'ShopoShopy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-2.jpeg',
        title: 'LogoLogy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-3.jpeg',
        title: 'SitoSity',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-4.jpeg',
        title: 'DrawoDrawy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-5.jpeg',
        title: 'PagoPagy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-6.jpeg',
        title: 'UIoUXy',
      },
    ] as const,
    title: 'My work',
  },
  footer: { text: '© John Doe' },
};
