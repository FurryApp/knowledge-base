import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Layout } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ReactNode } from 'react';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
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
          // banner={banner}
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
