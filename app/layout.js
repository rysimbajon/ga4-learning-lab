import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "GA4 Learning Lab",
  description: "A small website for learning Google Analytics 4 implementation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TTB3GN99D"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-1TTB3GN99D');
          `}
        </Script>
      </head>

      <body>
        <header className="header">
          <div className="container nav">
            <a className="logo" href="/">GA4 Learning Lab</a>

            <nav>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            GA4 Learning Lab · Analytics sandbox
          </div>
        </footer>
      </body>
    </html>
  );
}