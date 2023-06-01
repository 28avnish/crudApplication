const mongoose = require("mongoose");

const DB ="mongodb+srv://avnish:avnish@cluster0.iv8nuh6.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
