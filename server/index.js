const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const { response } = require('express');
require('dotenv').config();
app.use(cors());
console.log(process.env)

app.get('/',(req,res) => {
  res.send('Server says hello')
  
})

app.get('/entertainment', async (req,res) => {
  await axios.get(process.env.API_URL, {
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}`,
          "Content-type": "application/json"
        }
      })
      .then(resp => resp.data)
      .then(json => res.send(json))
      .catch(err => console.log(err))
})

app.listen(8000, ()=> {
  console.log("I listen on port 8000 girl")
})
