<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Población y muestra en estadística</h1>
      </div>
      <p class="mb-5">
        En el contexto de la estadística, tanto la población como la muestra
        juegan roles clave en la recolección y análisis de datos. Entender estos
        conceptos es esencial para garantizar la precisión y relevancia de los
        estudios estadísticos.
      </p>
      <div id="t_2_1" class="titulo-segundo color-acento-botones">
        <h2>2.1 Diferencias entre población y muestra</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="bg31 p-4 brad h-100">
            <img class="img-t img-a mb-4" src="@/assets/curso/t2/1.svg" />
            <div class="text-center">
              <div class="d-inline-block px-4 py-2 mb-3 bg11">
                <h5 class="text-center mb-0">Población</h5>
              </div>
            </div>
            <p class="mb-3">
              En estadística, una población es el conjunto completo de
              individuos, objetos, eventos o medidas de interés sobre los que se
              desea obtener información. La población puede ser finita (como el
              número total de estudiantes en una universidad) o infinita (como
              el número de tiradas de un dado en un experimento).
            </p>
            <p>
              Ejemplo: si se desea investigar el comportamiento de compra de
              todos los consumidores de un país, todos los consumidores
              registrados conforman la población.
            </p>
          </div>
        </div>
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="bg31 p-4 brad h-100">
            <img class="img-t img-a mb-4" src="@/assets/curso/t2/2.svg" />
            <div class="text-center">
              <div class="d-inline-block px-4 py-2 mb-3 bg11">
                <h5 class="text-center mb-0">Muestra</h5>
              </div>
            </div>
            <p>
              Una muestra es un subconjunto de la población seleccionada para
              ser estudiada. Debido a que, en la mayoría de los casos, es
              imposible o impráctico estudiar a toda la población, se selecciona
              una muestra representativa para extraer conclusiones. Una muestra
              adecuada debe reflejar las características de la población para
              que los resultados puedan ser generalizados.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-10">
          <div class="bg18 p-4 brad h-100">
            <p class="mb-0">
              <b>Ejemplo</b>: en un estudio sobre el comportamiento de compra,
              un grupo de 1,000 consumidores seleccionados al azar podría ser la
              muestra de una población de millones de consumidores.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-botones">
        <h2>2.2 Criterios para definir una muestra representativa</h2>
      </div>
      <p>
        Para que los resultados de un estudio estadístico sean válidos, la
        muestra debe ser representativa de la población. Esto significa que debe
        reflejar las características clave de la población, como la distribución
        de edad, género, ingresos, etc. Para garantizar que una muestra sea
        representativa, es importante seguir estos criterios:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-lg-1 order-2">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div class="row justify-content-center" titulo="Aleatoriedad">
              <div class="col-lg-12 my-3">
                <p>
                  La selección de los elementos de la muestra debe ser aleatoria
                  para evitar sesgos. En una muestra aleatoria, cada elemento de
                  la población tiene la misma probabilidad de ser seleccionado,
                  lo que minimiza la posibilidad de errores sistemáticos.
                </p>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Tamaño adecuado">
              <div class="col-lg-12 my-3">
                <p>
                  El tamaño de la muestra es un aspecto importante a tener en
                  cuenta. Si la muestra es demasiado pequeña, puede no
                  representar adecuadamente la variabilidad de la población. Si
                  es demasiado grande, el análisis puede ser costoso y
                  complicado sin un aumento significativo en la precisión de los
                  resultados.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Heterogeneidad de la población"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Si la población es muy diversa, es importante asegurarse de
                  que la muestra incluya subgrupos que representen esa
                  diversidad. Técnicas como el muestreo estratificado se
                  utilizan para garantizar que se incluyan todas las categorías
                  importantes de la población.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t2/3.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-botones">
        <h2>2.3 Criterios para seleccionar una muestra representativa</h2>
      </div>
      <p>
        Existen varias técnicas y criterios que se deben seguir para seleccionar
        una muestra que realmente represente a la población. Algunos de los
        métodos más comunes incluyen:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/t2/4.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Muestreo aleatorio simple"
            >
              <div class="col-lg-12 my-3">
                <p>
                  En este método, todos los elementos de la población tienen la
                  misma probabilidad de ser seleccionados. Es uno de los métodos
                  más fáciles y efectivos para obtener una muestra
                  representativa.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo sistemático"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Consiste en seleccionar cada k-ésimo elemento de la población
                  después de un punto de partida aleatorio. Este método es útil
                  cuando los datos están organizados de manera secuencial.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo estratificado"
            >
              <div class="col-lg-12 my-3">
                <p>
                  La población se divide en grupos o "estratos" basados en una
                  característica relevante (como género o edad), y luego se
                  selecciona una muestra aleatoria de cada estrato. Este método
                  asegura que cada subgrupo esté representado en la muestra.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Muestreo por conglomerados"
            >
              <div class="col-lg-12 my-3">
                <p>
                  La población se divide en grupos o conglomerados, y luego se
                  seleccionan algunos conglomerados al azar. Se estudia a todos
                  los miembros de los conglomerados seleccionados. Este método
                  es útil cuando la población está dispersa geográficamente.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_4" class="titulo-segundo color-acento-botones">
        <h2>
          2.4 Relación entre tamaño de la muestra y precisión de los resultados
        </h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-7">
          <p>
            El tamaño de la muestra tiene un impacto directo en la precisión de
            los resultados obtenidos. A mayor tamaño de la muestra, menor es el
            error estándar y mayor es la probabilidad de que la muestra refleje
            con precisión las características de la población. Sin embargo, hay
            un punto de rendimientos decrecientes: aumentar el tamaño de la
            muestra más allá de cierto umbral no necesariamente mejora de manera
            significativa la precisión, pero sí incrementa los costos y la
            complejidad del análisis.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Tamaño mínimo</h5>
              </div>
            </div>
          </div>
          <p>
            Hay fórmulas estadísticas que permiten calcular el tamaño mínimo de
            muestra necesario para un estudio, dependiendo del nivel de
            confianza deseado y el margen de error permitido.
          </p>
        </div>
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/t2/5.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/t2/6.svg" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="bg28 p-4 brad h-100">
            <b>Error estándar</b>
            <p>
              Es una medida de la variabilidad en las estimaciones obtenidas a
              partir de una muestra. Un tamaño de muestra mayor reduce el error
              estándar, lo que implica mayor precisión en las estimaciones.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <div class="titulo mb-4" data-aos="flip-up">
            <h5 class="mb-0 p-1">Intervalos de confianza</h5>
          </div>
        </div>
      </div>
      <p>
        Un intervalo de confianza es un rango dentro del cual es probable que se
        encuentre un parámetro poblacional, basado en una muestra. El tamaño de
        la muestra afecta el ancho del intervalo de confianza: muestras más
        grandes generan intervalos más estrechos, lo que indica mayor precisión.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-7 order-lg-1 order-2">
          <div class="bgi p-4 brad">
            <p><b>Ejemplo: selección de una muestra representativa</b></p>
            <p>
              Supongamos que tenemos una población de 500 estudiantes en una
              universidad y queremos estudiar su rendimiento académico.
              Seleccionamos una muestra de 50 estudiantes utilizando un muestreo
              estratificado por nivel educativo (pregado y posgrado)
            </p>
            <ul class="lista-ul--color fa-ul">
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  >La población está compuesta por 400 estudiantes de pregado y
                  100 estudiantes de posgrado.</span
                >
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  >Queremos que la muestra sea proporcional por lo que
                  seleccionamos:</span
                >
              </li>
            </ul>
            <div class="tarjeta text-center">
              <div class="eq-c">
                <div class="fraction">
                  <span class="fup">400</span>
                  <span class="bar">/</span>
                  <span class="fdn">500</span>
                </div>
                <span> x 50</span>
                <span> = 40 estudiantes de pregrado.</span>
              </div>
              <div class="eq-c">
                <div class="fraction">
                  <span class="fup">100</span>
                  <span class="bar">/</span>
                  <span class="fdn">500</span>
                </div>
                <span> x 50</span>
                <span> = 10 estudiantes de posgrado.</span>
              </div>
            </div>
            <p>
              De esta manera, la muestra de 50 estudiantes mantiene las
              proporciones de la población en términos de niveles educativos.
            </p>
          </div>
        </div>
        <div class="col-lg-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t2/7.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
