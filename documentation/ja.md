<!-- ELUCENIA technical documentation · jas-fatty-liver-index · ja · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[条件・出典・許諾](https://elucenia.org/ja/tools/jas-fatty-liver-index)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`ageYears`

年 · 範囲: 18–75

### 身長

`heightCm`

cm · 範囲: 100–230

### 体重

`weightKg`

kg · 範囲: 20–400

### 腹囲

`waistCm`

cm · 範囲: 40–220

### 中性脂肪

`triglyceridesMgDl`

mg/dL · 範囲: 1–2000

### GGT

`ggtUl`

U/L · 範囲: 1–2000

## 方法の版

Bedogni 2006 · FLI

## 記載された計算式

L = 0.953 × ln（中性脂肪）+ 0.139 × BMI + 0.718 × ln（GGT）+ 0.053 × 腹囲 − 15.745；FLI = 100 × exp(L)/(1 + exp(L))。中性脂肪はmg/dL、GGTはU/L、BMIはkg/m²、腹囲はcm。

## 限界・対象集団

成人で導出された指標です。脂肪化を診断せず、線維化を評価しません。独立した臨床レビューは未実施です。

## 参考文献

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 方法の版 · 限界・対象集団

