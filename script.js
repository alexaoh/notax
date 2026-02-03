function calcAndRender(x) {
  const grossOut = document.getElementById('grossOut');
  const netEl = document.getElementById('net');
  const taxEl = document.getElementById('tax');
  const avgRateEl = document.getElementById('avgRate');
  const marginalEl = document.getElementById('marginal');

  if (!Number.isFinite(x) || x <= 0) {
    grossOut.textContent = '—';
    netEl.textContent = '—';
    taxEl.textContent = '—';
    avgRateEl.textContent = '—';
    marginalEl.textContent = '—';
    return;
  }

  const tax = T(x);
  const net = x - tax;
  const tax1 = T(x + 1);
  const marginal = tax1 - tax;
  const avgRate = tax / x;

  grossOut.textContent = fmtNOK.format(x);
  netEl.textContent = fmtNOK.format(Math.max(0, net));
  taxEl.textContent = fmtNOK.format(Math.max(0, tax));
  avgRateEl.textContent = fmtPct.format(Math.max(0, Math.min(1, avgRate)));
  marginalEl.textContent = fmtPct.format(Math.max(0, Math.min(1, marginal)));
}

document.getElementById('tax-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = document.getElementById('gross').value.trim();
  const cleaned = raw.replace(/\s/g, '');
  const x = Number(cleaned);
  document.getElementById('results').classList.toggle('hidden', !(Number.isFinite(x) && x > 0));
  calcAndRender(x);
});

const grossInput = document.getElementById('gross');

grossInput.addEventListener('input', (e) => {
  const formatted = formatNumber(e.target.value);
  e.target.value = formatted;
  // Set cursor to end
  e.target.setSelectionRange(formatted.length, formatted.length);
});

function getCurrentValue() {
  const raw = grossInput.value.trim();
  const cleaned = raw.replace(/\s/g, '');
  return Number(cleaned) || 0;
}

function setValue(num) {
  const formatted = formatNumber(num.toString());
  grossInput.value = formatted;
}

document.getElementById('up').addEventListener('click', () => {
  const current = getCurrentValue();
  setValue(current + 10000);
});

document.getElementById('down').addEventListener('click', () => {
  const current = getCurrentValue();
  setValue(Math.max(0, current - 10000));
});
