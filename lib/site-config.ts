export const siteConfig = {
  name: 'Aerodev',
  description: 'Personal space where I share my journey of building web applications, learning new technologies, and documenting the process.',
  tagline: 'Thoughts, Projects & Experiments',
  author: 'Gading Satrio',
  email: 'hello@aerodev.id',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aerodev.id',
  ogImage: 'https://aerodev.id/og-image.png',
  
  // Founder information (shown in About page)
  founder: {
    name: 'Gading Satrio',
    role: 'Founder & Developer',
    bio: 'IT student who loves building things for the web. Currently exploring modern web technologies and sharing what I learn along the way.',
    image: '/images/founder.jpg', // TODO: Add your photo
  },
  
  // Social links
  links: {
    instagram: 'https://instagram.com/aerodev.id',
    linkedin: 'https://linkedin.com/in/gadingsatrio',
    threads: 'https://threads.net/@aerodev.id',
    github: 'https://github.com/aerodev-id',
  },
  
  // Contact information
  contact: {
    email: 'hello@aerodev.id',
    whatsapp: '+62896540617718',
  },
  
  // Content categories for the hub
  contentTypes: [
    { id: 'journal', name: 'Journal', icon: '📝', description: 'Personal thoughts and reflections' },
    { id: 'articles', name: 'Articles', icon: '📚', description: 'In-depth explorations and tutorials' },
    { id: 'projects', name: 'Projects', icon: '🚀', description: 'Things I\'ve built and learned from' },
    { id: 'experiments', name: 'Experiments', icon: '🧪', description: 'Creative explorations and prototypes' },
  ],
  
  // Newsletter configuration
  newsletter: {
    provider: 'convertkit',
    action: '/api/newsletter',
  },
}

export type SiteConfig = typeof siteConfig
