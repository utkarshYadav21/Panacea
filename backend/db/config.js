const mongoose = require("mongoose");
const dbUrl =
  "Mongodb url";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });
