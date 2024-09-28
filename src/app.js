const express = require("express");
const app = express();

app.get("/dev",(req, res)=>{
  //console.log(req);
  res.send({
    developer : "Harshal",
    type_of_request : " you have made HTTP get request !"
  })
})
// creating dynamic routes 
app.get("/dev/:devid",(req, res)=>{
  console.log(req.params);
  res.send({
    developer : "Harshal",
    type_of_request : " you have made HTTP get request !",
    id: req.params
  })
})
app.post("/dev",(req, res)=>{
  console.log("Data has saved");
  res.send({
    developer : "Harshal",
    type_of_request : " you have made HTTP POST request !"
  })
})

// order of writing routes is very important
// app.use("/testroute", (req, res) => {
//   res.send("You have successfully created route successfully");
// });
// app.use handles all the type of http request to the server eg. PUT/GET/PATCH/DELETE/POST etc
// app.use((req, res) => {
//   res.send("welcome in the learning of backend developement using express js");
// });
// listen to the server is like your listening request on the given port number 
app.listen(8000, () => {
  console.log("Listening to port number 8000 ohh yeah");
});
