import React, { useState } from "react";
import { Product } from "@/types/product";

interface BasicInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ product, onUpdate }) => {
  const [nameLength, setNameLength] = useState(product.name.length);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    onUpdate("name", newName);
    setNameLength(newName.length);
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newCategory = [...(product.category || [])];
    newCategory[index] = value;
    onUpdate("category", newCategory);
  };

  const handleSmartStoreCategoryChange = (index: number, value: string) => {
    const newCategory = [...(product.smartstoreCategory || [])];
    newCategory[index] = value;
    onUpdate("smartstoreCategory", newCategory);
  };

  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      const newTags = [...(product.tags || []), e.currentTarget.value.trim()];
      onUpdate("tags", newTags);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">상품 정보</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          원본 상품명
        </label>
        <input
          type="text"
          value={product.originalName || ""}
          onChange={(e) => onUpdate("originalName", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          상품명 (스마트스토어, 쿠팡)
        </label>
        <input
          type="text"
          value={product.name}
          onChange={handleNameChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <p className="text-sm text-gray-500 mt-1">{nameLength}/100</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          상품 카테고리
        </label>
        <div className="flex space-x-2">
          {[
            "반려/애완용품",
            "강아지/고양이 겸용",
            "미용/목욕",
            "이발기/브러시",
            "브러시/빗",
          ].map((_, index) => (
            <select
              key={index}
              value={product.category?.[index] || ""}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">선택하세요</option>
              {/* 여기에 실제 카테고리 옵션을 추가해야 합니다 */}
            </select>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          스마트스토어 카테고리
        </label>
        <div className="flex space-x-2">
          {["생활/건강", "반려동물", "미용/목욕", "브러시/빗"].map(
            (_, index) => (
              <select
                key={index}
                value={product.smartstoreCategory?.[index] || ""}
                onChange={(e) =>
                  handleSmartStoreCategoryChange(index, e.target.value)
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">선택하세요</option>
                {/* 여기에 실제 스마트스토어 카테고리 옵션을 추가해야 합니다 */}
              </select>
            )
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          상품 태그
        </label>
        <input
          type="text"
          placeholder="태그 작성 후 엔터(Enter) 키로 입력하세요"
          onKeyPress={handleTagAdd}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {product.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
