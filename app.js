import Boss from './Boss';
import Character from './Character';
import Class from './Class';
import Constructor from './Constructor';
import Craft from './Craft';
import Hunt from './Hunt';
import Inventory from './Inventory';
import Shop from './Shop';
import Skill from './Skill';
import Validator from './Validator';

import {
    FightToBoss,
    GroupFightToBoss,

    GetDropFromBoss,
    GetFullDropFromBoss,
    AddDropToBoss,
    RemoveBossDrop,

    GetBossFromName,
    GetBossFromLevel,
    GetAllBoss,
    AddNewBoss,
    AlterBoss,
    RemoveBoss,
} from './Boss';

import Mongoose from 'mongoose';
import BossModel from './Boss/DbModel';
import CharacterModel from './Character/DbModel';
import ClassModel from './Boss/DbModel';
import CraftModel from './Craft/DbModel';
import HuntModel from './Hunt/DbModel';
import InventoryModel from './Inventory/DbModel';
import ShopModel from './Shop/DbModel';
import SkillModel from './Skill/DbModel';

Mongoose.connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = Mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

export default {
    Boss,
    Character,
    Class,
    Craft,
    Hunt,
    Inventory,
    Shop,
    Skill,
};

export {
    FightToBoss,
    GroupFightToBoss,

    GetDropFromBoss,
    GetFullDropFromBoss,
    AddDropToBoss,
    RemoveBossDrop,

    GetBossFromName,
    GetBossFromLevel,
    GetAllBoss,
    AddNewBoss,
    AlterBoss,
    RemoveBoss,


    BossModel,
    CharacterModel,
    ClassModel,
    CraftModel,
    HuntModel,
    InventoryModel,
    ShopModel,
    SkillModel,
}