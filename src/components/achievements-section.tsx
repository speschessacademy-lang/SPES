import achievementsDoc from "@/content/achievements.json";
import AchievementsGallery, { type AchievementItem } from "@/components/achievements-gallery";
import { readdir } from "node:fs/promises";
import path from "node:path";

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function isAllowedImage(filename: string) {
  const ext = path.extname(filename).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) return false;
  if (filename.startsWith(".")) return false;
  if (filename === ".DS_Store") return false;
  // These are used by Testimonials; don't mix them into the Achievements gallery.
  if (filename.startsWith("placeholder-avatar-")) return false;
  return true;
}

function normalizeImageSrc(input: string): string {
  const src = input.trim();
  if (!src) return src;

  // allow absolute URLs if someone pastes one
  if (src.startsWith("http://") || src.startsWith("https://")) return src;

  // Tina image fields sometimes store just the filename or "images/filename"
  if (src.startsWith("/")) return src;
  if (src.startsWith("images/")) return `/${src}`;
  if (src.startsWith("public/images/")) return src.replace(/^public/, "");

  // If it's just "foo.jpg", treat it as under /images
  return `/images/${src}`;
}

export default async function AchievementsSection() {
  const configuredItems =
    ((achievementsDoc as { items?: AchievementItem[] }).items ?? []).filter(
      (it): it is AchievementItem => Boolean(it?.src)
    );

  const normalizedConfiguredItems: AchievementItem[] = configuredItems.map((it) => ({
    ...it,
    src: normalizeImageSrc(it.src),
  }));

  const configuredSrcSet = new Set(normalizedConfiguredItems.map((it) => it.src));

  let folderItems: AchievementItem[] = [];
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    const filenames = (await readdir(imagesDir)).filter(isAllowedImage);
    filenames.sort((a, b) => a.localeCompare(b));

    folderItems = filenames
      .map((filename) => ({ src: `/images/${filename}` satisfies string }))
      .filter((it) => !configuredSrcSet.has(it.src));
  } catch {
    // If the folder doesn't exist (or isn't readable), fall back to the configured JSON list.
    folderItems = [];
  }

  const mergedItems: AchievementItem[] = [
    ...normalizedConfiguredItems,
    ...folderItems.map((it, idx) => ({
      ...it,
      alt: `Achievement ${normalizedConfiguredItems.length + idx + 1}`,
    })),
  ];

  return <AchievementsGallery items={mergedItems} />;
}


