import { ValidateBossCharacter } from '../Validator';
import Mongoose from 'mongoose';
const BossDB = Mongoose.model('BossModel');

/**
 * GetBossFromLevel is a function to
 * get a random boss from level you want
 * if no have any boss from same level
 * this function get first boss from higher
 * or lower level found.
 * @param {Number} level - Level of the boss you want
 */
export function GetBossFromLevel (level) {
    if (!level)
        return {message: 'Level missing', boss: null};
    let list = BossDB.find({bossLevel: level});
    if (list.count < 1) {
        list = BossDB.find();
        if (list.count > 0) {
            let maxLevel = 0, minLevel = 0;
            list.forEach(b => {
                if (b.bossLevel > maxLevel)
                    maxLevel = b.bossLevel;
                if (b.bossLevel < minLevel)
                    minLevel = b.bossLevel;
            });
            let iMax = level;
            let iMin = level;
            while (iMax <= maxLevel || iMin >= minLevel ) {
                let bFound = list.find(b => b.bossLevel == iMax || b.bossLevel == iMin);
                if (bFound)
                    return {message: 'Found', boss: bFound};
                iMin--;
                iMax++;
            }
            return {message: 'No have boss in DB', boss: null};
        } else {
            return {message: 'No have boss in DB', boss: null};
        }
    } else {
        let i = Math.round(Math.random() * (list.count - 1));
        return {message: 'Found', boss: list[i]};
    }
}

/**
 * GetBossFromName is a function to
 * get a boss from name of the Boss
 * @param {String} bossName - Name of boss
 */
export function GetBossFromName (bossName) {
    if (!bossName)
        return {message: 'bossName is missing', boss: null};
    let found = BossDB.findOne({bossname: bossName});
    if (found)
        return {message: 'Found', boss: found};
    return {message: 'No have boss with name in DB', boss: null};
}

/**
 * GetAllBoss is a function to
 * get all boss from database
 */
export function GetAllBoss () {
    let found = BossDB.find();
    if (found.count > 0)
        return {message: 'Found', listBoss: found};
    return {message: 'No have any boss in DB', listBoss: []};
}

/**
 * AddNewBoss is a function to
 * add a new boss in database
 * @param {String} bossName - Name of boss
 * @param {Number} bossLevel - Level of boss
 * @param {Object} bossDrop - List of drops
 * @param {String} bossDificulty - Dificulty of boss ('easy', 'medium', 'hard') is only cosmetic
 * @param {Object} bossCharacter - List of all caracteristcs of boss
 */
export function AddNewBoss (bossName, bossLevel, bossDrop, bossDificulty, bossCharacter) {
    if (!bossName || !bossLevel || !bossDrop || !bossDificulty || !bossCharacter)
        return {message: 'Argument as missing', create: false};
    if (!ValidateBossCharacter(bossCharacter))
        return {message: 'bossCharacter is invalid', create: false};
}

/**
 * AlterBoss is a function to
 * change a boss named 'bossName'
 * from database
 * @param {String} bossName - Name of boss
 * @param {Number} bossLevel - Level of boss
 * @param {Object} bossDrop - List of drops
 * @param {String} bossDificulty - Dificulty of boss ('easy', 'medium', 'hard') is only cosmetic
 * @param {Object} bossCharacter - List of all caracteristcs of boss
 * @param {String} newName - New name of boss if you want to change
 */
export function AlterBoss (bossName, bossLevel = null, bossDrop = null, bossDificulty = null, bossCharacter = null,  newName = null) {

}

/**
 * RemoveBoss is a function to
 * remove a boss named 'bossName'
 * from database
 * @param {String} bossName - Name of boss you want to remove
 */
export function RemoveBoss (bossName) {
    if (!bossName)
        return {message:'bossName is missing', boss: null};
    let boss = BossDB.findOneAndDelete({bossName: bossName});
    if (boss)
        return {message: 'Found', boss: boss};
    return {message: 'No have any boss with name in DB', boss: null};
}

