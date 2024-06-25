import React, { useState } from "react";
import { Product } from "@/types/product";
import { Option } from "@/types/option";
import Image from "next/image";
import { Divider } from "../catalyst-ui-kit/divider";

interface OptionInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const OptionInfo: React.FC<OptionInfoProps> = ({ product, onUpdate }) => {
  const [options, setOptions] = useState<Option[]>([
    {
      id: 1,
      name: "노란색",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 3,
    },
    {
      id: 2,
      name: "초록",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 2,
    },
    {
      id: 3,
      name: "보라",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 2,
    },
    {
      id: 4,
      name: "작은 캡",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 4,
    },
    {
      id: 5,
      name: "2PCS 노란색",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 8,
    },
    {
      id: 6,
      name: "2pcs 녹색",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      stock: 7,
    },
  ]);

  const [selectedCount, setSelectedCount] = useState(options.length);

  const handleOptionToggle = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
    setSelectedCount(
      (prevCount) =>
        prevCount + (options.find((o) => o.id === id)?.selected ? -1 : 1)
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">옵션그룹 1</h2>
      <div className="mb-4 relative">
        <input
          type="text"
          value="색상"
          className="border border-gray-300 rounded-md p-2 w-full pr-16"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
          2/10
        </span>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={selectedCount === options.length}
          onChange={() => {}}
          className="mr-2"
        />
        <span>{selectedCount} 개 선택됨</span>
        <div className="ml-auto space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
            이미지 편집
          </button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
            AI 변경
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
            빈칸
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
            특문
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
            25글자
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
            순번 추가
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
            A-Z
          </button>
        </div>
      </div>
      <Divider className="mb-10"></Divider>
      <div className="space-y-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center rounded-md p-2 mb-2"
          >
            <input
              type="checkbox"
              checked={option.selected !== false}
              onChange={() => handleOptionToggle(option.id)}
              className="mr-2"
            />
            <div className="relative w-10 h-10 mr-2">
              <Image
                src={option.image}
                alt={option.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex-grow relative">
              <input
                type="text"
                value={option.name}
                onChange={() => {}}
                className="w-full border border-gray-200 rounded-md h-10 p-2 pr-16 focus:outline-none"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                {option.stock}/25
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 ml-2">
              ⋮
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionInfo;
