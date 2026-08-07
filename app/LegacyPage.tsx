import pages from "../content/pages.json";
import { LegacyInteractions } from "./LegacyInteractions";

const pageMap = pages as Record<string, string>;

export function LegacyPage({ route }: { route: string }) {
  const normalized = route !== "/" ? route.replace(/\/+$/, "") : route;
  const html = pageMap[normalized] ?? pageMap["/en"];

  return (
    <>
      <LegacyInteractions />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
