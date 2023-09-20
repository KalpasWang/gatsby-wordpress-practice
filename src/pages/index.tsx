import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

export default function IndexPage({}: PageProps) {
  return (
    <Layout>
      <h1>Hello</h1>
      <Button variant="destructive" size="lg">
        Hi
      </Button>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
