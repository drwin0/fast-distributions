import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/whatsapp.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Unete a la communidad',
      description:
        '¡Únete a nuestra comunidad ahora mismo y sé parte de una experiencia única!',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Instagram',
      description:
        'Échale un vistazo a nuestra página de instagram.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Whatsapp',
      description:
        'Contáctanos por whatsapp para cualquier ayuda.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Hogar',
    },
    {
      path: '/',
      label: 'Publicidad',
    },
    {
      path: '/',
      label: 'Soportes',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contacto',
    },
  ],
};
