const request = require("supertest");
const mongoose = require("mongoose")
const app = require("../app");

const db = require("../models");
const ToDo = db.todo;

beforeEach((done) => {
    console.log(process.env.MONGO_URL)
    mongoose.connect(
        process.env.MONGO_URL,

        { useNewUrlParser: true,
            dbName: "ingsw3_db" 
        },
        () => done()
    )
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