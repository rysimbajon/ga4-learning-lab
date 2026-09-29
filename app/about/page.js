export default function About() {
  return (
    <div className="container page narrow">
      <span className="eyebrow">ABOUT</span>
      <h1>About this lab</h1>
      <p>
        This site exists purely for learning. It intentionally contains common
        interactions that we can instrument with GA4.
      </p>
      <ul>
        <li>Page views</li>
        <li>Navigation clicks</li>
        <li>Product views</li>
        <li>Internal search</li>
        <li>File downloads</li>
        <li>Form interactions</li>
        <li>Custom events and parameters</li>
      </ul>
    </div>
  );
}