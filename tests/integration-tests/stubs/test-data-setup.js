import mongoose from "mongoose";
import { middlewares } from "sc-common";
import {
    createDummyCurrency,
    createDummyUsers,
    createExchangeRate,
    createGameConfig,
    createPartnerConfig,
} from "sc-game-service-integration-utils";
import { createCurrencyGroupGames } from "./currency-group-games-stub";
import { stubHistoryData } from "./history-query-stubs";

import configs from "../../../src/app-configs.IGT";
import { RoundModel } from "../../../src/models";
import { game, gameConfig, currencyData, rounds } from "./test-data";

const connectDatabase = async () => {
    await middlewares.database.configureDatabase(mongoose, configs.database);
    await clearAllData();
};

const clearAllData = async () => {
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
        await collection.deleteMany();
    }
};

const createTestData = async () => {
    try {
        await connectDatabase();
        await createExchangeRate();
        await createGameConfig(gameConfig);
        console.log("inserted gameconfig");
        const partnerConfig = await createPartnerConfig(game.id);
        const currency = await createDummyCurrency(partnerConfig.partnerId, currencyData.code, currencyData.name);
        await createCurrencyGroupGames(currency.groupId, game.id, gameConfig);
        await createDummyUsers(currency);
        await createRounds();
        await stubHistoryData(currency);

        console.log("Create game config & dummy user for testing successfully!");

        process.exit(0);
    } catch (e) {
        console.log(e);
    }
};

const createRounds = async () => {
    return RoundModel.insertMany(rounds);
};

createTestData();
