import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <body className={`${inter.className} antialiased`}>{children}</body>
         <title>NextJS Dashboard FullStack App</title>
         <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </html>
  );
}
