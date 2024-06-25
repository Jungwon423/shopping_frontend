"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Divider } from "@/components/catalyst-ui-kit/divider";
import { CollectedProductList } from "@/components/service/collected_product_list";
import { DefaultUploadSetting } from "@/components/service/default_upload_setting";
import { ServiceTitle } from "@/components/title";
import { ProductSummary } from "@/types/product_summary";

const NewProducts: React.FC = () => {
  const [productSummaries, setProductSummaries] = useState<ProductSummary[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductSummaries = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/products/processed"
        );
        console.log("response.data.products:", response.data.products);
        setProductSummaries(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchProductSummaries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div className="">
      <ServiceTitle
        title="신규 상품 등록"
        description="신규 상품을 등록할 수 있는 페이지입니다. 원모 AI가 작성한 세부사항을 확인하고 마켓에 업로드해보세요!"
      />
      <div className="my-4"></div>
      <DefaultUploadSetting />
      <div className="my-4"></div>
      <CollectedProductList productSummaries={productSummaries} />
    </div>
  );
};

export default NewProducts;
