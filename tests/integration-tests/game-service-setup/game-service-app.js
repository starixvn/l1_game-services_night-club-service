import { SlotGameData, SlotGameDefinition } from "sc-slot-game-base";
import { initAPIStub, stubUserService } from "sc-game-service-integration-utils";
import { normalUser, errorUser, internalServerErrorUser, endGameErrorUser } from "sc-game-service-integration-utils/src/stubs/user-stub";
import appConfigs from "../../../src/app-configs.IGT";
import gameSettings from "../../../src/game-settings";
import ServiceContainerRegistry from "../../../src/service-container-registry";
import { Core } from "sc-game-base";
import { queryHistoryUser } from "../stubs/history-query-stubs";

export const run = async () => {
    initAPIStub(appConfigs.apiSettings.apiUrl);
    stubUserService(appConfigs, [normalUser, errorUser, internalServerErrorUser, endGameErrorUser, queryHistoryUser]);

    const gameData = new SlotGameData(gameSettings.durations.wholeRound);
    const definition = new SlotGameDefinition(gameSettings);
    const container = new ServiceContainerRegistry().register(appConfigs, definition, gameData);

    const app = new Core.BaseGameApp(gameSettings.name, appConfigs);
    await app.run();
    await app.startGame(container);
};

run();
