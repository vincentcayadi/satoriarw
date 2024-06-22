import sharp from "sharp";
import { defaultMeta } from "../data/socials";
import { readFile } from "node:fs/promises";
import satori, { type SatoriOptions } from "satori";

export interface OgData {
  title: string;
  date: Date;
}

/**
 * Opengraph template to generate svg
 */
const Template = (props: OgData) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      fontSize: 32,
      fontWeight: 600,
    }}
  >
    <div
      style={{
        fontSize: 50,
      }}
    >
      {props.title}
    </div>
    <div>satori.arw</div>
  </div>
);

/**
 * generate filename / path for generated OG images
 *
 * @param filename filename in asset folder
 * @returns
 */
export const getOgImagePath = (filename: string = defaultMeta.title) => {
  if (filename.startsWith("/")) filename = filename.substring(1);

  if (filename.endsWith("/"))
    filename = filename.substring(0, filename.length - 1);

  if (filename === "") filename = defaultMeta.title;

  return `./open-graph/${filename}.png`;
};

/**
 * generate opengraph image with satori and return a buffer
 *
 * @param text
 */

const generateOgImage = async (
  text: string = defaultMeta.title,
  date: Date = new Date()
): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 600,
    height: 315,
    embedFont: true,
    fonts: [
      {
        name: "Inter",
        data: await readFile("./src/assets/font/Inter-Bold.ttf"),
        weight: 400,
        style: "normal",
      },
    ],
  };

  const svg = await satori(
    Template({
      title: text,
      date: date,
    }),
    options
  );

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};

export default generateOgImage;
