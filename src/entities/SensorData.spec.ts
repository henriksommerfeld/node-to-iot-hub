/// <reference path="../../typings/index.d.ts" />
import {SensorData} from "./SensorData";

describe("SensorData", () => {
    it("toJSON", () => {
        let created = new Date();
        let sensorData = new SensorData(25.4, 18.2, 46.7, created);

        let result = sensorData.toJSON();

        expect(result.temperature).toEqual(25.4);
        expect(result.pressure).toEqual(18.2);
        expect(result.humidity).toEqual(46.7);
        expect(result.created).toEqual(created.getTime());
    });

    it("fromJSON", () => {
        let created = new Date();
        let createdTime = created.getTime();
        let jsonObject = {
            temperature: 23.8,
            pressure: 1071.2,
            humidity: 71.4,
            created: createdTime
        };

        let result = SensorData.fromJSON(jsonObject);

        expect(result.temperature).toEqual(23.8);
        expect(result.pressure).toEqual(1071.2);
        expect(result.humidity).toEqual(71.4);
        expect(result.created.getTime()).toEqual(created.getTime());
    });
});