export const siteConfig = {
  name: 'AeroDev',
  description: 'Elevating Digital Experiences - Modern web development solutions for businesses',
  tagline: 'Elevating Digital Experiences',
  author: 'AeroDev Team',
  email: 'hello@aerodev.id',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aerodev.id',
  ogImage: 'https://aerodev.id/og-image.png',
  
  // Founder information (shown in About page)
  founder: {
    name: 'Your Name', // TODO: Update with your name
    role: 'Founder & Lead Developer',
    bio: 'IT student passionate about building modern web solutions that help businesses grow.',
    image: '/images/founder.jpg', // TODO: Add your photo
  },
  
  // Social links
  links: {
    instagram: 'https://instagram.com/aerodev', // TODO: Update
    linkedin: 'https://linkedin.com/company/aerodev', // TODO: Update
    threads: 'https://threads.net/@aerodev', // TODO: Update
    github: 'https://github.com/aerodev', // TODO: Update
  },
  
  // Contact information
  contact: {
    email: 'hello@aerodev.id',
    whatsapp: '+62xxx', // TODO: Update with your WhatsApp number
  },
  
  // Services offered
  services: [
    {
      id: 'web-apps',
      name: 'Web Applications',
      description: 'Lightning-fast web applications built with modern frameworks',
      icon: '⚡',
      features: ['Next.js & React', 'TypeScript', 'Responsive Design', 'API Integration'],
    },
    {
      id: 'landing-pages',
      name: 'Landing Pages',
      description: 'High-converting landing pages that drive results',
      icon: '📱',
      features: ['Custom Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration',
      icon: '🛒',
      features: ['Product Management', 'Payment Gateway', 'Admin Dashboard', 'Analytics'],
    },
    {
      id: 'custom',
      name: 'Custom Development',
      description: 'Tailored solutions for your unique business needs',
      icon: '🎨',
      features: ['Custom Features', 'Third-party Integration', 'Scalable Architecture', 'Ongoing Support'],
    },
  ],
  
  // Newsletter configuration
  newsletter: {
    provider: 'convertkit',
    action: '/api/newsletter',
  },
}

export type SiteConfig = typeof siteConfig
