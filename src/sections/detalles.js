/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import BannerImg from 'assets/sitesa1-1.png';
import Foto1 from 'assets/fotos/2.jpeg';
import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: '',
  title: 'Eficaz sistema de logístico',
  description:
    'Para proveerle en tiempo y forma de todos los materiales, insumos y maquinaria de limpieza que se necesite, además de un sistema de supervisión y comunicación para que usted se desentienda de los temas relacionados a la higiene de su institución. SITESA no es solo una empresa de servicios de limpieza, es una organización destinada a brindar verdaderas soluciones en el ámbito de la limpieza y el mantenimiento general.',
  btnName: 'Contactanos',
  btnURL: 'contacto',
};

export default function Detalles() {
  return (
    <section id="about" sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail} style={{margin:"auto",  width:"50%"}}>
          <Image src={Foto1} alt="Thumbnail" style={{maxHeight:"621px", borderRadius:"15px"}}/>
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
