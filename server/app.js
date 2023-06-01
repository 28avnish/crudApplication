require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

const port = 8003;
app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});
