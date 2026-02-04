# Reddit Community Insights (Pilot)

This repository documents a community-focused subreddit analytics pilot operated by the Avifair team.

The goal is to help individual subreddits better understand their own discussions over time by providing aggregated, subreddit-specific insights. The project is intentionally limited in scope and designed to return value back to participating Reddit communities.

## Project Purpose
Active subreddits often contain valuable feedback and recurring issues spread across many posts and comments. Moderators and community members may find it difficult to identify trends without manually reviewing large volumes of content.

This project explores a lightweight analytics approach that:
- Aggregates discussion topics within a single subreddit
- Highlights trend changes over a defined time window
- Links back to representative Reddit threads for context

The project does not aim to analyze Reddit globally and does not combine data across unrelated communities.

## Scope and Limitations
- The pilot operates on a subreddit-by-subreddit basis
- Only a small number of participating subreddits are supported
- Each subreddit is handled independently
- No global or cross-community analysis is performed

## High-Level Workflow
1. A participating subreddit is selected for the pilot.
2. The application retrieves recent posts and comments from that subreddit within a defined time window using approved OAuth access.
3. Discussions are processed at a high level and grouped into broad categories such as recurring issues or frequently discussed topics.
4. Aggregated statistics and summaries are generated.
5. Insights may be shared back with the subreddit as a periodic summary containing only aggregated information and links to original discussions.

## Data Handling
- Access is performed via approved OAuth authentication.
- A descriptive User-Agent is used for all requests.
- Raw content is not redistributed outside Reddit.
- Stored references are minimized and periodically purged.
- Deleted or removed content is handled in accordance with Reddit’s data deletion requirements.
- API usage is rate-limited and scoped to the minimum necessary for the pilot.

## Repository Structure
- docs/architecture.md: system architecture and data flow
- docs/data-policy.md: data retention and deletion handling notes
- docs/sample-output.json: example aggregated output
- src/: TypeScript stubs outlining authentication, retrieval, and processing

## Status
This repository currently contains documentation, examples, and TypeScript stubs for the pilot phase. Implementation details will be added as the pilot progresses.

## Contact
avifairteam@gmail.com
