import { graphql, useStaticQuery } from "gatsby";
import React from "react";

type Props = {};

export default function Products({}: Props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      woocommerce {
        products {
          nodes {
            id
            databaseId
            name
            slug
            type
            description
            shortDescription(format: RAW)
            image {
              id
              sourceUrl
              altText
            }
            ... on WooCommerce_SimpleProduct {
              price
            }
            ... on WooCommerce_VariableProduct {
              price
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return <div>Products</div>;
}
