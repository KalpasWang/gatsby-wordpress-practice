import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="container px-4 py-8 lg:px-8">{children}</main>
    </>
  );
}
