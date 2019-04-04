const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/blockDetailsView:*',function (req, res) {
	console.log(req.query);
  res.redirect('http://google.com');
})
//dynamically accepts a block id
// fetches that block
// redirects to a block view page

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});