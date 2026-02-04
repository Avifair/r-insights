type Config = {
  contactEmail: string;
  botUsername?: string;
};

export function getConfig(): Config {
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  if (!contactEmail) {
    throw new Error("Missing CONTACT_EMAIL. Create a .env file based on .env.example.");
  }
  const botUsername = process.env.BOT_USERNAME?.trim();
  return { contactEmail, botUsername: botUsername || undefined };
}
