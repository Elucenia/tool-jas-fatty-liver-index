<!-- ELUCENIA technical documentation · jas-fatty-liver-index · fr · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[conditions, sources et autorisations](https://elucenia.org/fr/outils/jas-fatty-liver-index)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`ageYears`

ans · intervalle: 18–75

### Taille

`heightCm`

cm · intervalle: 100–230

### Poids

`weightKg`

kg · intervalle: 20–400

### Tour de taille

`waistCm`

cm · intervalle: 40–220

### Triglycérides

`triglyceridesMgDl`

mg/dL · intervalle: 1–2000

### GGT

`ggtUl`

U/L · intervalle: 1–2000

## Édition de la méthode

Bedogni 2006 · FLI

## Formule documentée

L = 0,953 × ln(triglycérides) + 0,139 × IMC + 0,718 × ln(GGT) + 0,053 × tour de taille − 15,745 ; FLI = 100 × exp(L)/(1 + exp(L)). Triglycérides en mg/dL, GGT en U/L, IMC en kg/m² et tour de taille en cm.

## Limites et population

Indice dérivé chez l’adulte. Ne diagnostique pas une stéatose et n’évalue pas la fibrose. Revue clinique indépendante non réalisée.

## Références

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Édition de la méthode · Limites et population

