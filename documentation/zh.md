<!-- ELUCENIA technical documentation · jas-fatty-liver-index · zh · no clinical/professional/rights approval -->

# Fatty Liver Index · Bedogni 2006

[条件、来源与许可](https://elucenia.org/zh/tools/jas-fatty-liver-index)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`ageYears`

年 · 范围: 18–75

### 身高

`heightCm`

cm · 范围: 100–230

### 体重

`weightKg`

kg · 范围: 20–400

### 腰围

`waistCm`

cm · 范围: 40–220

### 甘油三酯

`triglyceridesMgDl`

mg/dL · 范围: 1–2000

### GGT

`ggtUl`

U/L · 范围: 1–2000

## 方法版本

Bedogni 2006 · FLI

## 已记录的公式

L = 0.953 × ln（甘油三酯）+ 0.139 × BMI + 0.718 × ln（GGT）+ 0.053 × 腰围 − 15.745；FLI = 100 × exp(L)/(1 + exp(L))。甘油三酯单位mg/dL，GGT单位U/L，BMI单位kg/m²，腰围单位cm。

## 限制与适用人群

源自成人研究的指数。不诊断脂肪变性，也不评估纤维化。尚未进行独立临床审核。

## 参考文献

- [Bedogni et al. 2006 · Fatty Liver Index](https://doi.org/10.1186/1471-230X-6-33)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 方法版本 · 限制与适用人群

