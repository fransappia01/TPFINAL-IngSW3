const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const url = "mongodb://mongo:hZzYJ0b8sQk7u2C1ueDx@containers-us-west-145.railway.app:6183"

const db = require("../models");
const ToDo = db.todo;

beforeEach((done) => {
    console.log("mongodb://mongo:hZzYJ0b8sQk7u2C1ueDx@containers-us-west-145.railway.app:6183")
    mongoose.connect(
        "mongodb://mongo:hZzYJ0b8sQk7u2C1ueDx@containers-us-west-145.railway.app:6183",
        {
            useNewUrlParser: true,
            dbName: "ingsw3_db"
        },
    ).then(() => done())
})

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    })
})

describe("API ENDPOINT TEST", () => {
    
    test("/GET ALL TODO", (done) => {
      request(app)
        .get("/api/todo")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });

        
    });
});