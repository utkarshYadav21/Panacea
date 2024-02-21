const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://utkarshyadav329:22utkarsh22@cluster0.w14eg7b.mongodb.net/Panacea";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });
