// /components/BackHeader.tsx

"use client";

import { useRouter } from "next/router";
import React from "react";

interface BackHeaderProps {
  productCode: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ productCode }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center p-4 bg-gray-100 border-b border-gray-200">
      <button
        onClick={handleBack}
        className="text-gray-600 hover:text-gray-900 mr-4"
      >
        ←
      </button>
      <span className="text-lg font-medium">상품코드 {productCode}</span>
    </div>
  );
};

export default BackHeader;
