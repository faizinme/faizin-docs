import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Anda dapat menghubungi kami via email nur@faizin.me atau faizin@kreatifpiksel.com
        </p>
      </div>
    </Layout>
  );
}