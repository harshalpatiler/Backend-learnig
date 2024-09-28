const mongoose = require('mongoose');

const connectDb = async () =>{
 await mongoose.connect("mongodb+srv://fullstackdevharshal:mi40WSz7MQZPPYL9@namstenode.eyxcy.mongodb.net/devTinder");
}
module.exports = connectDb;