import React from "react";

export function ContentPage() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Serif+4:opsz,wght@8..72,400;8..72,700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --oak: #3B2F2F;
          --charcoal: #4A4A4A;
          --paper: #F4F2EE;
          --stone: #8A8A8A;
        }

        body {
          margin: 0;
          padding: 0;
          background: var(--paper);
          color: var(--charcoal);
          font-family: 'Source Serif 4', Georgia, serif;
          line-height: 1.6;
        }

        .container {
          max-width: 880px;
          margin: 0 auto;
          padding: 60px 22px 90px;
        }

        #k {
          font-family: 'Libre Baskerville', serif;
          color: var(--oak);
          line-height: 1.25;
        }

        #j {
          font-size: 2.6rem;
          margin-bottom: 0.4em;
        }

        h2 {
          font-size: 1.9rem;
          margin-top: 0;
          margin-bottom: 1.6em;
        }

        h3 {
          font-size: 1.45rem;
          margin-top: 2.4em;
        }

        p {
          font-size: 1.05rem;
          margin: 1em 0;
        }

        hr {
          border: none;
          border-top: 1px solid var(--stone);
          margin: 3em 0;
        }

        .footer {
          margin-top: 4em;
          font-size: 0.9rem;
          color: var(--stone);
        }

        .memorial-image {
          max-width: 320px;
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto 40px auto;
        }
      `}</style>

      <div className="container">
        <img
          src="/aniagolu.jpg"
          alt="Justice Anthony Aniagolu"
          className="memorial-image"
        />

        <h1 id="j">Justice Anthony Aniagolu</h1>
        <h2 d="k">A Permanent Digital Memorial to Integrity, Institutions, and Trust</h2>

        <hr />

        <h3 id="k">Introduction</h3>

        <p>
          There was a period in Nigeria’s history when public institutions
          inspired confidence, when the law carried authority because it was
          principled, and when service to the nation was anchored in duty and
          honour.
        </p>

        <p>Justice Anthony Aniagolu belonged to that period.</p>

        <p>
          He served at a time when judicial office was held with gravity, when
          integrity was lived rather than declared, and when the authority of
          the law rested on moral clarity as much as legal reasoning.
        </p>

        <p>
          This site stands as a permanent digital memorial to one of Nigeria’s
          most respected Supreme Court Justices, created to preserve a
          tradition of public service that reflected the nation at its best.
        </p>

        <p>Its purpose is remembrance, continuity, and national renewal.</p>

        <h3 id="k">The National Purpose</h3>

        <p>No nation sustains progress without trusted institutions.</p>

        <p>
          Economic growth, social development, and national stability depend on
          public systems that command confidence and authority.
        </p>

        <p>
          This memorial exists to affirm the central role of integrity,
          discipline, and institutional credibility in Nigeria’s national life.
        </p>

        <h3 id="k">Who Justice Anthony Aniagolu Was</h3>

        <p>
          <strong>Justice Anthony Nnaemezie Christopher Aniagolu</strong>
          <br />
          1922–2011
        </p>

        <p>
          Justice Anthony Aniagolu served Nigeria with distinction as a Justice
          of the Supreme Court during a formative era in the country’s
          constitutional and legal development.
        </p>

        <p>
          He was widely regarded as a jurist of exceptional discipline and
          unimpeachable integrity.
        </p>

        <h3 id="k">The Aniagolu Legacy</h3>

        <p>Justice Aniagolu’s influence extended beyond the courtroom.</p>

        <p>
          His personal law library was reputed to be among the finest in
          Nigeria, reflecting sustained devotion to the law.
        </p>

        <h3 id="k">What This Memorial Will Contain</h3>

        <p>
          This digital memorial is being developed as a permanent public
          archive.
        </p>

        <p>
          It will include a reconstructed digital law library, curated archive
          of landmark judgments, scholarly reflections, and educational
          resources.
        </p>

        <h3 id="k">A Permanent Record</h3>

        <p>This memorial is designed for endurance.</p>

        <p>
          It is structured to survive technological change so future
          generations may encounter a continuous record of integrity and
          service.
        </p>

        <h3 id="k">An Invitation</h3>

        <p>
          Scholars, archivists, technologists, educators, institutions, and
          citizens are invited to contribute to its development.
        </p>

        <p>
          Enquiries may be directed to <strong>enquiries@aniagolu.org</strong>.
        </p>

        <h3 id="k">Closing</h3>

        <p>
          Nigeria is a nation of more than 230 million people. Its future
          depends on trusted institutions and shared responsibility.
        </p>

        <p>
          Justice Anthony Aniagolu stands as a reminder of what principled
          public service can achieve.
        </p>

        <div className="footer">
          <strong>Permanent Digital Memorial</strong>
          <br />
          Preserving memory. Restoring foundations. Renewing national pride.
        </div>
      </div>
    </>
  );
}
