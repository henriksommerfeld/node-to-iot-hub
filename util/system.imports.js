/* global System */

// Configure systemjs to use the .js extension for imports from the src/js folder
System.config({
    packages: {
        'dist': {defaultExtension: 'js'}
    }
});

Promise.all([
    /// inject:import
    System.import('dist\entities\SensorData.spec'),
    System.import('dist\Relay.spec'),
    System.import('dist\relay\Relay.spec')
]);
