import { generateItemDetails } from '../utils/item.util.js';

export function itemPayload() {
  const { code, name, description } = generateItemDetails();

  return {
    ItemWM: {
      Code: code,
      Name: name,
      NameInArabic: name,
      Description: description,
      ItemType: "1",
      TrackingMode: "1",
      CostingMethod: "1",
      ItemGroup: "",
      ItemCategory: "",
      BaseUnitOfMeasure: "001",
      SalesPrice: "10",
      PurchasePrice: "10"
    }
  };
}