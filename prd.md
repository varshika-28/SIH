# Product Requirements Document (PRD)

## Rural Micro-Entrepreneur Business Advisory

**Problem Statement ID:** SIH26091
**Project Name:** Rural Micro-Entrepreneur Business Advisory
**Proposed Product Name:** **GraminVeda** — *"Village Wisdom, Verified"* (AI-Driven Hyper-Local Business Advisory and Financial Decision Support System)
**Product Type:** Web-based AI-powered decision-support platform
**Document Version:** 1.0
**Prepared For:** Smart India Hackathon (SIH) 2026
**Status:** Implementation-Ready Draft

---

## Table of Contents

1. Project Information
2. Problem Statement
3. Product Vision
4. Product Goals
5. Target Users
6. Core User Journey
7. Functional Requirements
8. Core Product Modules
9. Safety and Responsible AI Requirements
10. Recommendation Logic
11. User Interface Requirements
12. Dashboard Requirements
13. What-If Simulator Requirements
14. Data Requirements
15. Database Requirements
16. Backend/API Requirements
17. AI Architecture Requirements
18. Non-Functional Requirements
19. MVP Scope
20. Future Scope
21. Acceptance Criteria
22. Success Metrics
23. Risks and Mitigation
24. Competitive Differentiation
25. SDG Alignment
26. Product Development Roadmap
27. Final Product Flow

---

# 1. Project Information

| Field | Detail |
|---|---|
| Problem Statement ID | SIH26091 |
| Project Name | Rural Micro-Entrepreneur Business Advisory |
| Proposed Product Name | GraminVeda |
| Product Type | Web-based AI-powered decision-support platform |
| Category | Fintech / AgriTech / Rural Development / AI-ML |
| Target Users | Rural micro-entrepreneurs, aspiring entrepreneurs, SHG members, artisans, field officers |
| Primary Function | Pre-investment business feasibility, financial planning, and risk-aware decision support |

## Core Concept

GraminVeda is an AI-driven hyper-local business advisory and financial decision-support system designed to help rural micro-entrepreneurs evaluate business ideas **before** committing scarce capital. The system ingests the entrepreneur's available capital, proposed business type, location, and business-specific parameters, and cross-references them against local demand indicators, competition indicators, input costs, and market accessibility data. It computes startup costs, operating expenses, expected revenue, funding gap, cash flow, and break-even point, layers a risk assessment and a data-confidence score on top, and surfaces relevant government schemes. The output is a transparent, reasoned recommendation on a four-tier scale:

- 🟢 **Proceed**
- 🟡 **Proceed with Pilot**
- 🟠 **Modify Business Plan**
- 🔴 **High Risk / Do Not Invest Yet**

**Guardrail:** The system must never guarantee business success or present AI-generated projections as certain financial outcomes. All outputs are estimates, clearly labeled with assumptions, evidence level, and data confidence, and the final investment decision always rests with the user.

---

# 2. Problem Statement

Rural micro-entrepreneurs — including small shopkeepers, poultry/dairy farmers, artisans, home-based food producers, and small service providers — routinely commit a large share of their household savings or take on debt to start or expand a business, often with limited structured information to guide that decision. The core difficulties are:

- **Difficulty selecting a suitable business**: Entrepreneurs often choose a business based on what a neighbor or relative is doing, rather than on an assessment of local demand, competition, or their own capital fit.
- **Lack of access to professional business advisory**: Chartered accountants, MSME consultants, and business analysts are concentrated in urban areas and are often unaffordable or unreachable for a person planning a ₹20,000–₹5,00,000 venture.
- **Limited financial planning knowledge**: Concepts like break-even point, cash-flow cycles, working-capital buffers, and funding gaps are rarely part of the entrepreneur's prior education or experience.
- **Difficulty understanding local market conditions**: There is no simple way for an individual to know, at the village or block level, how many similar shops already exist, whether input suppliers are nearby, or whether seasonal demand fluctuates.
- **Risk of investing limited savings without sufficient information**: Because savings are limited and often represent years of accumulated income, a single wrong decision can be financially devastating and difficult to recover from.
- **Difficulty comparing business opportunities**: Entrepreneurs considering 2–3 alternative business ideas (e.g., poultry vs. tailoring vs. a small grocery store) have no structured, side-by-side way to compare feasibility, cost, and risk.
- **Difficulty understanding funding requirements**: Many entrepreneurs are unsure how much loan they need, what EMI they can sustainably service, or how a loan changes their break-even timeline.
- **Information barriers around government schemes**: Schemes such as PMEGP, Mudra Loans, and state-specific MSME support exist, but discovering eligibility and application requirements is fragmented and often requires visiting multiple offices.

## Why Existing Solutions Fall Short

General-purpose AI assistants (e.g., broad conversational chatbots) can answer generic business questions but are **not grounded in hyper-local data**, do not perform structured financial feasibility calculations, do not maintain a persistent risk/confidence framework, and cannot reliably verify government scheme eligibility. This is not a claim that no advisory tools exist at all — government field officers, NGO-run advisory desks, SHG federations, and some fintech/MSME apps do provide partial support. However, these existing channels are typically:

- Advisory-only, without integrated **financial calculation engines** (cost, revenue, break-even, cash flow).
- Not **hyper-local** (they use state- or district-level generalizations rather than village/block-level context where available).
- Not built around a **pilot-first, risk-tiered decision framework** that explicitly discourages over-investment under uncertainty.
- Not designed for **low digital literacy** users with a guided, structured workflow.
- Rarely combining **what-if financial simulation** with **AI-explained reasoning** and **verified scheme information** in a single, integrated pre-investment tool.

GraminVeda's differentiation is therefore not "inventing a category no one has touched," but **integrating** hyper-local awareness, financial feasibility modelling, risk-aware recommendation logic, and pilot-first guidance into a single accessible workflow purpose-built for the pre-investment decision moment.

---

# 3. Product Vision

> **To help rural micro-entrepreneurs make safer, better-informed business decisions by combining hyper-local information, structured financial analysis, AI-assisted explanation, risk assessment, and what-if scenario simulation — so that limited capital is invested with clarity rather than guesswork.**

GraminVeda is explicitly a **decision-support** system, not a guarantee engine. It does not predict business success; it structures the information an entrepreneur needs to make their own decision more safely, and it actively encourages validating assumptions (e.g., through a pilot) before scaling.

---

# 4. Product Goals

| # | Goal | Measurable Target (MVP) |
|---|---|---|
| G1 | Help users evaluate business ideas | User can complete an end-to-end feasibility assessment for at least 5 predefined rural business categories |
| G2 | Help users understand capital sufficiency | System explicitly states "sufficient / insufficient / marginal" capital status with reasoning |
| G3 | Provide hyper-local insights where reliable data exists | System labels each local indicator with a data-source and confidence tag |
| G4 | Calculate basic financial feasibility | Startup cost, operating cost, revenue, profit, break-even, funding gap computed for 100% of valid submissions |
| G5 | Identify major business risks | At least 4 risk categories (financial, market, demand, competition) scored per assessment |
| G6 | Allow what-if financial simulation | User can vary at least 5 input parameters and see recalculated outputs in real time |
| G7 | Provide transparent recommendation reasoning | Every recommendation includes reason, assumptions, risks, and confidence |
| G8 | Communicate data confidence/uncertainty | Every dashboard displays a confidence indicator (High/Medium/Low) |
| G9 | Encourage pilot-first investment | System proposes a pilot amount whenever confidence is Medium/Low or risk is Medium/High |
| G10 | Provide relevant government/financial support info | At least 5 schemes indexed and retrievable in MVP |
| G11 | Simple web interface | Complete assessment achievable in ≤ 12 guided steps |
| G12 | Multilingual interaction (future) | Architecture supports language plug-in; Hindi + 1 regional language targeted post-MVP |

---

# 5. Target Users

## Primary Persona — Rural Micro-Entrepreneur (Primary MVP User)

| Attribute | Detail |
|---|---|
| Background | Lives in a village or small town; household income from a mix of agriculture, wage labor, or a small existing trade |
| Business Experience | Little to none, or informal/unregistered prior experience |
| Digital Literacy | Low to moderate; comfortable with a smartphone for calls, WhatsApp, and basic browsing, but not with complex forms |
| Financial Literacy | Basic arithmetic; limited familiarity with formal concepts like break-even, ROI, or amortization |
| Goals | Start or expand a small business (e.g., poultry, tailoring, grocery, dairy) using personal savings and/or a small loan |
| Problems | Uncertainty about how much to invest, whether the location supports the business, and whether the venture will be sustainable |
| Technology Limitations | Intermittent internet connectivity, small/low-end smartphone screens, limited English fluency |
| Typical Decisions | "Should I start this business?" "How much capital do I need?" "Should I take a loan?" "Is my village a good location?" |
| Pain Points | No trusted, affordable advisor; fear of losing savings; scheme information is scattered and confusing |

## Secondary Personas

1. **Aspiring Rural Entrepreneur** — Has not yet started any business; exploring 2–3 ideas and needs comparison support.
2. **Existing Micro-Business Owner** — Already runs a small business and is considering expansion, diversification, or relocation.
3. **Self-Help Group (SHG) Entrepreneur** — Operates within an SHG/JLG structure; needs group-level financial planning support and scheme awareness.
4. **Rural Artisan / Service Provider** — E.g., tailor, carpenter, mechanic; needs business-specific cost/revenue modelling distinct from trading/retail businesses.
5. **Business Mentor / Field Officer** — NGO worker, bank field officer, or Common Service Centre (CSC) operator who may use the tool *on behalf of* entrepreneurs with lower digital literacy, acting as a facilitator.

**MVP Primary User:** The **Rural Micro-Entrepreneur** persona (used either directly or with light facilitation by a field officer/CSC operator) is the primary MVP focus. Secondary personas are addressed by ensuring the workflow generalizes to different business types and by not hard-coding assumptions that only fit one persona.

---

# 6. Core User Journey

```text
Registration
 ↓
Entrepreneur Profile
 ↓
Location Selection
 ↓
Business Idea
 ↓
Available Capital
 ↓
Additional Business Inputs
 ↓
Hyper-Local Data Analysis
 ↓
Financial Feasibility
 ↓
Risk Assessment
 ↓
What-If Simulation
 ↓
AI Explanation
 ↓
Recommendation
 ↓
Pilot / Proceed / Modify / Wait
 ↓
Business Plan / Report
```

### Stage-by-Stage Explanation

1. **Registration** — User creates an account (mobile number or email + OTP/password). Minimal fields to reduce friction.
2. **Entrepreneur Profile** — Captures name, age, education, prior experience, preferred language, and household context (optional).
3. **Location Selection** — User selects state, district, block, and village (where data exists); system flags the granularity level actually available (village/block/district).
4. **Business Idea** — User selects from a curated list of rural business categories or types a free-text idea (parsed by the AI/NLP layer into a structured category).
5. **Available Capital** — User enters total capital available, and how much is savings vs. how much they are willing to borrow.
6. **Additional Business Inputs** — Business-specific fields (e.g., for poultry: number of birds, feed cost; for a grocery store: shop size, expected footfall).
7. **Hyper-Local Data Analysis** — System retrieves and displays local demand, competition, and input-availability indicators, tagged with confidence level.
8. **Financial Feasibility** — Financial Feasibility Engine computes startup cost, operating cost, revenue, profit, funding gap, break-even, and cash flow.
9. **Risk Assessment** — Risk Engine scores financial, market, demand, competition, input-cost, and data-uncertainty risk.
10. **What-If Simulation** — User can adjust key variables (investment, price, demand, cost, loan) and see recalculated outcomes across best/expected/stress cases.
11. **AI Explanation** — AI Advisory layer explains, in plain language, *why* the numbers came out this way and what the biggest risk drivers are.
12. **Recommendation** — Recommendation Engine outputs one of the four tiers with reasoning, assumptions, risks, confidence, and missing information.
13. **Pilot / Proceed / Modify / Wait** — User is guided toward the suggested next action, including a concrete pilot-scale plan if applicable.
14. **Business Plan / Report** — A downloadable/printable summary report is generated, consolidating all of the above for the user's own records or for use with a bank/scheme application.

---

# 7. Functional Requirements

Legend: **[MVP]**, **[Phase 2]**, **[Future]**

## 7.1 User & Profile

- **FR-01 [MVP] – User Registration**: The system shall allow users to create an entrepreneur profile using mobile number/email and a password or OTP.
- **FR-02 [MVP] – Profile Details**: The system shall allow users to enter age, education level, prior business/work experience, and preferred language.
- **FR-03 [MVP] – Profile Edit**: The system shall allow users to view and edit their profile information at any time.

## 7.2 Location

- **FR-04 [MVP] – Location Selection**: The system shall allow users to select state, district, block, and village where applicable.
- **FR-05 [MVP] – Location Data Granularity Indicator**: The system shall indicate whether hyper-local data is available at village, block, or only district level for the selected location.

## 7.3 Business Idea & Inputs

- **FR-06 [MVP] – Business Idea Input**: The system shall allow users to enter a business idea via text selection from a curated category list or free text (parsed by NLP).
- **FR-07 [Phase 2] – Voice Input**: The system shall allow users to enter a business idea via voice, converted to text for parsing.
- **FR-08 [MVP] – Multi-Idea Comparison**: The system shall allow a user to enter and compare up to 3 business ideas within one session.
- **FR-09 [MVP] – Business-Specific Inputs**: The system shall present dynamic input fields based on the selected business category (e.g., livestock count, shop area, raw material type).

## 7.4 Financial Information

- **FR-10 [MVP] – Capital Input**: The system shall allow users to enter total available capital, split between own savings and intended borrowing.
- **FR-11 [MVP] – Cost Assumptions Input**: The system shall allow users to enter or accept default startup and operating cost assumptions for the selected business category.
- **FR-12 [MVP] – Revenue Assumptions Input**: The system shall allow users to enter or accept default price and expected-volume assumptions.

## 7.5 Hyper-Local Data

- **FR-13 [MVP] – Local Indicator Retrieval**: The system shall retrieve and display available local demand, competition, and input-accessibility indicators for the selected location and business category.
- **FR-14 [MVP] – Data Confidence Tagging**: The system shall tag every local indicator with a confidence level (High/Medium/Low) based on data recency and granularity.
- **FR-15 [Future] – Real-Time Local Data**: The system shall integrate real-time or frequently updated local market data feeds where available.

## 7.6 Financial Feasibility

- **FR-16 [MVP] – Feasibility Calculation**: The system shall calculate startup cost, operating cost, expected revenue, expected profit, funding gap, break-even point, and simple cash flow projection.
- **FR-17 [MVP] – Loan/EMI Estimation**: The system shall estimate EMI and repayment burden where the user indicates an intended loan amount.
- **FR-18 [MVP] – Capital Sufficiency Check**: The system shall classify capital sufficiency as Sufficient/Marginal/Insufficient relative to computed startup + buffer requirements.

## 7.7 Risk & Confidence

- **FR-19 [MVP] – Risk Scoring**: The system shall compute risk scores across financial, market, demand, competition, and input-cost dimensions.
- **FR-20 [MVP] – Data Uncertainty Reporting**: The system shall report an overall data-confidence score alongside the risk assessment.
- **FR-21 [MVP] – Missing Data Flagging**: The system shall explicitly list any critical data points that were unavailable and were therefore assumed or estimated.

## 7.8 What-If Simulation

- **FR-22 [MVP] – Parameter Adjustment**: The system shall allow users to adjust investment, selling price, demand, operating cost, input cost, and loan amount.
- **FR-23 [MVP] – Live Recalculation**: The system shall recalculate revenue, profit, cash flow, break-even, and risk level whenever an input is changed.
- **FR-24 [MVP] – Scenario Comparison**: The system shall display best-case, expected-case, and stress-case outcomes side-by-side, clearly labeled as modelled (not guaranteed) scenarios.

## 7.9 Government Scheme Information

- **FR-25 [MVP] – Scheme Lookup**: The system shall retrieve relevant government/financial support scheme information based on business category and location.
- **FR-26 [MVP] – Source Display**: The system shall display the source and last-verified date of each scheme's information.
- **FR-27 [Future] – Live Scheme API Integration**: The system shall integrate directly with official government scheme APIs/portals where available.

## 7.10 AI Advisory / Chat

- **FR-28 [MVP] – Natural-Language Q&A**: The system shall allow users to ask natural-language questions about their assessment and receive explanations grounded in the computed results.
- **FR-29 [MVP] – Calculation Explanation**: The AI shall explain how a given financial or risk figure was derived, referencing the underlying inputs.
- **FR-30 [MVP] – Guardrail on Invented Values**: The AI shall not generate financial figures independently of the Financial Feasibility Engine; it may only explain, summarize, or request clarification.
- **FR-31 [Future] – Multilingual AI Chat**: The system shall support AI advisory conversations in Hindi and additional regional languages.

## 7.11 Recommendation

- **FR-32 [MVP] – Recommendation Generation**: The system shall generate one of four recommendation tiers (Proceed / Pilot / Modify / High Risk) based on defined logic.
- **FR-33 [MVP] – Recommendation Explanation**: Every recommendation shall include reasoning, key assumptions, major risks, data confidence, missing information, and a suggested next action.
- **FR-34 [MVP] – Pilot Plan Generation**: When a pilot is recommended, the system shall propose a specific reduced-scale pilot investment amount and validation criteria.

## 7.12 Reporting & History

- **FR-35 [MVP] – Report Generation**: The system shall generate a downloadable/printable business plan report summarizing profile, inputs, feasibility, risk, and recommendation.
- **FR-36 [MVP] – Assessment History**: The system shall store and allow users to revisit previous assessments.
- **FR-37 [Phase 2] – Feedback Collection**: The system shall allow users to rate the usefulness and clarity of a recommendation.

---

# 8. Core Product Modules

## Module 1 – Entrepreneur Profile **[MVP]**
Stores basic information, location, language preference, experience level, and available capital. Acts as the persistent context for all subsequent modules.

## Module 2 – Business Idea Assessment **[MVP]**
Allows users to enter a business idea (structured selection or free text), select a business category, compare up to three ideas, and provide business-specific inputs (e.g., livestock count, shop size).

## Module 3 – Hyper-Local Intelligence **[MVP, extended in Future]**
Analyzes available location data, population indicators, market indicators, competition indicators, input availability, and market accessibility. Every output explicitly states the geographical granularity (village/block/district) and the quality/confidence of the underlying data.

## Module 4 – Financial Feasibility Engine **[MVP]**
Calculates startup cost, operating cost, revenue, profit, funding gap, break-even point, cash flow, and loan/EMI estimates. This is a deterministic, rule/formula-based engine — **not** an LLM — to ensure numerical consistency and auditability.

## Module 5 – Risk Engine **[MVP]**
Evaluates financial risk, market risk, demand risk, competition risk, input-cost risk, and data-uncertainty risk, combining them into an overall risk tier (Low/Medium/High).

## Module 6 – What-If Simulator **[MVP]**
Allows changes to investment, selling price, demand, operating cost, input cost, and loan amount, and shows the effect on revenue, profit, cash flow, break-even, and risk — across best-case, expected-case, and stress-case scenarios.

## Module 7 – AI Advisory **[MVP core, Future for multilingual/voice]**
Understands natural-language questions, extracts structured information from free-text business ideas, explains calculations and recommendations in plain language, and answers business-related questions. The AI does **not** independently invent financial values — all numbers originate from Modules 4–6.

## Module 8 – RAG / Trusted Information **[MVP: static curated set; Future: live retrieval]**
Uses a curated, verified knowledge base (Retrieval-Augmented Generation) for government schemes, MSME information, financial support programs, and business guidelines, displaying the source and last-verified date for every fact surfaced.

## Module 9 – Pilot-First Engine **[MVP]**
When risk or uncertainty is significant, recommends a smaller-scale pilot with a specific budget and validation criteria.

> Example: *"Instead of investing ₹2,00,000 immediately, test the business with ₹25,000 and evaluate actual demand for 60 days before scaling."*

## Module 10 – Recommendation Engine **[MVP]**
Synthesizes outputs from Modules 3–6 and 9 into a final tiered recommendation (Proceed / Pilot / Modify / High Risk), each with reason, key assumptions, major risks, data confidence, missing information, and suggested next action.

---

# 9. Safety and Responsible AI Requirements

This section governs all modules and overrides feature convenience where in conflict.

## The Product Must NOT

- Guarantee business success or state/imply a guaranteed return.
- Claim an exact probability of success without validated statistical evidence backing that number.
- Encourage users to invest blindly or skip validation steps.
- Present estimates as guaranteed returns or certain outcomes.
- Invent local market information when real data is unavailable (must state "data unavailable" instead).
- Invent or assume government scheme eligibility without a documented basis.
- Hide or downplay uncertainty in any output.
- Make unsupported or unverifiable financial claims.

## The Product SHOULD

- Display all assumptions used in every calculation, in plain language.
- Display a data-confidence indicator (High/Medium/Low) on every hyper-local and financial output.
- Show evidence/source references wherever available.
- Explicitly identify missing or unavailable data points.
- Encourage local validation (e.g., "confirm this price with 2–3 local shopkeepers").
- Recommend pilot testing whenever confidence is Medium/Low or risk is Medium/High.
- Clearly state that the final investment decision belongs to the user.
- Distinguish clearly, in UI language and visual style, between **estimates** and **verified information**.

## Standard Disclaimer Language (must appear on every recommendation/report screen)

> *"This assessment is a decision-support estimate based on the information provided and available local data. It is not a guarantee of business success or financial return. Please validate key assumptions locally and consult a financial advisor or bank official before making a final investment decision."*

## Data Confidence Disclosure (must appear wherever local data is shown)

> *"Local data confidence: [High/Medium/Low]. Where confidence is Low, figures are based on district-level or category-level averages rather than village-specific data."*

---

# 10. Recommendation Logic

## 🟢 Proceed
Use when:
- Financial feasibility is acceptable (positive expected profit, break-even within a reasonable timeframe).
- Overall risk is Low to Low-Medium.
- Data confidence is Medium or High.

## 🟡 Proceed with Pilot
Use when:
- The business appears potentially viable, but uncertainty is significant (data confidence Low/Medium, or demand/competition indicators are mixed).
- A small-scale validation would meaningfully reduce risk before full-scale investment.

## 🟠 Modify Business Plan
Use when:
- The business may be viable in principle, but the current capital level, cost structure, or scale is unsuitable.
- Specific, identifiable changes (e.g., reduce initial scale, change location, adjust pricing) could bring risk down to an acceptable level.

## 🔴 High Risk / Do Not Invest Yet
Use when:
- Financial stress is high (funding gap large relative to available capital, or break-even is unreasonably distant).
- Critical information required for a sound assessment is unavailable.
- Local market indicators appear unfavorable (e.g., high existing competition, low demand signal).
- Projected cash flow cannot reasonably support the proposed investment or loan repayment.

**Important:** These four tiers represent a structured decision-support classification based on the inputs and assumptions provided — they are **not guaranteed predictions** of real-world outcomes, and this must be stated adjacent to every recommendation.

---

# 11. User Interface Requirements

### Page 1 – Landing Page **[MVP]**
- **Purpose:** Introduce the platform and its value proposition.
- **Inputs:** None (informational).
- **Outputs:** Project introduction, problem framing, key benefits, "How it works" summary, "Start Assessment" CTA.
- **UI Elements:** Hero section, 3-step visual explainer, testimonials/placeholder, prominent CTA button.
- **Validation:** N/A.

### Page 2 – Entrepreneur Profile **[MVP]**
- **Purpose:** Capture user profile details.
- **Inputs:** Name, age, education, experience, preferred language.
- **Outputs:** Saved profile confirmation.
- **UI Elements:** Simple form, large touch targets, language selector.
- **Validation:** Required fields (name, age); age must be a valid adult range.

### Page 3 – Business Idea **[MVP]**
- **Purpose:** Capture the business idea and category.
- **Inputs:** Category selection or free-text idea; option to add up to 2 more ideas for comparison.
- **Outputs:** Structured business category tag(s).
- **UI Elements:** Card-based category picker, free-text field with AI-assisted category suggestion.
- **Validation:** At least one business idea/category required.

### Page 4 – Location **[MVP]**
- **Purpose:** Capture the operating location.
- **Inputs:** State, district, block, village (cascading dropdowns).
- **Outputs:** Selected location + data-granularity indicator.
- **UI Elements:** Cascading dropdown/search, map pin (optional).
- **Validation:** State and district mandatory; block/village optional if unavailable.

### Page 5 – Financial Information **[MVP]**
- **Purpose:** Capture capital and cost/revenue assumptions.
- **Inputs:** Available capital, savings vs. borrowing split, cost/revenue assumption overrides (optional).
- **Outputs:** Confirmed financial input set.
- **UI Elements:** Numeric input with currency formatting, default-value toggle ("use typical values").
- **Validation:** Capital must be a positive number; sum of savings + borrowing must equal stated capital.

### Page 6 – Analysis Loading/Processing **[MVP]**
- **Purpose:** Indicate backend processing across feasibility, risk, and local-data modules.
- **Inputs:** None.
- **Outputs:** Progress indicator.
- **UI Elements:** Step-wise progress animation ("Checking local data… Calculating feasibility… Assessing risk…").
- **Validation:** N/A.

### Page 7 – Feasibility Dashboard **[MVP]**
- **Purpose:** Present the core feasibility results.
- **Inputs:** None (read-only; links to What-If simulator).
- **Outputs:** Feasibility rating, market demand, competition, capital suitability, risk, data confidence, recommendation.
- **UI Elements:** Indicator cards, cost/revenue breakdown chart, recommendation banner.
- **Validation:** N/A.

### Page 8 – Risk Analysis **[MVP]**
- **Purpose:** Break down risk contributors.
- **Inputs:** None.
- **Outputs:** Risk category scores, top contributing factors, data-uncertainty notes.
- **UI Elements:** Radar/bar chart of risk categories, plain-language risk summary.
- **Validation:** N/A.

### Page 9 – What-If Simulator **[MVP]**
- **Purpose:** Allow interactive scenario exploration.
- **Inputs:** Adjustable sliders/fields for investment, price, demand, operating cost, input cost, loan.
- **Outputs:** Recalculated revenue, profit, cash flow, break-even, risk level; best/expected/stress case comparison.
- **UI Elements:** Sliders, comparison table/chart, "reset to default" button.
- **Validation:** Inputs constrained to sensible numeric ranges.

### Page 10 – AI Advisory **[MVP]**
- **Purpose:** Conversational explanation and Q&A grounded in the user's own results.
- **Inputs:** Free-text question.
- **Outputs:** Grounded explanation referencing the user's computed figures.
- **UI Elements:** Chat interface, suggested-question chips.
- **Validation:** N/A.

### Page 11 – Government Support **[MVP]**
- **Purpose:** Surface relevant schemes.
- **Inputs:** None (auto-filtered by business category/location).
- **Outputs:** List of schemes with description, eligibility summary, source, last-verified date.
- **UI Elements:** Scheme cards, "view source" link.
- **Validation:** N/A.

### Page 12 – Final Business Plan **[MVP]**
- **Purpose:** Consolidate the full assessment into a shareable report.
- **Inputs:** None.
- **Outputs:** Downloadable/printable PDF/summary combining all prior pages.
- **UI Elements:** "Download report" and "Share" buttons.
- **Validation:** N/A.

---

# 12. Dashboard Requirements

Example dashboard layout:

```text
Business: Poultry Farming
Location: Selected Village

Financial Feasibility: Medium
Market Demand: High
Competition: Medium
Capital Suitability: High
Risk: Medium
Data Confidence: Medium

Recommendation:
🟡 PROCEED WITH PILOT
```

## Required Visualizations **[MVP]**
- Feasibility indicator cards (color-coded: green/yellow/orange/red)
- Cost vs. revenue breakdown chart (bar/stacked bar)
- Risk indicator chart (radar or horizontal bar per risk category)
- Scenario comparison chart (best/expected/stress case)
- Break-even visualization (line chart: cumulative cost vs. cumulative revenue over time)

## Design Constraint
All visualizations must avoid implying false precision or certainty — e.g., break-even lines should be shown as **modelled projections** with a shaded confidence band rather than a single sharp line where data confidence is Medium/Low.

---

# 13. What-If Simulator Requirements

Example baseline panel:

```text
Investment       ₹1,50,000
Selling Price    ₹X
Demand           100 units/month
Operating Cost   ₹X
Loan             ₹50,000
```

## Requirements **[MVP]**
- Users shall be able to modify each of the five values above via sliders or numeric fields.
- The system shall instantly recompute and display:

```text
Expected Revenue
Expected Profit
Cash Flow
Break-even
Risk Level
```

- The system shall present three parallel scenarios:
  - **Best Case** — optimistic demand/price assumptions
  - **Expected Case** — baseline assumptions from Feasibility Engine
  - **Stress Case** — pessimistic demand/cost assumptions

- All three scenarios shall be **explicitly labeled** as modelled projections, e.g.: *"These are modelled scenarios based on your inputs, not guaranteed outcomes."*

---

# 14. Data Requirements

## User Data **[MVP]**
- **Fields:** Name, age, education, experience, language, contact info.
- **Source:** Direct user input.
- **Update Frequency:** On profile edit.
- **Data Quality:** Self-reported, low validation burden.
- **Privacy:** Stored securely; not shared with third parties without consent.

## Business Data **[MVP]**
- **Fields:** Business category, category-specific parameters, cost/revenue templates.
- **Source:** Curated dataset (prototype) built from published MSME/agriculture cost benchmarks.
- **Update Frequency:** Periodic manual curation (MVP); Future: dynamic feeds.
- **Data Quality:** Approximate, clearly labeled as "typical values."
- **Privacy:** Non-personal; no restrictions.

## Location Data **[MVP: static reference dataset]**
- **Fields:** State/district/block/village hierarchy, and any available population/market indicators.
- **Source:** Public government datasets (e.g., Census, LGD codes) — **prototype dataset** for MVP.
- **Update Frequency:** Static for MVP; Future: periodic refresh.
- **Data Quality:** Varies by granularity; explicitly flagged.
- **Privacy:** Non-personal.

## Financial Data **[MVP]**
- **Fields:** Cost benchmarks, interest rate assumptions, EMI formulas.
- **Source:** Public benchmarks and simplified standard formulas.
- **Update Frequency:** Periodic manual review.
- **Data Quality:** Approximate; assumptions always disclosed.
- **Privacy:** Non-personal.

## Market Data **[MVP: limited curated sample; Future: real-time]**
- **Fields:** Demand indicators, competition counts, input-price indicators.
- **Source:** Prototype: manually curated sample dataset for demo districts. Future: real-time integrations (e.g., market/mandi price feeds, business registries).
- **Update Frequency:** Static (MVP) → periodic/real-time (Future).
- **Data Quality:** Low-to-Medium confidence in MVP; explicitly disclosed.
- **Privacy:** Non-personal.

## Government Scheme Data **[MVP: curated static set]**
- **Fields:** Scheme name, eligibility summary, benefit description, application process, source link, last-verified date.
- **Source:** Official government scheme pages/documents (manually curated for MVP).
- **Update Frequency:** Manual periodic review (MVP); Future: live API sync.
- **Data Quality:** High for the fields curated; scope intentionally limited in MVP.
- **Privacy:** Non-personal.

**Clear distinction:** All hyper-local market/competition figures in the MVP are **prototype/sample data** curated for demonstration districts, explicitly labeled as such in the UI. Real-time, comprehensive local data integration is a **Future Scope** item (see Section 20).

---

# 15. Database Requirements

| Entity | Description |
|---|---|
| **Users** | Stores entrepreneur account credentials, profile attributes, and language preference. |
| **Businesses** | Master list of business categories with default cost/revenue templates and category-specific input schemas. |
| **Locations** | Hierarchical state/district/block/village records, with associated data-granularity flags. |
| **BusinessCosts** | Cost benchmark records (startup and operating) linked to a business category and, where available, a location. |
| **MarketIndicators** | Local demand, competition, and input-accessibility indicator records, tagged with confidence and source. |
| **FinancialPlans** | Stores a user's specific financial inputs and the computed feasibility outputs for a given assessment. |
| **Simulations** | Stores what-if simulation runs (parameter sets and resulting outputs) linked to a Financial Plan. |
| **Recommendations** | Stores the generated recommendation tier, reasoning, assumptions, risks, and confidence for an assessment. |
| **GovernmentSchemes** | Scheme metadata: eligibility, benefits, application info, source, verification date. |
| **AIConversations** | Stores chat history between user and AI Advisory layer, linked to the relevant assessment for grounding. |
| **Feedback** | Stores user ratings/comments on the clarity and usefulness of recommendations. |

---

# 16. Backend/API Requirements

```text
POST   /api/users
GET    /api/businesses
GET    /api/locations
POST   /api/feasibility
POST   /api/finance
POST   /api/risk
POST   /api/simulation
GET    /api/schemes
POST   /api/chat
GET    /api/recommendations
```

| API | Purpose | Input | Output | Validation | Error Handling |
|---|---|---|---|---|---|
| `POST /api/users` | Create/update entrepreneur profile | Name, age, education, experience, language | User ID, profile confirmation | Required fields present; age within valid range | 400 for invalid fields; 409 for duplicate account |
| `GET /api/businesses` | Fetch business categories and default templates | Optional filter (category keyword) | List of categories with default cost/revenue templates | N/A (read) | 404 if no categories match filter |
| `GET /api/locations` | Fetch location hierarchy and data-granularity flag | State/district/block query params | Matching location list + granularity flag | Params must match known hierarchy | 404 for unknown location |
| `POST /api/feasibility` | Trigger hyper-local + feasibility computation | User ID, business ID, location ID, capital, inputs | Feasibility results (cost, revenue, break-even, funding gap) | All required financial inputs present and numeric | 422 for missing/invalid inputs; 500 with fallback message if local data unavailable |
| `POST /api/finance` | Recompute financial indicators (used by simulator) | Adjusted parameter set | Revenue, profit, cash flow, break-even | Parameters within sane numeric bounds | 422 for out-of-range values |
| `POST /api/risk` | Compute risk scores | Financial plan ID, local indicator confidence | Risk scores per category + overall tier | Financial plan must exist | 404 if plan not found |
| `POST /api/simulation` | Run a what-if scenario | Financial plan ID, modified parameters | Best/expected/stress case outputs | Same as `/api/finance` | 422 for invalid parameters |
| `GET /api/schemes` | Retrieve relevant government schemes | Business category, location | List of schemes with source and verification date | N/A (read) | 200 with empty list + disclosure message if none found |
| `POST /api/chat` | AI Advisory Q&A | User ID, assessment ID, question text | Grounded natural-language answer | Question must reference an existing assessment context | 422 if assessment context missing; safe fallback response if AI service unavailable |
| `GET /api/recommendations` | Fetch final recommendation for an assessment | Assessment/Financial Plan ID | Recommendation tier, reasoning, assumptions, risks, confidence, next action | Plan must be fully computed (feasibility + risk done) | 409 if prerequisites incomplete |

---

# 17. AI Architecture Requirements

```text
User
 ↓
AI/NLP Layer
 ↓
Structured Information
 ↓
Backend
 ↓
Financial + Feasibility Engines
 ↓
Verified Results
 ↓
AI Explanation Layer
 ↓
User
```

## Key Principles

1. **The LLM is not the source of truth for financial calculations.** All numeric outputs (cost, revenue, break-even, funding gap, cash flow, EMI) are produced exclusively by the deterministic Financial Feasibility Engine and Risk Engine.
2. **The AI/NLP Layer's role is limited to:**
   - Parsing free-text business ideas into structured categories.
   - Extracting structured parameters from natural-language user input (e.g., "I have 50 chickens and ₹40,000" → structured fields).
   - Explaining, in plain language, calculations and recommendations that have already been computed by the backend engines.
   - Answering follow-up questions **grounded in** the specific user's computed results (retrieval-augmented, not free generation).
3. **RAG for schemes/information:** Government scheme and MSME information is retrieved from a curated, source-tagged knowledge base rather than generated from the LLM's parametric memory, to avoid inventing eligibility criteria.
4. **Guardrails:** The AI Explanation Layer is constrained (via system prompting and, in production, output validation) to never state a number that does not trace back to a backend calculation, and to always include the standard disclaimer language from Section 9 when discussing outcomes or projections.

---

# 18. Non-Functional Requirements

### Performance
- Page load time target: < 3 seconds on a 3G-equivalent connection.
- API response time target: < 2 seconds for feasibility/risk computation; < 5 seconds for AI chat responses.

### Usability
- Simple, linear navigation with a visible step indicator across the assessment flow.
- Mobile-responsive design as the primary target form factor.
- Plain, jargon-free language; technical terms (e.g., "break-even") accompanied by a one-line explanation.
- UI designed for low digital-literacy users: large touch targets, icon-supported labels, minimal simultaneous choices per screen.

### Accessibility
- Readable font sizes (minimum 16px body text) and high-contrast color choices.
- Clearly labeled, sufficiently large buttons.
- Voice input/output — **Future**.
- Multilingual UI — **Future** (Hindi + 1 regional language planned first).

### Security
- Authentication via OTP or hashed password storage (industry-standard hashing, e.g., bcrypt).
- All API endpoints require authenticated session tokens (e.g., JWT).
- Input validation and sanitization on all API endpoints to prevent injection attacks.
- Sensitive configuration (API keys, DB credentials) stored in environment variables, never in source code.
- Data encryption in transit (HTTPS/TLS) for all traffic.

### Reliability
- Graceful degradation: if local market data is unavailable, the system proceeds with clearly labeled fallback/default values rather than failing outright.
- Defined fallback responses for AI service timeouts or outages.

### Scalability
- Modular backend with clearly separated services/modules (Feasibility Engine, Risk Engine, AI layer, Scheme Retrieval) to allow independent scaling.
- Database schema designed to support horizontal scaling (indexed foreign keys, normalized core entities).
- API-first architecture to allow future mobile app or voice-interface clients to reuse the same backend.

### Explainability
- Every computed output must be traceable to its inputs and assumptions (an "assumptions used" panel is mandatory on every results screen).
- Every recommendation must show its reasoning and data confidence level.
- Any known limitation of the current assessment (e.g., "village-level competition data not available") must be visibly stated, not buried.

---

# 19. MVP Scope

The MVP is a **single web application** delivering a complete, functioning pre-investment assessment for a curated set of rural business categories, using a prototype dataset (not live external integrations).

| # | MVP Feature |
|---|---|
| 1 | Web application (responsive) |
| 2 | Entrepreneur profile |
| 3 | Business idea input (structured + basic free text) |
| 4 | Location selection (state/district/block/village where data exists) |
| 5 | Capital input |
| 6 | Dummy/curated local business dataset (sample districts, 5+ business categories) |
| 7 | Financial feasibility engine (cost, revenue, break-even, funding gap, cash flow) |
| 8 | Basic risk engine (financial, market, demand, competition dimensions) |
| 9 | What-if simulator (5 adjustable parameters, 3-scenario comparison) |
| 10 | Basic AI advisory (grounded Q&A + calculation explanation) |
| 11 | Recommendation engine (4-tier logic with full reasoning) |
| 12 | Pilot-first recommendation (concrete pilot budget suggestion) |
| 13 | Basic government scheme information (curated set of 5+ schemes) |
| 14 | Feasibility dashboard (with required visualizations) |

**Explicitly out of MVP scope:** real-time market data feeds, live government API integrations, voice interface, multilingual chat, mobile native app, financial-institution integrations. These require external data-sharing agreements and are addressed under Future Scope.

---

# 20. Future Scope

| Feature | Phase |
|---|---|
| Real-time local market data integration | Future |
| Support for more Indian languages | Future |
| Voice-first interface | Future |
| Native mobile application | Future |
| Advanced ML models (e.g., demand forecasting) | Future |
| Larger, denser hyper-local datasets | Future |
| Real government scheme API integrations | Future |
| Financial institution integrations (loan pre-approval, EMI sync) | Future |
| Business mentor / field-officer collaboration features | Future |
| Community feedback and crowd-validated local data | Future |
| Continuous model improvement pipeline | Future |
| Offline / low-connectivity support (progressive sync) | Future |

---

# 21. Acceptance Criteria

### Business Assessment
> Given valid business, location, and capital information, the system generates a feasibility assessment within the defined response-time target.

### Financial Calculation
> Given startup cost, operating cost, and revenue assumptions, the system calculates projected financial indicators (revenue, profit, funding gap, break-even, cash flow) consistently and reproducibly for identical inputs.

### What-If
> When a user changes an input variable in the simulator, the system recalculates all affected financial indicators and displays updated best/expected/stress case outputs.

### Risk
> The system displays an overall risk level and identifies the major contributing risk factors for every completed assessment.

### Uncertainty
> When required local data is unavailable, the system explicitly indicates limited/no data rather than fabricating values, and reflects this in the confidence score.

### Recommendation
> Every recommendation displays its reasoning, assumptions, major risks, data confidence, missing information, and a suggested next action.

### Location & Data Granularity
> The system indicates the geographic granularity (village/block/district) of the local data used in each assessment.

### Government Schemes
> The system displays at least one relevant scheme (or an explicit "no matching scheme found" message) along with source and last-verified date for every completed assessment.

### AI Advisory
> AI-generated explanations reference only figures already produced by the Financial Feasibility Engine and Risk Engine; no new financial figures are introduced by the AI layer.

### Report Generation
> A user can generate and download/print a consolidated business plan report reflecting all inputs and outputs of their assessment.

### Pilot Recommendation
> When risk is Medium/High or data confidence is Medium/Low, the system proposes a specific reduced-scale pilot investment amount and validation criteria.

---

# 22. Success Metrics

| Metric | Description |
|---|---|
| Assessment completion rate | % of started assessments that reach a final recommendation |
| Average assessment completion time | Time from registration to recommendation screen |
| Financial calculation consistency | % of identical-input test cases producing identical outputs |
| Recommendation explanation completeness | % of recommendations including all required reasoning fields |
| User-reported clarity score | Average feedback rating on "I understood why I got this recommendation" |
| Number of scenarios successfully simulated | Count of completed what-if runs per assessment |
| Data-source coverage | % of local indicators with an identified source/confidence tag vs. total shown |
| System response time | P95 API response time for feasibility/risk endpoints |
| User feedback score | Average post-assessment satisfaction rating |

**Explicitly excluded:** "Business success rate" is **not** used as an MVP metric, since the system cannot guarantee or directly observe real-world business outcomes.

---

# 23. Risks and Mitigation

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Incorrect AI response | High | Medium | Ground all AI outputs in backend-computed figures; restrict AI to explanation/retrieval role; add disclaimers |
| Incomplete local data | High | High | Explicit confidence tagging; fallback to district/category-level averages with clear labeling |
| Outdated government information | Medium | Medium | Display "last verified" date on every scheme; periodic manual review cycle |
| User over-reliance on recommendations | High | Medium | Persistent disclaimers; pilot-first nudges; explicit "final decision is yours" messaging |
| Incorrect financial assumptions | High | Medium | Show all assumptions transparently; allow user override; validate against public benchmark ranges |
| Internet connectivity issues | Medium | High | Lightweight UI, minimal payloads, graceful error states; offline support planned as Future |
| Privacy concerns | Medium | Low | Minimal data collection, secure storage, no third-party sharing without consent |
| API/service failure | Medium | Medium | Timeouts with safe fallback messages; retry logic; monitoring/alerting |
| Data quality issues in curated datasets | Medium | Medium | Manual review of prototype dataset before demo; source citation for all figures |

---

# 24. Competitive Differentiation

GraminVeda is positioned as:

> **A pre-investment rural business decision-support system that combines hyper-local analysis, financial feasibility, risk assessment, what-if simulation, and pilot-first recommendations.**

This is not a claim that no comparable tools exist. General business-assistance chatbots, some MSME-focused fintech apps, and government/NGO field-advisory channels already provide **partial** overlap — for example, generic business tips, loan-eligibility checkers, or scheme directories.

The key distinction GraminVeda draws is between:

- **General business assistance** — broad, non-personalized tips, FAQs, or conversational help about running a business.
- **Pre-investment feasibility and financial decision support** — a structured, numeric, risk-tiered assessment performed *before* capital is committed, using the entrepreneur's specific capital, location, and business parameters.

Where existing rural advisory tools may overlap on individual features (e.g., a scheme directory, or a generic cost calculator), GraminVeda's differentiation lies in its **integrated workflow**: hyper-local context, deterministic financial calculation, explicit risk/confidence scoring, interactive what-if simulation, and a pilot-first recommendation — delivered together, with transparent reasoning, in a single guided session designed for low-digital-literacy users.

---

# 25. SDG Alignment

### Primary — SDG 8: Decent Work and Economic Growth
GraminVeda directly supports sustainable entrepreneurship by helping rural individuals make better-informed investment decisions, reducing the likelihood of failed ventures that erode livelihoods, and promoting sustainable small-business growth.

### Secondary — SDG 9: Industry, Innovation and Infrastructure
By applying AI and data-driven decision-support tools to a traditionally underserved rural advisory gap, the platform extends innovative digital infrastructure and analytical capability into rural micro-enterprise development.

### Tertiary — SDG 1: No Poverty
By helping entrepreneurs avoid poorly-informed investments that could deplete household savings, and by encouraging pilot-first validation, the platform helps protect and grow household economic resilience.

### Optional — SDG 10: Reduced Inequalities
By providing free or low-cost, structured business advisory that is otherwise inaccessible in rural areas, the platform helps narrow the advisory and information gap between urban and rural entrepreneurs.

---

# 26. Product Development Roadmap

| Phase | Deliverables | Main Technologies | Expected Outcome |
|---|---|---|---|
| **Phase 1 — Frontend Prototype** | Static UI screens for all 12 pages (Section 11) | React/Next.js, Tailwind CSS | Clickable prototype demonstrating the full user journey |
| **Phase 2 — Database Integration** | Schema implementation for all entities (Section 15) | PostgreSQL/MySQL, ORM (Prisma/Sequelize) | Persistent storage for users, businesses, and assessments |
| **Phase 3 — Backend/API** | Implementation of all listed APIs (Section 16) | Node.js/Express or Python/FastAPI | Functional API layer connecting frontend to database |
| **Phase 4 — Financial & Feasibility Engine** | Deterministic calculation engine for cost/revenue/break-even/EMI | Python/Node business-logic modules | Reliable, testable financial computation independent of AI |
| **Phase 5 — AI Integration** | NLP parsing of free-text business ideas; grounded AI chat | LLM API (e.g., via Anthropic/OpenAI), prompt-engineering guardrails | Conversational explanation layer grounded in backend results |
| **Phase 6 — RAG & Verified Information** | Curated scheme/knowledge base with retrieval pipeline | Vector DB (e.g., pgvector/FAISS) + retrieval logic | Source-cited government scheme and MSME information |
| **Phase 7 — Hyper-Local Data Integration** | Curated sample dataset for demo districts; confidence tagging | Data pipeline scripts, CSV/JSON datasets | Hyper-local indicators with transparent confidence levels |
| **Phase 8 — Risk & Confidence Engine** | Risk scoring logic across all risk categories | Rule-based scoring module | Consistent, explainable risk tiering |
| **Phase 9 — Pilot-First System** | Pilot-budget suggestion logic tied to risk/confidence thresholds | Business-logic module | Actionable, safer investment guidance |
| **Phase 10 — Testing & SIH Demo** | End-to-end testing, bug fixes, demo script, presentation deck | Manual + automated testing (Jest/Pytest) | Stable, demo-ready MVP for SIH evaluation |

---

# 27. Final Product Flow

```text
                    RURAL ENTREPRENEUR
                           ↓
                  Web / Voice Interface
                           ↓
                  Entrepreneur Profile
                           ↓
                    Business Idea
                           ↓
                       Location
                           ↓
                     Capital Input
                           ↓
                  Hyper-Local Data
                           ↓
               Financial Feasibility
                           ↓
                    Risk Analysis
                           ↓
                  What-If Simulation
                           ↓
                 Data Confidence Check
                           ↓
                  AI Explanation Layer
                           ↓
                    RECOMMENDATION
                           ↓
       ┌──────────┬──────────┬──────────┬──────────┐
       ↓          ↓          ↓          ↓
    PROCEED      PILOT     MODIFY     HIGH RISK
       └──────────┴──────────┴──────────┴──────────┘
                           ↓
                 Personalized Business Plan
```

---

## Document Notes

- All features are tagged **[MVP]**, **[Phase 2]**, or **[Future]** throughout this document to guide implementation priority for the hackathon team.
- The core product identity — **Hyper-local + Financial Feasibility + Risk Analysis + What-If Simulation + Pilot-First Decision Support** — must be preserved as scope evolves; the AI Advisory layer is a supporting explanation/interface component, not the product's core value driver.
- Any AI-generated content used within the product (explanations, chat responses) must comply with the Safety and Responsible AI Requirements in Section 9 at all times.

*End of Document.*
