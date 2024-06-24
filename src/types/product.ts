export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  originalName?: string;
  category?: string[];
  smartstoreCategory?: string[];
  tags?: string[];
  images?: string[];
  options?: Option[];

  // 새로 추가된 필드
  minorPurchase?: string;
  brand?: string;
  manufacturer?: string;
  model?: string;

  // 필수 표기 정보
  requiredInfo?: {
    classification: string;
    type: string;
    material: string;
    itemType: string;
  };

  // 새로 추가된 필드들
  uploadTargets?: string[];
  coupangNoticeCategory?: string;
  coupangOptionGroupMatching?: string;
  coupangLargeDogBreed?: string;
}
