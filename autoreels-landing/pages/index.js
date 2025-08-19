export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>AutoReels</h1>
      <p>Turn long videos into viral short clips automatically.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>✨ Features</h2>
        <ul>
          <li>AI auto-detects viral moments</li>
          <li>One-click social media posting</li>
          <li>Captions & hashtags generated</li>
          <li>Export in HD vertical format</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>💰 Pricing</h2>
        <ul>
          <li>Free Plan – 3 videos/month</li>
          <li>Pro Plan – $19/month</li>
          <li>Agency Plan – $49/month</li>
        </ul>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem' }}>
        <p>© 2025 AutoReels. All rights reserved.</p>
      </footer>
    </div>
  );
}
