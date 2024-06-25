import React, { useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";

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

  const handleCategoryChange = (value: string) => {
    const categories = value ? value.split(" > ") : [];
    onUpdate("category", categories);
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
    <div className="bg-white shadow-sm rounded-lg p-6 flex">
      <div className="w-[250px] h-[250px] flex-shrink-0">
        <Image
          src={
            "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg"
          }
          alt={`Product image`}
          width={250}
          height={250}
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex-grow ml-6">
        <h2 className="text-xl font-semibold mb-4">상품 정보</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            원본 상품명
          </label>
          <h1 className="mt-2">{product.originalName}</h1>
        </div>
        <div className="mb-10">
          <label className="block text-sm font-medium text-gray-700">
            상품명 (스마트스토어, 쿠팡)
          </label>
          <div className="relative mt-1">
            {" "}
            {/* 새로운 div 추가 */}
            <input
              type="text"
              value={product.name}
              onChange={handleNameChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-16" /* 오른쪽 패딩 추가 */
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-sm text-gray-500">{nameLength}/100</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">상품 카테고리</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            쿠팡 카테고리
          </label>
          <div className="relative mt-1">
            <select
              value={product.category ? product.category.join(" > ") : ""}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10 appearance-none"
            >
              <option value="">카테고리 선택</option>
              <option value="반려/애완용품 > 강아지/고양이 겸용 > 미용/목욕 > 이발기/브러시 > 브러시/빗">
                {
                  "반려/애완용품 > 강아지/고양이 겸용 > 미용/목욕 > 이발기/브러시 > 브러시/빗"
                }
              </option>
              {/* 여기에 다른 카테고리 옵션들을 추가할 수 있습니다 */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            스마트스토어 카테고리
          </label>
          <div className="relative mt-1">
            <select
              value={product.category ? product.category.join(" > ") : ""}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10 appearance-none"
            >
              <option value="">카테고리 선택</option>
              <option value="반려/애완용품 > 강아지/고양이 겸용 > 미용/목욕 > 이발기/브러시 > 브러시/빗">
                {
                  "반려/애완용품 > 강아지/고양이 겸용 > 미용/목욕 > 이발기/브러시 > 브러시/빗"
                }
              </option>
              {/* 여기에 다른 카테고리 옵션들을 추가할 수 있습니다 */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4 mt-10">상품 태그</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            쿠팡 상품 태그
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              placeholder="태그 상품 후 엔터(Enter) 키로 입력하세요"
              onKeyPress={handleTagAdd}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-16"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-sm text-gray-500">
                {product.tags?.length || 0}/20
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            스마트스토어 상품 태그
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              placeholder="태그 상품 후 엔터(Enter) 키로 입력하세요"
              onKeyPress={handleTagAdd}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-16"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-sm text-gray-500">
                {product.tags?.length || 0}/20
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
