import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./Icons";
import MainNav from "./MainNav";
import { HeaderQueryData, MainNavItem } from "@/types";

type Props = {};

const mainNavItems: MainNavItem[] = [
  {
    title: "關於我們",
    items: [
      {
        title: "Products",
        href: "/products",
        description: "All the products we have to offer.",
        items: [],
      },
      {
        title: "Build a Board",
        href: "/build-a-board",
        description: "Build your own custom skateboard.",
        items: [],
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Read our latest blog posts.",
        items: [],
      },
    ],
  },
];

export default function Header({}: Props) {
  const data: HeaderQueryData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
      woocommerce {
        productCategories(where: { exclude: 21 }) {
          nodes {
            databaseId
            name
            slug
            children {
              nodes {
                name
                databaseId
                slug
              }
            }
            parentId
          }
        }
      }
    }
  `);

  const { site, woocommerce } = data;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex items-center h-16">
        <div className="flex gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <StaticImage
              src="../images/logo.png"
              alt={site.siteMetadata.title}
              width={112}
            />
            <span className="inline-block font-bold">
              {site.siteMetadata.subtitle}
            </span>
          </Link>
          <MainNav items={mainNavItems} />
        </div>
        <div className="flex items-center justify-end flex-1 space-x-4"></div>
      </div>
    </header>
  );
}
