const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  console.log(`Received event ${req.body.type}`);
  const event = req.body;

  events.push(event);

  // Post service
  axios.post("http://posts-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // Comments service
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  // Query service
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  // Moderation service
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
