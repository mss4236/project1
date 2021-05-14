const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');

const port = 3065;

const app = express();

const userAPIRouter = require('./router/user');
const postAPIRouter = require('./router/post');

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});