/// <reference path="../../typings/index.d.ts" />
import {AppSettings} from "../entities/AppSettings";
import * as fs from "fs";
import * as path from "path";

export class SettingsReader {
    read() {
        let configFilePath = path.resolve(__dirname, "../../config/azure.json");
        try {
            let fileContent = fs.readFileSync(configFilePath, "utf8");
            let fileContentJSON = JSON.parse(fileContent);
            let settings = new AppSettings();
            settings.azureConnectionString = fileContentJSON.AzureConnectionString;
            settings.deviceDescription = fileContentJSON.DeviceDescription;
            return settings;
        } catch (error) {
            throw "Could not load configuration file " + configFilePath;
        }
    }
}