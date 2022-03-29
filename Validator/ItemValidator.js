
/**
 * Check if itemDrop object is valid
 * @param {Object} itemDrop - itemDrop Object
 * @function
 */
export function ValidateItemDrop(itemDrop) {
    if (!itemDrop)
        return false;
    if (!itemDrop.maxAmount)
        return false;
    if (!itemDrop.minAmount)
        return false;
    if (!itemDrop.rarity)
        return false;
    if (!itemDrop.name)
        return false;
    if (!Number.isSafeInteger(itemDrop.maxAmount))
        return false;
    if (!Number.isSafeInteger(itemDrop.minAmount))
        return false;
    if (!Number.isSafeInteger(itemDrop.rarity))
        return false;
    if (!typeof itemDrop.name == 'string')
        return false;
    if (itemDrop.rarity > 10 || itemDrop.rarity < 0)
        return false;
    return true;
}