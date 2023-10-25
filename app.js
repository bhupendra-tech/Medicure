const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
