import { buildUserAgent } from "./userAgent.js";
import type { TimeWindow } from "./types.js";

export async function fetchSubredditContent(subreddit: string, timeWindow: TimeWindow) {
  const userAgent = buildUserAgent();

  // Stub: in a real implementation you would call Reddit APIs with OAuth
  // and include the userAgent in request headers where applicable.
  return {
    subreddit,
    timeWindow,
    userAgent,
    items: [] as Array<{ permalink: string; createdUtc: number; kind: "post" | "comment" }>,
  };
}
