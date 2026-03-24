interface Piece {
  name: string
  description: string
  url?: string
  chain?: string
  status: "live" | "forthcoming"
}

const pieces: Piece[] = [
  {
    name: "hiven",
    description:
      "The smallest possible on-chain gesture. No message. No value. No notification. Just the fact that you thought of someone.",
    url: "https://hiven.space",
    chain: "Base",
    status: "live",
  },
  {
    name: "kaipaus",
    description:
      "Two people complete something together. Each privately marks how it felt. Neither sees the other's word.",
    status: "forthcoming",
  },
  {
    name: "väre",
    description:
      "The signal before contact. A shimmer that says something is about to happen.",
    status: "forthcoming",
  },
]

export function Work() {
  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">work</h2>
        <p className="page-sub">
          On-chain gestures built inside{" "}
          <a href="https://kaarna.xyz" target="_blank" rel="noreferrer" className="link">
            Kaarna
          </a>{" "}
          — a milonga at the edge of presence and encounter.
        </p>
      </div>

      <div className="pieces">
        {pieces.map((piece) => (
          <div
            key={piece.name}
            className={`piece ${piece.status === "forthcoming" ? "piece-soon" : ""}`}
          >
            {piece.url ? (
              <a href={piece.url} target="_blank" rel="noreferrer" className="piece-inner">
                <div className="piece-header">
                  <span className="piece-name">{piece.name}</span>
                  {piece.chain && (
                    <span className="piece-tag piece-chain">{piece.chain}</span>
                  )}
                </div>
                <p className="piece-desc">{piece.description}</p>
              </a>
            ) : (
              <div className="piece-inner">
                <div className="piece-header">
                  <span className="piece-name">{piece.name}</span>
                  <span className="piece-tag piece-status">forthcoming</span>
                </div>
                <p className="piece-desc">{piece.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
