/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import BannerImg from 'assets/sitesa1-1.png';
import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';
import Foto1 from 'assets/fotos/1.jpeg';

const data = {
  subTitle: 'Conocenos',
  title: '22 Años De Experiencia Nos Avalan.',
  description:
    'La actividad que realizamos es la prestación de servicios de limpieza institucional, brindando soluciones integrales personalizadas a nuestros clientes. En estos servicios se incluyen desinfección, el lavado de alfombras, lavado de tapizados de sillas y sillones, lavado de entelados de paredes, tabiques divisorios, lavado y planchado de cortinas entre otros.',
  btnName: 'Contactanos',
  btnURL: 'contacto',
};

export default function CoreFeature() {
  return (
    <section id="about" sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
        <Image src={Foto1} alt="Thumbnail" style={{height:"621px", width:"100%", objectFit:"cover", borderRadius:"15px"}}/>
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    mt: "10%",
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
