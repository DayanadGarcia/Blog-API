const express = require('express');
const router = require('./Routes');
const err = require('./Middlewares/errorMiddleware');
// ...

const app = express();

app.use(express.json());
app.use(router);
app.use(err);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
