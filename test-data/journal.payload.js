import { getCurrentDate } from '../utils/date.util.js';

export const journalPayload = {
    JournalWM: {
        CompanyCode: "01",
        TxnCode: "GJV",
        TxnDate: getCurrentDate(),
        TxnNum: "",
        ReferenceNum: "Journal Test",
        Description: "Description",
        JournalType: 1
    },
    JournalLines: [
        {
            AccountType: 1,
            AccountCode: "52101",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 1,
            EnteredAmount: "150",
            AccountedAmount: "150"
        },
        {
            AccountType: 1,
            AccountCode: "52900",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 2,
            EnteredAmount: "150",
            AccountedAmount: "150"
        },
        {
            AccountType: 1,
            AccountCode: "52101",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 1,
            EnteredAmount: "100",
            AccountedAmount: "100"
        },
        {
            AccountType: 1,
            AccountCode: "52108",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 1,
            EnteredAmount: "200",
            AccountedAmount: "200"
        },
        {
            AccountType: 1,
            AccountCode: "52108",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 1,
            EnteredAmount: "250",
            AccountedAmount: "250"
        },
        {
            AccountType: 1,
            AccountCode: "52900",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 2,
            EnteredAmount: "100",
            AccountedAmount: "100"
        },
        {
            AccountType: 1,
            AccountCode: "52900",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 2,
            EnteredAmount: "200",
            AccountedAmount: "200"
        },
        {
            AccountType: 1,
            AccountCode: "52900",
            FinancialSegments: "",
            CurrencyCode: "KWD",
            DrCrType: 2,
            EnteredAmount: "250",
            AccountedAmount: "250"
        }
    ]
};