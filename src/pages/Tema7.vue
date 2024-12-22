<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>7</span></div>
        <h1>Fuentes de datos</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/t7/1.png" />
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg28 p-3 brad j1 h-100">
            <p class="mb-0">
              Las fuentes de datos son los orígenes desde los cuales se obtienen
              los datos necesarios para realizar análisis estadísticos. Se
              requiere identificar correctamente las fuentes de datos adecuadas,
              ya que la calidad, confiabilidad y relevancia de los datos
              dependen directamente de su procedencia. Existen diferentes tipos
              de fuentes de datos, y cada una tiene sus características
              particulares, ventajas y desventajas. Además, evaluar la
              confiabilidad de las fuentes es fundamental para garantizar la
              validez de los resultados obtenidos a partir de los datos.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/t7/2.png" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_7_1" class="titulo-segundo color-acento-botones">
        <h2>7.1 Clasificación de fuentes de datos: primarias y secundarias</h2>
      </div>
      <p>
        Las fuentes de datos se clasifican en dos grandes categorías: fuentes
        primarias y fuentes secundarias. Esta clasificación depende de si los
        datos fueron recolectados directamente por el investigador o si fueron
        obtenidos de fuentes ya existentes.
      </p>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/t7/3.png" alt="" />
        </div>
        <div class="col-lg-7">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Fuentes de datos primarias</h5>
              </div>
              <p>
                <b>Definición:</b> son datos recolectados de primera mano, es
                decir, directamente por el investigador o la entidad que lleva a
                cabo el estudio. Este tipo de fuente se utiliza cuando los datos
                necesarios no existen previamente o cuando es importante tener
                control total sobre el proceso de recolección de datos.
              </p>
              <p>
                <b>Ejemplos: </b>encuestas, entrevistas, experimentos,
                observación directa.
              </p>
              <p class="mb-0"><b>Ventajas</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Control total sobre el proceso de recolección de
                    datos.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Datos personalizados y específicos para los objetivos del
                    estudio.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Mayor grado de precisión y relevancia.</span>
                </li>
              </ul>
              <p class="mb-0"><b>Desventajas</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >El proceso de recolección puede ser costoso y llevar mucho
                    tiempo.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Puede ser difícil acceder a ciertos tipos de datos de
                    manera directa (por ejemplo, en estudios con grandes
                    poblaciones).</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-7 order-lg-1 order-2">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12">
              <div class="titulo mb-4" data-aos="flip-up">
                <h5 class="mb-0 p-1">Fuentes de datos secundarias</h5>
              </div>
              <p>
                <b>Definición:</b> son datos que ya han sido recolectados por
                otra persona o entidad para otros fines, pero que se pueden
                reutilizar en el estudio actual. Los datos secundarios están
                disponibles en informes, bases de datos, libros, publicaciones
                académicas, entre otros.
              </p>
              <p>
                <b>Ejemplos: </b>informes gubernamentales, datos de censos,
                estadísticas de instituciones, investigaciones anteriores, bases
                de datos públicas.
              </p>
              <p class="mb-0"><b>Ventajas</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Los datos ya están recolectados y disponibles, lo que
                    ahorra tiempo y recursos.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Se pueden obtener datos históricos o de poblaciones grandes
                    que serían difíciles de recolectar de manera primaria.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Es más accesible y económico.</span>
                </li>
              </ul>
              <p class="mb-0"><b>Desventajas</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Menor control sobre la calidad de los datos y el proceso de
                    recolección.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Los datos pueden no ser completamente relevantes o
                    específicos para el estudio actual.</span
                  >
                </li>
                <li class="mb-0">
                  <i class="fas fa-check v1"></i
                  ><span>Pueden no estar actualizados o ser obsoletos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t7/4.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_7_2" class="titulo-segundo color-acento-botones">
        <h2>
          7.2 Métodos para evaluar la confiabilidad y validez de las fuentes
        </h2>
      </div>
      <p>
        La confiabilidad y validez de las fuentes de datos son aspectos críticos
        que deben evaluarse antes de usar los datos en un análisis. Los datos
        confiables son aquellos que pueden replicarse y que producen resultados
        consistentes, mientras que los datos válidos son aquellos que realmente
        miden lo que se supone que deben medir.
      </p>
      <TabsC class="color-acento-botones mb-5">
        <div
          class="p-4 py-99 py-md-5"
          titulo="Criterios para evaluar la confiabilidad de una fuente de datos"
        >
          <div class="row">
            <div class="col-lg-4">
              <img class="img-a img-t" src="@/assets/curso/t7/5.png" alt="" />
            </div>
            <div class="col-lg-8 mb-4 mb-md-0 p-4">
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Procedencia:</b> identificar el origen de los datos. Los
                    datos provenientes de instituciones reconocidas, agencias
                    gubernamentales o entidades de investigación respetadas
                    suelen ser más confiables.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Método de recolección:</b> revisar cómo se obtuvieron
                    los datos. Métodos rigurosos y estandarizados de recolección
                    aumentan la confiabilidad.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Actualidad:</b> evaluar si los datos son recientes o si
                    han quedado obsoletos. Datos más recientes son preferibles,
                    especialmente en estudios que dependen de información
                    actual.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Consistencia:</b> verificar si los datos son
                    consistentes a lo largo del tiempo y entre diferentes
                    fuentes. Inconsistencias pueden indicar problemas en la
                    recolección o procesamiento de los datos.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="p-4 py-99 py-md-5"
          titulo="Criterios para evaluar la validez de una fuente de datos"
        >
          <div class="row">
            <div class="col-lg-4">
              <img class="img-a img-t" src="@/assets/curso/t7/6.png" alt="" />
            </div>
            <div class="col-lg-8 mb-4 mb-md-0 p-4">
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Pertinencia:</b> los datos deben ser relevantes y
                    directamente aplicables a los objetivos del estudio. Datos
                    irrelevantes o fuera de contexto pueden sesgar los
                    resultados.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Exactitud:</b> se refiere a qué tan bien los datos
                    reflejan la realidad que se pretende medir. Las definiciones
                    utilizadas en la recolección de datos deben ser claras y
                    adecuadas.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Transparencia:</b> las fuentes confiables suelen ser
                    transparentes sobre los métodos y procedimientos utilizados
                    para recolectar los datos. La falta de información sobre el
                    origen y la metodología de los datos puede ser una señal de
                    baja calidad.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    ><b>Imparcialidad:</b> es importante que la fuente no tenga
                    conflictos de interés o sesgos que puedan haber influido en
                    la recolección o presentación de los datos. Fuentes
                    imparciales y objetivas proporcionan datos más
                    confiables.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div id="t_7_3" class="titulo-segundo color-acento-botones">
        <h2>7.3 Uso de fuentes de datos primarias en encuestas y estudios</h2>
      </div>
      <p>
        Las <b>fuentes de datos primarias</b> son especialmente útiles en
        estudios que requieren datos personalizados y específicos, como
        encuestas o investigaciones que buscan medir una característica
        particular de una población. Algunos aspectos importantes al usar
        fuentes primarias incluyen:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/t6/10.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Diseño de encuestas"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Una encuesta bien diseñada es clave para recolectar datos
                  primarios de alta calidad. Las preguntas deben ser claras,
                  precisas y estar alineadas con los objetivos del estudio.
                </p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><strong>Preguntas cerradas:</strong> ofrecen opciones de
                      respuesta predefinidas y son fáciles de analizar.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><strong>Preguntas abiertas:</strong> permiten respuestas
                      más detalladas, aunque son más difíciles de procesar y
                      analizar.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Control de calidad">
              <div class="col-lg-12 my-3">
                <p>
                  Durante la recolección de datos primarios, es fundamental
                  implementar mecanismos para garantizar la calidad de los
                  datos, como la capacitación de los encuestadores, la
                  supervisión de las entrevistas y la realización de pruebas
                  piloto.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Ventajas del uso de fuentes primarias"
            >
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Proporcionan datos actualizados y específicos para el
                      estudio.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Mayor flexibilidad para ajustar el diseño de la
                      recolección de datos según las necesidades del
                      proyecto.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Desafíos">
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Requiere más tiempo y recursos que el uso de fuentes
                      secundarias.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >La recolección de datos primarios puede estar sujeta a
                      sesgos si no se diseña adecuadamente el proceso (por
                      ejemplo, sesgo de selección o sesgo de respuesta).</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_7_4" class="titulo-segundo color-acento-botones">
        <h2>
          7.4 Fuentes de datos secundarias: bases de datos públicas, informes y
          publicaciones
        </h2>
      </div>
      <p>
        Las <b>fuentes de datos secundarias</b> incluyen una amplia gama de
        materiales que pueden ser reutilizados para investigaciones actuales.
        Algunos ejemplos de estas fuentes incluyen:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-lg-1 order-2">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta tarjeta--azul">
            <div
              class="row justify-content-center"
              titulo="Bases de datos públicas"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Muchos gobiernos, organizaciones no gubernamentales (ONGs) y
                  organismos internacionales proporcionan acceso gratuito a
                  bases de datos que contienen información estadística y
                  registros administrativos. Estas bases de datos pueden ser
                  especialmente útiles para estudios a gran escala.
                </p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Ejemplos:</b> datos de censos, bases de datos de
                      salud, datos económicos, estadísticas educativas.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Informes">
              <div class="col-lg-12 my-3">
                <p>
                  Los informes de instituciones académicas, agencias
                  gubernamentales, empresas privadas y organismos
                  internacionales son otra fuente importante de datos
                  secundarios. Estos informes a menudo contienen análisis
                  exhaustivos y datos ya procesados.
                </p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Ejemplos:</b> informes de desarrollo humano, informes
                      de salud pública, reportes de mercado.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Publicaciones académicas"
            >
              <div class="col-lg-12 my-3">
                <p>
                  Los artículos de investigación publicados en revistas
                  científicas a menudo presentan datos que se pueden reutilizar
                  en estudios posteriores, especialmente en revisiones de
                  literatura o estudios comparativos.
                </p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Ejemplos:</b> estudios de caso, revisiones
                      sistemáticas, análisis estadísticos previos.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="row justify-content-center"
              titulo="Ventajas del uso de fuentes secundarias"
            >
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Son de fácil acceso y generalmente menos costosas que la
                      recolección de datos primarios.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Proporcionan datos históricos que permiten realizar
                      estudios longitudinales o analizar tendencias a lo largo
                      del tiempo.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row justify-content-center" titulo="Limitaciones">
              <div class="col-lg-12 my-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >La relevancia de los datos secundarios puede no coincidir
                      completamente con los objetivos del estudio.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Los datos secundarios pueden estar desactualizados o no
                      haber sido recolectados con el rigor necesario.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-3 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/t7/8.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_7_5" class="titulo-segundo color-acento-botones">
        <h2>
          7.5 Estrategias para combinar fuentes de datos múltiples en un
          análisis estadístico
        </h2>
      </div>
      <p>
        En muchos estudios estadísticos, se pueden combinar fuentes de datos
        primarias y secundarias para obtener una visión más completa y
        enriquecida del fenómeno que se está analizando. Algunas estrategias
        para combinar estas fuentes incluyen:
      </p>
      <div class="row bg15s align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="bgw brad p-5 my-5">
            <CarouselRED tipo="b">
              <div class="row justify-content-center">
                <div class="col-lg-7 my-2">
                  <h5>Triangulación</h5>
                  <p>
                    Consiste en utilizar múltiples fuentes de datos para
                    verificar y validar los resultados obtenidos. Por ejemplo,
                    si un estudio de mercado utiliza encuestas primarias y datos
                    secundarios de informes del sector, la triangulación puede
                    ayudar a confirmar si las tendencias observadas son
                    coherentes entre las diferentes fuentes.
                  </p>
                </div>
                <div class="col-lg-4 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/t7/9.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-7 my-2">
                  <h5>Integración de datos</h5>
                  <p>
                    En algunos estudios, es posible combinar bases de datos
                    provenientes de distintas fuentes para realizar análisis más
                    detallados. Esto es común en estudios de salud, donde se
                    pueden combinar registros de pacientes con datos
                    demográficos o socioeconómicos.
                  </p>
                </div>
                <div class="col-lg-4 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/t7/10.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-7 my-2">
                  <h5>Uso secuencial de fuentes</h5>
                  <p>
                    En algunos casos, los datos secundarios se utilizan como una
                    primera aproximación para identificar tendencias o áreas de
                    interés, y luego se recolectan datos primarios más
                    específicos para profundizar en esas áreas.
                  </p>
                </div>
                <div class="col-lg-4 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/t7/11.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-7 my-2">
                  <h5>Análisis comparativo</h5>
                  <p>
                    Comparar los datos obtenidos de distintas fuentes (primarias
                    y secundarias) para analizar discrepancias y mejorar la
                    comprensión del fenómeno. Las diferencias entre los
                    resultados pueden proporcionar información valiosa sobre las
                    limitaciones de las distintas fuentes de datos o sobre
                    variaciones en el fenómeno estudiado.
                  </p>
                </div>
                <div class="col-lg-4 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/t7/12.png"
                    alt=""
                  />
                </div>
              </div>
            </CarouselRED>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 my-3">
          <div
            class="row justify-content-center align-items-center p-4 brad mb-5"
          >
            <div class="col-lg-auto">
              <img class="img-a img-t" src="@/assets/curso/t7/13.svg" alt="" />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Las fuentes de datos, tanto primarias como secundarias, son
                fundamentales para la realización de estudios estadísticos. Las
                fuentes primarias permiten recolectar datos específicos y
                actualizados, mientras que las fuentes secundarias proporcionan
                acceso a grandes volúmenes de datos ya disponibles. Evaluar la
                confiabilidad y validez de las fuentes de datos es necesario
                para asegurar la calidad del análisis y las conclusiones
                obtenidas. La combinación de diversas fuentes de datos puede
                enriquecer los estudios y permitir un análisis más completo y
                preciso del fenómeno en estudio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 my-3">
          <div
            class="row justify-content-center align-items-center bg13 p-4 brad mb-5"
          >
            <div class="col-lg-7">
              <p class="mb-4">
                <strong>Ejemplo:</strong> evaluación de fuentes de datos.
              </p>
              <p>
                Supongamos que estamos utilizando las siguientes fuentes de
                datos para un estudio:
              </p>
              <ol class="lista-ol--cuadro fa-ul px-2">
                <li>
                  <div class="lista-ol--cuadro__vineta"><span>1</span></div>
                  <span
                    ><b>Datos primarios:</b> encuestas aplicadas a una muestra
                    de clientes.</span
                  >
                </li>
                <li>
                  <div class="lista-ol--cuadro__vineta"><span>2</span></div>
                  <span
                    ><b>Datos secundarios:</b> reportes de satisfacción del
                    cliente proporcionados por la empresa de los últimos cinco
                    años.</span
                  >
                </li>
              </ol>
              <p>Evaluamos la confiabilidad de las fuentes:</p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Los datos primarios son confiables porque controlamos el
                    proceso de recolección.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Los datos secundarios son útiles, pero pueden no estar
                    actualizados o tener sesgos relacionados con el método de
                    recolección anterior.</span
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <img class="img-a img-t" src="@/assets/curso/t7/14.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido offset-2"
        data-aos="zoom-in"
      >
        <h5>Figura 2.</h5>
        <span> Tipos de Fuentes de Datos</span>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-8 mb-3">
          <figure>
            <img
              src="@/assets/curso/t7/15.svg"
              alt="La Figura 2 se denomina «Tipos de fuentes de datos» y presenta los diversos tipos de fuente según el origen, la naturaleza, el formato, la procedencia y la accesibilidad."
            />
          </figure>
        </div>
        <div class="col-lg-8">
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema7',
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
