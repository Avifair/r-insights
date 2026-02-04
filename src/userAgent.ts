import { getConfig } from "./config.js";

export function buildUserAgent(): string {
  const cfg = getConfig();
  const botPart = cfg.botUsername ? ` by u/${cfg.botUsername}` : "";
  return `avifairteam:reddit-community-insights:0.1.0 (contact: ${cfg.contactEmail})${botPart}`;
}
