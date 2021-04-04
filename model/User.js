const userCollection = require("../db").collection("users");
const validator = require("validator");


let User = function (data) {
    this.data = data;
    this.errors = []
}

User.prototype.validate = function () {
    if (this.data.username == "") { this.errors.push("You must Povide a Name") };
    if (!validator.isEmail(this.data.email)) { this.errors.push("You Must Type a Email") }
    if (this.data.number == "") { this.errors.push("You must provide a number") }
    if (this.data.textarea == "") { this.errors.push("You must Type a Message") }
  }

User.prototype.register = function () {
    this.validate()
    if (!this.data.errors) {
        userCollection.insertOne(this.data)
    }

}
module.exports = User
    
