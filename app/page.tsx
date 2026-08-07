import type { Metadata } from "next";
import { LegacyPage } from "./LegacyPage";

export const metadata: Metadata = {
  title: "Phoenix Architecture & Aluminium Inc.",
  description:
    "World-standard aluminium curtain wall, door, window, partition and sliding systems.",
};

export default function Home() {
  return <LegacyPage route="/" />;
}
