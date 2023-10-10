import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const containerVariants = cva(
  "grid items-center gap-8 pb-8 pt-6 md:py-8",
  {
    variants: {
      variant: {
        default: "container",
        sidebar: "",
        centered: "container flex h-[100dvh] max-w-2xl flex-col justify-center",
        markdown: "container max-w-3xl py-8 md:py-10 lg:py-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    as?: React.ElementType;
  };

function Container({
  className,
  as: Comp = "section",
  variant,
  ...props
}: Props) {
  return (
    <Comp
      className={cn(containerVariants({ variant }), className)}
      {...props}
    />
  );
}

export default Container;
