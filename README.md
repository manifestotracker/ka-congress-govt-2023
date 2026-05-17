# Karnataka Promise Tracker

A public accountability tracker for the Karnataka Congress government's 2023 election manifesto promises, covering the full 5-year term (May 2023 – May 2028).

**Live site:** https://ka-congress-govt-2023.pages.dev/

---

## Project Structure

```
karnataka-tracker/
├── index.html          # Main page (markup only, no inline JS or CSS)
├── css/
│   └── styles.css      # All styles and CSS variables
├── js/
│   ├── promises.js     # Promise data — edit this to update statuses
│   └── app.js          # Rendering, stats counter, countdown timer, nav
└── README.md
```

---

## How to Update a Promise

All promise data lives in **`js/promises.js`**. Each item has:

| Field | Values |
|---|---|
| `text` | Verbatim promise text from the manifesto |
| `status` | `"Pending"` · `"Fulfilled"` · `"In Progress"` · `"Evaded"` |
| `link` | Source URL, or `"N/A"` |
| `sourceName` | Display name of the source outlet |
| `sourceHeading` | Article headline or explanatory note |
| `updates` | Array of `{ link, sourceName, sourceHeading }` for multiple sources |

**To update a status**, find the promise in `js/promises.js`, change its `status` field, and add a `link` / `sourceName` / `sourceHeading` (or an `updates` array if there are multiple sources).

Example — marking a promise as fulfilled:

```js
{
  text: "To provide ASHA workers with a fixed monthly honorarium of Rs. 5,000/- to Rs.8,000/-",
  status: "Fulfilled",
  link: "https://example.com/source",
  sourceName: "The News Minute",
  sourceHeading: "CM announced fixed Rs 10,000/month (April 2025), exceeding the promised range"
}
```

---

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to **`main` branch, `/ (root)`**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## Contributing

We welcome corrections and updates. If you know a promise has been fulfilled, started, or abandoned:

- **Submit via form:** [tally.so/r/WODbON](https://tally.so/r/WODbON)
- **Or open a PR:** Edit `js/promises.js` directly with a source link.

Please include a credible source (government notification, official press release, or reputable news outlet) with every status change.

---

## Methodology

| Status | Criteria |
|---|---|
| ✓ **Fulfilled** | Verifiable government notification, official order, or confirmed news reporting |
| ◑ **In Progress** | Formal tender, committee, bill, or budget allocation initiated |
| ✗ **Evaded** | Government action has made fulfilment structurally impossible |
| ○ **Pending** | No action taken or reported |

All promises are sourced from the [official Karnataka Congress Manifesto 2023](https://inc.in/media/press-releases/assembly-election-karnataka-manifesto-2023).

---

_This is not a political website. We hold no affiliation with any party. We track facts, not opinions._
