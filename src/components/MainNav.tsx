import React from "react";
import { Link } from "gatsby";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MainNavItem } from "@/types";
import { Icons } from "./Icons";

type Props = {
  items?: MainNavItem[];
};

export default function MainNav({ items }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items?.[0]?.items ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-auto">
              {items[0].title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    >
                      <Icons.logo className="w-6 h-6" aria-hidden="true" />
                      <p className="text-sm leading-tight text-muted-foreground">
                        {/* {siteConfig.description} */}
                      </p>
                      <span className="sr-only">Home</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {items[0].items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : null}
        {items
          ?.filter((item) => item.title !== items[0]?.title)
          .map((item) =>
            item?.items ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-auto capitalize">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              item.href && (
                <NavigationMenuItem key={item.title}>
                  <Link to={item.href}>
                    {" "}
                    // TODO: fix passhref issue
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "h-auto")}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )
          )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          // ref={ref}
          to={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
