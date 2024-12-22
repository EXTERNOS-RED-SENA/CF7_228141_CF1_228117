<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>8</span></div>
        <h1>Determinación de la muestra</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/t8/1.svg" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            La determinación de la muestra es un paso clave en cualquier estudio
            estadístico que implica hacer inferencias sobre una población. La
            muestra es el subconjunto de la población que se selecciona para ser
            estudiado, y su calidad y representatividad determinan en gran
            medida la validez de los resultados obtenidos. Definir el tamaño de
            la muestra y los métodos de selección adecuados es esencial para
            asegurar que las conclusiones se puedan generalizar correctamente a
            la población completa.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <div class="titulo mb-4" data-aos="flip-up">
            <h5 class="mb-0 p-1">
              Métodos para seleccionar una muestra adecuada
            </h5>
          </div>
          <p>
            Existen varios métodos para seleccionar una muestra adecuada, y la
            elección del método depende del tipo de estudio, los recursos
            disponibles y las características de la población. Estos métodos se
            dividen principalmente en dos categorías:
            <b> muestreo probabilístico y muestreo no probabilístico.</b>
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-contenido aos-init mt-5">
            <h5>Tabla 2.</h5>
            <span>Métodos de muestreo</span>
          </div>
          <table class="table">
            <thead>
              <tr class="text-center">
                <th class="bg-head py-3">Tipo de Muestreo</th>
                <th class="bg-head py-3">Descripción</th>
                <th class="bg-head py-3">Métodos Principales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Muestreo probabilístico</th>
                <td>
                  <p>
                    Es un tipo de muestreo donde cada individuo de la población
                    tiene una probabilidad conocida y no nula de ser
                    seleccionado.
                  </p>
                  <p>
                    Es el método preferido para asegurar que la muestra sea
                    representativa de la población.
                  </p>
                </td>
                <td>
                  <p>
                    - <b>Muestreo aleatorio simple</b>: cada elemento de la
                    población tiene la misma probabilidad de ser seleccionado.
                    Ideal cuando la población es homogénea.
                  </p>
                  <p>
                    - <b>Muestreo sistemático</b>: se selecciona un elemento
                    inicial al azar y luego a intervalos regulares.
                  </p>
                  <p>
                    - <b>Muestreo estratificado</b>: la población se divide en
                    subgrupos (estratos) y se selecciona una muestra aleatoria
                    de cada uno.
                  </p>
                  <p>
                    - <b>Muestreo por conglomerados</b>: se divide en grupos
                    heterogéneos, seleccionando uno o varios para estudio.
                  </p>
                </td>
              </tr>
              <tr>
                <th>Muestreo no probabilístico</th>
                <td>
                  <p>
                    En este tipo de muestreo, no todos los elementos de la
                    población tienen una probabilidad conocida de ser
                    seleccionados. Puede ser menos representativo, pero es útil
                    en estudios exploratorios o cuando no es posible aplicar un
                    muestreo probabilístico.
                  </p>
                </td>
                <td>
                  <p>
                    - <b>Muestreo por conveniencia</b>: se elige una muestra
                    fácil de acceder, como los primeros individuos disponibles.
                  </p>
                  <p>
                    - <b>Muestreo por cuotas</b>: se seleccionan sujetos en
                    proporciones específicas para representar ciertas
                    características de la población, sin aleatoriedad en cada
                    proporción.
                  </p>
                  <p>
                    - <b>Muestreo intencional o dirigido</b>: el investigador
                    selecciona a los individuos que considera más adecuados para
                    el estudio.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <figcaption
            class="border border-secundary border-start-0 border-end-0 border-2 mt-2 mb-4"
          >
            <p class="text-center text-dark mb-0">Fuente: OIT, 2024.</p>
          </figcaption>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_8_1" class="titulo-segundo color-acento-botones">
        <h2>8.1 Criterios para seleccionar una muestra representativa</h2>
      </div>
      <p>
        Una muestra representativa es aquella que refleja fielmente las
        características de la población completa. Para asegurar que una muestra
        sea representativa, es necesario seguir ciertos criterios durante su
        selección:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/t8/2.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Diversidad de la población"
            >
              <div class="col-lg-12 my-3">
                <p>
                  La muestra debe incluir a individuos con diferentes
                  características, como edad, género, nivel educativo, ingresos,
                  etc., en proporciones similares a las de la población. Esto
                  asegura que todos los subgrupos de la población estén
                  representados en la muestra.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Tamaño de la muestra"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Un tamaño de muestra más grande tiende a ser más
                  representativo, ya que permite capturar una mayor variabilidad
                  dentro de la población. Sin embargo, el tamaño adecuado
                  depende del tipo de análisis que se realizará y de los
                  recursos disponibles.
                </p>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Muestreo aleatorio">
              <div class="col-lg-12 my-3">
                <p>
                  Siempre que sea posible, se deben usar métodos de muestreo
                  probabilísticos para evitar sesgos en la selección de los
                  individuos. Los métodos no probabilísticos solo deben usarse
                  cuando no se dispone de otra opción.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Accesibilidad y viabilidad"
            >
              <div class="col-lg-12 my-3">
                <p>
                  En algunos casos, ciertas partes de la población pueden ser
                  difíciles de acceder o estar dispersas geográficamente. Es
                  importante que la muestra sea lo suficientemente accesible
                  para recolectar datos de manera eficiente sin comprometer la
                  representatividad.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_8_2" class="titulo-segundo color-acento-botones">
        <h2>
          8.2 Consideraciones al seleccionar una muestra para minimizar el error
        </h2>
      </div>
      <p>
        El error muestral es la diferencia entre el valor estimado a partir de
        la muestra y el valor real de la población. Para minimizar este error y
        mejorar la precisión de los resultados, es necesario tener en cuenta
        varias consideraciones al seleccionar una muestra:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 my-3 order-lg-1 order-2">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Tamaño de la muestra"
            >
              <div class="col-lg-12 my-3">
                <p>
                  El tamaño de la muestra es uno de los factores más importantes
                  para reducir el error muestral. Un tamaño de muestra mayor
                  generalmente disminuye el error muestral, pero hay un punto en
                  el que los beneficios adicionales se reducen.
                </p>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Aleatoriedad">
              <div class="col-lg-12 my-3">
                <p>
                  La selección aleatoria de los elementos de la muestra asegura
                  que todos los individuos de la población tengan la misma
                  probabilidad de ser seleccionados, lo que reduce el sesgo y
                  aumenta la precisión de la estimación.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Homogeneidad de la población"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Si la población es muy heterogénea (con mucha variabilidad
                  interna), se debe tener especial cuidado en la selección de la
                  muestra para que incluya a todos los subgrupos relevantes. El
                  uso de muestreo estratificado es particularmente útil en este
                  caso.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Métodos de recolección de datos"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Es importante que los métodos utilizados para recolectar datos
                  de la muestra sean consistentes y que no introduzcan sesgos.
                  La capacitación del personal encargado de la recolección de
                  datos y la estandarización de los procedimientos son claves
                  para minimizar el error.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-5 my-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t8/3.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_8_3" class="titulo-segundo color-acento-botones">
        <h2>
          8.3 Impacto del tamaño de la muestra en los resultados estadísticos
        </h2>
      </div>
      <p>
        El tamaño de la muestra tiene un impacto directo en la precisión y
        validez de los resultados obtenidos en un análisis estadístico. Un
        tamaño de muestra adecuado permite obtener estimaciones confiables sobre
        la población, mientras que un tamaño de muestra demasiado pequeño puede
        producir resultados sesgados o imprecisos.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3">
          <img class="img-a img-t" src="@/assets/curso/t8/4.png" alt="" />
        </div>
        <div class="col-lg-9">
          <div class="bg19 brad px-4 p-3">
            <div class="row">
              <div class="col-11">
                <p>
                  <b>Error estándar:</b> el error estándar disminuye a medida
                  que el tamaño de la muestra aumenta. Un error estándar menor
                  implica una mayor precisión en las estimaciones realizadas
                  sobre la población.
                </p>
                <p>
                  Ejemplo: si se estima el ingreso promedio de una población con
                  una muestra pequeña, el intervalo de confianza será más amplio
                  y menos preciso. Con una muestra más grande, el intervalo se
                  estrechará, lo que indicará una estimación más precisa del
                  parámetro poblacional.
                </p>
              </div>
            </div>
          </div>
          <div class="bg19 brad px-4 p-3 my-3">
            <div class="row">
              <div class="col-11">
                <p>
                  <b>Intervalos de confianza:</b> los intervalos de confianza
                  son más amplios con muestras pequeñas y más estrechos con
                  muestras grandes. Un intervalo de confianza estrecho indica
                  que hay mayor certeza de que el parámetro poblacional se
                  encuentra dentro del rango estimado.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="bg19 brad px-4 p-3 my-3">
            <div class="row">
              <div class="col-11">
                <p>
                  <b>Poder estadístico:</b> el poder estadístico de una prueba
                  es la capacidad de detectar un efecto o diferencia real en la
                  población si es que existe. Un tamaño de muestra mayor aumenta
                  el poder estadístico, lo que significa que es más probable que
                  se detecten diferencias significativas cuando realmente
                  existen.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="bg19 brad px-4 p-3 my-3">
            <div class="row">
              <div class="col-11">
                <p>
                  <b>Costo-beneficio:</b> aunque un tamaño de muestra más grande
                  mejora la precisión, también aumenta los costos y el tiempo
                  necesario para recolectar y procesar los datos. Por lo tanto,
                  es importante encontrar un equilibrio entre el tamaño de la
                  muestra y los recursos disponibles.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_8_4" class="titulo-segundo color-acento-botones">
        <h2>
          8.4 Técnicas para validar la representatividad de la muestra
          seleccionada
        </h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-7">
          <p>
            Una vez que se ha seleccionado una muestra, es fundamental validar
            su representatividad para garantizar que los resultados del estudio
            puedan generalizarse a la población completa. Existen varias
            técnicas para evaluar la representatividad de una muestra:
          </p>
          <p>
            <strong>Comparación con la población:</strong> comparar las
            características clave de la muestra (como edad, género, nivel
            educativo) con las de la población completa. Si las características
            de la muestra se alinean con las de la población, es más probable
            que sea representativa.
          </p>
          <p>
            <strong>Ejemplo:</strong> en un estudio sobre hábitos de consumo en
            una ciudad, la muestra debe reflejar la distribución de edades,
            niveles de ingresos y otros factores demográficos de la población
            total de esa ciudad.
          </p>
          <div class="bg9 brad px-4 p-3 my-4">
            <p class="mb-0">
              <strong>Pruebas de hipótesis:</strong> las pruebas estadísticas
              pueden utilizarse para evaluar si las características de la
              muestra son significativamente diferentes de las características
              conocidas de la población. Si no se detectan diferencias
              significativas, la muestra puede considerarse representativa.
            </p>
          </div>
          <div class="row justify-content-center align-items-center mb-5">
            <div class="col-lg-2">
              <img class="img-a img-t" src="@/assets/curso/t8/6.svg" alt="" />
            </div>
            <div class="col-lg-10">
              <p>
                <b>Ajustes ponderados:</b> si se detecta que ciertos grupos
                están subrepresentados o sobrerrepresentados en la muestra, se
                pueden aplicar ponderaciones a los datos para corregir estos
                desequilibrios y mejorar la representatividad.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/t8/5.png" alt="" />
        </div>
      </div>
      <p>
        <b>Verificación mediante métodos alternativos:</b> comparar los
        resultados obtenidos a partir de la muestra con estudios o
        investigaciones anteriores que utilizaron diferentes métodos o datos
        secundarios. Si los resultados coinciden, es una indicación de que la
        muestra es representativa.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3 mb-3">
          <img class="img-a img-t" src="@/assets/curso/t8/7.png" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="bg17 p-4 brad">
            <b>Ejemplo: cálculo del tamaño de la muestra.</b>
            <p class="mt-3">
              Queremos estimar el ingreso promedio de una ciudad con un margen
              de error de $ 500 y un nivel de confianza del 95 %. Sabemos que la
              desviación estándar del ingreso en estudios anteriores es de $
              4,000.
            </p>
            <p>
              El tamaño de la muestra se calcula usando la fórmula para el
              tamaño de muestra de una media:
            </p>
            <p class="text-center">
              <img class="img-a img-t" src="@/assets/curso/t8/8.png" alt="" />
            </p>
            <p>
              Redondeando, necesitamos una muestra de al menos 246 personas para
              estimar el ingreso promedio con el margen de error deseado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema8',
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
