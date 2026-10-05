<!-- ELUCENIA technical documentation · jas-fatty-liver-index · de · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/jas-fatty-liver-index)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`ageYears`

Jahre · Bereich: 18–75

### Körpergröße

`heightCm`

cm · Bereich: 100–230

### Gewicht

`weightKg`

kg · Bereich: 20–400

### Taillenumfang

`waistCm`

cm · Bereich: 40–220

### Triglyzeride

`triglyceridesMgDl`

mg/dL · Bereich: 1–2000

### GGT

`ggtUl`

U/L · Bereich: 1–2000

## Fassung der Methode

Bedogni 2006 · FLI

## Dokumentierte Formel

L = 0,953 × ln(Triglyzeride) + 0,139 × BMI + 0,718 × ln(GGT) + 0,053 × Taillenumfang − 15,745; FLI = 100 × exp(L)/(1 + exp(L)). Triglyzeride in mg/dL, GGT in U/L, BMI in kg/m² und Taillenumfang in cm.

## Grenzen und Population

Bei Erwachsenen abgeleiteter Index. Diagnostiziert keine Steatose und beurteilt keine Fibrose. Keine unabhängige klinische Prüfung durchgeführt.

## Referenzen

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Fassung der Methode · Grenzen und Population

