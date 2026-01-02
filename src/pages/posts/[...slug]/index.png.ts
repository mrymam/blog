import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@/utils/generateOgImages";
import { getPath } from "@/utils/getPath";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.map(post => ({
    params: { slug: getPath(post.id, post.filePath).replace(/^\/posts\//, "") },
    props: { post },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: CollectionEntry<"blog"> };
  const buffer = await generateOgImageForPost(post);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
