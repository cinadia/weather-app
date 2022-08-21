let redis = require('redis');

// create redis client
const client = redis.createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

const express = require('express')
const app = express()
const port = 3001 // because frontend is on 3000

app.get('/weather', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // open the connection
    await client.connect();

    // get from redis
    const weather = await client.get('weather');

    console.log(JSON.parse(weather)); // TODO: remove JSON.parse later??
    //console.log(weather);

    // close the connection
    const [ping, get, quit] = await Promise.all([
        client.ping(),
        client.get('weather'),
        client.quit()
    ]); // ['PONG', null, 'OK']


   return res.send(JSON.parse(weather));

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})