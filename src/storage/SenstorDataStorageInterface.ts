import {SensorData} from "../entities/SensorData";

export interface SenstorDataStorageInterface {
    save(data: SensorData): void;
    read(): SensorData;
}