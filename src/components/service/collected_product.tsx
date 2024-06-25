"use client";

import { useRouter } from "next/navigation";
import { PencilIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface CollectedProductProps {
  imageUrl: string;
  productName: string;
  price: string;
  shippingFee: string;
  overseasShippingFee: string;
  costPrice: string;
  exchangeRate: string;
  productId: string;
  site: string;
  date: string;
}

export function CollectedProduct({
  imageUrl,
  productName,
  price,
  shippingFee,
  overseasShippingFee,
  costPrice,
  exchangeRate,
  productId,
  site,
  date,
}: CollectedProductProps) {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/service/products/new/${productId}`);
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-md flex items-start space-x-4 cursor-pointer"
      onClick={handleProductClick}
    >
      <input type="checkbox" className="mt-1" />
      <div className="flex-shrink-0 bg-slate-50">
        <Image
          src={imageUrl}
          alt="Product"
          width={108}
          height={108}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 bg-slate-50 rounded-md p-4">
        <div className="flex justify-between">
          <div className="flex text-sm">
            <span className="font-semibold">{"상품명 "}</span> | {productName}
          </div>
          <button
            className="bg-white p-2 rounded-md shadow-md flex items-center space-x-1 text-black hover:text-gray-700 text-sm"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 버블링 방지
              handleProductClick();
            }}
          >
            <ClipboardDocumentIcon className="h-4 w-4" />
            <span>세부사항 수정 및 업로드</span>
          </button>
        </div>
        <div className="flex space-x-4 text-sm">
          <div>
            <span className="font-semibold">판매가</span> | {price}
          </div>
          <div>
            <span className="font-semibold">배송비</span> | {shippingFee}
          </div>
          <div className="flex">
            <span className="font-semibold text-red-500">해외 배송비</span> |{" "}
            {overseasShippingFee}
            <button
              className="ml-4 bg-white shadow-md rounded-md p-1 flex items-center space-x-1 text-black hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 방지
                handleProductClick();
              }}
            >
              <PencilIcon className="h-4 w-4" />
              {/* <span className="text-xs">수정</span> */}
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex mt-2 space-x-4 text-sm">
            <div>
              <span className="font-semibold">상품원가</span> | {costPrice}
            </div>
            <div>
              <span className="font-semibold">환율</span> | {exchangeRate}
            </div>
            <div>
              <span className="font-semibold">상품 ID</span> | {productId}
            </div>
          </div>
          <div className="flex mt-2 space-x-4 items-center text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">
                {site}
              </span>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
