import { defaultMeta } from "../../data/socials";
import generateOgImage, { type OgData } from "../../utils/generateOgImages";
import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";

interface StaticPaths extends OgData {
  slug: string;
}

const STATIC_PATH: StaticPaths[] = [
  {
    slug: defaultMeta.title,
    title: `${defaultMeta.title}`,
    date: new Date(),
  },
  {
    slug: "blog",
    title: "Blogs",
    date: new Date(),
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const result: GetStaticPathsItem[] = [];

  // static path
  STATIC_PATH.forEach((item) =>
    result.push({
      params: { slug: item.slug },
      props: {
        title: item.title,
        date: item.date,
      },
    })
  );

  return result;
};

export const GET: APIRoute<OgData> = async ({ props }) => {
  const response = await generateOgImage(props.title, props.date);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
