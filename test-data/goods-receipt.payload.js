import { getCurrentDate } from '../utils/date.util.js';

export function goodsReceiptPayload() {
  const { txnDate } = getCurrentDate();
  return {
    GoodsReceiptWM: {
      CompanyCode: "01",
      TxnCode: "GR",
      TxnDate: txnDate,
      TxnNum: "",
      OperatingUnitCode: "OU01",
      WarehouseCode: "WH001",
      SupplierCode: "3007",
      SupplierName: "",
      ReferenceNum: "API Test",
      MobileNum: "",
      Description: "Description",
      PaymentMethodCode: "",
      PaymentTermCode: "",
      CurrencyCode: "KWD",
      ExchangeRate: "1",
      DiscountAmount: "0",
      DiscountInPercent: "0"
    },
    GoodsReceiptLineWM: [
      {
        Barcode: "",
        Code: "U0148",
        UnitOfMeasureCode: "PC",
        WarehouseCode: "",
        ItemSize: "",
        ItemColor: "",
        Qty: "1.0000",
        UnitPrice: "10",
        DiscountInPercent: "0",
        DiscountValue: "0",
        GrossValue: "10",
        BonusQty: "0"
      }
    ]
  }
};
