import { ValidateBossCharacter, ValidateNameSkill, ValidateItemDrop, } from '../Validator';

/**
 * Create a nem instace of BossCharacter
 * @param {Number} bossHealth 
 * @param {Number} bossPhysicalDamege 
 * @param {Number} bossMagicDamege 
 * @param {Number} bossDefense 
 * @param {Array} bossSkills
 * @constructor 
 */
export function BossCharacter(health, energy, physicalDamege, magicDamege, defense, skills = []) {
    let bossCharacter = {
        health: health != null ? health : 100,
        energy: energy != null ? energy : 100,
        physicalDamege: physicalDamege != null ? physicalDamege : 50,
        magicDamege: magicDamege != null ? magicDamege : 50,
        defense: defense != null ? defense : 20,
        skils: skills != null ? skills : []
    };
    if (ValidateBossCharacter(bossCharacter)) {
        this.health = health;
        this.energy = energy;
        this.physicalDamege = physicalDamege;
        this.magicDamege = magicDamege;
        this.defense = defense;
        this.skills = skills;
    } else {
        this.health = 100;
        this.energy = 100;
        this.physicalDamege = 50;
        this.magicDamege = 50;
        this.defense = 20;
        this.skills = [];
    }
}

/**
 * Create a new instace of BossSkils
 * @param {Array} skils - List of skils
 * @constructor
 */
export function BossSkils(skils = []) {
    if (!skils)
        this.skils = [];
    else
        if (skils.length < 1)
            this.skils = [];
        else {
            let aux = [];
            skils.forEach(s => {
                if (ValidateSkill(s))
                    aux.push(s);
            })
            this.skils = aux;
        }
}

/**
 * Create a new instace of Drops from Boss
 * @param {Array} dropArray - Array of informations about all drop of boss 
 * @constructor
 */
export function BossDrop(dropArray = []) {
    if (!Array.isArray(dropArray)) {
        this.dropList = [];
        this.dropCount = 0;
    } else {
        if (dropArray.length < 1) {
            this.dropList = [];
            this.dropCount = 0;
        } else {
            let aux = [];
            dropArray.forEach(itemDrop => {
                if(ValidateItemDrop(itemDrop))
                    aux.push(itemDrop);
            })
            this.droplist = aux;
            this.dropCount = aux.length;
        }
    }
}
