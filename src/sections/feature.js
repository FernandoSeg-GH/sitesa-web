/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Hospitales & Clínicas',
    title: 'Hospitales & Clínicas',
    text:
      'Mantenemos la calidad de vida de nuestros pacientes y de nuestros hospitales. Insumos  Aprobados por Anmat',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Oficinas & Corporativos',
    title: 'Oficinas & Corporativos',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Centros Logísticos',
    title: 'Centros Logísticos',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Plantas Industriales',
    title: 'Plantas Industriales',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 5,
    imgSrc: Partnership,
    altText: 'Supermercados, Almacenes, y Locales',
    title: 'Supermercados, Almacenes, y Locales',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 6,
    imgSrc: Support,
    altText: 'Esculeas',
    title: 'Esculeas',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function Feature() {
  return (
    <section id="servicios" sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Soluciones de Limpieza, Mantenimiento y Reacondicionado"
          title="Resultados Visibles"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
