import React, { useState, useEffect } from "react";
import { Product } from "@/types/product"; // Product 타입을 import

interface DetailPageViewerProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const DetailPageViewer: React.FC<DetailPageViewerProps> = ({
  product,
  onUpdate,
}) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    setHtmlContent(product.detailPageHtml || "");
  }, [product.detailPageHtml]);

  const handleHTMLChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newHTML = e.target.value;
    setHtmlContent(newHTML);
    onUpdate("detailPageHtml", newHTML);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">상세 페이지</h2>
      <div className="mb-4">
        <textarea
          value={htmlContent}
          onChange={handleHTMLChange}
          className="w-full h-64 p-2 border border-gray-300 rounded-md"
          placeholder="HTML 코드를 입력하세요..."
        />
      </div>
      <div className="border border-gray-300 rounded-md p-4">
        <h3 className="text-lg font-medium mb-2">미리보기</h3>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default DetailPageViewer;
