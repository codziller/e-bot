"use strict";
const mongoose = require("mongoose");
const googleAuth = require("google-oauth-jwt");
const config = require("../config/keys");
const userCopy = mongoose.model("user");
const googleClientEmail = config.googleClientEmail;
const googlePrivateKey = config.googlePrivateKey;
module.exports = {
  getSessionToken: async function () {
    return new Promise((resolve) => {
      googleAuth.authenticate(
        {
          email: googleClientEmail,
          key: googlePrivateKey,
          scopes: ["https://www.googleapis.com/auth/cloud-platform"],
        },
        (err, token) => {
          resolve(token);
        }
      );
    });
  },

  register: async (request, response) => {
    try {
      let email = request.body.email;
      let oldEmail = await userCopy.find({ email: email });
      if (oldEmail[0]) {
        response.send(oldEmail[0]);
      } else {
        const newUser = new userCopy({
          name: request.body.name,
          email: email,
          user_id: request.body.user_id,
        });
        let res = await newUser.save();

        response.status(201).send(res);
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },

  login: async (request, response) => {
    try {
      let email = request.body.email;
      let res = await userCopy.find({ email: email });
      if (res[0]) {
        response.send(res[0]);
      } else {
        response.status(404).send("User does not exist");
      }
    } catch (error) {
      response.send(error);
      console.log(error);
    }
  },
};
