

/**
 * Create a new instace of drop
 * @param {String} itemName - Name of item
 * @param {Number} maxDropAmount - Max amount of possible drop
 * @param {Number} minDropAmount - Min amount of possible drop
 * @param {Rarity} dropRarity - 0 = ever, 1 - 10 : 1 commun, 10 very hard drop
 * @constructor
 */
export function Drop (itemName, maxDropAmount, minDropAmount, dropRarity) {
    this.itemName = itemName;
    this.maxDropAmount = maxDropAmount;
    this.minDropAmount = minDropAmount;
    this.dropRarity = dropRarity;
}