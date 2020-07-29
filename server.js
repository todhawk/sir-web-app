const express = require('express');
const path = require('path');

const app = express();

app.use(express.static( path.join(__dirname, 'dist/web-app') ));


app.get('/*', (req, res) => {
  res.sendFile( path.join(__dirname, 'dist/web-app/index.html') );
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Web application running...');
});
