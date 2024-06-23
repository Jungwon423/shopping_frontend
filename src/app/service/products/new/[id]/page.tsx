// /pages/service/products/new/[id].tsx

"use client";

import BackHeader from "@/components/service/back_header";
import { useRouter } from "next/router"; // 여기서 next/router를 사용합니다.
import { useEffect, useState } from "react";

export default function NewProducts() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>({ id: "test" });

  useEffect(() => {
    if (id) {
      fetchProduct(id as string);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    const response = await fetch(`/api/products/${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackHeader productCode={product.id} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-bold mt-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
