export type TimeWindow = "last_14_days" | "last_30_days";

export type AggregatedTopic = {
  topic: string;
  trend: "increasing" | "decreasing" | "stable";
  representativeThreads: string[];
};

export type SubredditInsights = {
  subreddit: string;
  timeWindow: TimeWindow;
  topics: AggregatedTopic[];
};
