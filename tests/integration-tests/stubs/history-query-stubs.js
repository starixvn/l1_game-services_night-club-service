import { createDummyUser } from "sc-game-service-integration-utils";
import { RoundModel } from "../../../src/models";

export const queryHistoryUser = { playerId: 3, playerName: "QueryHistoryUser", UID: "" };

export const stubHistoryData = async (currency) => {
    const { userSession } = await createDummyUser(queryHistoryUser.playerId, queryHistoryUser.playerName, currency);

    queryHistoryUser.UID = userSession.userId;

    const rounds = [
        {
            bet: 0.1,
            totalAmount: 2.5,
            paylines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            freeSpin: false,
            result: [2, 2, 1, 0, 4, 8, 0, 1, 1, 2, 0, 2, 3, 3, 0],
            betWin: 0.4,
            paid: true,
            id: 1,
            uid: userSession.userId,
            name: queryHistoryUser.playerName,
            time: "2022-09-08T07:42:13.392+00:00",
            rate: 1,
            exchangeRateId: 4304,
            siteId: userSession.siteId,
            currency:  userSession.currencyName,
            operatorId: userSession.operatorId,
            playerId: queryHistoryUser.playerId,
            bonusChests: [],
            __v: 1,
            endTime: "2022-09-08T07:42:13.443+00:00",
            odds: {
                0: {
                    2: 0,
                    3: 2,
                    4: 5,
                    5: 10,
                },
                1: {
                    2: 0,
                    3: 5,
                    4: 10,
                    5: 25,
                },
                2: {
                    2: 0,
                    3: 5,
                    4: 25,
                    5: 50,
                },
                3: {
                    2: 0,
                    3: 10,
                    4: 30,
                    5: 150,
                },
                4: {
                    2: 0,
                    3: 12,
                    4: 45,
                    5: 275,
                },
                5: {
                    2: 0,
                    3: 16,
                    4: 60,
                    5: 375,
                },
                6: {
                    2: 0,
                    3: 20,
                    4: 75,
                    5: 500,
                },
                7: {
                    2: 0,
                    3: 3,
                    4: 6,
                    5: 18,
                },
                8: {
                    2: 0,
                    3: 3,
                    4: 4,
                    5: 5,
                },
                9: {
                    2: 8,
                    3: 50,
                    4: 1000,
                    5: 8000,
                },
                10: {
                    2: 4,
                    3: 25,
                    4: 100,
                    5: 5000,
                },
            },
            settlementResult: {
                freeSpins: {
                    count: 0,
                    odds: 0,
                },
                bonus: {
                    count: 1,
                    odds: 0,
                },
                jackpot: null,
                winningPaylines: [
                    {
                        payline: 3,
                        symbol: "0",
                        count: 3,
                        odds: 2,
                    },
                    {
                        payline: 20,
                        symbol: "0",
                        count: 3,
                        odds: 2,
                    },
                ],
            },
        },
    ];

    await RoundModel.insertMany(rounds);
};
