import React, { useState } from 'react';
import { Product } from '@/types/product';

interface PriceInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const PriceInfoSetting: React.FC<PriceInfoProps> = ({ product, onUpdate }) => {
  const [shippingMethod, setShippingMethod] = useState('무료');
  const [basePrice, setBasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(15000);
  const [retailPrice, setRetailPrice] = useState(15000);
  const [marginRate, setMarginRate] = useState(3);
  const [aliExpressShipping, setAliExpressShipping] = useState('무료 배송 (무료)');

  const handleShippingMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShippingMethod(e.target.value);
  };

  const handlePriceChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''), 10) || 0;
    setter(value);
    onUpdate('price', value); // Assuming 'price' is the field name in the Product type
  };

  const handleMarginRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    setMarginRate(value);
  };

  const handleAliExpressShippingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAliExpressShipping(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">배송비 유형</label>
          <select
            value={shippingMethod}
            onChange={handleShippingMethodChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="무료">무료</option>
            <option value="유료">유료</option>
            <option value="조건부무료">조건부무료</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">기본 배송비</label>
          <input
            type="text"
            value={basePrice.toLocaleString()}
            onChange={handlePriceChange(setBasePrice)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
            disabled={shippingMethod === '무료'}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">판매 배송비</label>
          <input
            type="text"
            value={salePrice.toLocaleString()}
            onChange={handlePriceChange(setSalePrice)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">고객 배송비</label>
          <input
            type="text"
            value={retailPrice.toLocaleString()}
            onChange={handlePriceChange(setRetailPrice)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">판매가 할인율</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              value={marginRate}
              onChange={handleMarginRateChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-8 text-right"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">AliExpress 배송 옵션</label>
          <select
            value={aliExpressShipping}
            onChange={handleAliExpressShippingChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="무료 배송 (무료)">무료 배송 (무료)</option>
            <option value="유료 배송">유료 배송</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PriceInfoSetting;