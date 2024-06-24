// src/components/service/product_tabs.tsx
import React from "react";

const tabs = [
  "기본 정보",
  "이미지",
  "옵션",
  "판매가",
  "상품 속성",
  "상세페이지",
  "업로드 설정",
];

interface ProductTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="mb-6">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
