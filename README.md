# SIH26091 – Rural Micro-Entrepreneur Business Advisory
## Technology Stack & Technical Architecture

---

## 1. Project Overview

**SIH26091** is an **AI-Driven Hyper-Local Business Advisory and Financial Decision Support System for Rural Micro-Entrepreneurs**.

The system helps a rural entrepreneur evaluate whether a proposed business is suitable for their location and available capital, by analysing local data, costs, revenue potential, competition, market indicators, financial requirements, risk, and relevant government support.

**Core principles the architecture must respect:**
- The system does **not guarantee business success** or push users to invest.
- It provides **evidence-based decision support** and clearly communicates uncertainty.
- Recommendations are categorical, not deterministic:
  - 🟢 Proceed
  - 🟡 Proceed with Pilot
  - 🟠 Modify Business Plan
  - 🔴 High Risk / Do Not Invest Yet
- A **Pilot-First approach** lets users test a scaled-down version of the business before committing full capital.

---

## 2. Development Approach (Progressive Build)

| Stage | Focus |
|---|---|
| 1 | Frontend UI with dummy/static data |
| 2 | Database integration |
| 3 | Backend APIs & business logic |
| 4 | Financial & Feasibility Engine (deterministic) |
| 5 | AI Layer (LLM for language, not math) |
| 6 | RAG for verified government/MSME info |
| 7 | Hyper-local data integration |
| 8 | Risk & Confidence Engine |
| 9 | What-If Simulator |
| 10 | Pilot Recommendation logic |

This staged approach lets a student team demo a working product at every checkpoint, rather than building everything at once and risking an unfinished system near the deadline.

---

## 3. Frontend

**Recommended:** React.js (+ Next.js optional) + Tailwind CSS + TypeScript/JavaScript

**Why:**
- React has the largest ecosystem and community support — critical for a time-boxed hackathon where teams need quick answers to problems.
- Component-based structure maps naturally to the app's many distinct screens (profile, dashboard, simulator, chat).
- Tailwind CSS enables fast, consistent styling without hand-writing large CSS files — important when UI polish matters for judging but time is limited.
- Next.js (optional) adds file-based routing and easy deployment to Vercel if the team wants SSR or simpler routing; plain React + Vite is also acceptable if the team prefers a lighter setup.
- TypeScript is recommended but optional — it reduces bugs when the frontend talks to a growing set of APIs.

**Required Frontend Screens:**
1. Landing page
2. Entrepreneur registration/profile
3. Business idea input
4. Location selection
5. Financial input
6. Feasibility dashboard
7. Risk dashboard
8. What-if simulator
9. Government scheme information
10. AI chat/voice interface

---

## 4. Backend

**Recommended:** Python + FastAPI

**Why FastAPI:**
- Async-native, fast to develop in, and has automatic interactive API docs (Swagger/OpenAPI) — useful for both development speed and demoing to judges.
- Python's ecosystem (Pandas, NumPy, scikit-learn) integrates directly into the same codebase as the financial and risk engines — no need for a separate microservice language.
- Built-in request/response validation via Pydantic reduces bugs in financial data handling.
- Easy integration with LLM SDKs (OpenAI, Gemini) and vector DB clients (Chroma, FAISS, pgvector).

**Responsibilities:**
- REST API development and routing
- Request/response validation (Pydantic models)
- Authentication (JWT-based)
- Business logic orchestration
- Deterministic financial calculations
- AI/LLM integration layer
- Database communication (via ORM, e.g., SQLAlchemy)

**Example API Categories:**
```text
/api/users          → registration, profile, auth
/api/businesses      → business idea CRUD
/api/locations       → location lookup & hyper-local data
/api/feasibility     → feasibility scoring
/api/finance         → financial engine (revenue, EMI, break-even, etc.)
/api/risk            → risk & confidence scoring
/api/simulation      → what-if simulator
/api/schemes         → government scheme RAG queries
/api/chat            → conversational AI interface
```

---

## 5. Database

**Recommended:** PostgreSQL

**Why:**
- Mature, open-source, ACID-compliant — well suited for financial data that must remain consistent and auditable.
- Native JSON/JSONB support allows flexible storage of variable location/market indicator data without needing a separate NoSQL store.
- `pgvector` extension allows the same database to double as a vector store for RAG, avoiding the operational overhead of running a separate vector database in a prototype.
- Free tier hosting readily available (Supabase, Neon, Railway) — important for a zero/low-budget student project.

### Core Tables/Entities

**Users**
```text
user_id (PK)
name
location
language
available_capital
experience
```

**Businesses**
```text
business_id (PK)
business_name
category
startup_cost
operating_cost
expected_revenue
```

**Locations**
```text
location_id (PK)
state
district
block
village
population
market_indicators (JSONB)
```

**Financial Plans**
```text
plan_id (PK)
user_id (FK → Users)
business_id (FK → Businesses)
investment
loan
revenue
expenses
profit
break_even
```

**Recommendations**
```text
recommendation_id (PK)
user_id (FK → Users)
business_id (FK → Businesses)
feasibility_score
risk_level
confidence
recommendation
```

---

## 6. AI Technology (LLM Layer)

**Recommended:** OpenAI API or Gemini API (cloud-hosted); a local/open-source LLM (e.g., via Ollama) can be a fallback for offline demos, but is optional.

**Role of the LLM:**
- Natural-language interaction with the user
- Extracting structured business-idea details from free-text input
- Generating personalized, human-readable explanations of results
- Multilingual assistance (translation/localization of UI text and responses)
- Conversational advisory (answering follow-up questions)

**The LLM must NOT independently perform critical financial calculations.**

**Why:** LLMs are prone to arithmetic errors and cannot guarantee reproducible, auditable outputs. Financial decisions affecting a person's real capital require deterministic, testable logic. The LLM's job is to *understand and explain*, not to *calculate*.

**Architecture:**
```text
User
 ↓
LLM / NLP  (interprets free-text input)
 ↓
Structured Input  (JSON extracted from conversation)
 ↓
Financial + Feasibility Engine  (deterministic backend logic)
 ↓
Verified Results  (numbers, risk levels, confidence)
 ↓
LLM  (converts results into plain language)
 ↓
Human-readable Explanation
```

---

## 7. RAG (Retrieval-Augmented Generation) Technology

**Recommended stack:** LangChain or LlamaIndex + pgvector (or Chroma/FAISS for local dev) + a standard embedding model (e.g., OpenAI embeddings or a sentence-transformers model)

**Why:**
- LangChain/LlamaIndex provide ready-made pipelines for document loading, chunking, and retrieval, saving significant development time.
- `pgvector` keeps the vector store inside the same PostgreSQL instance already used for structured data — simplifying infrastructure for a student team. Chroma/FAISS are lightweight local alternatives during early development.

**Purpose:** Ground LLM answers about government schemes, MSME information, and financial-support programs in real official documents, with **source attribution**, rather than letting the LLM invent policy details.

**RAG Pipeline:**
```text
Official Documents (PDFs, scheme pages, MSME guidelines)
 ↓
Document Processing
 ↓
Chunking
 ↓
Embeddings
 ↓
Vector Database (pgvector / Chroma)
 ↓
User Query
 ↓
Relevant Document Retrieval
 ↓
LLM
 ↓
Answer + Source Citation
```

**Note:** Government and financial information should preferably come from official/verified sources only. For the prototype, a small curated set of real documents (or clearly labeled sample documents) should be used — the system must never fabricate scheme details.

---

## 8. Financial Engine

Financial calculations are implemented as **deterministic backend logic** (Python), not delegated to the LLM, so results are consistent, auditable, and explainable.

**Core Calculations:**
```text
Revenue        = Units Sold × Selling Price
Operating Cost = Fixed Costs + Variable Costs
Profit         = Revenue − Operating Cost
Funding Gap    = (Startup Cost + Initial Operating Cost) − Available Capital
Break-even     = Fixed Costs / (Selling Price − Variable Cost per Unit)
Loan/EMI       = [P × r × (1+r)^n] / [(1+r)^n − 1]
                 (P = principal, r = monthly interest rate, n = tenure in months)
Cash-flow      = Opening Balance + Revenue − Expenses (per period)
Stress Testing = Re-run above calculations under adjusted assumptions
                 (e.g., −20% demand, +15% input cost)
```

These functions live in a dedicated `finance_engine` module, independently unit-testable and reusable by both the feasibility and simulator features.

---

## 9. Risk & Confidence Engine

**Risk Factors Considered:**
```text
Financial Risk     → funding gap, break-even period, EMI burden
Market Risk        → demand volatility, market indicator quality
Competition Risk    → number/density of similar businesses nearby
Demand Risk        → population, purchasing power, seasonality
Input Cost Risk    → raw material price stability/availability
Data Uncertainty   → how complete/reliable the local data is
```

**Design Approach:**
- Each factor produces a sub-score (e.g., Low/Medium/High or 0–1 scale).
- Sub-scores are combined using **configurable, documented weights** (not hard-coded "black box" numbers).
- Weights should be treated as tunable parameters to be validated/refined over time — not presented as scientifically proven probabilities.

**Output Concepts (not a raw success probability):**
- **Risk Level** (Low / Medium / High)
- **Data Confidence** (how much reliable local data was available)
- **Evidence Strength** (how well-supported the inputs are)
- **Recommendation Confidence** (how confident the system is in its Proceed/Pilot/Modify/High-Risk output)

The system must **never claim an exact probability of business success** unless backed by validated statistical evidence, which is out of scope for a prototype.

---

## 10. What-If Simulator

Allows users to adjust key variables and see real-time recalculated outcomes, using the same deterministic Financial Engine:

**Adjustable Inputs:** Investment, Selling Price, Demand, Operating Cost, Input Cost, Loan Amount

**Recalculated Outputs:** Revenue, Profit, Cash Flow, Break-even, Risk Level

This is implemented as a stateless API call (`/api/simulation`) that reuses the financial and risk engine functions with modified parameters — no duplicate logic needed.

---

## 11. Pilot Recommendation Logic

When **Data Confidence is low** or **Risk Level is high**, the system recommends a smaller pilot instead of full-scale investment.

**Example output:**
> Instead of investing ₹2,00,000 immediately, test the business with a ₹25,000 pilot and evaluate actual demand before scaling.

This is a rule-based decision layer sitting on top of the Risk Engine output — e.g., `if risk_level == "High" or data_confidence == "Low": recommend_pilot()`.

---

## 12. Security

| Concern | Approach |
|---|---|
| Authentication | JWT-based auth for API access |
| Password storage | Hashing (bcrypt/argon2) — never plain text |
| Transport | HTTPS enforced in deployment |
| Input validation | Pydantic schema validation on all endpoints |
| API authentication | Token-based access control per route |
| Database access | Least-privilege DB roles, parameterized queries (ORM) |
| Personal/financial data | Field-level access restrictions, no unnecessary exposure |
| Secrets | API keys stored in environment variables, never committed |
| Abuse prevention | Rate limiting on public/AI endpoints |
| Error handling | Generic error messages to users; detailed logs server-side only |

---

## 13. Deployment (Prototype-Level)

```text
Frontend   → Vercel
Backend    → Render / Railway / AWS (any is acceptable)
Database   → PostgreSQL via Supabase / Neon / Railway
AI         → LLM API (OpenAI / Gemini)
Vector DB  → pgvector (inside PostgreSQL) or Chroma
```

These are practical, low/no-cost options suitable for a hackathon demo. They can be swapped for enterprise-grade infrastructure (AWS/GCP/Azure full stack, managed Kubernetes, etc.) in a future production version — the architecture does not depend on any specific vendor.

---

## 14. Development Architecture (Full System)

```text
                    USER
                      ↓
             Web / Voice Interface
                      ↓
                React Frontend
                      ↓
                FastAPI Backend
                      ↓
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
 PostgreSQL       AI / LLM       Data Sources
       ↓              ↓              ↓
       └──────────────┼──────────────┘
                      ↓
             Feasibility Engine
                      ↓
             Financial Engine
                      ↓
               Risk Engine
                      ↓
             What-If Simulator
                      ↓
             Recommendation
                      ↓
       Proceed / Pilot / Modify / High Risk
```

---

## 15. Technology Selection Table

| Layer | Technology | Purpose | Reason for Selection |
|---|---|---|---|
| Frontend | React.js + Tailwind CSS | UI for all user-facing screens | Fast development, huge ecosystem, component reuse, quick styling |
| Backend | Python + FastAPI | API layer, business logic orchestration | Async, auto-docs, easy ML/LLM integration, same language as data engines |
| Database | PostgreSQL | Structured data storage | ACID compliance, JSONB flexibility, free hosting tiers, pgvector support |
| AI/LLM | OpenAI API / Gemini API | Conversational interface, explanations, extraction | Mature APIs, multilingual capability, no need to train models |
| RAG | LangChain / LlamaIndex | Orchestrating retrieval + generation | Pre-built pipelines save development time |
| Vector Database | pgvector (or Chroma for local dev) | Storing embeddings for scheme/document retrieval | Reuses existing PostgreSQL instance; simple infra |
| Financial Engine | Python (custom module) | Deterministic calculations | Reliable, testable, auditable — no LLM hallucination risk |
| Data Processing | Pandas + NumPy | Data cleaning, aggregation, calculations | Standard, well-documented, fast to use |
| Maps/Location | Leaflet + OpenStreetMap | Location selection & visualization | Free, open-source, no API key required for basic use |
| Authentication | JWT | Secure API access | Stateless, simple to implement in FastAPI |
| Deployment | Vercel (frontend) + Render/Railway (backend) + Supabase/Neon (DB) | Hosting | Free/low-cost tiers, quick setup for hackathon timelines |
| Version Control | Git + GitHub | Collaboration & code history | Industry standard, free, integrates with CI/CD |

---

## 16. MVP vs Future Version

### MVP (SIH Prototype Scope)
- React frontend (all 10 core screens)
- Dummy/local dataset for locations and market indicators
- PostgreSQL for persistent storage
- FastAPI backend with core endpoints
- Deterministic Financial & Feasibility Engine
- Basic Risk Engine (rule-based, configurable weights)
- Basic AI chatbot (LLM for explanation/interaction only)
- What-if simulator using the same financial engine
- Small curated RAG document set (a few real/sample government scheme documents)

### Future Production Version
- Real-time government and market data APIs
- Advanced hyper-local datasets (census, GIS, sector-specific data)
- Voice interaction (speech-to-text / text-to-speech)
- Multiple Indian regional languages at scale
- Advanced ML models for risk/demand prediction (with validated statistical backing)
- Larger-scale RAG covering many official document sources
- Verified real government API integrations (e.g., MSME portals, Udyam)
- Native mobile application
- Advanced analytics and admin dashboards

---

## 17. Important Constraints (Design Principles)

1. **Feasibility** — stack must be buildable by a student team within hackathon timelines.
2. **Easy development** — avoid unnecessary microservices, exotic frameworks, or complex DevOps.
3. **Low cost** — every core component has a free/low-cost tier.
4. **Explainability** — every recommendation traces back to deterministic calculations and disclosed data confidence, not an opaque model.
5. **Security** — basic but real protections on data, auth, and secrets.
6. **Scalability** — architecture (FastAPI + PostgreSQL + modular engines) can grow without a rewrite.
7. **Demo reliability** — dummy data fallbacks ensure the app works even if a live data source is unavailable.

The system does **not** claim to accurately predict business success, and does **not** fabricate APIs, datasets, government integrations, or real-time data availability. All prototype data sources are clearly labeled as **Prototype/Dummy Data**, distinct from planned **Future Real-World Data Integration**.

---

## Recommended Final Stack

```text
Frontend        → React + Tailwind CSS
Backend         → Python + FastAPI
Database        → PostgreSQL
AI              → LLM API (OpenAI / Gemini)
RAG             → LangChain/LlamaIndex + pgvector
Financial       → Python calculation engine
Data Processing → Pandas + NumPy
Maps            → Leaflet + OpenStreetMap
Authentication  → JWT
Deployment      → Vercel + Render/Railway + PostgreSQL (Supabase/Neon)
Version Control → Git + GitHub
```

---

## Why This Technology Stack Fits SIH26091

1. **Separation of reasoning and computation** — the LLM handles language and explanation while a deterministic Python engine handles all financial math, ensuring numbers shown to a rural entrepreneur are reliable and reproducible, not AI-guessed.
2. **Low cost, hackathon-appropriate** — every layer (React, FastAPI, PostgreSQL, free hosting tiers) can be built and deployed by a student team with no budget, matching SIH's resource constraints.
3. **Transparency by design** — RAG with source attribution ensures government scheme information is traceable to real documents, directly supporting the "evidence-based, not guaranteed" mandate.
4. **Built-in uncertainty communication** — the Risk & Confidence Engine's Risk Level / Data Confidence / Evidence Strength model gives the system a principled way to say "we don't know" instead of overclaiming.
5. **Pilot-first architecture** — the What-If Simulator and Pilot Recommendation logic reuse the same financial engine, so the system can consistently suggest scaled-down testing without extra engineering overhead.
6. **Single-database simplicity** — using PostgreSQL with `pgvector` for both structured and vector data reduces infrastructure complexity, which matters for a small student team maintaining the system under deadline pressure.
7. **Modular, extensible design** — each stage (financial, risk, RAG, hyper-local data) is a separable module, so the MVP can be demoed early and expanded toward the "Future" feature set without a rewrite.
8. **Honesty about data limitations** — dummy/local datasets are clearly separated from future real-world integrations, keeping the prototype's claims aligned with what it can actually verify today.
