import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // Código para verificar el tema antes del montaje de React
  const setInitialTheme = `
    (function() {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', savedTheme);
    })();
  `;

  return (
    <html lang="en">
      <head>
        {/* Inyectamos el script antes de que React se cargue */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}