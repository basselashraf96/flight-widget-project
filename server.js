const axios = require('axios').default
const express = require('express')
const cors = require('cors')

const PORT = 8000
require('dotenv').config() //! to hide our secrets in .env file

app = express()
app.use(cors()) //! solves allow origin problem

//? proccess is an object oon global node object

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