// to connect Sanity to client App
import sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

export  const client = sanityClient({
  projectId: "18xb2yya",
  dataset: "production",
  apiVersion: "2022-07-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);