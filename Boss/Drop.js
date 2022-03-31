import { GetBossFromName } from './Boss';

/**
 * GetDropFromBoss is a function to
 * get random loot from boss named
 * 'bossName'
 * @param {String} bossName - Name of boss
 */
export async function GetDropFromBoss(bossName) {
    let boss = await GetBossFromName(bossName);
    if (boss.status == 1) {
        if (boss.boss.bossDrop.dropCount > 0) {
            let drops = boss.boss.bossDrop.dropList;
            
        }
        else {
            return {status: 1, message: "This boss no have drop", drop: []};
        }
    } else {
        return { status: 0, message: "No have any boss with this name", drop: [] };
    }
}

/**
 * GetFullDropFromBoss is a function
 * to get full loot from boss named
 * 'bossName'
 */
export function GetFullDropFromBoss(bossName) {

}

/**
 * AddDropToBoss is a function to
 * add new loot from boss named
 * 'bossName'
 */
export function AddDropToBoss(itemName, amount, rarity, bossName) {

}

/**
 * RemoveBossDrop is a function to
 * remove loot from boss named
 * 'bossName'
 */
export function RemoveBossDrop(itemName, bossName) {

}