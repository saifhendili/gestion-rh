const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
var bodyParser = require('body-parser');
var path       = require('path');
app.use(cors());

//Connect Database
connectDB();
// //Init Middlew:are
app.use(bodyParser.urlencoded({extended:false}));

//static folder path
app.use(express.static(path.resolve(__dirname,'public')));

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/fiche', require('./routes/api/fiche'));
app.use('/api/fichev', require('./routes/api/ficheversion'));
app.use('/api/competance', require('./routes/api/competance'));
app.use('/api/Ullistration', require('./routes/api/Ullistration'));


// app.use('/api/competance', require('./routes/api/competance'));


server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);
