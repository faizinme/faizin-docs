import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tentang saya',
    Svg: require('@site/static/img/about.svg').default,
    description: (
      <>
        Terkadang, hal <code>penting</code> terlupakan. Blog ini mencatat apa yang penulis anggap berharga, menjaga agar tak hilang dalam aliran waktu.
      </>
    ),
  },
  {
    title: 'Dokumentasi',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Personal website ini diciptakan sebagai wadah pribadi untuk mendokumentasikan dan memudahkan dalam pekerjaan melalui
        pencatatan yang teratur dan efisien.
      </>
    ),
  },
  {
    title: 'Love Open Source',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
        Menghadirkan website dinamis melalui penerapan Javascript frameworks, membuka pintu menuju pengalaman pengguna yang lebih interaktif dan menarik.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
