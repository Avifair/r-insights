# Architecture Overview

This project is structured as a lightweight external service that interfaces with Reddit through approved OAuth access.

## Components
1. Data Collector
   Retrieves recent posts and comments from a single subreddit within a defined time window.

2. Processor
   Performs high-level aggregation and topic grouping.

3. Storage (Temporary)
   Stores minimal intermediate data required for aggregation. Raw content is not intended for long-term storage.

4. Report Generator
   Produces aggregated summaries and statistics suitable for sharing back with a participating subreddit.

## Design Principles
- Subreddit-level isolation
- Minimal data retention
- No global aggregation
- Clear auditability of API usage
