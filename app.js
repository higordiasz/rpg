import { Boss } from './Boss/index';
import { Character } from './Character/index';
import { Class } from './Class/index';
import { Craft } from './Craft/index';
import { Hunt } from './Hunt/index';
import { Inventory } from './Inventory/index';
import { Shop } from './Shop/index';
import { Skill } from './Skill/index';

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

export const RPG = {
    Boss,
    Character,
    Class,
    Craft,
    Hunt,
    Inventory,
    Shop,
    Skill,

    BossModel,
    CharacterModel,
    ClassModel,
    CraftModel,
    HuntModel,
    InventoryModel,
    ShopModel,
    SkillModel,

    db
};