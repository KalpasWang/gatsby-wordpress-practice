import { MainNavItem } from "@/types";
import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
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
  const data = useStaticQuery(graphql`
    query CategoriesQuery {
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

  console.log(data);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Icons.logo className="w-6 h-6" aria-hidden="true" />
          <span className="inline-block font-bold">gogobuy</span>
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-4"></div>
      </div>
    </header>
  );
}
