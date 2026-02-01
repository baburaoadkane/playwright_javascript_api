import { generateBasicDetails } from '../utils/item.util.js';

/**
 * Generates a new supplier payload for API testing.
 * 
 * @returns {Object} Supplier payload
 */
export function supplierPayload() {
    const { code, name, description } = generateBasicDetails();

    return {
        Code: code,
        Name: name,
        NameInArabic: name,
        Description: description,
        SupplierGroup: "",
        Email: `${code}@demo.com`,
        MobileNumber: "96566095891"
    };
}

/**
 * Returns a supplier lookup object by code.
 * 
 * @param {string} code - supplier code
 * @returns {Object} Object with supplier code
 */
export function getSupplierByCode(code) {
    return { Code: code };
}