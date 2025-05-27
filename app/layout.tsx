import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Layout } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | BARQ! Knowledge Base',
    default: 'BARQ! Knowledge Base',
  },
  description: 'Comprehensive knowledge base for BARQ! - guides, tutorials, and documentation',
  keywords: ['BARQ', 'knowledge base', 'documentation', 'guides'],
  authors: [{ name: 'BARQ! Team' }],
  creator: 'BARQ! Team',
  metadataBase: new URL('https://knowledge.barq.app'), // Update with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BARQ! Knowledge Base',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 25,
          saturation: 100,
          lightness: {
            light: 50,
            dark: 52,
          },
        }}
      >
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={<Navbar />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/FurryApp/knowledge-base"
          footer={<Footer />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
