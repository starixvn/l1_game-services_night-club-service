const game = {
    id: 46,
    name: "NightClub",
};

const gameConfig = {
    time: new Date(),
    __v: 0,
    type: 2,
    name: "nightclub",
    enabled: true,
    botenabled: true,
    minbet: 0,
    maxbet: 0,
    disabledround: 17605,
    bot_maxbet: 10,
    hour_maxbot: [0, 0, 0.01, 0.01, 0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    disabled_message: "Game đang được bảo trì, vui lòng quay lại sau 10 phút.",
    choices_maxbet: null,
    odds: null,
    delayStartTime: 0,
    enableFreeBet: false,
    slotsConfig: {
        mode: 2,
        bigWinRatio: 2.5,
        stakeLevels: [
            {
                stake: 0.1,
                jackpot: 0,
                botRatio: 0.4,
            },
            {
                stake: 1,
                jackpot: 0,
                botRatio: 0.4,
            },
            {
                stake: 5,
                jackpot: 0,
                botRatio: 0.2,
            },
        ],
        icons: {
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
        bonus: {
            min: 8,
            max: 28,
        },
        jackpot: {
            enabled: false,
            excludeUUS: false,
            winningRatio: 0,
            playerContributionRatio: 0,
            botContributionRatio: 0,
        },
    },
    siteExclusions: [],
    smartBotEnabled: false,
    smartBotGroupRatio: 0,
    isBeta: true,
    gameId: 46,
    randomMode: 0,
    exchangeReload: false,
};

const currencyData = { code: "USD", name: "$US" };

const rounds = [
    {
        bet: 0.1,
        totalAmount: 2.5,
        paylines: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        freeSpin: false,
        result: [2, 7, 0, 1, 0, 8, 2, 4, 2, 1, 6, 3, 2, 3, 1],
        betWin: 4,
        paid: true,
        id: 240494,
        uid: "61b83e7626ecc9208bce39bd",
        name: "FWB",
        time: "2022-09-08T07:42:15.057+00:00",
        rate: 1,
        exchangeRateId: 4304,
        siteId: "4100300",
        currency: "$US",
        operatorId: "ONEworks1",
        playerId: 291192,
        bonusChests: [],
        __v: 1,
        endTime: "2022-09-08T07:42:15.057+00:00",
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
                count: 1,
                odds: 0,
            },
            bonus: {
                count: 1,
                odds: 0,
            },
            jackpot: null,
            winningPaylines: [
                {
                    payline: 1,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 4,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 13,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 17,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 19,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 20,
                    symbol: "1",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 23,
                    symbol: "2",
                    count: 3,
                    odds: 5,
                },
                {
                    payline: 24,
                    symbol: "1",
                    count: 3,
                    odds: 5,
                },
            ],
        },
    },
];

const socketOptions = {
    socketUri: "http://localhost:5001/user/nightclub",
    gameName: game.name,
    proxyRoute: "/socket.io",
};

export { game, gameConfig, currencyData, rounds, socketOptions };
