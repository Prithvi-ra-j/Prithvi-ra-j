# Prithviraj Chavan — AI Systems Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prithvi-raj-chavan-719b2019b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/Prithvi-ra-j)
[![Email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:chavanprithvi45@gmail.com)

---

I build LLM systems that run in production — not demos that fall over under real load.

At **Mu Sigma**, I designed and own an end-to-end LLM-powered enterprise search system: FAISS vector index over a large internal document corpus, citation-backed Q&A via FastAPI, streaming responses, PostgreSQL metadata, and zero-downtime Docker deployment with GitHub Actions CI/CD. Real users, real documents, daily use.

The gap between a notebook that works and a system that works at 2 AM on a Friday — that's where I spend most of my time.

---

## What I've built

### [Munshi](https://github.com/Prithvi-ra-j/Munshi) — 11-agent async WhatsApp business assistant
LangGraph multi-agent DAG with persistent per-user state via `AsyncSqliteSaver`. Handles task tracking, payment reminders, reply drafting, and voice notes in Hindi, English, and Hinglish. 65-case eval suite. 92% intent accuracy, 94% entity precision.

`LangGraph` `LangSmith` `FastAPI` `ChromaDB` `APScheduler` `Docker` `Groq`

### [Industrial RAG Ingestion Pipeline](https://github.com/Prithvi-ra-j/Industrial-RAG-Ingestion-Pipeline) — enterprise-grade RAG for air-gapped environments
PySpark ingestion + FAISS IVF indexing designed for manufacturing facilities with no cloud access. 1,200 docs/min throughput, sub-45ms retrieval on 8GB RAM. OOM recovery with automatic batch reduction and checkpoint resumption.

`PySpark` `FAISS` `FastAPI` `sentence-transformers` `Docker`

---

## Production work (Mu Sigma)

**Enterprise LLM Search System** — internal, not public  
Document corpus → FAISS index → citation-backed Q&A → FastAPI streaming  
Stack: `LangChain` `FAISS` `FastAPI` `PostgreSQL` `Docker` `GitHub Actions`

This is a production system with real users, not a side project. I own the architecture end-to-end.

---

## Stack

**Orchestration**: LangGraph · LangChain · LangSmith  
**Infra**: FastAPI · Docker · GitHub Actions · PostgreSQL · SQLite  
**Retrieval**: FAISS · ChromaDB · sentence-transformers  
**Data**: PySpark · Parquet  
**LLMs**: Groq · OpenRouter · Claude API  

---

## Currently

- Completing **AWS ML Engineer Associate** certification
- Open to **AI/ML Engineering** and **Applied AI Systems** roles in Bengaluru

---

*All production metrics are real. All design decisions have documented tradeoffs. The eval suite is in the repo.*
