let express = require('express');
let app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get("/", function(req, res){
//   res.send("Bill Settings WebApp");
// });

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

app.get('/', function (req, res) {
  res.render('home');
});