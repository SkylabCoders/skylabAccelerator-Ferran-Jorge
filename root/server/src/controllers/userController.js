/* eslint-disable camelcase */
const axios = require('axios');

const userURL = 'https://api.github.com/user';
const client_id = '3078e39c6f2add73219e';
const client_secret = '90773844b97fb5ff0130133f9c540adc14f52c47';
const accessURL = `https://github.com/login/oauth/access_token/?client_id=${client_id}&client_secret=${client_secret}&code=`;

function userController() {
  async function getUser(req, res) {
    const { access_token } = req.query;
    try {
      const { data } = await axios.get(userURL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async function getToken(req, res) {
    const { code } = req.body;
    try {
      const { data } = await axios.post(`${accessURL}${code}`);
      const token = data.split('&')[0].split('=')[1];
      res.json(token);
    } catch (error) {
      res.send(error);
    }
  }
  return { getUser, getToken };
}
module.exports = userController;
