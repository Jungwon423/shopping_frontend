import React from 'react';
import { Product } from '@/types/product';

interface ProductAttributesProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const ProductAttributes: React.FC<ProductAttributesProps> = ({ product, onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">상품 속성</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">미성년자 구매</label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={product.minorPurchase || ''}
            onChange={(e) => onUpdate('minorPurchase', e.target.value)}
          >
            <option value="">선택</option>
            <option value="가능">가능</option>
            <option value="불가능">불가능</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">브랜드</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={product.brand || ''}
            onChange={(e) => onUpdate('brand', e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">제조사</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={product.manufacturer || ''}
              onChange={(e) => onUpdate('manufacturer', e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">모델</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={product.model || ''}
              onChange={(e) => onUpdate('model', e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">필수 표기 정보</h3>
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">구분</p>
              <p className="mt-1 text-sm text-gray-900">CN (전자)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">유형</p>
              <p className="mt-1 text-sm text-gray-900">cats</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">재료</p>
              <p className="mt-1 text-sm text-gray-900">STAINLESS STEEL</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">품목 유형</p>
              <p className="mt-1 text-sm text-gray-900">빗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAttributes;