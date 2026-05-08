
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tunong Baroh Outdoor Management | Event Organizer & Outbound Aceh',
    template: '%s | Tunong Baroh'
  },
  description: 'Tunong Baroh Outdoor Management Training menyediakan pelatihan berbasis alam, program pendidikan sekolah alam, outbound leadership, dan inisiatif lingkungan di Banda Aceh sejak 2006.',
  keywords: ['outbound aceh', 'event organizer banda aceh', 'sekolah alam aceh', 'pelatihan leadership aceh', 'penanaman mangrove aceh', 'outdoor management training', 'tunong baroh'],
  authors: [{ name: 'Tunong Baroh Team' }],
  creator: 'Tunong Baroh',
  publisher: 'Tunong Baroh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Tunong Baroh Outdoor Management | Event Organizer & Outbound Aceh',
    description: 'Solusi pelatihan outdoor, konservasi lingkungan, dan pengembangan karakter di Aceh.',
    url: 'https://tunongbaroh.id',
    siteName: 'Tunong Baroh',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tunong Baroh Outdoor Management',
    description: 'Event Organizer & Outbound Training berbasis alam di Aceh.',
  },
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
  verification: {
    // Ganti nilai di bawah ini dengan kode dari Google Search Console Anda jika sudah ada
    google: 'google-site-verification-placeholder',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://tunongbaroh.id" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
      </body>
    </html>
  );
}
