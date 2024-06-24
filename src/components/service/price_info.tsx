import { Product } from "@/types/product";
import PriceInfoSetting from "./price_info_setting";
import PriceOptions from "./price_info_options";

interface PriceInfoProps {
  product: Product;
  onUpdate: (field: keyof Product, value: any) => void;
}

const PriceInfo: React.FC<PriceInfoProps> = (props) => {
  return (
    <div>
      <PriceInfoSetting {...props} />
      <PriceOptions />
    </div>
  );
};

export default PriceInfo;
