import {SensorData} from "../entities/SensorData";

export interface SensorDataSenderInterface {
    send(data: SensorData): void;
}