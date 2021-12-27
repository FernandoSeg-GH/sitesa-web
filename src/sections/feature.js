/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Almacen from 'assets/other/almacen.png';
import Colegio from 'assets/other/colegio.png';
import Fabrica from 'assets/other/fabrica.png';
import Hospital from 'assets/other/hospital.png';
import Oficina from 'assets/other/oficina.png';
import Supermercado from 'assets/other/supermercado.png';

const data = [
  {
    id: 1,
    imgSrc: Hospital,
    altText: 'Hospitales & Clínicas',
    title: 'Hospitales & Clínicas',
    text:
      'Mantenemos la calidad de vida de los pacientes y de nuestros hospitales. Insumos Aprobados por Anmat',
  },
  {
    id: 2,
    imgSrc: Oficina,
    altText: 'Oficinas & Corporativos',
    title: 'Oficinas & Corporativos',
    text:
      'Una oficina limpia crea un ambiente de trabajo ideal y potencia la productividad.',
  },
  {
    id: 3,
    imgSrc: Almacen,
    altText: 'Centros Logísticos',
    title: 'Centros Logísticos',
    text:
      'Ofrecemos limpieza de centros logísticos de maquinaria, suelos, y suministros higiénicos-sanitarios',
  },
  {
    id: 4,
    imgSrc: Fabrica,
    altText: 'Plantas Industriales',
    title: 'Plantas Industriales',
    text:
      'La higiene en plantas industriales necesita de una serie de procesos imprescindibles para asegurar los procesos productivos.',
  },
  {
    id: 5,
    imgSrc: Supermercado,
    altText: 'Supermercados, Almacenes, y Locales',
    title: 'Supermercados, Almacenes, y Locales',
    text:
      'Higienizamos y desinfectamos tu lugar de trabajo según los protocolos correspondientes.',
  },
  {
    id: 6,
    imgSrc: Colegio,
    altText: 'Escuelas',
    title: 'Escuelas',
    text:
      'Mantenemos espacios limpios e higienicos para el correccto desarrollo de actividades curriculares.',
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
        <Text as="p" variant="heroSecondary" style={{marginBottom: "5%", textAlign:"center"}}>A través de nuestro servicio de logística, podemos operar en forma eficiente en todo el AMBA. Esta amplia presencia nos permite atender las necesidades de clientes con distintas sedes o sucursales.</Text>
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
