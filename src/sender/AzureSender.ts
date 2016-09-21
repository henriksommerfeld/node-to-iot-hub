/// <reference path="../../typings/index.d.ts" />
import {SensorData} from "../entities/SensorData";
import {SensorDataSenderInterface} from "./SensorDataSenderInterface";
import * as Device from "azure-iot-device";
import * as Protocols from "azure-iot-device-http";

export class AzureSender implements SensorDataSenderInterface {
    private lastSent = new Date();
    private location: string;
    private client: Device.Client;
    private deviceId: string;
    private message = Device.Message;

    constructor(connectionString: string, locationDescription: string) {
        this.location = locationDescription;
        this.client = Device.Client.fromConnectionString(connectionString, Protocols.Http);
        this.deviceId = Device.ConnectionString.parse(connectionString).DeviceId;
        console.log("Azure IoT Hub connection established for device " + this.deviceId);
    }

    private printResultFor(action: string) {
        return function printResult(error: any, result: any) {
            if (error) console.log(action + " error: " + error.toString());
            if (result) console.log(action + " status: " + result.statusCode + " " + result.statusMessage);
        };
    }

    send(data: SensorData): void {
        let dataAsString = JSON.stringify(data.toJSON());
        let message = new this.message(dataAsString);
        console.log("Send command invoked" + message.getData());

        this.client.sendEventBatch([message], this.printResultFor("send"));
    }
}