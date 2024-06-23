import { Divider } from "@/components/catalyst-ui-kit/divider";
import { CollectedProductList } from "@/components/service/collected_product_list";
import { DefaultUploadSetting } from "@/components/service/default_upload_setting";
import { ServiceTitle } from "@/components/title";

export default function NewProducts() {
  return (
    <div className="">
      <ServiceTitle
        title="신규 상품 등록"
        description="신규 상품을 등록할 수 있는 페이지입니다. 원모 AI가 작성한 세부사항을 확인하고 마켓에 업로드해보세요."
      />
      <div className="my-4"></div>
      <DefaultUploadSetting></DefaultUploadSetting>
      <CollectedProductList></CollectedProductList>
    </div>
  );
}
