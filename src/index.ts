import { fetchSubredditContent } from "./fetch.js";
import { aggregateDiscussions } from "./process.js";
import type { TimeWindow } from "./types.js";

async function main() {
  const subreddit = process.argv[2] ?? "example_subreddit";
  const timeWindow = (process.argv[3] as TimeWindow) ?? "last_14_days";

  const fetched = await fetchSubredditContent(subreddit, timeWindow);

  const insights = aggregateDiscussions({
    subreddit: fetched.subreddit,
    timeWindow: fetched.timeWindow,
    items: fetched.items,
  });

  console.log(JSON.stringify(insights, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
