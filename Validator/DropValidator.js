
/**
 * Validate if drop objet is correct
 * @param {Objet} drop 
 */
export function ValidateDrop(drop) {
    if (!drop.itemName)
        return false;
    if (!typeof drop.itemName == "string")
        return false;
    if (!Number.isSafeInteger(maxDropAmount))
        return false;
    if (!Number.isSafeInteger(minDropAmount))
        return false;
    if (!Number.isSafeInteger(dropRarirty))
        return false;
    if (dropRarirty > 10 || dropRarirty < 0)
        return false;
    return true;
}

/**
 * Validate if array of drops is valid
 * @param {Array} dropList - List of drops
 */
export function ValidadeDropArray(dropList) {
    if (!Array.isArray(dropList))
        return false;
    dropList.forEach(drop => {
        if (!ValidateDrop(drop))
            return false;
    })
    return true;
}
