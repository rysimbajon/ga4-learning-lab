const productMap = {
  adv160: { id: "ADV160", name: "ADV160", category: "Motorcycle", price: 164000, description: "A sample product page for practicing GA4 item-level tracking." },
  iphone15pro: { id: "IPHONE15PRO", name: "iPhone 15 Pro", category: "Smartphone", price: 65000, description: "A sample smartphone product for analytics exercises." },
  "tp-link-ax3000": { id: "TP-LINK-AX3000", name: "TP-Link AX3000", category: "Networking", price: 4500, description: "A sample networking product for analytics exercises." },
};

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = productMap[id];

  if (!product) return <div className="container page"><h1>Product not found</h1></div>;

  return (
    <div className="container page">
      <a className="back" href="/products">← Back to products</a>
      <section className="product-detail">
        <div className="product-image large">{product.name.slice(0, 1)}</div>
        <div>
          <span className="tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price">₱{product.price.toLocaleString()}</p>
          <p>{product.description}</p>
          <button className="button primary">Add to Cart</button>
        </div>
      </section>
    </div>
  );
}