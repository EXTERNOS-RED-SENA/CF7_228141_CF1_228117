export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales de estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de estadística y su propósito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Clasificación de la estadística: descriptiva e inferencial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Aplicaciones prácticas de la estadística en la recolección de datos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Población y muestra en estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diferencias entre población y muestra',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios para definir una muestra representativa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios para seleccionar una muestra representativa',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre tamaño de la muestra y precisión de los resultados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Fases del proceso estadístico: recolección, análisis e interpretación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Definición y objetivos de cada fase del proceso estadístico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Importancia de la correcta recolección de datos para evitar sesgos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Control de calidad en la recolección de datos estadísticos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Muestreo aleatorio simple: definición y aplicación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Muestreo estratificado: ventajas y procedimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Muestreo por conglomerados: características y ejemplos de uso',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Comparación entre diferentes técnicas de muestreo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Importancia del tamaño de la muestra en cada técnica de muestreo',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inferencia estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de inferencia estadística y su relevancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Diferencia entre parámetros y estadísticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Inferencia en la toma de decisiones basada en datos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Tipos de estimación en inferencia: puntual y por intervalos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Aplicación de pruebas de hipótesis en la inferencia estadística',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Definición de requerimientos para la recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de requerimientos en proyectos estadísticos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Requerimientos cuantitativos y cualitativos en la estadística',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Identificación de las variables clave a recolectar',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Proceso de validación y ajuste de los requerimientos iniciales',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Impacto de los requerimientos en la precisión y relevancia de los datos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Fuentes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Clasificación de fuentes de datos: primarias y secundarias',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Métodos para evaluar la confiabilidad y validez de las fuentes',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Uso de fuentes de datos primarias en encuestas y estudios',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo:
              'Fuentes de datos secundarias: bases de datos públicas, informes y publicaciones',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo:
              'Estrategias para combinar fuentes de datos múltiples en un análisis estadístico',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Determinación de la muestra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Criterios para seleccionar una muestra representativa',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Consideraciones al seleccionar una muestra para minimizar el error',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo:
              'Impacto del tamaño de la muestra en los resultados estadísticos',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo:
              'Técnicas para validar la representatividad de la muestra seleccionada',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228117_CF01_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Fuentes y técnicas de recolección de datos para análisis',
    Description:
      'Este componente aborda la recolección de datos, desde conceptos básicos hasta métodos avanzados de muestreo. Explora la diferencia entre población y muestra, tipos de muestreo, y la importancia de elegir fuentes confiables. Introduce herramientas de inferencia estadística para obtener datos representativos. Orientado a nivel técnico, ofrece una visión completa y práctica del proceso de recolección de datos para análisis estadístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
