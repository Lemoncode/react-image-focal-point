import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import classes from './header.module.css';

export const Header: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', classes.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={classes.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};
