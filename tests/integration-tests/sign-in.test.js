import "regenerator-runtime/runtime";
import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { initUserSession } from "./helpers";
import { socketOptions } from "./stubs/test-data";

describe("event signin", () => {
    let normalUserClientDriver;
    beforeAll(() => {
        normalUserClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
    });

    afterAll(() => {
        normalUserClientDriver.close();
    });

    it("should receive signed in response", async () => {
        // Assert
        await normalUserClientDriver.handleSignedInEvent();
        expect(true).toBe(true);
    });
});
