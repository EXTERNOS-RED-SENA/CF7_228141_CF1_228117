<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Determinación de la muestra
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/t8/1.svg" alt="")
      .col.pt-lg-0.pt-md-4
        p.mb-0
          | La determinación de la muestra es un paso clave en cualquier estudio
          | estadístico que implica hacer inferencias sobre una población. La
          | muestra es el subconjunto de la población que se selecciona para ser
          | estudiado, y su calidad y representatividad determinan en gran
          | medida la validez de los resultados obtenidos. Definir el tamaño de
          | la muestra y los métodos de selección adecuados es esencial para
          | asegurar que las conclusiones se puedan generalizar correctamente a
          | la población completa.
    .row.justify-content-center.align-items-center
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          h5.mb-0.p-1 Métodos para seleccionar una muestra adecuada
        p
          | Existen varios métodos para seleccionar una muestra adecuada, y la
          | elección del método depende del tipo de estudio, los recursos
          | disponibles y las características de la población. Estos métodos se
          | dividen principalmente en dos categorías:
          b.muestreo probabilístico y muestreo no probabilístico.
    
        .titulo-sexto.color-acento-contenido.aos-init.mt-5
          h5 Tabla 2.
          span Métodos de muestreo
        div(style="overflow-x: auto")
          table.table.tabla-a
            caption Fuente: OIT, 2024.
            thead.border-0
              tr.text-center
                th(style="background-color: #3BA935 ") Tipo de Muestreo
                th(style="background-color: #3BA935 ") Descripción
                th(style="background-color: #3BA935 ") Métodos Principales
            tbody
              tr
                td Muestreo probabilístico
                td
                  p
                    | Es un tipo de muestreo donde cada individuo de la
                    | población tiene una probabilidad conocida y no nula de ser
                    | seleccionado.
                  p
                    | Es el método preferido para asegurar que la muestra sea
                    | representativa de la población.
                td
                  p
                    | Muestreo aleatorio simple: cada elemento de la
                    | población tiene la misma probabilidad de ser seleccionado.
                    | Ideal cuando la población es homogénea.
                  p
                    | Muestreo sistemático: se selecciona un elemento
                    | inicial al azar y luego a intervalos regulares.
                  p
                    | Muestreo estratificado: la población se divide en
                    | subgrupos (estratos) y se selecciona una muestra aleatoria
                    | de cada uno.
                  p
                    | Muestreo por conglomerados: se divide en grupos
                    | heterogéneos, seleccionando uno o varios para estudio.
              tr
                td Muestreo no probabilístico
                td
                  p
                    | En este tipo de muestreo, no todos los elementos de la
                    | población tienen una probabilidad conocida de ser
                    | seleccionados. Puede ser menos representativo, pero es
                    | útil en estudios exploratorios o cuando no es posible
                    | aplicar un muestreo probabilístico.
                td
                  p
                    | Muestreo por conveniencia: se elige una muestra
                    | fácil de acceder, como los primeros individuos
                    | disponibles.
                  p
                    | Muestreo por cuotas: se seleccionan sujetos en
                    | proporciones específicas para representar ciertas
                    | características de la población, sin aleatoriedad en cada
                    | proporción.
                  p
                    | Muestreo intencional o dirigido: el investigador
                    | selecciona a los individuos que considera más adecuados
                    | para el estudio.
    Separador
    .titulo-segundo.color-acento-botones(id="t_8_1")
      h2 8.1 Criterios para seleccionar una muestra representativa
    p
      | Una muestra representativa es aquella que refleja fielmente las
      | características de la población completa. Para asegurar que una muestra
      | sea representativa, es necesario seguir ciertos criterios durante su
      | selección:
    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(src="@/assets/curso/t8/2.png" alt="")
      .col-lg-8.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Diversidad de la población")
            .col-lg-12.my-3
              p
                | La muestra debe incluir a individuos con diferentes
                | características, como edad, género, nivel educativo, ingresos,
                | etc., en proporciones similares a las de la población. Esto
                | asegura que todos los subgrupos de la población estén
                | representados en la muestra.
          .row.justify-content-center(titulo="Tamaño de la muestra")
            .col-lg-12.my-3
              p
                | Un tamaño de muestra más grande tiende a ser más
                | representativo, ya que permite capturar una mayor variabilidad
                | dentro de la población. Sin embargo, el tamaño adecuado
                | depende del tipo de análisis que se realizará y de los
                | recursos disponibles.
          .row.justify-content-center(titulo="Muestreo aleatorio")
            .col-lg-12.my-3
              p
                | Siempre que sea posible, se deben usar métodos de muestreo
                | probabilísticos para evitar sesgos en la selección de los
                | individuos. Los métodos no probabilísticos solo deben usarse
                | cuando no se dispone de otra opción.
          .row.justify-content-center(titulo="Accesibilidad y viabilidad")
            .col-lg-12.my-3
              p
                | En algunos casos, ciertas partes de la población pueden ser
                | difíciles de acceder o estar dispersas geográficamente. Es
                | importante que la muestra sea lo suficientemente accesible
                | para recolectar datos de manera eficiente sin comprometer la
                | representatividad.
    Separador
    .titulo-segundo.color-acento-botones(id="t_8_2")
      h2 8.2 Consideraciones al seleccionar una muestra para minimizar el error
    p
      | El error muestral es la diferencia entre el valor estimado a partir de
      | la muestra y el valor real de la población. Para minimizar este error y
      | mejorar la precisión de los resultados, es necesario tener en cuenta
      | varias consideraciones al seleccionar una muestra:
    .row.justify-content-center.mb-4
      .col-lg-7.my-3.order-lg-1.order-2
        AccordionRED(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Tamaño de la muestra")
            .col-lg-12.my-3
              p
                | El tamaño de la muestra es uno de los factores más importantes
                | para reducir el error muestral. Un tamaño de muestra mayor
                | generalmente disminuye el error muestral, pero hay un punto en
                | el que los beneficios adicionales se reducen.
          .row.justify-content-center(titulo="Aleatoriedad")
            .col-lg-12.my-3
              p
                | La selección aleatoria de los elementos de la muestra asegura
                | que todos los individuos de la población tengan la misma
                | probabilidad de ser seleccionados, lo que reduce el sesgo y
                | aumenta la precisión de la estimación.
          .row.justify-content-center(titulo="Homogeneidad de la población")
            .col-lg-12.my-3
              p
                | Si la población es muy heterogénea (con mucha variabilidad
                | interna), se debe tener especial cuidado en la selección de la
                | muestra para que incluya a todos los subgrupos relevantes. El
                | uso de muestreo estratificado es particularmente útil en este
                | caso.
          .row.justify-content-center(titulo="Métodos de recolección de datos")
            .col-lg-12.my-3
              p
                | Es importante que los métodos utilizados para recolectar datos
                | de la muestra sean consistentes y que no introduzcan sesgos.
                | La capacitación del personal encargado de la recolección de
</template>

<script>
export default {
  name: 'CursoDeterminoMuestra',
  components: {
    // BannerInterno,
    // AccordionRED
  },
}
</script>

<style scoped>
/* Añadir los estilos personalizados aquí */
</style>
