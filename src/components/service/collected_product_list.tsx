import { ArrowPathIcon } from "@heroicons/react/20/solid"; // 아이콘을 사용하려면 적절한 아이콘 라이브러리를 임포트해야 합니다.
import { CollectedProduct } from "./collected_product";
import { ProductSummary } from "@/types/product_summary";

interface CollectedProductListProps {
  productSummaries: ProductSummary[];
}

export const CollectedProductList: React.FC<CollectedProductListProps> = ({
  productSummaries,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="p-4 flex items-center space-x-4">
        <p className="text-lg font-semibold">수집 상품 목록</p>
        <button className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
          <ArrowPathIcon className="h-5 w-5" />
          <span className="text-sm">새로 고침</span>
        </button>
      </div>

      {productSummaries.map((productSummary) => (
        <div key={productSummary.productId} className="mb-4">
          <CollectedProduct
            imageUrl={productSummary.imageUrl}
            productName={productSummary.productName}
            price={productSummary.price}
            shippingFee={productSummary.shippingFee}
            overseasShippingFee={productSummary.overseasShippingFee}
            costPrice={productSummary.costPrice}
            exchangeRate={productSummary.exchangeRate}
            productId={productSummary.productId}
            site={productSummary.site}
            date={productSummary.date}
          />
        </div>
      ))}
    </div>
  );
};
