"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="bg-red-100 text-red-800 p-2 rounded-md mb-4">
              {product.description}
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1">
                상품명 (스마트스토어, 쿠팡)
              </div>
              <div className="bg-gray-100 p-2 rounded">{product.name}</div>
              <div className="text-right text-sm text-gray-500 mt-1">
                69/100
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">상품 카테고리</h3>
              <div className="flex space-x-2 mb-2">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  카테고리/태그 변경
                </button>
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  카테고리 복사
                </button>
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  카테고리 불러오기
                </button>
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  카테고리 추천
                </button>
              </div>
              <div className="bg-gray-100 p-2 rounded mb-2">
                <span className="text-sm">
                  반려/애완용품 {">"} 강아지/고양이 겸용 {">"} 미용/목욕 {">"}{" "}
                  이발기/브러쉬 {">"} 브러시/빗
                </span>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <span className="text-sm">
                  생활/건강 {">"} 반려용품 {">"} 미용/목욕 {">"} 브러시/빗
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">상품 태그</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm">쿠팡 상품 태그 0/20</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <button className="text-blue-600 text-sm">
                  추천 태그 검색
                </button>
              </div>
              <input
                type="text"
                placeholder="태그 직접 입력(Enter) 키로 입력하세요"
                className="w-full p-2 border rounded"
              />
              <div className="mt-2">
                <span className="text-sm">스마트스토어 상품 태그 0/10</span>
                <svg
                  className="inline-block w-4 h-4 text-gray-400 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="태그 직접 입력(Enter) 키로 입력하세요"
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
