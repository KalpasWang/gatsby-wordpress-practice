import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Block } from './types';

type Node = {
  databaseId: number;
  blocks: Block[];
  uri: string;
};

type AllWpPages = {
  allWpPage: {
    nodes: Node[];
  };
};

type QueryResult = {
  data: AllWpPages;
};
const isCorretResult = (result: unknown): result is QueryResult => {
  return (result as QueryResult).data !== undefined;
};

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('src/templates/page.tsx');

  const result: unknown = await graphql(`
    #graphql
    query AllWpPagesQuery {
      allWpPage {
        nodes {
          databaseId
          blocks
          uri
        }
      }
    }
  `);

  if (!isCorretResult(result)) {
    throw new Error('Invalid result');
  }

  const pages = result.data.allWpPage.nodes;
  pages.forEach((page) => {
    createPage({
      path: page.uri,
      component: pageTemplate,
      context: {
        id: page.databaseId,
        blocks: page.blocks,
      },
    });
  });
};
