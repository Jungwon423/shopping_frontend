import React, { useState } from "react";
import { Product } from "@/types/product";
import { Option } from "@/types/option";
import Image from "next/image";

interface OptionInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const OptionInfo: React.FC<OptionInfoProps> = ({ product, onUpdate }) => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, name: "노란색", image: "/path/to/yellow.jpg", stock: 3 },
    { id: 2, name: "초록", image: "/path/to/green.jpg", stock: 2 },
    { id: 3, name: "보라", image: "/path/to/purple.jpg", stock: 2 },
    { id: 4, name: "작은 캡", image: "/path/to/small-cap.jpg", stock: 4 },
    { id: 5, name: "2PCS 노란색", image: "/path/to/2pcs-yellow.jpg", stock: 8 },
    { id: 6, name: "2pcs 녹색", image: "/path/to/2pcs-green.jpg", stock: 7 },
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
      <div className="mb-4">
        <input
          type="text"
          value="색상"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <span className="text-sm text-gray-500 mt-1 float-right">2/10</span>
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
      <div className="space-y-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center border-b border-gray-200 py-2"
          >
            <input
              type="checkbox"
              checked={option.selected !== false}
              onChange={() => handleOptionToggle(option.id)}
              className="mr-2"
            />
            <Image
              src={option.image}
              alt={option.name}
              width={40}
              height={40}
              className="mr-2"
            />
            <input
              type="text"
              value={option.name}
              onChange={() => {}}
              className="flex-grow border-none focus:outline-none"
            />
            <span className="text-gray-500">{option.stock}/25</span>
            <button className="ml-2">⇅</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionInfo;
