let fetch = require('node-fetch');
let redis = require('redis');

const client = redis.createClient();
client.on('error', (err) => console.log('Redis Client Error', err));


// promisify the response
const {promisify} = require('util');

//const getAsync = promisify(client.get).bind(client);

//const setAsync = promisify.promisify(client.get).bind(client);
const setAsync = promisify(client.get).bind(client);

const baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=49.282730&lon=-123.120735&appid=b960595956aa7918b0312905d0a88ce4&units=metric";

async function fetchData() {
   // fetch from URL
   const res = await fetch(baseURL);
   const jsonRes = await res.json();

   // transform data
   const city = jsonRes.city; // data on the selected city (currently Vancouver)
   const allWeatherData = jsonRes.list; // five day forecast data

   const flattenedWeatherData = {};

   for (let i = 0; i < allWeatherData.length; i++) {
      flattenedWeatherData[allWeatherData[i].dt_txt] = flattenJSON(allWeatherData[i]);
   }

   console.log(flattenedWeatherData);


   // open the connection
   await client.connect();

   // set in redis
   await client.set('weather', JSON.stringify(jsonRes));
   const success = await client.get('weather');

   console.log({success});

   // close the connection
   const [ping, get, quit] = await Promise.all([
      client.ping(),
      client.get('key'),
      client.quit()
   ]); // ['PONG', null, 'OK']

}

const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
   for(key in obj){
      if(typeof obj[key] !== 'object'){
         res[extraKey + key] = obj[key];
      }else{
         flattenJSON(obj[key], res, `${extraKey}${key}.`);
      };
   };
   return res;
};

fetchData();

module.exports = fetchData;

// changed here