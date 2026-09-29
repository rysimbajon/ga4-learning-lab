export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <span className="eyebrow">ANALYTICS SANDBOX</span>
        <h1>Learn GA4 by actually using it.</h1>
        <p>
          A simple website built for practicing Google Analytics 4,
          Google Tag Manager, events, parameters, data layers, and reporting.
        </p>
        <div className="actions">
          <a className="button primary" href="/products">Explore Products</a>
          <a className="button secondary" href="/contact">Contact Us</a>
        </div>
      </section>

      <section className="grid three">
        <article className="card">
          <h2>Events</h2>
          <p>Practice clicks, searches, downloads, form submissions, and custom events.</p>
        </article>
        <article className="card">
          <h2>Parameters</h2>
          <p>Send product, category, value, and other useful event parameters to GA4.</p>
        </article>
        <article className="card">
          <h2>Data Layer</h2>
          <p>Build a data layer and use it with Google Tag Manager.</p>
        </article>
      </section>
    </div>
  );
}