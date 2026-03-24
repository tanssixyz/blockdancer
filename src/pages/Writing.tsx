interface Article {
  title: string
  subtitle: string
  url: string
  publication: string
  date: string
}

const articles: Article[] = [
  {
    title: "A Hiven Is Waiting for Them",
    subtitle: "On the smallest possible on-chain gesture",
    url: "https://paragraph.com/@blockdancer/a-hiven-is-waiting-for-them",
    publication: "Encounter Contract",
    date: "2026",
  },
  {
    title: "Tango for No Body",
    subtitle: "On embodied knowledge, disembodied infrastructure, and the unexpected directions of becoming",
    url: "https://paragraph.com/@blockdancer/tango-for-no-body",
    publication: "Encounter Contract",
    date: "2026",
  },
]

export function Writing() {
  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">writing</h2>
        <p className="page-sub">
          Published in{" "}
          <a
            href="https://paragraph.com/@blockdancer"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Encounter Contract
          </a>{" "}
          — on dance, presence, and on-chain infrastructure.
        </p>
      </div>

      <div className="articles">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="article"
          >
            <div className="article-meta">
              <span className="article-pub">{article.publication}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <p className="article-title">{article.title}</p>
            <p className="article-sub">{article.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
