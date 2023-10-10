import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { TitleQueryData } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  const data: TitleQueryData = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `);

  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <StaticImage src="../images/logo.png" alt={title} width={112} />
      <span className="inline-block font-bold">{subtitle}</span>
    </Link>
  );
}
