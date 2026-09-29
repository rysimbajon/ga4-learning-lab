export default function Contact() {
  return (
    <div className="container page narrow">
      <span className="eyebrow">CONTACT</span>
      <h1>Contact Us</h1>
      <p className="muted">This form will later be used to practice form_start and generate_lead.</p>

      <form className="form">
        <label>Name<input name="name" placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
        <label>Message<textarea name="message" rows="5" placeholder="Your message" /></label>
        <button className="button primary" type="submit">Submit</button>
      </form>
    </div>
  );
}