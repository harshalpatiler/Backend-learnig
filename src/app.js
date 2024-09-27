const express = require("express");
const app = express();

app.use("/testroute", (req, res) => {
  res.send("You have successfully created route successfully");
});

app.use((req, res) => {
  res.send("welcome in the learning of backend developement using express js");
});

app.listen(8000, () => {
  console.log("Listening to port number 8000 ohh yeah");
});
