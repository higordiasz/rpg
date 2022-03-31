import { ValidateArrayOfSkill, } from "./SkillValidator";
import { ValidateItemDrop } from './ItemValidator';

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
    if (!ValidateArrayOfSkill(bossCharacter.skills))
        return false;
    return true;
}

/**
 * Check if bossDrop is a valid Object
 * @param {Object} bossDrop 
 * @returns {Boolean} 
 */
export function ValidateBossDrop(bossDrop) {
    if (!bossDrop)
        return false;
    if (!bossDrop.dropCount)
        return false;
    if (!bossDrop.dropList)
        return false;
    bossDrop.dropList.forEach(itemDrop => {
        if (!ValidateItemDrop(itemDrop))
            return false;
    })
    return true;
}
