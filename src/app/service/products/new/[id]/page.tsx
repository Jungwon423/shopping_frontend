"use client";

import { useState } from "react";
import BackHeader from "@/components/service/back_header";
import ProductTabs from "@/components/service/product_tabs";
import BasicInfo from "@/components/service/basic_info";
import ImageInfo from "@/components/service/image_info";
import OptionInfo from "@/components/service/option_info";
import PriceInfo from "@/components/service/price_info";
import ProductAttributes from "@/components/service/product_attributes";
import { Product } from "@/types/product";
import UploadSettings from "@/components/service/upload_settings";

// Product 타입을 확장합니다
interface ExtendedProduct extends Product {
  minorPurchase?: string;
  brand?: string;
  manufacturer?: string;
  model?: string;
}

function getProduct(id: string): ExtendedProduct {
  // 실제 구현에서는 이 부분을 API 호출로 대체해야 합니다
  return {
    id,
    name: "애완 동물 그루밍 빗놀 브러시 매직 마사지 빗, 털 제거기, 애완 동물 일반 용품, 고양이 개 청소 케어용 반려동물 손질끝이",
    description: "",
    price: 15000,
    image: "/path/to/product/image.jpg",
    originalName: "애완동물 브러시",
    category: [
      "반려/애완용품",
      "강아지/고양이 겸용",
      "미용/목욕",
      "이발기/브러시",
      "브러시/빗",
    ],
    smartstoreCategory: ["생활/건강", "반려동물", "미용/목욕", "브러시/빗"],
    tags: [],
    minorPurchase: "",
    brand: "",
    manufacturer: "",
    model: "",
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("기본 정보");
  const [product, setProduct] = useState<ExtendedProduct>(
    getProduct(params.id)
  );

  const handleProductUpdate = (field: keyof ExtendedProduct, value: any) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "기본 정보":
        return <BasicInfo product={product} onUpdate={handleProductUpdate} />;
      case "이미지":
        return <ImageInfo product={product} onUpdate={handleProductUpdate} />;
      case "옵션":
        return <OptionInfo product={product} onUpdate={handleProductUpdate} />;
      case "판매가":
        return <PriceInfo product={product} onUpdate={handleProductUpdate} />;
      case "상품 속성":
        return (
          <ProductAttributes product={product} onUpdate={handleProductUpdate} />
        );
      case "업로드 설정":
        return (
          <UploadSettings product={product} onUpdate={handleProductUpdate} />
        );
      default:
        return <div>컨텐츠 준비 중</div>;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <BackHeader productCode={product.id} />
      <div className="container mx-auto px-4 py-8">
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  );
}
