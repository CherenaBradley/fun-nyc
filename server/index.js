const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors')
require('dotenv').config();
app.use(cors());
console.log(process.env)

app.get('/',(req,res) => {
  res.send('Server says hello')
  
})

app.get('/entertainment', async (req,res) => {
 axios.get(process.env.API_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  }).then((response) => {
    res.send(response.data)
  }).catch(e => console.log(e, "SOME ERROR"))
})

app.listen(8000, ()=> {
  console.log("I listen on port 8000 girl")
})
