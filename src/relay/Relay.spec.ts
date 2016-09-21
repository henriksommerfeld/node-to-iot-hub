/// <reference path="../../typings/index.d.ts" />
// import {Relay} from "./Relay";
// import {SensorData} from "../entities/SensorData";

// describe("Relay", () => {
//     describe("processData", () => {
//         // this compiles against jasmine 2.x, but jasmine-node uses 1.3.x, so the breaking changes between the versions fail.
//         beforeEach(function() {
//             // jasmine.clock().install();
//             jasmine.Clock.useMock();
//         });

//         afterEach(function() {
//             // jasmine.clock().uninstall();
//         });

//         it("should convert input to SensorData entity", () => {
//             let data = { temperature: 22.5, pressure: 1012.4, humidity: 84.6 };
//             let baseTime = new Date(2016, 11, 23);

//             // jasmine.clock().mockDate(baseTime);
//             let sender = jasmine.createSpyObj("sender", ["send"]);

//             let relay = new Relay(sender);
//             relay.processData(data);
//             jasmine.Clock.tick(5);
//             relay.processData(data);

//             expect(sender.send).toHaveBeenCalledTimes(1);
//         });
//     });
// });
