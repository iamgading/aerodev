import { siteConfig } from '@/lib/site-config'

interface JsonLdProps {
  type?: 'WebSite' | 'BlogPosting' | 'Person'
  data?: any
}

export function JsonLd({ type = 'WebSite', data = {} }: JsonLdProps) {
  const generateSchema = () => {
    switch (type) {
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          author: {
            '@type': 'Person',
            name: siteConfig.author,
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }

      case 'BlogPosting':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.title,
          description: data.description,
          image: data.image || `${siteConfig.url}/og-image.png`,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Person',
            name: data.author || siteConfig.author,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/logo.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
          },
        }

      case 'Person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url,
          sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.github,
            siteConfig.links.linkedin,
          ],
        }

      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
    />
  )
}
