import "./globals.css";

export const metadata = {
  title: "GA4 Learning Lab",
  description: "A small website for learning Google Analytics 4 implementation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
          <div className="container">GA4 Learning Lab · Analytics sandbox</div>
        </footer>
      </body>
    </html>
  );
}