export interface IProduct {
  id:             number;
  title:          string;
  price:          number;
  pictureUrl:     string;
  productTypeId:  number;
  productBrandId: number;
  productType:    string;
  productBrand:   string;
  description:    string;
  isActive:       boolean;
  summary:        string;
}
