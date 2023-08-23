require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(
    port,
    () => console.log(`API rodando na porta ${port}`)
)