const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("contactUs", ContactSchema);

module.exports = Contact;
