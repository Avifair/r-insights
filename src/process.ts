import type { SubredditInsights } from "./types.js";

export function aggregateDiscussions(input: {
  subreddit: string;
  timeWindow: "last_14_days" | "last_30_days";
  items: Array<{ permalink: string }>;
}): SubredditInsights {
  // Stub output to demonstrate the intended format for pilot review.
  return {
    subreddit: input.subreddit,
    timeWindow: input.timeWindow,
    topics: [
      {
        topic: "Post-update stability issues",
        trend: "increasing",
        representativeThreads: [
          "https://reddit.com/r/example_subreddit/comments/abc123",
          "https://reddit.com/r/example_subreddit/comments/def456",
        ],
      },
      {
        topic: "New player onboarding questions",
        trend: "stable",
        representativeThreads: ["https://reddit.com/r/example_subreddit/comments/ghi789"],
      },
    ],
  };
}
