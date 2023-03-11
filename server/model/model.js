const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
}
//optional if we want to specify the collection name
// ,{collection:'Userdbs',}
);
 const Userdb = mongoose.model('Userdb',schema)
 module.exports = Userdb;