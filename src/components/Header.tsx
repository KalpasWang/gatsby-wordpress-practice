import { MainNavItem } from "@/types";
import { graphql, useStaticQuery } from "gatsby";
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
        categories {
          nodes {
            databaseId
            name
            slug
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    // <header className="container relative flex items-center justify-between flex-nowrap">
    //   <h1>GOGOBUY 網路商店</h1>
    //   <nav className="absolute hidden -translate-x-1/2 top-1/2 left-1/2 lg:block">
    //     <ul className="flex flex-nowrap">
    //       <li className="px-4">
    //         <a href="/">首頁</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="flex justify-end flex-nowrap">
    //     <button>搜尋</button>
    //     <button>cart</button>
    //     <button>login/signup</button>
    //   </div>
    // </header>
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex items-center h-16">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-2">
            <ProductsCombobox />
            <CartSheet />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative w-8 h-8 rounded-full"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ""}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/account">
                        <Icons.user
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        Account
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/stores">
                        <Icons.terminal
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        Dashboard
                        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link href="/dashboard/settings">
                        <Icons.settings
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <Icons.logout
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                      />
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/signin"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Sign In
                <span className="sr-only">Sign In</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
