
/**
 * Check if a skill name exist in db
 * @param {String} skillName - Name of skill to check
 * @function
 */
export function ValidateSkillByName(skillName) {
    if (!skillName)
        return false;
    if (!typeof skillName == 'string')
        return false;

}

/**
 * Check if all skill exist in DB
 * @param {Array} skillArray - List of skills
 * @function
 */
export function ValidateArrayOfSkill(skillArray) {
    if (!skillArray)
        return false;
    if (!Array.isArray(skillArray))
        return false;
    skillArray.forEach(skill => {
        if (!ValidateSkillByName(skill.name))
            return false;
    });
    return true;
}