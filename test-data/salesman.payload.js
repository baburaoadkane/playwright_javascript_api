import { generateBasicDetails } from '../utils/item.util.js';

/**
 * Generates a new salesman payload for API testing.
 * 
 * @returns {Object} Salesman payload
 */
export function salesmanPayload() {
    const { code, name, description } = generateBasicDetails();

    return {
        Code: code,
        Name: name,
        NameInArabic: name,
        Description: description,
        SalesCommissionInPercent: "5.5",
        Email: `${code}@demo.com`,
        Title: "Sales Executive",
        ExtensionNumber: "207",
        MobileNumber: "96566095891"
    };
}