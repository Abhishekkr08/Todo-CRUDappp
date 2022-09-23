const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();                                  // creating instance of express app so as to use the methods of express
const routes = require('./routes/route.js');
const PORT = 2000;


const public_path = path.join(__dirname, './public');   // for providing the path of the public folder to be renderes as static files
app.use(express.static(public_path));                   // for rendering the static folders such as stles and js
app.set("view engine", "hbs");                          // for rendering the views folder
app.set('views', path.join(__dirname, './views'));      // for providing the path of the views folder
app.use(express.json());                                // for parsing the incoming inputs/form-data/payload in json format
app.use(express.urlencoded({ extended: false }));       // same as above 


app.use('/', routes)                                    // all the requests are being handles by routes folder


app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
})
