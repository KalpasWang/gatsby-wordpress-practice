export type Product = {
  id: string;
  name: string;
  slug: string;
  type: "SIMPLE" | "VARIABLE";
  description: string;
  shortDescription: string;
  image: {
    id: string;
    sourceUrl: string;
    altText: string;
  };
  price: number;
};
