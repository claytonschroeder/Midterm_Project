"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //this will probably get removed
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });


  return router;
}
