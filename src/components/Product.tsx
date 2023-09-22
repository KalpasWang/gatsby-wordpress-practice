import { Product } from "@/types";
import React from "react";

type Props = {
  product: Product;
};

export default function Product({}: Props) {
  return <div>Product</div>;
}
