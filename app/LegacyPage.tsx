import pages from "../content/pages.json";
import { LegacyInteractions } from "./LegacyInteractions";

const pageMap = pages as Record<string, string>;

export function LegacyPage({ route }: { route: string }) {
  const normalized = route !== "/" ? route.replace(/\/+$/, "") : route;
  const sourceHtml = pageMap[normalized] ?? pageMap["/en"];
  const html = sourceHtml
    .replaceAll(
      '<span class="brand-placeholder" aria-label="Logo placeholder"></span>',
      '<img class="brand-logo" src="/phoenix-logo.png" alt="Phoenix Architecture & Aluminium Inc.">',
    )
    .replaceAll("tel:+90 212 999 6910", "tel:+14372312750")
    .replaceAll("+90 212 999 6910", "(437) 231-2750")
    .replaceAll("https://wa.me/+905369086278", "https://wa.me/14372312750")
    .replaceAll(
      "G&ouml;kevler, Hadımk&ouml;y kavşağı, E-5 Karayolu &uuml;zeri, 18. Blok, K.21-D:188, Bur&ccedil; İstanbul 34522 Esenyurt/İstanbul",
      "35 Lister Dr, Barrie, ON L4N 0L4",
    )
    .replaceAll(
      "Gökevler, Hadımköy kavşağı, E-5 Karayolu üzeri, 18. Blok, K.21-D:188, Burç İstanbul 34522 Esenyurt/İstanbul",
      "35 Lister Dr, Barrie, ON L4N 0L4",
    )
    .replace(
      /<a href="mailto:onyx@onyxyapi\.com\.tr">[\s\S]*?<\/a>/gi,
      "",
    );

  return (
    <>
      <LegacyInteractions />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
