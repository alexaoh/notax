# Norwegian Income Tax Estimator

This is a tiny static site that estimates Norwegian income tax using a smooth approximation.

- Formula: `T(x) = H * (exp(-k*x) + k*x - 1) / k`
- Constants: `H = 0.4772`, `k = 2.8745e-06`

## Dependencies

- **Python 3.x**: Required for running the local development server. Most systems come with Python pre-installed. If not, download from [python.org](https://www.python.org/downloads/).
- **Web Browser**: Any modern browser (Chrome, Firefox, Safari, Edge) to view the site.

Optional alternatives:
- **Node.js**: For alternative local servers (`npx serve` or `npx http-server`)

## Files
- [index.html](index.html): Main estimator page
- [compare.html](compare.html): Compare two incomes with table and visual bars
- [chart.html](chart.html): Charts showing how tax calculations change with income levels
- [tax.js](tax.js): Shared tax calculation functions and formatters
- [script.js](script.js): JS for main page
- [styles.css](styles.css): Shared styles

## Build
No build step is required. The site is pure static assets.

## Run Locally

### Using Python (Recommended)
Python's built-in HTTP server is the simplest option with no additional dependencies:

```bash
python3 -m http.server 8000
# Open http://localhost:8000/index.html
```

Or using the provided Makefile:
```bash
make serve
```

### Using Node.js (Alternative)
If you have Node.js installed:

```bash
cd tax-calc-site
npx serve .
# or: npx http-server -p 8000
```

### Using Makefile
The repository includes a Makefile for convenience:

- `make serve`: Start local Python HTTP server on port 8000

## Notes
- Outputs: gross, net, total tax, average tax rate, marginal tax (`T(x+1) - T(x)`).
- This is an approximation for 2024 and not official tax advice.
