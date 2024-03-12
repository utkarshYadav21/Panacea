const mongoose = require("mongoose");
const dbUrl =
  "Put your own database link";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });
