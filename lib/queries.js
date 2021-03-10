"use strict"
const { db } = require("../config/conection");

module.exports = {
    getProjects: () => {
        const query = `SELECT * FROM project`;
        return db.any(query)
        .then(res => res)
        .catch(err => console.log(err));
    },
    getUsuarios: () => {
        const query = `SELECT * FROM tbl_usuario`;
        return db.any(query)
        .then(res => res)
        .catch(err => console.log(err));
    },
    getProjectId:(root, args) =>{
        const id = args.id;
        const query = `SELECT * FROM project WHERE id=$1`;
        const values = [id];
        return db.any(query, values)
        .then(res => res)
        .catch(err => console.log(err));
    },
    getProjectTitle:(root, args) =>{
        const title = args.title;
        const query = `SELECT * FROM project WHERE title=$1`;
        const values = [title];
        return db.any(query, values)
        .then(res => res)
        .catch(err => console.log(err));
    }
}