<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Análisis de Datos',
          significado:
            'Paso del proceso estadístico donde los datos recolectados se organizan y estudian para identificar patrones y relaciones.',
        },
        {
          termino: 'Control de Calidad',
          significado:
            'Prácticas implementadas durante la recolección de datos para asegurar precisión y confiabilidad.',
        },
        {
          termino: 'Dato',
          significado:
            'Unidad básica de información sin procesar, obtenida a través de observaciones, encuestas u otras fuentes.',
        },
        {
          termino: 'Estadística',
          significado:
            'Ciencia que se dedica a la recolección, organización, análisis e interpretación de datos para la toma de decisiones.',
        },
        {
          termino: 'Estadística Descriptiva',
          significado:
            'Rama de la estadística que se enfoca en resumir y describir las características principales de un conjunto de datos.',
        },
        {
          termino: 'Estadística Inferencial',
          significado:
            'Rama de la estadística que permite hacer generalizaciones y predicciones sobre una población a partir de una muestra.',
        },
        {
          termino: 'Fuente Primaria',
          significado:
            'Datos recolectados directamente por el investigador específicamente para el estudio en cuestión.',
        },
        {
          termino: 'Fuente Secundaria',
          significado:
            'Datos previamente recopilados por otros y utilizados en el análisis actual.',
        },
        {
          termino: 'Interpretación',
          significado:
            'Fase en la que se analizan los resultados para sacar conclusiones y responder preguntas de investigación.',
        },
        {
          termino: 'Intervalo de Confianza',
          significado:
            'Rango de valores dentro del cual se espera que se encuentre un parámetro poblacional con un nivel de confianza especificado.',
        },
        {
          termino: 'Muestra',
          significado:
            'Subconjunto representativo de la población, utilizado para hacer inferencias sobre el total.',
        },
        {
          termino: 'Muestreo Aleatorio Simple',
          significado:
            'Técnica de muestreo en la que todos los elementos de la población tienen la misma probabilidad de ser seleccionados.',
        },
        {
          termino: 'Muestreo Estratificado',
          significado:
            'Método de muestreo en el que la población se divide en subgrupos homogéneos, seleccionando una muestra de cada uno.',
        },
        {
          termino: 'Muestreo por Conglomerados',
          significado:
            'Técnica en la que la población se agrupa en conglomerados y se seleccionan algunos para ser estudiados en su totalidad.',
        },
        {
          termino: 'Parámetro',
          significado:
            'Valor numérico que representa una característica de la población, como la media o la desviación estándar.',
        },
        {
          termino: 'Población',
          significado:
            'Conjunto total de individuos, objetos o eventos de interés en un estudio estadístico.',
        },
        {
          termino: 'Prueba de Hipótesis',
          significado:
            'Procedimiento estadístico utilizado para evaluar si una afirmación sobre un parámetro poblacional es consistente con los datos de la muestra.',
        },
        {
          termino: 'Sesgo',
          significado:
            'Error sistemático en la recolección de datos que distorsiona los resultados y afecta la validez de las conclusiones.',
        },
        {
          termino: 'Variable',
          significado:
            'Característica o atributo que puede ser medido en los individuos de un estudio; puede ser cualitativa o cuantitativa.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
