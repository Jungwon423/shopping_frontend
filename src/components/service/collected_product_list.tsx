import { ArrowPathIcon } from "@heroicons/react/20/solid"; // 아이콘을 사용하려면 적절한 아이콘 라이브러리를 임포트해야 합니다.
import { CollectedProduct } from "./collected_product";

export function CollectedProductList() {
  return (
    <div>
      <div className="bg-slate-50 p-4 flex items-center space-x-4">
        <p className="text-lg font-semibold">수집 상품 목록</p>
        <button className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
          <ArrowPathIcon className="h-5 w-5" />
          <span className="text-sm">새로 고침</span>
        </button>
        {/* 다른 상품들도 같은 방식으로 추가할 수 있습니다 */}
      </div>

      <CollectedProduct
        imageUrl="/path/to/image.jpg"
        productName="한국 그룹 아이브(G)I-DLE 블랙핑크의 레이저 카드 50개는 앨범 HD 로모 카드와 동일하다"
        description="한국 그룹 아이브(G)I-DLE 블랙핑크의 레이저 카드 50개는 앨범 HD 로모 카드와 동일하다"
        price="1,000~5,900원"
        shippingFee="0원 (반품 0, 교환 0)"
        overseasShippingFee="0원"
        costPrice="762~4,501원 (¥3.98~23.5)"
        exchangeRate="¥1 = 191.55208원"
        productId="6675a04348c5da65f0835a9e"
        group="그룹 없음"
        site="Taobao.com"
        date="2024/06/22"
      />
    </div>
  );
}
