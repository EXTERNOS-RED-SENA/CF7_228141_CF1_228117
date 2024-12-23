<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptos generales de estadística
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto
          img.img-a.img-t(src='@/assets/curso/t1/1.svg', alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0
            | La estadística es una disciplina matemática que se ocupa de la
            | recolección, análisis, interpretación y presentación de datos. Es
            | esencial en diversos campos como la economía, la biología, la
            | ingeniería, y las ciencias sociales, ya que proporciona las
            | herramientas para realizar investigaciones basadas en datos y tomar
            | decisiones informadas.
      #t_1_1.titulo-segundo.color-acento-botones.mt-5
        h2 1.1 Definición de estadística y su propósito
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p
            | La estadística se puede definir como la ciencia que estudia cómo
            | recoger, organizar, analizar e interpretar datos para extraer
            | conclusiones y tomar decisiones. Los datos pueden provenir de
            | diversas fuentes y representan observaciones cuantitativas o
            | cualitativas sobre algún fenómeno o conjunto de fenómenos.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-2
              img.img-t.img-a(src='@/assets/curso/t1/2.svg')
            .col-lg-10
              p.mb-0
                | El propósito principal de la estadística es transformar estos
                | datos en información útil para facilitar la toma de decisiones,
                | describir situaciones o fenómenos y hacer predicciones sobre
                | comportamientos futuros. La estadística proporciona métodos
                | tanto para describir lo que ocurre en un conjunto de datos
                | (estadística descriptiva) como para hacer inferencias y
                | conclusiones más generales a partir de esos datos (estadística
                | inferencial).
        .col-lg-5
          img.img-t.img-a(src='@/assets/curso/t1/3.png')
      Separador
      #t_1_2.titulo-segundo.color-acento-botones
        h2 1.2 Clasificación de la estadística: descriptiva e inferencial
      p
        | La estadística se divide en dos ramas principales: la
        b Estadística descriptiva
        | y la
        b Estadística inferencial
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11
          .titulo-sexto.color-acento-contenido.aos-init.mt-5
            h5 Tabla 1.
            span Clasificación de la estadística
          .table-responsive
            table.tabla-a
              thead.border-0
                tr.text-center(style="background-color: ")
                  th.bg-head.py-3(style='width: 200px') Rama de la Estadística
                  th.bg-head.py-3(style='width: 300px') Descripción
                  th.bg-head.py-3(style='width: 200px') Objetivo
                  th.bg-head.py-3(style='width: 200px') Herramientas Principales
                  th.bg-head.py-3(style='width: 200px') Resultados
              tbody
                tr
                  th Estadística Descriptiva
                  td
                    p
                      | Se refiere a los métodos que permiten resumir y describir
                      | las características principales de un conjunto de datos.
                    p
                      | No hace generalizaciones o inferencias más allá de los
                      | datos analizados; se limita a describir lo que se observa.
                  td Resumir y describir datos de una muestra o población.
                  td
                    p
                      | - 
                      b Medidas de tendencia central
                      | : media, mediana, moda.
                    p
                      | - 
                      b Medidas de dispersión
                      | : desviación estándar, varianza.
                    p
                      | - 
                      b Representaciones gráficas
                      | : histogramas, diagramas de barras, tablas de frecuencias.
                  td Proporciona información exacta y precisa sobre los datos en
                    | cuestión.
                tr
                  th Estadística Inferencial
                  td
                    | Va más allá de la descripción de los datos y se centra en
                    | hacer generalizaciones sobre una población a partir de una
                    | muestra. Utiliza métodos probabilísticos para estimar
                    | parámetros poblacionales, realizar pruebas de hipótesis y
                    | hacer predicciones.
                  td Hacer generalizaciones y predicciones sobre la población a
                    | partir de una muestra representativa.
                  td
                    p
                      | - Intervalos de confianza.
                    p
                      | - Pruebas de hipótesis.
                    p
                      | - Estimación de parámetros.
                  td
                    | Trabaja con probabilidades e incertidumbre, ya que las
                    | conclusiones se basan en una muestra y no en toda la
                    | población. Permite hacer predicciones y generalizaciones
                    | aplicables a la población en general
            figcaption.border.border-secundary.border-start-0.border-end-0.border-2.mt-2.mb-4
              p.text-center.text-dark.mb-0 Fuente: OIT, 2024.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bgi.p-4.brad
              p
                b Ejemplo: diferencia entre estadística descriptiva e
                inferencial
              p
                | Supongamos que estamos analizando las edades de los empleados en
                | una empresa y tenemos los siguientes datos de una muestra de 10
                | empleados:
              p
                | Edades = { 25, 30, 35, 40, 45, 50, 55, 60, 65, 70 }
              p
                b Estadística descriptiva
                | : podemos calcular medidas como la
                | media y la desviación estándar de la muestra.
              img.img-t.img-a(src='@/assets/curso/t1/4.png', alt='Imagen que muestra el cálculo de valores promedio, dispersión y un rango de confianza basado en datos de edades de una muestra')
              p.mt-4
                b Estadística inferencial
                | : si tomamos una muestra similar de
                | otra empresa con 100 empleados, podemos usar un intervalo de
                | confianza para estimar la media de la población de empleados.
              p
                | Si la media muestral es x̅ = 47.5, con un error de
                i SE - 15.14 /&#8730;10 &#8776; 4.78, el intervalo de confianza del 95 %
                | sería:
              p.text-center
                i IC = 47.5 &#177; 1.96 . 4.79 = ( 38.12, 56.88)
              p
                | Esto significa que con un 95 % de confianza, la edad promedio de
                | la población de empleados está entre 38.12 y 56.88 años.
      Separador
      #t_1_3.titulo-segundo.color-acento-botones
        h2 1.3 Aplicaciones prácticas de la estadística en la recolección de datos
      p
        | La estadística se aplica en numerosas áreas del conocimiento y en
        | diversas situaciones del mundo real. Algunas de sus aplicaciones más
        | comunes incluyen:
      .row.justify-content-center.mb-4
        .col-lg-3.my-3.d-none.d-lg-block
          img.img-a.img-t(src='@/assets/curso/t1/5.png', alt='')
        .col-lg-9.my-3
          AccordionRED(tipo='a', clase-tarjeta='tarjeta tarjeta--azul')
            .row.justify-content-center(titulo='Investigación médica')
              .col-lg-12.my-3
                p
                  | En estudios clínicos, la estadística se utiliza para
                  | determinar la efectividad de un tratamiento a partir de datos
                  | obtenidos de un grupo de pacientes. Los investigadores
                  | recolectan datos sobre el estado de salud de los pacientes
                  | antes y después de recibir el tratamiento, y luego usan
                  | métodos estadísticos para comparar los resultados.
            .row.justify-content-center(titulo='Ciencia social')
              .col-lg-12.my-3
                p
                  | En estudios de encuestas o investigaciones sociales, la
                  | estadística descriptiva puede resumir las respuestas de los
                  | encuestados sobre diversos temas, como la opinión política o
                  | el nivel de satisfacción con servicios públicos. La
                  | estadística inferencial se utiliza para hacer inferencias
                  | sobre el comportamiento de toda la población a partir de las
                  | respuestas de una muestra representativa.
            .row.justify-content-center(titulo='Marketing')
              .col-lg-12.my-3
                p
                  | Las empresas utilizan la estadística para analizar patrones de
                  | compra de los consumidores y predecir tendencias futuras. Los
                  | análisis descriptivos permiten entender el comportamiento de
                  | compra actual, mientras que los análisis inferenciales pueden
                  | ayudar a predecir futuras ventas y adaptar estrategias de
                  | marketing.
            .row.justify-content-center(titulo='Producción industrial')
              .col-lg-12.my-3
                p
                  | En control de calidad, la estadística es fundamental para
                  | monitorear procesos y asegurar que los productos cumplan con
                  | los estándares requeridos. Se recolectan datos sobre muestras
                  | de productos fabricados, y a partir de los análisis
                  | estadísticos se decide si el proceso debe ajustarse o
                  | continuar.
            .row.justify-content-center(titulo='Investigación científica')
              .col-lg-12.my-3
                p
                  | En campos como la biología o la física, la estadística es
                  | vital para interpretar los resultados de experimentos. Los
                  | científicos recopilan datos experimentales, los analizan y
                  | hacen inferencias sobre teorías o hipótesis a partir de esos
                  | datos.
</template>

<script>
export default {
  name: 'Tema1',
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
