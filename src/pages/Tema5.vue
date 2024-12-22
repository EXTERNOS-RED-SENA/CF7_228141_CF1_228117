<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>5</span></div>
        <h1>Inferencia estadística</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/t5/1.svg" />
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg28 p-3 brad j1 h-100">
            <p class="mb-0">
              La <b>inferencia estadística </b>es una rama de la estadística que
              permite sacar conclusiones sobre una población a partir de una
              muestra de datos. Mediante el uso de probabilidades y modelos
              estadísticos, la inferencia nos permite estimar características de
              una población, probar hipótesis y realizar predicciones basadas en
              los datos observados. Es fundamental para la toma de decisiones en
              contextos donde no es posible o práctico estudiar a toda la
              población.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/t5/2.png" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_1" class="titulo-segundo color-acento-botones">
        <h2>5.1 Concepto de inferencia estadística y su relevancia</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8 order-lg-1 order-2">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <p>
                La inferencia estadística se refiere a los métodos utilizados
                para extraer conclusiones sobre una población basándose en una
                muestra de esa población. La inferencia es esencial en
                situaciones donde sería demasiado costoso o imposible obtener
                datos de todos los elementos de una población (por ejemplo, una
                encuesta nacional o un estudio médico con miles de pacientes).
              </p>
              <p>La relevancia está dada por:</p>
              <div class="bg28 p-4 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Ahorro de recursos:</b> en lugar de estudiar a toda la
                      población, la inferencia permite hacer generalizaciones
                      basadas en una muestra, lo que ahorra tiempo, dinero y
                      esfuerzo.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Generalización:</b> al usar técnicas inferenciales, es
                      posible hacer predicciones y conclusiones más amplias
                      sobre la población con un margen de error
                      controlado.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Toma de decisiones:</b> la inferencia es clave para
                      tomar decisiones basadas en datos, como en investigaciones
                      científicas, estudios de mercado, o procesos industriales
                      de control de calidad. Ejemplo: en una empresa que quiere
                      conocer la satisfacción de los clientes, la inferencia
                      estadística permite estimar la satisfacción global
                      basándose en una encuesta a una muestra representativa de
                      clientes.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-lg-2 order-1">
          <img class="img-t img-a" src="@/assets/curso/t5/3.png" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_2" class="titulo-segundo color-acento-botones">
        <h2>5.2 Diferencia entre parámetros y estadísticos</h2>
      </div>
      <p>
        Para comprender la inferencia estadística, es importante distinguir
        entre <b>parámetros y estadísticos:</b>
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-3">
          <img class="img-t img-a" src="@/assets/curso/t5/4.svg" />
        </div>
        <div class="col-lg-9">
          <div class="bgi p-4 brad">
            <ul class="lista-ul--color fa-ul">
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Parámetro:</b> un parámetro es un valor numérico que
                  describe una característica de toda la población. Como es
                  difícil o imposible conocer el valor exacto del parámetro (por
                  ejemplo, la media de ingresos de todos los habitantes de un
                  país), se utilizan muestras para estimarlo.</span
                >
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Estadístico:</b> un estadístico es un valor numérico que
                  describe una característica de una muestra. Los estadísticos
                  se calculan a partir de los datos recolectados y se utilizan
                  para hacer inferencias sobre los parámetros de la
                  población.</span
                >
              </li>
            </ul>
            <p>
              Ejemplo: si tomamos una muestra de 100 estudiantes de una
              universidad y calculamos su promedio de calificaciones, ese
              promedio es un estadístico. Si intentamos hacer una inferencia
              sobre el promedio de calificaciones de todos los estudiantes de la
              universidad, estamos haciendo una estimación del parámetro
              poblacional.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_3" class="titulo-segundo color-acento-botones">
        <h2>5.3 Inferencia en la toma de decisiones basada en datos</h2>
      </div>
      <p>
        La inferencia estadística es fundamental para la toma de decisiones en
        situaciones de incertidumbre. Al aplicar técnicas inferenciales, podemos
        hacer predicciones y estimaciones sobre una población o evento futuro
        con un margen de error cuantificado. Las decisiones basadas en datos
        tienen una mayor probabilidad de éxito porque están respaldadas por
        evidencia numérica y análisis objetivo.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/t5/5.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Toma de decisiones en investigación médica"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Los ensayos clínicos que prueban la efectividad de un nuevo
                  medicamento utilizan muestras de pacientes para hacer
                  inferencias sobre cómo ese medicamento funcionará en la
                  población general. Las decisiones sobre la aprobación o no de
                  un fármaco se basan en la inferencia estadística obtenida de
                  la muestra.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Toma de decisiones empresariales"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Las empresas utilizan la inferencia para hacer predicciones
                  sobre ventas futuras, satisfacción del cliente o efectividad
                  de campañas publicitarias, lo que les permite tomar decisiones
                  estratégicas informadas.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Predicción de tendencias"
            >
              <div class="col-lg-12 my-3">
                <p>
                  La inferencia estadística se usa en estudios de mercado para
                  predecir las tendencias de consumo, lo que ayuda a las
                  empresas a ajustar sus estrategias de producción y
                  <i>marketing</i>.
                </p>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_4" class="titulo-segundo color-acento-botones">
        <h2>5.4 Tipos de estimación en inferencia: puntual y por intervalos</h2>
      </div>
      <p>
        Existen dos tipos principales de estimaciones que se utilizan en la
        inferencia estadística: estimaciones puntuales y estimaciones por
        intervalos.
      </p>
      <TabsC class="color-acento-botones mb-5">
        <div class="p-4 py-99 py-md-5" titulo="Estimación puntual">
          <div class="row">
            <div class="col-lg-5">
              <img class="img-a img-t" src="@/assets/curso/t5/6.png" alt="" />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p>
                Es un solo valor numérico calculado a partir de una muestra que
                se utiliza para estimar un parámetro poblacional. Por ejemplo,
                si se toma una muestra aleatoria de salarios de empleados y se
                calcula la media, ese valor de la media es una estimación
                puntual del salario promedio en la población.
              </p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Ventajas:</b> es fácil de calcular y proporcionar.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Desventajas:</b> no proporciona información sobre la
                    variabilidad o incertidumbre de la estimación.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-4 py-99 py-md-5" titulo="Estimación por intervalos">
          <div class="row">
            <div class="col-lg-5">
              <img class="img-a img-t" src="@/assets/curso/t5/7.png" alt="" />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p>
                En lugar de un solo valor, se proporciona un rango (intervalo)
                dentro del cual es probable que se encuentre el parámetro
                poblacional con un cierto nivel de confianza. Un intervalo de
                confianza es un ejemplo de estimación por intervalos.
              </p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Ventajas:</b> proporciona una medida de la precisión de
                    la estimación y refleja la incertidumbre inherente en el
                    muestreo.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Desventajas:</b> más complejo de calcular y comunicar
                    que la estimación puntual.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <div class="row justify-content-center">
        <div class="col-lg-10 my-3">
          <div
            class="row justify-content-center align-items-center bg10 p-4 brad mb-5"
          >
            <div class="col-lg-auto">
              <img class="img-a img-t" src="@/assets/curso/t5/11.svg" alt="" />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                <b>Ejemplo: </b> un intervalo de confianza del 95 % para el
                salario promedio puede ser $ 30,000 a $ 35,000, lo que indica
                que estamos un 95 % seguros de que el salario promedio de la
                población está dentro de ese rango.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_5" class="titulo-segundo color-acento-botones">
        <h2>
          5.5 Aplicación de pruebas de hipótesis en la inferencia estadística
        </h2>
      </div>
      <p>
        Una de las herramientas más poderosas de la inferencia estadística es la
        prueba de hipótesis. Este proceso permite evaluar la validez de una
        afirmación sobre un parámetro poblacional, basándose en los datos de una
        muestra.
      </p>
      <div class="row justify-content-center align-items-center mb-0">
        <div class="col-lg-3">
          <img class="img-a img-t" src="@/assets/curso/t5/8.png" alt="" />
        </div>
        <div class="col-lg-9">
          <p>
            <strong>Hipótesis nula (H₀):</strong> es la afirmación que se asume
            verdadera al comienzo de la prueba. Normalmente, la hipótesis nula
            es una afirmación de "no efecto" o "no diferencia". Por ejemplo, en
            un estudio médico, la hipótesis nula podría ser que un nuevo
            tratamiento no es más efectivo que el tratamiento actual.
          </p>
          <p>
            <strong>Hipótesis alternativa (H₁):</strong> es la afirmación
            opuesta a la hipótesis nula. Es lo que el investigador espera
            demostrar. En el caso del tratamiento médico, la hipótesis
            alternativa sería que el nuevo tratamiento sí es más efectivo que el
            tratamiento actual.
          </p>
          <div class="bgi p-4 brad mb-3">
            <b>Proceso de prueba de hipótesis:</b>
            <ol class="lista-ol--cuadro fa-ul px-2 mb-0">
              <li>
                <div class="lista-ol--cuadro__vineta"><span>1</span></div>
                <span
                  ><b
                    >Formular la hipótesis nula (H₀) y la hipótesis alternativa
                    (H₁).</b
                  ></span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta"><span>2</span></div>
                <span
                  ><b>Elegir un nivel de significancia (α): </b>este valor
                  (generalmente 0.05) es el umbral que se utiliza para decidir
                  si los resultados observados son lo suficientemente inusuales
                  como para rechazar la hipótesis nula.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta"><span>3</span></div>
                <span
                  ><b>Calcular una estadística de prueba: </b>esta estadística
                  se utiliza para comparar los resultados observados con lo que
                  se esperaría si la hipótesis nula fuera cierta.</span
                >
              </li>
              <li>
                <div class="lista-ol--cuadro__vineta"><span>4</span></div>
                <span
                  ><b>Decisión: </b>si la estadística de prueba indica que los
                  resultados son improbables bajo la hipótesis nula (es decir,
                  el valor p es menor que α), se rechaza H₀ en favor de
                  H₁.</span
                >
              </li>
            </ol>
          </div>
          <p>
            <strong>Valor p:</strong> el valor p es la probabilidad de obtener
            un resultado igual o más extremo que el observado, suponiendo que la
            hipótesis nula es cierta. Si el valor p es menor que el nivel de
            significancia se concluye que hay suficiente evidencia para rechazar
            la hipótesis nula.
          </p>
        </div>
      </div>
      <p>
        <strong>Ejemplo:</strong> si una empresa está probando si una nueva
        campaña publicitaria mejora las ventas en comparación con la campaña
        anterior, la hipótesis nula podría ser que no hay diferencia en las
        ventas. Al realizar la prueba de hipótesis, si el valor p es menor que
        0.05, la empresa puede concluir que la nueva campaña es
        significativamente más efectiva.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-7 order-lg-1 order-2">
          <div class="bg17 p-4 brad">
            <b>Ejemplo: prueba de hipótesis</b>
            <p class="mt-3">
              Supongamos que queremos probar si el salario promedio de los
              empleados en una empresa es mayor a $ 50.000. Tenemos una muestra
              de 30 empleados con una media de x = 52,000 y una desviación
              estándar de &#8709; = 8,000
            </p>
            <p>
              <b>Hipótesis nula (H<sub>0</sub>):</b> el salario promedio es
              &#181; = 50,000
            </p>
            <p>
              <b>Hipótesis alternativa (H<sub>1</sub>):</b> el salario promedio
              es mayor que a &#181; = 50,000
            </p>
            <p>
              Utilizamos una <b>prueba &#355;</b> para una media muestral. El
              estadístico de prueba &#355; es:
            </p>
            <p class="text-center">
              <img class="img-a img-t" src="@/assets/curso/t5/10.png" alt="" />
            </p>
            <p>
              Con un nivel de significancia o = 0.05, el valor crítico para t
              con 29 grados de libertad es 1.699. Como t = 1.37 &gt; 1.699, no
              podemos rechazar H<sub>0</sub>, lo que indica que no hay
              suficiente evidencia para afirmar que el salario promedio es mayor
              a $ 50,000.
            </p>
          </div>
        </div>
        <div class="col-lg-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t5/9.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema5',
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
