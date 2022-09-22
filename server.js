const axios = require('axios').default
const express = require('express')
const cors = require('cors')
const PORT = 8000
require('dotenv').config()

app = express()

app.get('/flights', (req, res) => {
    const options = {
        url: `${process.env.URL}?page-size=6`,
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data);
        res.json(response.data)
    }).catch(err => {
        console.log(err);
    })

})

app.listen(PORT, () => {
    console.log(`LISTENING TO PORT ${PORT}`);
})