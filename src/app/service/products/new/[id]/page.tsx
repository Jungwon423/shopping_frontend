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
import DetailPageViewer from "@/components/service/detail_page_viewer";

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
    images: [
      "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
    ],
    smartstoreCategory: ["생활/건강", "반려동물", "미용/목욕", "브러시/빗"],
    tags: [],
    minorPurchase: "",
    brand: "",
    manufacturer: "",
    model: "",
    detailPageHtml: "",
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
      case "상세페이지":
        return (
          <DetailPageViewer product={product} onUpdate={handleProductUpdate} />
        );
      default:
        return <div>컨텐츠 준비 중</div>;
    }
  };

  return (
    <div className="min-h-screen">
      <BackHeader productCode={product.id} />
      <div className="pl-4 py-8 mx-auto max-w-[2000px]">
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  );
}
