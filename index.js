const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Lorem Ipsum'))

app.listen(port, () => console.log(`Ejecutandose en port ${port}`))