const express = require('express');
const router = express.Router();

const axios = require('axios');
const { response } = require('express');
require('dotenv').config();

router.get("/tickets",  async (req, res) => {
    const token = `${process.env.username}:${process.env.password}`;
    const subdomain = process.env.subdomain
    const encodedToken = Buffer.from(token).toString('base64');
    const session_url = `https://${subdomain}.zendesk.com/api/v2/tickets.json`;

    var config = {
      method: 'get',
      url: session_url,
      headers: { 'Authorization': 'Basic '+ encodedToken }
    };
    axios(config)
    .then(function (response) {
        res.send({
           "tickets" : JSON.stringify(response.data.tickets)
        })
    })
    .catch(function (response) {
        res.send({
             "Error" : response.response.data.error
         })
    });
});


module.exports = router;