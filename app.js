
  const express = require('express');
  const session = require('express-session');
  const mongoose = require('mongoose');
  
  const app = express();
  app.set('view engine', 'ejs');
  

  mongoose
  .connect("mongodb://127.0.0.1:27017/proddb", { //process.env.DB_CONNECTION_STRING
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

  app.use(
    session({
      secret: "foo" ,//process.env.SESSION_SECRET
      saveUninitialized: false,
      resave: false,
    })
  );
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/', require('./routes/R_login'));
  
  const PORT = process.env.PORT || 4111;
  app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));