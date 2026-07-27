/*import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Technical writer building documentation, guides, and a docs-as-code portfolio">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Favour Adebayo — Technical Writer
          </Heading>
          <p className="hero__subtitle">
            Guides, tutorials, and documentation built with docs-as-code workflow — plus a growing blog on the craft of writing clearly.
          </p>
          <div>
            <Link className="button button--secondary button--lg margin-right--md" to="/docs/guides/writing-clear-guides">
              Explore My Work
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/blog">
              Read My Articles
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--3">
              <Heading as="h3">Guides</Heading>
              <p>Step-by-step, what/how/why structured guides.</p>
            </div>
            <div className="col col--3">
              <Heading as="h3">Tutorials</Heading>
              <p>Hands-on walkthroughs from zero to result.</p>
            </div>
            <div className="col col--3">
              <Heading as="h3">Tech &amp; Dev Docs</Heading>
              <p>Reference-style documentation and API quickstarts.</p>
            </div>
            <div className="col col--3">
              <Heading as="h3">Blog</Heading>
              <p>Writing on docs-as-code, process, and craft.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}*/

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    title: 'Guides',
    description: 'Step-by-step, structured guides.',
    to: '/docs/guides/writing-clear-guides',
  },
  {
    title: 'Tutorials',
    description: 'Hands-on walkthroughs from zero to result.',
    to: '/docs/tutorials/setting-up-vscode-for-technical-writers-a-tutorial',
  },
  {
    title: 'Tech & Dev Docs',
    description: 'Reference-style documentation and API quickstarts.',
    to: '/docs/technical-documentation/whatsapp-status-feature',
  },
  {
    title: 'Blog',
    description: 'Writing on docs-as-code, process, and craft.',
    to: '/blog',
  },
];

export default function Home() {
  return (
    <Layout
      title=" "
      description="Technical writer building documentation, guides, and a docs-as-code portfolio">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Favour Adebayo — Technical Writer
          </Heading>
          <p className="hero__subtitle">
            Guides, tutorials, and documentation built with docs-as-code workflow — plus a growing blog on the craft of writing clearly.
          </p>
          <div>
            <Link className="button button--secondary button--lg margin-right--md" to="/about">
              About Me
            </Link>
            <Link className="button button--outline button--secondary button--lg margin-right--md" to="/docs/tutorials/setting-up-vscode-for-technical-writers-a-tutorial">
              Explore My Work
            </Link>
            <Link className="button button--secondary button--lg margin-right--md" to="/blog">
              Read My Articles
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            {features.map((feature) => (
              <div className="col col--3" key={feature.title}>
                <Link to={feature.to} className={styles.featureCard}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                  <span className={styles.cardArrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}