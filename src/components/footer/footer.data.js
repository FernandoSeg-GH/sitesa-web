import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Repaldados Por Nuestros Clientes',
      description:
        'Experiencia trabajando en grandes insituiones y cadenas transnacionales. Gestión y logística asegurada.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Comunicación Activa',
      description:
        'Además de mantener el más alto estandard de higiene, nos aseguramos de mantener una comuniación activa con nuestros clientes.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Calidad Profesional',
      description:
        'Somos una empresa familiar y de confianza, nuestros clientes nos avalan. Mentenemos los niveles profesionales y regulatorios más altos.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Nosotros',
    },
    {
      path: '/',
      label: 'Servicios',
    },
    {
      path: '/',
      label: 'Covid-19',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
