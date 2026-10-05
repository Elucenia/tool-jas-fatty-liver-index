<!-- ELUCENIA technical documentation · jas-fatty-liver-index · en · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[conditions, sources and permissions](https://elucenia.org/en/tools/jas-fatty-liver-index)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`ageYears`

years · range: 18–75

### Height

`heightCm`

cm · range: 100–230

### Weight

`weightKg`

kg · range: 20–400

### Waist circumference

`waistCm`

cm · range: 40–220

### Triglycerides

`triglyceridesMgDl`

mg/dL · range: 1–2000

### GGT

`ggtUl`

U/L · range: 1–2000

## Method edition

Bedogni 2006 · FLI

## Documented formula

L = 0.953 × ln(triglycerides) + 0.139 × BMI + 0.718 × ln(GGT) + 0.053 × waist circumference − 15.745; FLI = 100 × exp(L)/(1 + exp(L)). Triglycerides in mg/dL, GGT in U/L, BMI in kg/m² and waist circumference in cm.

## Limits and population

Index derived in adults. Does not diagnose steatosis or assess fibrosis. Independent clinical review has not been performed.

## References

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Method edition · Limits and population

