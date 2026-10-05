<!-- ELUCENIA technical documentation · jas-fatty-liver-index · it · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/jas-fatty-liver-index)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`ageYears`

anni · intervallo: 18–75

### Altezza

`heightCm`

cm · intervallo: 100–230

### Peso

`weightKg`

kg · intervallo: 20–400

### Circonferenza della vita

`waistCm`

cm · intervallo: 40–220

### Trigliceridi

`triglyceridesMgDl`

mg/dL · intervallo: 1–2000

### GGT

`ggtUl`

U/L · intervallo: 1–2000

## Edizione del metodo

Bedogni 2006 · FLI

## Formula documentata

L = 0,953 × ln(trigliceridi) + 0,139 × IMC + 0,718 × ln(GGT) + 0,053 × circonferenza vita − 15,745; FLI = 100 × exp(L)/(1 + exp(L)). Trigliceridi in mg/dL, GGT in U/L, IMC in kg/m² e circonferenza vita in cm.

## Limiti e popolazione

Indice derivato negli adulti. Non diagnostica steatosi né valuta fibrosi. Revisione clinica indipendente non eseguita.

## Riferimenti

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Edizione del metodo · Limiti e popolazione

