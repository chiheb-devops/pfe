const express = require("express");
const compression = require('compression');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;
app.use(compression());
app.use('/', express.static('public', { redirect: false }));

// rewrite virtual urls to angular app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});


  app.listen(port, () => {
    console.log(`server running on port: ${port} frontend service `);
  });