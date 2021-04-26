"use strict";
const mongoose = require("mongoose");
const googleAuth = require("google-oauth-jwt");
const config = require("../config/keys");
const userCopy = mongoose.model("user");
const googleClientEmail = config.googleClientEmail;
const googlePrivateKey = config.googlePrivateKey;
module.exports = {
  // Function to get token from google oauth
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

  // Register a user to the DB
  register: async (request, response) => {
    try {
      let email = request.body.email;
      let oldEmail = await userCopy.find({ email: email });
      if (oldEmail[0]) {
        response.send({
          ...oldEmail[0]._doc,
          existing: true,
        });
      } else {
        const newUser = new userCopy({
          name: request.body.name,
          email: email,
        });
        let res = await newUser.save();

        response.status(201).send(res);
      }
    } catch (error) {
      response.status(400).send(error);
    }
  },

  // Login

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

  feedback: async (request, response) => {
    let id = request.params.id;
    let feedback = request.body.feedback;
    userCopy.findOneAndUpdate(
      { _id: id },
      { feedback },
      { new: true },
      (error, data) => {
        if (error) {
          response.status(400).send(error);
        } else {
          response.send(data);
        }
      }
    );
  },
};
