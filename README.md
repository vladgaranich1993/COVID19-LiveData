# COVID‑19 Live Data (Vue + TypeScript)

A small, single‑page app that visualizes **COVID‑19 statistics**. I built it primarily to **practice TypeScript with Vue** and experiment with **data visualization** in a real-world use case.

---

## ✨ Purpose

* Practice **TypeScript** in a Vue application (typed API models, props, and component state)
* Practice **Vue** patterns (single‑file components, props/emit, state management)
* Practice **data visualization** (time‑series, totals, per‑country breakdowns)

---

## 🧰 Tech Stack

* **Vue.js** (CLI scaffolded SPA)
* **Vuex** State Management
* **TypeScript**
* **Data viz:** Chart.js
* **HTTP:** Fetch API
* **Tooling:** Vue CLI, ESLint, Babel, npm scripts

---

## 🖼️ Features

* Global and per‑country stats (totals & trends)
* Time‑series charts for quick visual insight
* Simple filtering/search & responsive layout

> The feature set focuses on reading, transforming, and rendering data reliably with type safety.

---

## 🔌 Data Source

This app reads public COVID‑19 data from a third‑party API.

* **API:** covid19api.com

## 🚀 Getting Started

**Prerequisites**

* Node.js (LTS recommended)
* npm or yarn

**Install & run**

```bash
npm install
npm run serve    # start dev server
```

**Production build**

```bash
npm run build
```

**Linting / formatting**

```bash
npm run lint
```

## 🧪 TypeScript Notes

* Strongly‑typed response models for API data
* Narrowing & guards where API fields may be optional
* Utility types for charting transforms (e.g., `TimeseriesPoint`)
* Component prop & emit typing for safer composition

---

## 🗺️ Roadmap / Ideas

* Add caching to reduce API calls
* Add per‑region drilldowns and comparisons
* Add a small CI workflow (type‑check + lint + test)
* Dark mode toggle

## 🤝 Contributing

Suggestions and pull requests are welcome—this project’s goal is learning and experimentation. If you spot areas where types or components can be improved, feel free to open an issue or PR.
