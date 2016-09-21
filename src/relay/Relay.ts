/// <reference path="../../typings/index.d.ts" />
import {SensorData} from "../entities/SensorData";
import {SenstorDataStorageInterface} from "../storage/SenstorDataStorageInterface";
import {SensorDataSenderInterface} from "../sender/SensorDataSenderInterface";

export class Relay {
    private storage: SenstorDataStorageInterface;
    private sender: SensorDataSenderInterface;
    private sendDataIntervalMilliSeconds = 30000;
    private lastSentTime: number = 0;

    constructor(sender: SensorDataSenderInterface, storage?: SenstorDataStorageInterface) {
        this.sender = sender;
        this.storage = storage;
    }

    public processData(data: any): void {
        let parsedData = new SensorData(Number(data.temperature),
            Number(data.pressure), Number(data.humidity), new Date());

        if (this.storage != null)
            this.storage.save(parsedData);

        if (new Date().getTime() - this.lastSentTime > this.sendDataIntervalMilliSeconds)
            try {
                this.sender.send(parsedData);
            }
            finally {
                this.lastSentTime = new Date().getTime();
            }
    }
}