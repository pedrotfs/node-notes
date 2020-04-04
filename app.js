const notes = require("./notes.js")
const validator = require("validator")
const email = "pedrotfs@gmail.com"
const url = "www.pedro.com"

console.log(notes())
console.log("is " + email + " an email? " + validator.isEmail(email))
console.log("is " + url + " an url? " + validator.isURL(url))