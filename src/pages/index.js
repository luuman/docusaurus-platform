import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title="首页" description="技术文档平台">
      <header style={{textAlign: 'center', padding: '4rem 0'}}>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
          <Link to="/electron/intro" className="button button--primary">
            Electron 文档 →
          </Link>
          <Link to="/tauri/intro" className="button button--secondary">
            Tauri 文档 →
          </Link>
          <Link to="/rust/intro" className="button button--secondary">
            Rust 文档 →
          </Link>
        </div>
      </header>
    </Layout>
  );
}
