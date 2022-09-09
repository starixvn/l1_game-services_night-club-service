import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { socketOptions } from "./stubs/test-data";
import { initUserSession } from "./helpers";

const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 80000;

describe("User place bet", () => {
    let normalUserClientDriver;

    beforeAll(() => {
        normalUserClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
        jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
    });

    afterAll(() => {
        normalUserClientDriver.close();
    });

    beforeEach(() => {
        normalUserClientDriver.off(normalUserClientDriver.gameName);
    });

    describe("when game enabled", () => {
        it("should return endBet info", (done) => {
            // Arrange
            const expectedEndBet = 600;

            // Act
            normalUserClientDriver.handleSignedInEvent(() => {
                normalUserClientDriver.sendInGameEvent();
                normalUserClientDriver.handleInGameEvent(() => {
                    normalUserClientDriver.emit("bet", {
                        betChoice: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                        amount: 0.1,
                        freeSpin: false,
                    });
                });
            });

            // Assert
            normalUserClientDriver.handleEndBetEvent((endBetData) => {
                if (endBetData?.endBet) {
                    expect(endBetData.endBet).toBeGreaterThan(0);
                    done();
                }
            });
        });
    });
});
