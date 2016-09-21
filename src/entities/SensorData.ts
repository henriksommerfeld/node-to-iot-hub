import {SensorDataJson} from "./SensorDataJson";

export class SensorData {
    temperature: number;
    pressure: number;
    humidity: number;
    created: Date;

    constructor(temperature: number, pressure: number, humidity: number, created: Date) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.created = created;
    }

    toJSON(): SensorDataJson {
        return {
            temperature: this.temperature,
            pressure: this.pressure,
            humidity: this.humidity,
            created: this.created.getTime()
        };
    }

    static fromJSON(json: SensorDataJson): SensorData {
        let data = <SensorData>Object.create(SensorData.prototype);
        data.temperature = Number(json.temperature);
        data.pressure = Number(json.pressure);
        data.humidity = Number(json.humidity);
        data.created = new Date(json.created);
        return data;
    }
}