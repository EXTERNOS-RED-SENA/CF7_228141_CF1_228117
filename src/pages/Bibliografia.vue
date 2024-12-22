<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Batanero, C. (2001). Didáctica de la estadística. Granada: Universidad de Granada.',
        link:
          'https://www.ugr.es/~batanero/pages/ARTICULOS/didacticaestadistica.pdf',
      },
      {
        referencia:
          'Cochran, W. G. (1980). Técnicas de muestreo (3.ª ed.). México: CECSA.',
        link:
          'https://es.z-lib.gs/book/22432056/6c4faa/técnicas-de-muestreo.html?dsource=recommend',
      },
      {
        referencia:
          'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6.ª ed.). México: McGraw-Hill.',
        link:
          'https://www.paginaspersonales.unam.mx/files/981/Investigacion_sampieri_6a_ED.pdf',
      },
      {
        referencia:
          'Kelmansky, D. M. (2009). Estadística para todos. Ministerio de Educación de la Nación, Instituto Nacional de Educación Tecnológica.',
        link: 'http://www.bnm.me.gov.ar/giga1/documentos/EL001858.pdf',
      },
      {
        referencia:
          'Mendenhall, W., Beaver, R. J., & Beaver, B. M. (2016). Introducción a la probabilidad y estadística (13. ed.). Cengage Learning Latinoamérica.',
        link:
          'https://www.fcfm.buap.mx/jzacarias/cursos/estad2/libros/book5e2.pdf',
      },
      {
        referencia:
          'Obando-Bastidas, J y Castellanos Sánchez, M. (2021). Gráficos estadísticos: guía práctica para estadística descriptiva. Universidad Cooperativa de Colombia, Facultad de Ciencias Económicas, Administrativas y Contables, Contaduría Pública, Villavicencio.',
        link: 'https://doi.org/10.16925/gcgp.32',
      },
      {
        referencia:
          'Panteleeva, O. V. (2005). Fundamentos de Probabilidad y Estadística. UAEM.',
        link:
          'https://books.google.com.ec/books?id=cbdromy2XrwC&printsec=frontcover#v=onepage&q&f=false',
      },
      {
        referencia:
          'Ramos Calcina, A., Villasante Saravia, F. H., & Álvarez Rozas, T. P. (2023). Estadística descriptiva con R (2ª ed.). Universidad Nacional del Altiplano.',
        link: 'https://repositorio.unap.edu.pe/handle/20.500.140282/20293',
      },
      {
        referencia:
          'Salazar, C., & Santiago del Castillo, G. (2018). Fundamentos básicos de estadística.',
        link: 'http://librodigital.sangregorio.edu.ec/librosusgp/B0009.pdf',
      },
      {
        referencia:
          'Triola, M. F. (2018). Estadística (12. ed.). Pearson Educación.',
        link: 'http://librodigital.sangregorio.edu.ec/librosusgp/B0038.pdf',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
