import React, { useState } from "react";
import Image from "next/image";
import { Switch } from "@headlessui/react";

interface PriceOption {
  id: number;
  name: string;
  image: string;
  cost: number;
  price: number;
  margin: number;
  stock: number;
  selected: boolean;
}

const PriceOptions: React.FC = () => {
  const [options, setOptions] = useState<PriceOption[]>([
    {
      id: 1,
      name: "색상",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      cost: 1300,
      price: 2000,
      margin: 570,
      stock: 10,
      selected: true,
    },
    {
      id: 2,
      name: "노란색",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      cost: 1300,
      price: 2000,
      margin: 570,
      stock: 10,
      selected: false,
    },
    {
      id: 3,
      name: "초록",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      cost: 1300,
      price: 2000,
      margin: 570,
      stock: 10,
      selected: false,
    },
    {
      id: 4,
      name: "작은 빗",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      cost: 1300,
      price: 3000,
      margin: 1570,
      stock: 5,
      selected: true,
    },
    {
      id: 5,
      name: "보라",
      image:
        "http://shop1.phinf.naver.net/20240622_60/1718991448848GXnKr_JPEG/2459758662966546_770488614.jpg",
      cost: 1300,
      price: 1500,
      margin: 70,
      stock: 10,
      selected: true,
    },
  ]);

  const [isEnabled, setIsEnabled] = useState(true);

  const handleOptionToggle = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  const handlePriceChange = (id: number, value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? {
              ...option,
              price: parseInt(value) || 0,
              margin: (parseInt(value) || 0) - option.cost,
            }
          : option
      )
    );
  };

  const handleStockChange = (id: number, value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, stock: parseInt(value) || 0 } : option
      )
    );
  };

  const handlePriceStandardChange = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        isPriceStandard: option.id === id,
      }))
    );
    // 여기에 옵션가 기준 변경에 따른 추가 로직을 구현할 수 있습니다.
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-3 w-8">
              <input
                type="checkbox"
                onChange={() => {
                  /* 전체 선택 로직 */
                }}
              />
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              colSpan={2}
            >
              {options.length}개 색상
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              옵션가 기준
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              원가
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              판매가
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              순수익
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              재고
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {options.map((option) => (
            <tr key={option.id} className={option.selected ? "bg-blue-50" : ""}>
              <td className="px-2 py-4 w-8">
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => handleOptionToggle(option.id)}
                />
              </td>
              <td className="px-2 py-4 w-8">
                <Image
                  src={option.image}
                  alt={option.name}
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </td>
              <td className="px-2 py-4">
                <span>{option.name}</span>
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <input
                  type="radio"
                  name="optionPriceStandard"
                  checked={true}
                  onChange={() => handlePriceStandardChange(option.id)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                {option.cost.toLocaleString()}원
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <input
                  type="text"
                  value={option.price.toLocaleString()}
                  onChange={(e) =>
                    handlePriceChange(
                      option.id,
                      e.target.value.replace(/,/g, "")
                    )
                  }
                  className="bg-gray-100 p-1 w-24 text-right focus:outline-none"
                />
                원
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-green-600">
                + {option.margin.toLocaleString()}원
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <input
                  type="text"
                  value={option.stock}
                  onChange={(e) => handleStockChange(option.id, e.target.value)}
                  className="bg-gray-100 p-1 w-16 text-right focus:outline-none"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceOptions;
