const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/route");
require('./configuration/dbConn')
const PORT = 9000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(PORT, () => console.log("server is listening on 9000"));
