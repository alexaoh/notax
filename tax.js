// Centralized tax calculation logic
const H = 0.4772;
const k = 2.8745e-06;

function T(x) {
  return H * (Math.exp(-k * x) + k * x - 1) / k;
}

const fmtNOK = new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 });
const fmtPct = new Intl.NumberFormat('nb-NO', { style: 'percent', maximumFractionDigits: 2 });

function formatNumber(value) {
  const num = value.replace(/\D/g, '');
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}