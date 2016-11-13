# Receiving environmental data and pushing it to Azure IoT Hub 

This is a Node app in TypeScript that takes environmental data through HTTP POST and sends it to Azure IoT Hub. I also stores the *latest* (not aggregated) data on the local file system, this can easily be disabled.

It's build for a project where it runs on a RaspberryPi and recieves the data from another local service, so there is no authentication going on here. 

This code is part of a project described here: [http://henrik.sommerfeld.nu/my-iot-exploration-part-3-sending-data-to-cloud/](http://henrik.sommerfeld.nu/my-iot-exploration-part-3-sending-data-to-cloud/)

## Installation

For installing this on the Raspberry Pi you can first (optionally) build it on another machine using the following procedure.

### On the Build Agent (any machine)

1. The usual **npm install** installs what's needed for running the app. 

  ```
  npm install
  ```
2. To build it, run **gulp build-production**. This creates a **dist** folder that can be copied to the target system   

  ```
  gulp build-production
  ```
3. Copy **dist** folder to target system.

### On the target system, ie. Raspberry Pi

1. Navigate to the **dist** folder and run **npm install --production**
  ```
  npm install --production
  ```
  2. To connect to Azure IoT Hub you need the connection string and a description for your device. This is kept in a configuration file 
  that is not created automatically, since we don't want to overwritten when updating the app. Create a folder next to the **dist** folder called **config**. 
  In that folder, create a file named **azure.json** with the following properties.
  
  ```json
  {
    "AzureConnectionString": "What ever your connection string is",
    "DeviceDescription": "What ever you want to call your device"
  }
  ```


## Develop

  - See all available gulp tasks.
  
    ```
    gulp help
    ```
  
  - Compile the TypeScript files

    ```
    gulp typescript-compile
    ```

  - Run jasmine tests using **karma**.
  
    ```
    gulp tests-run
    ```

  - Run jasmine tests using **karma** with a **watch**.
  
    ```
    gulp tests-watch
    ```

  - Serve jasmine tests in the **browser**.
  
    ```
    gulp tests-serve
    ```
   
