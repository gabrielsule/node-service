# Node-Service

### Instalacióm
```bash
npm init -y

npm install -g node-windows

npm link node-windows

npm i expresss
```

### Crear aplicación index.js
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Lorem Ipsum'))

app.listen(port, () => console.log(`Ejecutandose en port ${port}`))
```

### Crear servicio install-services.js
```javascript
const Service = require('node-windows').Service;

const svc = new Service({
    name: 'Lorem ipsum',
    description: 'Descripción de lorem ipsum',
    script: 'C:\\code\\index.js'
});

svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.on('install', function () {
    svc.start();
});

svc.install();

svc.uninstall();
```

### Instalar servicio
```javascript
node install-services.js
```
