<!-- ELUCENIA technical documentation · jas-fatty-liver-index · es · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/jas-fatty-liver-index)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`ageYears`

años · intervalo: 18–75

### Estatura

`heightCm`

cm · intervalo: 100–230

### Peso

`weightKg`

kg · intervalo: 20–400

### Circunferencia de cintura

`waistCm`

cm · intervalo: 40–220

### Triglicéridos

`triglyceridesMgDl`

mg/dL · intervalo: 1–2000

### GGT

`ggtUl`

U/L · intervalo: 1–2000

## Edición del método

Bedogni 2006 · FLI

## Fórmula documentada

L = 0,953 × ln(triglicéridos) + 0,139 × IMC + 0,718 × ln(GGT) + 0,053 × cintura − 15,745; FLI = 100 × exp(L)/(1 + exp(L)). Triglicéridos en mg/dL, GGT en U/L, IMC en kg/m² y cintura en cm.

## Límites y población

Índice derivado en adultos. No diagnostica esteatosis ni evalúa fibrosis. No se ha realizado revisión clínica independiente.

## Referencias

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Edición del método · Límites y población

