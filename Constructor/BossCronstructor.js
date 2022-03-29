import { ValidateBossCharacter } from '../Validator/BossValidator';

/**
 * Create a nem instace of BossCharactor
 * @param {Number} bossHealth 
 * @param {Number} bossPhysicalDamege 
 * @param {Number} bossMagicDamege 
 * @param {Number} bossDefense 
 * @param {Array} bossSkils
 * @constructor 
 */
export function BossCharacter(health, energy, physicalDamege, magicDamege, defense, skils) {
    let bossCharacter = {
        health: health != null ? health : 100,
        energy: energy != null ? energy : 100,
        physicalDamege: physicalDamege != null ? physicalDamege : 50,
        magicDamege: magicDamege != null ? magicDamege : 50,
        defense: defense != null ? defense : 20,
        skils: skils != null ? skils : []
    };
    if (ValidateBossCharacter(bossCharacter)) {
        this.health = health;
        this.energy = energy;
        this.physicalDamege = physicalDamege;
        this.magicDamege = magicDamege;
        this.defense = defense;
        this.skils = skils;
    } else {
        this.health = 100;
        this.energy = 100;
        this.physicalDamege = 50;
        this.magicDamege = 50;
        this.defense = 20;
        this.skils = [];
    }
}