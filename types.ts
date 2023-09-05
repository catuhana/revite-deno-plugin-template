import type { Client, Session } from "npm:revolt.js";

declare global {
  interface Window {
    controllers: {
      client: {
        sessions: Map<string, Session>;
        getReadyClient(): Client;
      };
    };
  }
}

export type { Client, Session };
