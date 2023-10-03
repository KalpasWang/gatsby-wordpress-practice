import { Icons } from "./components/Icons";

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

export type HeaderQueryData = {
  site: {
    siteMetadata: {
      title: string;
      subtitle: string;
    };
  };
  woocommerce: {
    productCategories: {
      nodes: Array<{
        databaseId: number;
        name: string;
        slug: string;
        children: {
          nodes: Array<{
            name: string;
            databaseId: number;
            slug: string;
          }>;
        };
        parentId?: string;
      }>;
    };
  };
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
};

export type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
};

export type NavItemWithOptionalChildren = NavItem & {
  items?: NavItemWithChildren[];
};

export type MainNavItem = NavItemWithOptionalChildren;

export type FooterItem = {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
};
