import React, { useState } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';

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
    { id: 1, name: '색상', image: '/path/to/color.jpg', cost: 1300, price: 2000, margin: 570, stock: 10, selected: true },
    { id: 2, name: '노란색', image: '/path/to/yellow.jpg', cost: 1300, price: 2000, margin: 570, stock: 10, selected: false },
    { id: 3, name: '초록', image: '/path/to/green.jpg', cost: 1300, price: 2000, margin: 570, stock: 10, selected: false },
    { id: 4, name: '작은 빗', image: '/path/to/small-comb.jpg', cost: 1300, price: 3000, margin: 1570, stock: 5, selected: true },
    { id: 5, name: '보라', image: '/path/to/purple.jpg', cost: 1300, price: 1500, margin: 70, stock: 10, selected: true },
  ]);

  const [isEnabled, setIsEnabled] = useState(true);

  const handleOptionToggle = (id: number) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  const handlePriceChange = (id: number, value: string) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, price: parseInt(value) || 0, margin: (parseInt(value) || 0) - option.cost } : option
      )
    );
  };

  const handleStockChange = (id: number, value: string) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, stock: parseInt(value) || 0 } : option
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Switch
            checked={isEnabled}
            onChange={setIsEnabled}
            className={`${
              isEnabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">전체 보기</span>
            <span
              className={`${
                isEnabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span className="ml-2 text-sm text-gray-700">전체 보기</span>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">배송지 반영 설정</button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">관세 설정</button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">스마트스토어 옵션가 필터 적용</button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">판매가 일괄 변경</button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">재고 일괄 변경</button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              옵션가 기준
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              원가
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              판매가
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              순수익
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              재고
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {options.map((option) => (
            <tr key={option.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={option.selected}
                    onChange={() => handleOptionToggle(option.id)}
                    className="mr-2"
                  />
                  <Image src={option.image} alt={option.name} width={40} height={40} className="mr-2" />
                  <span>{option.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{option.cost.toLocaleString()}원</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={option.price.toLocaleString()}
                  onChange={(e) => handlePriceChange(option.id, e.target.value.replace(/,/g, ''))}
                  className="border border-gray-300 rounded-md p-1 w-24 text-right"
                />
                원
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-blue-600">+ {option.margin.toLocaleString()}원</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={option.stock}
                  onChange={(e) => handleStockChange(option.id, e.target.value)}
                  className="border border-gray-300 rounded-md p-1 w-16 text-right"
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