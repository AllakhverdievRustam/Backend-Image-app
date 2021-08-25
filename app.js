const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use(cors());

const apiRoutes = require("./src/modules/routes/routes");

app.use("/", apiRoutes);

app.listen(9000, () => {
  console.log('Example app on port 9000!');
});