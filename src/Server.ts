/// <reference path="../typings/index.d.ts" />
import {SensorData} from "./entities/SensorData";
import {SettingsReader} from "./settings/SettingsReader";
import {AzureSender} from "./sender/AzureSender";
import {SensorDataFileStorage} from "./storage/SensorDataFileStorage";
import {Relay} from "./relay/Relay";
import * as fs from "fs";
import * as express from "express";
import * as bodyParser from "body-parser";
let port = process.env.PORT || 8080;
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use((request: any, response: any, next: any) => {
    next();
});

let settingsReader = new SettingsReader();
let settings = settingsReader.read();
let storage = new SensorDataFileStorage();
let sender = new AzureSender(settings.azureConnectionString, settings.deviceDescription);
let relay = new Relay(sender, storage);

// Takes the current sensor reading
router.route("/current").post((request: any, response: express.Response) => {
    try {
        console.log("/api/current called");
        relay.processData(request.body);
        response.json({message: "Values processed"});
    }
    catch (error) {
        response.json({message: error});
    }
});

app.use("/api", router);
app.listen(port);
console.log("Listening for sensor data on port " + port);