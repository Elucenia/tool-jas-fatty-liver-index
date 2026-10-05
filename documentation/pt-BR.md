<!-- ELUCENIA technical documentation · jas-fatty-liver-index · pt-BR · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/jas-fatty-liver-index)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`ageYears`

anos · intervalo: 18–75

### Altura

`heightCm`

cm · intervalo: 100–230

### Peso

`weightKg`

kg · intervalo: 20–400

### Cintura

`waistCm`

cm · intervalo: 40–220

### Triglicerídeos

`triglyceridesMgDl`

mg/dL · intervalo: 1–2000

### GGT

`ggtUl`

U/L · intervalo: 1–2000

## Edição do método

Bedogni 2006 · FLI

## Fórmula documentada

L = 0,953 × ln(triglicerídeos) + 0,139 × IMC + 0,718 × ln(GGT) + 0,053 × cintura − 15,745; FLI = 100 × exp(L)/(1 + exp(L)). Triglicerídeos em mg/dL, GGT em U/L, IMC em kg/m² e cintura em cm.

## Limites e população

Índice derivado em adultos. Não diagnostica esteatose nem avalia fibrose. Revisão clínica independente não realizada.

## Referências

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Edição do método · Limites e população

