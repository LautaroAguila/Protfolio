import Lisa from '../../assets/lisa.png'
import noFoto from '../../assets/nofoto.png'
import proceso from '../../assets/proceso.png'
import catalogo from '../../assets/catalogo de productos.jpeg'
import estadisticas from '../../assets/estadisticas.jpeg'
import video from '../../assets/video.png'
import eficiencia from '../../assets/eficiencia.png'
import check from '../../assets/check.png'

export const projects = [
  {
    title: 'LISA',
    description: 'Una aplicación simple para organizar y estar al tanto de tus productos. Con una interfaz amigable LISA te permite agregar productos, visualizarlos separados por tablas, y además poder llevar un registro dinámico de tu stock.',
    logo: Lisa,
    link: 'https://lisa-lake.vercel.app/',
    features: [
      {
        title: 'Eficiencia',
        text: 'Controla tu stock de una forma clara y rapida.',
        image: eficiencia,
      },
      {
        title: 'Tutorial en Video',
        text: 'Aprendé cómo usar la app en menos de 1 minuto.',
        image: video,
        video: 'https://www.youtube.com/embed/807Rcx87pIE?si=upTAjovXTkyUb4ju'
      },
      {
        title: 'Organización',
        text: 'Organizá tus tareas por colores y prioridades.',
        image: check,
      },
      
    ]
  },
  {
    title: 'Asistent',
    description: 'Una aplicación en desarrollo. Clave para tomar lista en las instituciones educativas. Lleva el registro de todos tus alumnos con información relevante para tener el control de su desempeño.',
    logo: proceso,
    link: '',
    features: [
      {
        title: 'Login con Google',
        text: 'Permite iniciar sesión de forma segura usando Google.',
        image: noFoto,
      },
      {
        title: 'Tutorial en Video',
        text: 'Aprendé cómo usar la app en menos de 1 minuto.',
        image: noFoto,
        video: ''
      },
      {
        title: 'Vista por Categorías',
        text: 'Organizá tus tareas por colores y prioridades.',
        image: noFoto,
      },
      
    ]
  },
  {
    title: 'TUTUrno',
    description: 'Una aplicación en desarrollo. Tus clientes podran sacar turnos para solicitar tus servicios. Deja atrás los chats de Whatsapp y recibí notificaiones de los turnos asignados sin preocuparte.',
    logo: proceso,
    link: '',
    features: [
      {
        title: 'Login con Google',
        text: 'Permite iniciar sesión de forma segura usando Google.',
        image: noFoto,
      },
      {
        title: 'Tutorial en Video',
        text: 'Aprendé cómo usar la app en menos de 1 minuto.',
        image: noFoto,
        video: ''
      },
      {
        title: 'Vista por Categorías',
        text: 'Organizá tus tareas por colores y prioridades.',
        image: noFoto,
      },
      
    ]
  }
];
