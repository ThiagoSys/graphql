'use strict'

const { db } = require("../config/conection");
const queries = require("./queries");
const mutation = require("./mutation");

module.exports = {
    Query: queries,
    Mutation: mutation
}