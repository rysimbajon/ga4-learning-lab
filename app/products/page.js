"use client";

const products = [
  {
    id: "ADV160",
    name: "ADV160",
    category: "Motorcycle",
    price: 164000,
  },
  {
    id: "IPHONE15PRO",
    name: "iPhone 15 Pro",
    category: "Smartphone",
    price: 65000,
  },
  {
    id: "TP-LINK-AX3000",
    name: "TP-Link AX3000",
    category: "Networking",
    price: 4500,
  },
];

export default function Products() {

  function handleProductClick(product) {
    window.gtag("event", "select_item", {
      item_id: product.id,
      item_name: product.name,
      item_category: product.category,
      price: product.price,
    });
  }

  return (
    <div className="container page">
      <span className="eyebrow">PRODUCTS</span>

      <h1>Product Catalog</h1>

      <p className="muted">
        These products give us realistic data for GA4 ecommerce exercises.
      </p>

      <div className="grid three">

        {products.map((product) => (

          <article className="card product" key={product.id}>

            <div className="product-image">
              {product.name.slice(0, 1)}
            </div>

            <span className="tag">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <p>
              ₱{product.price.toLocaleString()}
            </p>

            <a
              className="button primary"
              href={`/products/${product.id.toLowerCase()}`}
              onClick={() => handleProductClick(product)}
            >
              View Product
            </a>

          </article>

        ))}

      </div>

      <section className="card search-card">

        <h2>Internal Search</h2>

        <form action="/products" method="get">

          <input
            name="q"
            placeholder="Search products..."
            aria-label="Search products"
          />

          <button
            className="button primary"
            type="submit"
          >
            Search
          </button>

        </form>

      </section>

      <section className="card">

        <h2>Download</h2>

        <p>
          Use this later to practice GA4 file download tracking.
        </p>

        <a
          className="button secondary"
          href="/brochure.txt"
          download
        >
          Download Brochure
        </a>

      </section>

    </div>
  );
}