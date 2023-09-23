import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import Products from "@/components/Products";

export default function IndexPage({}: PageProps) {
  return (
    <Layout>
      <h1>Hello</h1>
      <Button variant="default" size="lg">
        Hi
      </Button>
      <Products />
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
