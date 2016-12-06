"use strict";

const express = require('express');
const router  = express.Router();

var spades = ["1S", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "11S", "12S", "13S"];
var clubs = ["1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "11C", "12C", "13C"];
var diamonds = ["1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "11D", "12D", "13D"];

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex.select('type', 'host_id', 'host.name AS host_name', 'guest_id', 'guest.name AS guest_name', 'whose_turn')
      .from("games")
      .join("users AS host", "host.id", "games.host_id")
      .join("users AS guest", "guest.id", "games.guest_id")
      .where("host_id", 1)
      .orWhere("guest_id", 1)
      .then((results) => {
        console.log(results);
        res.json(results);
      });
  });

  router.post("/games", (req, res) => {
    var hostID = req.session.user_id;
    knex('games').insert({
      type: 'Goofspiel',
      host_id: hostID,
      guest_id: 0,
      status: 'active',
      result: null,
      whose_turn: hostID,
      host_score: 0,
      guest_score: 0,
      game_state: {
        board: {
          prize: [],
          host_card: [],
          guest_card: []
        },
        hands: {
          prize: shuffle(diamonds),
          host_hand: spades,
          guest_hand: clubs
        }
      }
    });

    res.render("table");
  });

 return router;
}


//Fisher Yates shuffling
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

