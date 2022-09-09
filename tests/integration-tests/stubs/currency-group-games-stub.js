import { CurrencyGroupGames } from "sc-game-base/src/core/models";

export const createCurrencyGroupGames = async (currencyGroupId, gameId, gameConfig) => {
    const data = {
        enabled: true,
        stakeLevels: [{ stake: 0.1 }, { stake: 1 }, { stake: 5 }],
        groupId: currencyGroupId,
    };

    return CurrencyGroupGames.create({ gameId, ...gameConfig, ...data });
};
