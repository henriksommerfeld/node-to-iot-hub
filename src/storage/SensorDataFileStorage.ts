/// <reference path="../../typings/index.d.ts" />
import {SensorData} from "../entities/SensorData";
import {SenstorDataStorageInterface} from "./SenstorDataStorageInterface";
import * as fs from "fs";
import * as path from "path";

export class SensorDataFileStorage implements SenstorDataStorageInterface {
    private homedir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
    private fileName = path.join(this.homedir, "latest-sensor-reading.json");

    save(data: SensorData) {
        let dataJSON = data.toJSON();
        let dataString = JSON.stringify(dataJSON);
        fs.writeFileSync(this.fileName, dataString);
    }
    read() {
        let fileContent = fs.readFileSync(this.fileName, "utf8");
        let fileContentJSON = JSON.parse(fileContent);
        return SensorData.fromJSON(fileContentJSON);
    }
}