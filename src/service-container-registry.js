import awilix from "awilix";
import { SlotContainerRegistry } from "sc-slot-game-base";
import { FameModel, FreespinModel, RoundModel } from "./models";

const { asValue } = awilix;

export default class ServiceContainerRegistry extends SlotContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(RoundModel),
            famesRepository: asValue(FameModel),
            freeSpinsRepository: asValue(FreespinModel),
        });
    }
}
