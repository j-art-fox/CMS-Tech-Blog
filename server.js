
const path = require('path');
//Sets up handlebars
const helpers = require('./utils/helpers');        
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Sets up the server and database
const routes = require('./routes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
  });
  
