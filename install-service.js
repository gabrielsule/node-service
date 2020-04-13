const Service = require('node-windows').Service;

const svc = new Service({
    name: 'Lorem ipsum',
    description: 'Descripción de lorem ipsum',
    script: 'C:\\code\\index.js'
});

svc.on('install', function () {
    svc.start();
});

svc.install();