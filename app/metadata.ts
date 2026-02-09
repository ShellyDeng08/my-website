import type { Metadata } from 'next'

const SITE_URL = 'https://my-website-alpha-swart.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Shelly Deng - Fullstack Engineer | React, Next.js, Vue.js',
  description:
    'Fullstack Engineer with 8+ years of experience building high-performance web applications at TikTok, Trip.com, and Blitz. Specializing in React, Vue.js, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Shelly Deng',
    'Fullstack Engineer',
    'Software Engineer',
    'React',
    'Vue.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'TikTok',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Los Angeles',
  ],
  authors: [{ name: 'Shelly Deng', url: SITE_URL }],
  creator: 'Shelly Deng',
  category: 'technology',

  // Canonical URL
  alternates: {
    canonical: '/',
  },

  // Search engine directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph — for Facebook, LinkedIn, etc.
  openGraph: {
    title: 'Shelly Deng - Fullstack Engineer',
    description:
      'Fullstack Engineer with 8+ years of experience building high-performance web applications at TikTok, Trip.com, and Blitz.',
    url: SITE_URL,
    siteName: 'Shelly Deng',
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X card
  twitter: {
    card: 'summary_large_image',
    title: 'Shelly Deng - Fullstack Engineer',
    description:
      'Fullstack Engineer with 8+ years of experience. Specializing in React, Next.js, Vue.js, TypeScript.',
  },
}
