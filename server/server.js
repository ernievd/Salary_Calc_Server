const express = require('express');
const app = express();
const port = 23233;

app.use(express.static('server/public'));

// app.listen( port, function () {
//     console.log('server is up on:', port);
// });
  // start server
app.listen( port, ()=> {
    console.log('server is up on:', port);
});




