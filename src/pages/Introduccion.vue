<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-1">
          <div class="brad p-3 mb-4">
            <p class="mb-0">
              En el ámbito del análisis de datos, contar con fuentes confiables
              y aplicar técnicas adecuadas de recolección de información es
              crucial para obtener resultados precisos y valiosos. La calidad de
              los datos recopilados y su adecuada selección determinan en gran
              medida la utilidad y precisión de los análisis posteriores, ya que
              datos incompletos, sesgados o malinterpretados pueden llevar a
              conclusiones erróneas o poco útiles.
            </p>
          </div>
          <div class="row justify-content-center align-items-center bg8 mb-4">
            <div class="col-lg-4 col-8 mb-lg-0 mb-4 h-100">
              <img class="img-fluid" src="@/assets/curso/cf1/2.png" alt="" />
            </div>
            <div class="col-lg-8 bgi">
              <div class="p-4">
                <p class="mb-0">
                  ¿De dónde provienen los datos y cómo se asegura su validez y
                  pertinencia para un análisis efectivo? Este componente
                  formativo profundiza en estas cuestiones esenciales,
                  explorando las fuentes de datos más comunes, las técnicas de
                  recolección, y los métodos para evaluar su confiabilidad. A
                  través de una combinación de teoría y práctica, se cubrirán
                  tanto fuentes tradicionales como datos obtenidos de
                  plataformas digitales y redes sociales, bases de datos
                  públicas, encuestas y estudios de campo.
                </p>
              </div>
            </div>
          </div>
          <p>
            Durante el desarrollo de este curso, el aprendiz adquirirá
            habilidades para identificar, seleccionar y validar diversas fuentes
            de información, adaptando las técnicas de recolección a diferentes
            contextos y tipos de datos. Mediante estudios de caso y ejercicios
            prácticos, se abordarán las mejores prácticas para la recolección de
            datos en el entorno actual, con herramientas digitales y enfoques
            estructurados que garantizan datos de calidad para el análisis.
          </p>
        </div>
        <div class="col-lg-4 col-8 mb-lg-0 mb-4 my-3 order-lg-2">
          <img class="img-a img-t" src="@/assets/curso/cf1/1.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 my-3">
          <div
            class="row justify-content-center align-items-center bg7 p-4 brad mb-5"
          >
            <div class="col-lg-auto">
              <img class="img-a img-t" src="@/assets/curso/cf1/3.svg" alt="" />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El proceso de recolección de datos es la base sobre la cual se
                construye cualquier análisis exitoso. Como señala un principio
                fundamental en el campo del análisis: la precisión del análisis
                es tan buena como la precisión de los datos que lo sustentan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="mb-4">
        ¡Te damos una maravillosa bienvenida a las fuentes y técnicas de
        recolección de datos para análisis!
      </h4>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="1236"
                height="695"
                src="https://www.youtube.com/embed/gYb2piVtFHY?si=JrOknn-QVhU1Ho3g"
                title="Fuentes y técnicas de recolección de datos para análisis"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
