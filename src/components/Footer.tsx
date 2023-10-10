import React from "react";
import { Link } from "gatsby";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./Icons";
import Logo from "./Logo";
import { FooterItem } from "@/types";
import Container from "./Container";

type Props = {};

const footerNav: FooterItem[] = [
  {
    title: "Credits",
    items: [
      {
        title: "OneStopShop",
        href: "https://onestopshop.jackblatch.com",
        external: true,
      },
      {
        title: "Acme Corp",
        href: "https://acme-corp.jumr.dev",
        external: true,
      },
      {
        title: "craft.mxkaske.dev",
        href: "https://craft.mxkaske.dev",
        external: true,
      },
      {
        title: "Taxonomy",
        href: "https://tx.shadcn.com/",
        external: true,
      },
      {
        title: "shadcn/ui",
        href: "https://ui.shadcn.com",
        external: true,
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        title: "About",
        href: "/about",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
      {
        title: "Terms",
        href: "/terms",
        external: false,
      },
      {
        title: "Privacy",
        href: "/privacy",
        external: false,
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "GitHub",
        href: "xxx",
        external: true,
      },
      {
        title: "Discord",
        href: "xxx",
        external: true,
      },
      {
        title: "cal.com",
        href: "xxx",
        external: true,
      },
    ],
  },
  {
    title: "Lofi",
    items: [
      {
        title: "beats to study to",
        href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        external: true,
      },
      {
        title: "beats to chill to",
        href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
        external: true,
      },
      {
        title: "a fresh start",
        href: "https://www.youtube.com/watch?v=rwionZbOryo",
        external: true,
      },
      {
        title: "coffee to go",
        href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
        external: true,
      },
    ],
  },
];

export default function Footer({}: Props) {
  return (
    <footer className="w-full border-t bg-background">
      <Container as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Logo className="w-fit" />
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4"
          >
            {footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            {/* <SubscribeToNewsletterForm /> */}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-sm leading-loose text-left text-muted-foreground">
            Built by{" "}
            <Link
              to="https://twitter.com/sadmann17"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Sadman
              <span className="sr-only">Twitter</span>
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              to="xxx"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </section>
      </Container>
    </footer>
  );
}
