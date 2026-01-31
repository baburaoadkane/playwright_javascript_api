import { generateBasicDetails } from '../utils/item.util.js';

/**
 * Generates a new customer payload for API testing.
 * 
 * @returns {Object} Customer payload
 */
export function customerPayload() {
    const { code, name, description } = generateBasicDetails();

    return {
        Code: code,
        Name: name,
        NameInArabic: "",
        Description: description,
        CustomerGroup: "",
        Email: "",
        MobileNumber: "96566095891"
    };
}

/**
 * Returns a customer lookup object by code.
 * 
 * @param {string} code - Customer code
 * @returns {Object} Object with customer code
 */
export function getCustomerByCode(code) {
    return { Code: code };
}