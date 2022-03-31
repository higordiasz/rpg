import { ValidateBossCharacter, ValidateBossDrop } from '../Validator';
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
export async function GetBossFromLevel(level) {
    if (!level)
        return { status: 0, message: 'Level missing', boss: null };
    let list = await BossDB.find({ bossLevel: level });
    if (list.count < 1) {
        list = await BossDB.find();
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
            while (iMax <= maxLevel || iMin >= minLevel) {
                let bFound = list.find(b => b.bossLevel == iMax || b.bossLevel == iMin);
                if (bFound)
                    return { status: 1, message: 'Found', boss: bFound };
                iMin--;
                iMax++;
            }
            return { status: 0, message: 'No have boss in DB', boss: null };
        } else {
            return { status: 0, message: 'No have boss in DB', boss: null };
        }
    } else {
        let i = Math.round(Math.random() * (list.count - 1));
        return { status: 1, message: 'Found', boss: list[i] };
    }
}

/**
 * GetBossFromName is a function to
 * get a boss from name of the Boss
 * @param {String} bossName - Name of boss
 */
export async function GetBossFromName(bossName) {
    if (!bossName)
        return { status: 0, message: 'bossName is missing', boss: null };
    let found = await BossDB.findOne({ bossname: bossName });
    if (found)
        return { status: 1, message: 'Found', boss: found };
    return { status: 0, message: 'No have boss with name in DB', boss: null };
}

/**
 * GetAllBoss is a function to
 * get all boss from database
 */
export async function GetAllBoss() {
    let found = await BossDB.find();
    if (found.count > 0)
        return { status: 1, message: 'Found', listBoss: found };
    return { status: 0, message: 'No have any boss in DB', listBoss: [] };
}

/**
 * AddNewBoss is a function to
 * add a new boss in database
 * @param {String} bossName - Name of boss
 * @param {Number} bossLevel - Level of boss
 * @param {Object} bossDrop - List of drops
 * @param {String} bossDificulty - Dificulty of boss ('easy', 'medium', 'hard') is only cosmetic
 * @param {Object} bossCharacter - List of all caracteristcs of boss
 * @param {Number} bossExp - Exp drop from boss
 */
export async function AddNewBoss(bossName, bossLevel, bossDrop, bossDificulty, bossCharacter, bossExp) {
    if (!bossName || !bossLevel || !bossDrop || !bossDificulty || !bossCharacter || !bossExpS)
        return { status: 0, message: 'Argument as missing', create: false };
    if (!ValidateBossCharacter(bossCharacter))
        return { status: 0, message: 'bossCharacter is invalid', create: false };
    if (!ValidateBossDrop(bossDrop))
        return { status: 0, message: 'bossDrop is invalid', create: false };
    if (!typeof bossDificulty == 'string')
        return { status: 0, message: 'bossDificulty is incorrect format', create: false };
    if (!typeof bossName == 'string')
        return { status: 0, message: 'bossName is incorrect format', create: false };
    if (await BossDB.findOne({ bossName: bossName }) != null)
        return { status: 0, message: 'Already exist a boss with name', create: false };
    if (!Number.isSafeInteger(bossLevel))
        return { status: 0, message: 'bossLevel is incorrect', create: false };
    if (!Number.isSafeInteger(bossExp))
        return {status: 0, mesage: 'bossExp is incorrect', create: false};
    let boss = new BossDB({
        bossName: bossName,
        bossLevel: bossLevel,
        bossCharacter: bossCharacter,
        bossDrop: bossDrop,
        bossDificulty: bossDificulty,
        bossExp: bossExp
    })
    await boss.save();
    return { status: 1, message: 'Done', create: true};
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
 * @param {Number} bossExp - Amount of Exp droped from boss
 */
export async function AlterBoss(bossName, bossLevel = null, bossDrop = null, bossDificulty = null, bossCharacter = null, bossExp = null, newName = null) {
    if (!bossName)
        return { status: 0, message: 'bossName is invalid format', alter: false };
    let boss = await BossDB.findOne({ bossName: bossName })
    if (!boss)
        return { status: 0, message: 'No have any boss with this name on db', alter: false }
    if (ValidateBossCharacter(bossCharacter))
        boss.bossCharacter = bossCharacter;
    if (ValidateBossDrop(bossDrop))
        boss.bossDrop = bossDrop;
    if (typeof bossDificulty == 'string' && bossDificulty != null && boss.bossDificulty != '')
        boss.bossDificulty = bossDificulty;
    if (typeof newName == 'string' && newName != null && boss.newName != '')
        boss.bossName = newName;
    if (Number.isSafeInteger(bossLevel))
        boss.bossLevel = bossLevel;
    if (Number.isSafeInteger(bossExp))
        boss.bossExp = bossExp;
    await boss.save();;
    return { status: 1, message: 'Done', alter: true};
}

/**
 * RemoveBoss is a function to
 * remove a boss named 'bossName'
 * from database
 * @param {String} bossName - Name of boss you want to remove
 */
export async function RemoveBoss(bossName) {
    if (!bossName)
        return { status: 0, message: 'bossName is missing', boss: null };
    let boss = await BossDB.findOneAndDelete({ bossName: bossName });
    if (boss)
        return { status: 1, message: 'Found', boss: boss };
    return { status: 0, message: 'No have any boss with name in DB', boss: null };
}

