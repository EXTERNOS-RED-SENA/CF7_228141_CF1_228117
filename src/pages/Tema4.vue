<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Técnicas de muestreo</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-4">
          <img class="img-a img-t" src="@/assets/curso/t4/1.svg" alt="" />
        </div>
        <div class="col-lg-8">
          <p>
            El muestreo es una técnica utilizada en estadística para seleccionar
            una parte representativa de una población con el fin de realizar un
            estudio. Dado que en muchas situaciones es impracticable estudiar a
            toda la población, se selecciona una muestra que, si se elige
            adecuadamente, reflejará las características de la población. Las
            técnicas de muestreo garantizan que esta selección sea lo más
            representativa posible, minimizando sesgos y errores.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_1" class="titulo-segundo color-acento-botones">
        <h2>4.1 Muestreo aleatorio simple: definición y aplicación</h2>
      </div>
      <p>
        El muestreo aleatorio simple es uno de los métodos de selección más
        básicos y efectivos. En este tipo de muestreo, cada individuo u objeto
        de la población tiene la misma probabilidad de ser seleccionado, lo que
        garantiza que no haya preferencias o sesgos en la elección de la
        muestra.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/t4/2.png" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Definición</h5>
              </div>
              <p>
                El muestreo aleatorio simple se basa en la premisa de que todos
                los elementos de la población son equiprobables para ser
                seleccionados. Esto puede lograrse utilizando una lista numerada
                de la población y seleccionando los elementos mediante métodos
                aleatorios, como un sorteo o el uso de generadores de números
                aleatorios.
              </p>
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Aplicación</h5>
              </div>
              <p>
                Este método es ampliamente utilizado cuando se tiene acceso a
                una lista completa de la población y se desea obtener una
                muestra representativa. Sin embargo, es menos práctico en
                poblaciones grandes o dispersas, ya que puede ser difícil
                asegurar la equiprobabilidad para cada miembro de la población.
              </p>
              <div class="bg28 p-3 brad mb-4">
                <p>
                  <b>Ejemplo: </b>si una universidad quiere estudiar el
                  rendimiento académico de sus estudiantes, puede utilizar un
                  muestreo aleatorio simple seleccionando al azar un conjunto de
                  estudiantes de la lista completa de matriculados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-botones">
        <h2>4.2 Muestreo estratificado: ventajas y procedimientos</h2>
      </div>
      <p class="mb-4">
        El muestreo estratificado es una técnica en la que la población se
        divide en subgrupos homogéneos llamados estratos, y luego se selecciona
        una muestra aleatoria de cada estrato. Este método garantiza que todos
        los subgrupos de la población estén representados en la muestra, lo cual
        es particularmente útil cuando la población es heterogénea.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8 order-lg-1 order-2">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Definición</h5>
              </div>
              <p>
                En el muestreo estratificado, los estratos se forman en función
                de alguna característica relevante (por ejemplo, edad, género,
                nivel educativo). Posteriormente, se selecciona una muestra
                aleatoria de cada estrato, asegurando que la representación de
                cada subgrupo en la muestra sea proporcional al tamaño del
                estrato en la población.
              </p>
              <div class="bg28 px-4 p-3 brad mb-4">
                <p><b>Ventajas</b></p>
                <ul class="lista-ul--color fa-ul px-4">
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Aumenta la precisión de las estimaciones, ya que cada
                      estrato está representado adecuadamente.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Reduce la variabilidad dentro de los estratos, ya que los
                      miembros de un estrato comparten características
                      comunes.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Mejora la representación de subgrupos pequeños en la
                      población, que de otro modo podrían estar subrepresentados
                      en un muestreo aleatorio simple.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t4/3.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/t4/4.svg" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <p><b>Procedimientos:</b></p>
          <ol class="lista-ol--cuadro fa-ul">
            <li>
              <div class="lista-ol--cuadro__vineta"><span>1</span></div>
              <span>
                Dividir la población en estratos según una o varias
                características clave.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>2</span></div>
              <span
                >Calcular el tamaño de la muestra que se tomará de cada estrato
                (puede ser proporcional o igual para todos los estratos).</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>3</span></div>
              <span
                >Seleccionar una muestra aleatoria simple dentro de cada
                estrato.
                <p>
                  <b>Ejemplo: </b> si un investigador desea estudiar los hábitos
                  de lectura de estudiantes de diferentes niveles de educación
                  (primaria, secundaria, y universitaria), podría estratificar a
                  los estudiantes por nivel educativo y seleccionar una muestra
                  aleatoria de cada nivel.
                </p></span
              >
            </li>
          </ol>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_3" class="titulo-segundo color-acento-botones">
        <h2>
          4.3 Muestreo por conglomerados: características y ejemplos de uso
        </h2>
      </div>
      <p>
        El <b>muestreo por conglomerados </b>es una técnica en la que la
        población se divide en grupos heterogéneos, o conglomerados, y luego se
        selecciona al azar uno o varios de estos conglomerados para ser
        estudiados en su totalidad. A diferencia del muestreo estratificado, los
        conglomerados no son homogéneos, sino que cada uno representa una
        "miniatura" de la población completa.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-lg-1 order-2">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div class="row justify-content-center" titulo="Definición">
              <div class="col-lg-12 my-3">
                <p>
                  Los conglomerados son subgrupos naturales de la población que
                  pueden representar una mezcla diversa de características. En
                  lugar de seleccionar individuos directamente, se seleccionan
                  conglomerados completos, y todos los miembros de los
                  conglomerados seleccionados son incluidos en la muestra.
                </p>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Características">
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul px-4">
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Es útil cuando es difícil acceder a toda la población,
                      pero los conglomerados son más accesibles.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Se utiliza cuando los conglomerados representan
                      adecuadamente a la población en su conjunto.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Puede ser más barato y eficiente que otras técnicas de
                      muestreo, ya que reduce costos de desplazamiento o
                      logística.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Ejemplos de uso">
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul px-4">
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Estudio sobre el rendimiento académico de estudiantes en
                      una región. En lugar de seleccionar estudiantes
                      individualmente de toda la región, se pueden seleccionar
                      al azar varias escuelas (conglomerados), y luego estudiar
                      a todos los estudiantes de esas escuelas.</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i
                    ><span
                      >Investigación sobre la satisfacción de empleados en una
                      empresa con múltiples sucursales. Se puede seleccionar un
                      conjunto de sucursales (conglomerados) y encuestar a todos
                      los empleados de esas sucursales.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t4/5.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_4" class="titulo-segundo color-acento-botones">
        <h2>4.4 Comparación entre diferentes técnicas de muestreo</h2>
      </div>
      <p>
        Las diferentes técnicas de muestreo tienen ventajas y desventajas, y la
        elección del método depende del contexto del estudio y las
        características de la población.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/t4/6.svg" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Muestreo aleatorio simple"
            >
              <div class="col-lg-12 my-3">
                <p>
                  <b>Ventajas:</b> fácil de aplicar y entender, garantiza que
                  todos los elementos de la población tienen la misma
                  probabilidad de ser seleccionados.
                </p>
                <p>
                  <b>Desventajas:</b> no siempre es representativo si la
                  población es muy heterogénea o si es difícil acceder a una
                  lista completa de la población.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo estratificado"
            >
              <div class="col-lg-12 my-3">
                <p>
                  <b>Ventajas:</b> mejora la precisión del estudio y garantiza
                  la representación adecuada de todos los subgrupos.
                </p>
                <p>
                  <b>Desventajas:</b> requiere conocimientos previos sobre la
                  estructura de la población para formar los estratos, lo cual
                  puede ser costoso o difícil de implementar.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo por conglomerados"
            >
              <div class="col-lg-12 my-3">
                <p>
                  <b>Ventajas:</b> menor costo y mayor eficiencia en términos de
                  tiempo y recursos cuando los conglomerados son fáciles de
                  identificar y acceder.
                </p>
                <p>
                  <b>Desventajas:</b> puede generar estimaciones menos precisas
                  si los conglomerados no son representativos de la población.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_5" class="titulo-segundo color-acento-botones">
        <h2>
          4.5 Importancia del tamaño de la muestra en cada técnica de muestreo
        </h2>
      </div>
      <p>
        El tamaño de la muestra es un factor que afecta la precisión de los
        resultados obtenidos mediante el muestreo. Independientemente de la
        técnica de muestreo elegida, el tamaño de la muestra debe ser suficiente
        para minimizar el error estándar y garantizar la representatividad de la
        población.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-lg-1 order-2">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Muestreo aleatorio simple"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Un tamaño de muestra mayor reduce la variabilidad y el error
                  de muestreo, mejorando la precisión de las estimaciones.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo estratificado"
            >
              <div class="col-lg-12 my-3">
                <p>
                  El tamaño de la muestra en cada estrato debe ser proporcional
                  al tamaño del estrato en la población, garantizando que todos
                  los subgrupos estén representados adecuadamente.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo por conglomerados"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Aunque esta técnica puede reducir costos, a menudo requiere un
                  mayor tamaño de muestra o más conglomerados para compensar la
                  menor precisión que puede derivarse de la heterogeneidad
                  dentro de los conglomerados.
                </p>
                <p><b>Ejemplo:</b> muestreo aleatorio simple y sistemático.</p>
                <p>
                  <b>Muestreo aleatorio simple:</b> seleccionamos una muestra de
                  5 empleados de una población de 20 empleados utilizando un
                  generador de números aleatorios. Supongamos que los números
                  seleccionados son: 3, 7, 9, 14, 18.
                </p>
                <p>
                  <b>Muestreo sistemático:</b>de la misma población de 20
                  empleados, seleccionamos un empleado cada 4 (comenzando con el
                  empleado 3). Los empleados seleccionados serán: 3, 7, 11, 15,
                  19.
                </p>
                <p>
                  Esto asegura una distribución uniforme en la selección de
                  empleados.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t4/7.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
