// Single source of truth. Edit this file; index.html and cv.html both read it.
window.DATA = {
  name: "Celsus Caesar Oweitu",
  title: "Global Solutions Architect",
  tagline: "I design data systems for health programmes, from field data collection to reporting.",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/celsus-caesar-oweitu-29506225" },
    { label: "GitHub", url: "https://github.com/ZeratulXjs" }
  ],
  summary:
    "Data and systems leader working across analytics, data engineering and digital transformation in East Africa. Currently architecting a multi-country data management system for mental health programmes, building on earlier work leading analytics and real-time data infrastructure in a high-growth technology company.",
  roles: [
    {
      id: "strongminds", org: "StrongMinds", title: "Global Solutions Architect",
      period: "August 2026 – Present", place: "Remote (Uganda)",
      summary: "Architecting digital and data solutions for a nonprofit delivering mental health programmes across Uganda, Zambia and beyond.",
      highlights: [
        "Designing a data management system that brings together CommCare, KoBo and Google Sheets with GCP storage and reporting, and DHIS2 integration.",
        "Automating data processes with SQL and Python.",
        "Applying the ADKAR change-management model to roll out digital solutions to field and programme teams."
      ],
      tags: ["Health and ICT4D", "Data platforms", "CommCare", "KoBo", "DHIS2", "GCP", "SQL", "Python"]
    },
    {
      id: "safeboda", org: "SafeBoda", title: "Head of Business Intelligence and Analytics",
      period: "Jan 2023 – Jul 2026", place: "Kampala, Uganda",
      summary: "Built and led the analytics function of an East African ride-hailing platform.",
      highlights: [
        "Set up BI strategy, governance, OKRs and service level agreements for analytics across product, marketing, operations and finance.",
        "Built a real-time streaming pipeline for driver GPS data using Kafka and PyFlink, writing to partitioned PostgreSQL with PostGIS.",
        "Reduced data platform costs through hosting migration, licence rationalisation and ETL optimisation.",
        "Ran an internal Data Academy and Data Ambassadors programme to build self-service analytics.",
        "Built churn and demand models used by marketing and operations."
      ],
      tags: ["Analytics leadership", "Data platforms", "Infrastructure", "Kafka", "Flink", "PostgreSQL", "PostGIS", "Kubernetes", "Metabase", "Python", "SQL"]
    },
    {
      id: "samasource-senior", org: "Samasource Uganda", title: "Senior Business Analyst",
      period: "Jul 2021 – Dec 2022", place: "Kampala, Uganda",
      summary: "Led analytics for production and client profitability across two delivery sites.",
      highlights: [
        "Built cost and profitability dashboards joining workforce management and revenue data.",
        "Moved reporting from weekly batches to near real-time using BigQuery and Looker.",
        "Supported ISO 9001, 27001 and 22301 certification audits with data quality controls."
      ],
      tags: ["Analytics leadership", "Data platforms", "BigQuery", "Looker", "SQL"]
    },
    {
      id: "samasource-ops", org: "Samasource Uganda", title: "Business Operations Analyst",
      period: "Mar 2020 – Jun 2021", place: "Kampala, Uganda",
      summary: "Automated operational KPI reporting and supported internal BI tooling.",
      highlights: [
        "Automated weekly KPI reporting with BigQuery and Looker Studio.",
        "Contributed requirements and QA testing for in-house BI tools."
      ],
      tags: ["Data platforms", "BigQuery", "Looker", "SQL"]
    }
  ],
  projects: [
    {
      id: "health-pipeline", name: "Community health data pipeline", role: "StrongMinds",
      blurb: "A reference design for collecting, cleaning and reporting field health data. It is built local and on-premises first, so a team can run it on its own hardware with no cloud dependency, and the same design has been adapted for cloud-native and hybrid deployments.",
      points: [
        "Ingests KoBoToolbox and CommCare exports, plus OCR of scanned paper forms.",
        "Four-gate identity resolution in PostgreSQL (exact, high-confidence fuzzy, human review, new record) so a person is one record across sources.",
        "Metabase for reporting, Caddy for TLS, private access over a WireGuard-based VPN.",
        "Docker Compose with base and per-environment overrides; deployed through GitHub Actions."
      ],
      tags: ["Health and ICT4D", "Data platforms", "Infrastructure", "PostgreSQL", "Python", "Metabase", "KoBo", "CommCare", "DHIS2", "Docker", "WireGuard"]
    },
    {
      id: "gps-streaming", name: "Real-time GPS streaming pipeline", role: "SafeBoda",
      blurb: "A streaming job that turns driver location events into queryable, geospatial data.",
      points: [
        "Kafka consumer in PyFlink with GPS parsing fixes and idempotent upserts.",
        "Monthly range-partitioned PostgreSQL with PostGIS and automated partition management.",
        "Kubernetes deployment with a parallel-run period before retiring the previous job."
      ],
      tags: ["Data platforms", "Infrastructure", "Kafka", "Flink", "PostgreSQL", "PostGIS", "Kubernetes", "Python"]
    },
    {
      id: "profit-scorecard", name: "Project profitability scorecard", role: "Samasource Uganda",
      blurb: "An automated view of project-level margin built from labour cost, SLA compliance and billing data, used to inform client renewal and pricing discussions.",
      points: [],
      tags: ["Analytics leadership", "BigQuery", "Looker", "SQL"]
    }
  ],
  skills: {
    "Data platforms and engineering": ["PostgreSQL", "BigQuery", "Kafka", "Flink", "PostGIS", "SQL", "Python", "R"],
    "Health information systems": ["CommCare", "KoBo", "DHIS2"],
    "Infrastructure": ["GCP", "Docker", "WireGuard"],
    "Business intelligence": ["Metabase", "Looker", "Power BI"]
  },
  education: [
    "MSc Molecular Biology, Makerere University (2020)",
    "BSc Molecular Biology and Biotechnology, University of Dar es Salaam (2011)"
  ],
  learning: "Working towards TOGAF Foundation, then CDMP Fundamentals."
};
