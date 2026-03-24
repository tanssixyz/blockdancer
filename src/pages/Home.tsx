export function Home() {
  return (
    <div className="page">
      <div className="hero">
        <div className="dot" />
        <h1 className="name">Martin Heslop</h1>
        <p className="handle">blockdancer</p>
      </div>

      <div className="bio">
        <p>
          Dancer, choreographer, builder.
          Co-creator of{" "}
          <a href="https://info.improtango.fi" target="_blank" rel="noreferrer" className="link">
            Improtango
          </a>{" "}
          — an improvisational partner dance methodology
          developed over thirty years.
        </p>
        <p>
          Currently exploring what happens when embodied knowledge
          meets on-chain infrastructure.{" "}
          <a href="https://kaarna.xyz" target="_blank" rel="noreferrer" className="link">
            Kaarna
          </a>{" "}
          is the current work.
        </p>
      </div>

      <div className="links">
        <a href="https://kaarna.xyz" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">kaarna</span>
          <span className="link-sub">on-chain gestures</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://hiven.space" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">hiven</span>
          <span className="link-sub">Base mainnet</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://paragraph.com/@blockdancer" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">encounter contract</span>
          <span className="link-sub">writing on paragraph</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://farcaster.xyz/blockdancer" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">farcaster</span>
          <span className="link-sub">@blockdancer</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://info.improtango.fi" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">improtango</span>
          <span className="link-sub">fi · en</span>
          <span className="link-arrow">→</span>
        </a>
        <a href="https://parisuhdetango.xyz" target="_blank" rel="noreferrer" className="link-row">
          <span className="link-label">parisuhdetango</span>
          <span className="link-sub">relationship tango · fi · en</span>
          <span className="link-arrow">→</span>
        </a>
      </div>
    </div>
  )
}
