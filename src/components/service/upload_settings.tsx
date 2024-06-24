import React from "react";
import { Product } from "@/types/product";

interface UploadSettingsProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const UploadSettings: React.FC<UploadSettingsProps> = ({
  product,
  onUpdate,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">업로드 설정</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">업로드 대상 마켓</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "스마트스토어",
            "쿠팡",
            "11번가 글로벌",
            "11번가 국내",
            "옥션 1.0",
            "ESM 2.0 (옥션, 지마켓)",
            "롯데온",
            "인터파크",
            "위메프",
          ].map((market) => (
            <div key={market} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`market-${market}`}
                checked={product.uploadTargets?.includes(market) || false}
                onChange={(e) => {
                  const newTargets = e.target.checked
                    ? [...(product.uploadTargets || []), market]
                    : (product.uploadTargets || []).filter((t) => t !== market);
                  onUpdate("uploadTargets", newTargets);
                }}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label
                htmlFor={`market-${market}`}
                className="text-sm font-medium"
              >
                {market}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">쿠팡 업로드 설정</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              상품 고시정보
            </label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={product.coupangNoticeCategory || ""}
              onChange={(e) =>
                onUpdate("coupangNoticeCategory", e.target.value)
              }
            >
              <option value="">선택하세요</option>
              <option value="기타 재화">기타 재화</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              옵션그룹 매칭
            </label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={product.coupangOptionGroupMatching || ""}
              onChange={(e) =>
                onUpdate("coupangOptionGroupMatching", e.target.value)
              }
            >
              <option value="">선택하세요</option>
              <option value="색상">색상</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">검색 필터</label>
            <div className="flex space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                전체 복사
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                붙여넣기
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                자동 완성
              </button>
              <button className="px-3 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                전체 삭제
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              대형견종 여부
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="대형견종 여부"
              value={product.coupangLargeDogBreed || ""}
              onChange={(e) => onUpdate("coupangLargeDogBreed", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSettings;
