
/**
 * ValidateBossCharacter is a function
 * check if bossCharacter is valid
 * @param {Object} bossCharacter - Cotains informations about Boss
 * @returns {Boolean}
 */
export function ValidateBossCharacter(bossCharacter) {
    if (!bossCharacter.health)
        return false;
    if (!bossCharacter.energy)
        return false;
    if (!bossCharacter.physicalDamege)
        return false;
    if (!bossCharacter.magicDamege)
        return false;
    if (!bossCharacter.defense)
        return false;
    if (!bossCharacter.skills)
        return false;
    return true;
}