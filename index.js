const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const name = process.env.name || 'default-tenant'
const id = process.env.id || 'default_id'

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/details', (req, res) => {
    res.send({'tenantName':name,'tenantID':id});
});

app.get('/health', (req, res) => {
    res.send({'health':'ok','message':'All is well'});
})

app.get('/test', (req, res) => {
    res.send({'message':'Yup its all working fine'})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))