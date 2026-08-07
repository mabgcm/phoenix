import type { Metadata } from "next";
import { LegacyPage } from "../LegacyPage";

type RouteProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const label = slug.at(-1)?.replaceAll("-", " ") ?? "English";

  return {
    title: label.replace(/\b\w/g, (character) => character.toUpperCase()),
    description:
      "Architectural aluminium systems, curtain walls, doors, windows, partitions and sliding solutions.",
  };
}

export default async function RoutePage({ params }: RouteProps) {
  const { slug } = await params;
  return <LegacyPage route={`/${slug.join("/")}`} />;
}
