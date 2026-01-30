import { getCurrentDate } from '../utils/date.util.js';

export function salesInvoicePayload() {
    const { txnDate } = getCurrentDate();
    return {
        SalesInvoiceWM: {
            CompanyCode: "01",
            TxnCode: "INV",
            TxnDate: txnDate,
            TxnNum: "",
            OperatingUnitCode: "",
            WarehouseCode: "WH01",
            CustomerCode: "187",
            DisplayCustomerName: "Test Customer",
            PaymentMethod: "",
            SalesmanCode: "",
            ReferenceNum: "API Test",
            MobileNum: "",
            Description: "Description",
            PriceListCode: "",
            PaymentTermCode: "",
            CurrencyCode: "KWD",
            ExchangeRate: "1",
            DiscountAmount: "0",
            DiscountInPercent: "0",
            FinancialDimensionCode: ""
        },
        SalesInvoiceLineWM: [
            {
                Barcode: "",
                Code: "U0150",
                UnitOfMeasureCode: "PC",
                WarehouseCode: "",
                ItemSize: "",
                ItemColor: "",
                Qty: "1.0000",
                UnitPrice: "10",
                DiscountInPercent: "0",
                DiscountValue: "0",
                GrossValue: "10",
                BonusQty: "0",
                TaxRateCode: ""
            }
        ]
    }
};
