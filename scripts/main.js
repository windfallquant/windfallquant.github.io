const personalProjects = [
  {
    title: "Pricing Analytics Pipeline",
    subtitle: "Real-time ingestion, normalization, and alerting (Python, SQL)",
    cardMessage:
      "Identifies pricing discrepancies in real time by ingesting live data, normalizing lines via devigging, persisting records in SQL, and triggering alerts when mispricings appear.",
    description:
      "<p><strong>Problem:</strong> Identifies pricing discrepancies across multiple sources that require continuous, real-time monitoring.</p>" +
      "<p><strong>Approach:</strong> Engineers an end-to-end pipeline: scraping/ingestion → normalization (devigging) → SQL storage → rules-based detection → Discord alerting.</p>" +
      "<p><strong>Outcome:</strong> Enables instant visibility into mispriced markets and sends actionable alerts across moneylines, spreads, totals, and props.</p>" +
      "<p style='margin-top:0.75rem; font-size:0.9rem; opacity:0.8;'><em>Core pricing logic omitted to protect proprietary methodology. Code available upon request.</em></p>",
    tags: [
      "Python",
      "SQL",
      "Data Pipeline",
      "Web Scraping",
      "Selenium",
      "Playwright",
      "Data Normalization",
      "Alerting",
      "Anomaly Detection",
    ],
    icon: `<img src="./projects/regen/icon.png" alt="Pricing Analytics Pipeline icon" class="icon-img" />`,
    image: "./projects/regen/preview.png",
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Solver Sheets: large CSV → pivots, heatmaps, and summaries (Excel, VBA)",
    cardMessage:
      "Transforms large CSV outputs into an interactive Excel dashboard with pivot tables, heatmaps, and standardized decision summaries for fast analysis.",
    description:
      "<p><strong>Problem:</strong> Reduces the time and inconsistency caused by manual review of large CSV outputs.</p>" +
      "<p><strong>Approach:</strong> Builds an Excel/VBA workflow that ingests CSVs, generates pivot tables and heatmaps, and supports interactive filtering (dropdowns, board-texture logic) plus ranking heuristics.</p>" +
      "<p><strong>Outcome:</strong> Produces a repeatable, analyst-friendly dashboard that speeds review and improves consistency across scenarios.</p>",
    tags: [
      "Excel",
      "VBA",
      "Dashboarding",
      "Pivot Tables",
      "Data Transformation",
      "Automation",
      "Data Visualization",
    ],
    icon: `<img src="./projects/solversheets/icon.png" alt="Analytics Dashboard (Solver Sheets) icon" class="icon-img" />`,
    image: "./projects/solversheets/preview.png",
  },
  {
    title: "Market Crash Prediction",
    subtitle: "Naive Bayes classifier using macro indicators (Python/R)",
    cardMessage:
      "Classifies monthly market regimes using macro indicators and validates the signal through out-of-sample testing and backtesting.",
    description:
      "<p><strong>Problem:</strong> Detects higher-risk market regimes using interpretable signals from public macroeconomic data.</p>" +
      "<p><strong>Approach:</strong> Engineers a binary crash label, addresses class imbalance, and trains a Naive Bayes classifier using features such as VIX, inflation, and unemployment.</p>" +
      "<p><strong>Outcome:</strong> Achieves 74% out-of-sample accuracy and supports a regime-based backtest versus buy-and-hold.</p>",
    tags: [
      "Machine Learning",
      "Classification",
      "Naive Bayes",
      "Feature Engineering",
      "Backtesting",
      "Macroeconomics",
      "Time Series",
    ],
    icon: `<img src="./projects/crashpredict/icon.png" alt="Market Crash Prediction icon" class="icon-img" />`,
    image: "./projects/crashpredict/preview.png",
    pdf: "./projects/crashpredict/report.pdf",
  },
  {
    title: "Asset Pricing Factor Research",
    subtitle: "PCA-enhanced factor model evaluation (R)",
    cardMessage:
      "Tests multi-factor model extensions across 101 portfolios using regression, statistical testing, and model selection to measure real explanatory value.",
    description:
      "<p><strong>Problem:</strong> Evaluates whether additional factors (momentum, liquidity, PCA components) improve explanatory power beyond baseline asset-pricing models.</p>" +
      "<p><strong>Approach:</strong> Runs portfolio regressions with OLS, performs GRS testing, and applies variable selection to compare competing model families.</p>" +
      "<p><strong>Outcome:</strong> Shows that simpler factor sets often generalize better, highlighting the risk of overfitting in factor research.</p>",
    tags: [
      "R",
      "Regression",
      "PCA",
      "Statistical Testing",
      "Model Selection",
      "Financial Data",
    ],
    icon: `<img src="./projects/factorforecast/icon.png" alt="Asset Pricing Factor Research icon" class="icon-img" />`,
    image: "./projects/factorforecast/preview.png",
    pdf: "./projects/factorforecast/report.pdf",
  },
  {
    title: "Consumer ETF Volatility Forecasting",
    subtitle: "Regression vs random forest for risk forecasting (Python)",
    cardMessage:
      "Forecasts 1-year ETF volatility with engineered time-series features and compares linear models against ensemble methods for generalization.",
    description:
      "<p><strong>Problem:</strong> Forecasts forward-looking volatility from historical returns while keeping outputs interpretable for decision-making.</p>" +
      "<p><strong>Approach:</strong> Engineers rolling volatility and lag features, evaluates regression and random forest models, and compares out-of-sample error across configurations.</p>" +
      "<p><strong>Outcome:</strong> Demonstrates that simpler linear models with fewer lags outperform more complex methods in out-of-sample accuracy.</p>",
    tags: [
      "Python",
      "Time Series",
      "Feature Engineering",
      "Regression",
      "Random Forest",
      "Model Evaluation",
      "Volatility",
    ],
    icon: `<img src="./projects/sectorvol/icon.png" alt="Consumer ETF Volatility Forecasting icon" class="icon-img" />`,
    image: "./projects/sectorvol/preview.png",
    pdf: "./projects/sectorvol/report.pdf",
  },
  {
    title: "Bank of America Valuation Pitch",
    subtitle: "Two-stage dividend discount model + comps (Excel)",
    cardMessage:
      "Establishes a bank-specific valuation framework using a two-stage DDM and peer comps, tying assumptions to macro drivers and key risks.",
    description:
      "<p><strong>Problem:</strong> Values a bank using a framework better suited to financial institutions than a traditional DCF.</p>" +
      "<p><strong>Approach:</strong> Constructs a two-stage dividend discount model, benchmarks against peers using valuation multiples, and incorporates macro drivers (rates, deposit mix).</p>" +
      "<p><strong>Outcome:</strong> Produces a structured pitch with valuation range, key assumptions, and risk factors to support decision-making.</p>",
    tags: [
      "Valuation",
      "Financial Modeling",
      "DDM",
      "Comparable Multiples",
      "Excel",
      "Equity Research",
    ],
    icon: `<img src="./projects/bac/icon.png" alt="Bank of America Valuation Pitch icon" class="icon-img" />`,
    image: "./projects/bac/preview.png",
    pdf: "./projects/bac/report.pdf",
  },
];

const academicProjects = [];

const workExperience = [
  {
    company: "United Parcel Service",
    location: "Parsippany, NJ",
    title: "Technician II (Cloud Analytics / Reporting)",
    dates: "May 2025 – Present",
    bullets: [
      "Built and maintained Cloudability dashboards tracking Azure cloud spend for department-level reporting by cost category, service type, and organizational ID",
      "Automated cost anomaly detection reporting to flag overspending and unusual usage patterns, improving visibility for key stakeholders",
      "Delivered recurring cloud cost reporting workflows and presented findings to leadership to support accountability and resource optimization",
      "Developed a Python automation script to audit 150+ machines and generate Excel pivot-table summaries, reducing audit time from 2 hours to 3 minutes",
    ],
  },
  {
    company: "Hair Luxe",
    location: "Cresskill, NJ",
    title: "Financial Operations Analyst",
    dates: "Apr 2020 – May 2025",
    bullets: [
      "Managed monthly budgeting and expense tracking, identifying cost-saving opportunities that led to a 15% reduction in tech-related expenditures",
      "Created and maintained forecasting and capital planning models using Excel and VBA",
      "Produced variance reports and dashboards to support monthly financial reviews and strategic decisions",
      "Streamlined workflows by automating reporting processes, reducing manual input errors and saving 10+ hours/month",
      "Partnered with ownership to evaluate investments and assess ROI on technology upgrades and services",
    ],
  },
];

function renderWorkExperience(experienceList) {
const container = document.getElementById("work-experience");
experienceList.forEach(job => {
const card = document.createElement("div");
card.className = "card animated-card";
card.innerHTML = `
<div class="card-header">
    <span class="company-name">${job.company}</span>
    <span class="location">${job.location}</span>
</div>
<div class="subtitle">
    <div class="job-title">${job.title}</div>
    <div class="dates">${job.dates}</div>
</div>
<ul class="work-bullets">
    ${job.bullets.map(b => `<li>${b}</li>`).join("")}
</ul>
`;
container.appendChild(card);
});
}

// Render project cards
function renderProjects(projects, containerId) {
const container = document.getElementById(containerId);
projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', `Open details for project ${proj.title}`);

    card.innerHTML = `
    <div class="icon-container">${proj.icon}</div>
    <h3>${proj.title}</h3>
    <div class="subtitle">${proj.subtitle || ""}</div>
    <p class="card-message">${proj.cardMessage || ""}</p>
    <div class="tags">${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    card.onclick = () => openModal(proj);
    card.onkeydown = (e) => { if(e.key === 'Enter' || e.key === ' ') openModal(proj); };
    container.appendChild(card);
});
}

let scrollPosition = 0
// Modal control
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTags = document.getElementById("modal-tags");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalPdfContainer = document.getElementById("modal-pdf-container");
const modalPdf = document.getElementById("modal-pdf");

function openModal(project) {
  modalTitle.textContent = project.title + (project.subtitle ? `: ${project.subtitle}` : "");
  modalDesc.innerHTML = project.description;

  if (project.image) {
    modalImage.src = project.image;
    modalImage.alt = project.title + " preview";
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
  }

  if (project.pdf) {
  modalPdf.src = project.pdf + '#zoom=fit';
  modalPdfContainer.style.display = "block";
  } else {
  modalPdf.src = "";
  modalPdfContainer.style.display = "none";
  }
  modalTags.innerHTML = "";
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  modal.classList.add("active");

  // LOCK SCROLL
  scrollPosition = window.pageYOffset;
  document.body.classList.add("scroll-lock");
  document.body.style.top = `-${scrollPosition}px`;
}


function closeModal() {
  modal.classList.remove("active");

  // UNLOCK SCROLL
  document.body.classList.remove("scroll-lock");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

modalClose.onclick = closeModal;
modal.onclick = (e) => {
if(e.target === modal) closeModal();
};

document.addEventListener("keydown", (e) => {
if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
}
});

// Render projects on page load
renderProjects(personalProjects, "personal-projects");
renderProjects(academicProjects, "academic-projects");
renderWorkExperience(workExperience);
window.onload = () => {
document.querySelector(".container").style.opacity = "1";
};