import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { metadata as customMetadata } from './metadata';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  ...customMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="warm" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'warm';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Shelly Deng',
                  url: 'https://my-website-alpha-swart.vercel.app',
                  description:
                    'Personal portfolio of Shelly Deng, a Fullstack Engineer with 8+ years of experience.',
                },
                {
                  '@type': 'Person',
                  name: 'Shelly Deng',
                  url: 'https://my-website-alpha-swart.vercel.app',
                  jobTitle: 'Fullstack Engineer',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Blitz',
                  },
                  sameAs: [
                    'https://github.com/ShellyDeng08',
                    'https://linkedin.com/in/xuelian-deng-21332b260/',
                  ],
                  knowsAbout: [
                    'React',
                    'Vue.js',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'Python',
                    'Golang',
                    'Server-Side Rendering',
                    'Full-Stack Development',
                    'Web Performance Optimization',
                  ],
                  email: 'mailto:xldeng0808@gmail.com',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
