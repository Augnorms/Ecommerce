import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ProductList {
  id: number;
  Image: string;
  Thumbnails: string;
  Company: string;
  Heading: string;
  Description: string;
  Amount: number;
  Quantity: number;
}

interface Product {
  product: ProductList[];
  setProduct: Dispatch<SetStateAction<ProductList[]>>;
}

export const ProductContext = createContext<Product>({
  product: [],
  setProduct: () => {},
});

export const ProductProvider = ({ children }: any) => {
    
  const [product, setProduct] = useState<any[]>([]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
