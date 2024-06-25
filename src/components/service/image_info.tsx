import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";

interface ImageInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const ImageInfo: React.FC<ImageInfoProps> = ({ product, onUpdate }) => {
  const [images, setImages] = useState<string[]>(
    product.images || [product.image]
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images, reader.result as string];
        setImages(newImages);
        onUpdate("images", newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">상품 이미지 및 동영상</h2>
      <div className="mb-4">
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-md"
              />
              {index === 0 && (
                <span className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs rounded-tl-md">
                  대표이미지
                </span>
              )}
            </div>
          ))}
          <label className="w-[150px] h-[150px] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
            <span className="text-gray-500">+ 이미지 추가</span>
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        * 상품 업로드 시 이미지는 마켓별 권장 크기로 자동 리사이징 돼요.
        (1000×1000)
      </p>
      <p className="text-sm text-gray-500">
        * 이미지는 스마트스토어, 쿠팡은 최대 10개, 11번가 최대 5개, ESM 2.0 최대
        4개, 위메프 최대 3개까지만 등록돼요.
      </p>
      <p className="text-sm text-gray-500">
        (예를 들어, ESM 2.0은 원본부터 4번째 이미지까지만 업로드돼요)
      </p>
      <p className="text-sm text-gray-500">
        * 동영상은 최대 20MB 이내로 1개까지만 등록돼요.
      </p>
    </div>
  );
};

export default ImageInfo;
