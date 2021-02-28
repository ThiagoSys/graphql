"use strict"
const { db } = require("../config/conection");

module.exports = {
    createProject: (root, { input }) => {
        const creator_id = input.creator_id;
        const title = input.title;
        const description = input.description;

        const query = `INSERT INTO project(creator_id, created, title, description) 
        VALUES ($1, $2, $3, $4) RETURNING title, description`;
        const values = [
          creator_id,
          new Date(),
          title,
          description
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
    },
        createUsuario: (root, { input }) => {
        const usuario = input.usuario;
        const email = input.email;
        const password = input.password;

        const query = `INSERT INTO tbl_usuario (usuario, email, password, created, estado) 
        VALUES ($1, $2, $3, $4, $5) RETURNING usuario, email, password`;
        const values = [
          usuario,
          email,
          password,
          new Date(),
          false
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
    }
}