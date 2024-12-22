<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 col-8 mb-lg-0 mb-4 my-lg-0 my-3 j1">
          <img class="img-fluid img-a" src="@/assets/curso/cf1/122.png" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 my-lg-0 my-3">
              <div class="bg30 text-white p-3 brad j1 h-100">
                <p>
                  El siguiente diagrama proporciona una visión general
                  sintetizada de los principales temas abordados en este
                  componente sobre la recolección de datos para análisis. Este
                  mapa está diseñado para ayudar al lector a visualizar la
                  interrelación entre las diversas áreas que constituyen el
                  proceso de recolección de datos en el contexto estadístico a
                  partir de los diversos tipos de fuentes y de las técnicas que
                  se pueden usar para la recolección y el análisis de los datos.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 col-8 mb-lg-0 mb-4 my-3 j1">
              <img class="img-fluid img-a" src="@/assets/curso/cf1/106.png" />
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center bg19 br-d p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/cf1/121.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                En el origen del diagrama se encuentra el concepto principal de
                "Recolección de datos para análisis", del cual se derivan temas
                fundamentales: conceptos generales de estadística, población y
                muestra en estadística, procesos estadísticos, técnicas de
                muestreo, inferencia estadística, requerimientos para la
                recolección de datos, fuentes de datos y determinación de la
                muestra. Cada una de estas áreas se subdivide en conceptos
                clave, reflejando la estructura y el contenido del componente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        Este diagrama actúa como una guía visual para explorar los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente la
        amplitud y la organización de los temas tratados, así como sus
        conexiones. Al revisar este mapa, el aprendiz podrá observar cómo los
        diferentes aspectos de la estadística y la recolección de datos se
        entrelazan para formar un proceso integral y sistemático. Se invita a
        utilizar este diagrama como un complemento al contenido detallado del
        componente, sirviendo como una referencia rápida y un recordatorio
        visual de los conceptos esenciales en la recolección de datos para
        análisis estadístico.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 col-8 mb-lg-0 mb-4 bgs brad p-5">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis.svg"
              alt="La Figura 3 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre la limpieza y transformación de datos —como sus fundamentos, importación, técnicas, herramientas y prácticas— y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <div class="mt-4">
            <a
              class="anexo mb-5"
              :href="obtenerLink('/downloads/Sintesis.pdf')"
              target="_blank"
            >
              <div class="anexo__icono">
                <img src="@/assets/bullets/icono-pdf.svg" />
              </div>
              <div class="anexo__texto">
                <p>Anexo. Síntesis</p>
              </div></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
