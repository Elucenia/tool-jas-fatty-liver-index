'use strict';

// Bedogni et al., BMC Gastroenterology 2006;6:33, DOI 10.1186/1471-230X-6-33.
// This mathematical implementation has not received independent clinical review.
function number(input, name, min, max) {
  const scalar=typeof input==='number'||typeof input==='string'&&/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(input.trim());
  const value = scalar ? Number(input) : NaN;
  if (!Number.isFinite(value) || value < min || value > max) {
    const error = new Error(`${name}: informe um número entre ${min} e ${max}.`);
    error.field = name;
    throw error;
  }
  return value;
}

function estimate(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Entrada inválida.');
  number(input.ageYears, 'Idade', 18, 75);
  const heightCm = number(input.heightCm, 'Altura', 100, 230);
  const weightKg = number(input.weightKg, 'Peso', 20, 400);
  const waistCm = number(input.waistCm, 'Cintura', 40, 220);
  const triglyceridesMgDl = number(input.triglyceridesMgDl, 'Triglicerídeos', 1, 2000);
  const ggtUl = number(input.ggtUl, 'GGT', 1, 2000);
  const bmi = weightKg / ((heightCm / 100) ** 2);
  const logit = 0.953 * Math.log(triglyceridesMgDl) + 0.139 * bmi
    + 0.718 * Math.log(ggtUl) + 0.053 * waistCm - 15.745;
  const value = 100 / (1 + Math.exp(-logit));
  return {
    method: 'Bedogni 2006 · Fatty Liver Index',
    value: Math.round(value * 10) / 10,
    unit: 'pontos (0–100)',
    bmi: Math.round(bmi * 10) / 10,
    limitations: 'Índice derivado em adultos de uma população do norte da Itália. Não diagnostica esteatose individualmente nem avalia fibrose. A aplicabilidade clínica e a tradução desta implementação aguardam revisão independente.',
    source: 'https://doi.org/10.1186/1471-230X-6-33',
  };
}

module.exports = { estimate };
