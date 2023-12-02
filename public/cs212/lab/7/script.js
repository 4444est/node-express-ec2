const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

server.use(express.urlencoded({'extended': true}));
server.use(logger('dev'));

server.post('/submit', (req, res) => {

    const { noun, verb, adjective, adjectiveTwo, nounTwo } = req.body;

    if (!noun || !verb || !adjective || !adjectiveTwo || !nounTwo) {
        res.send(`
          <h1>Submission Failed</h1>
          <p>Please fill out ALL fields</p>
          <a href="/">Go Back to Form</a>
        `);
        return;
    }

    const madLibOne = `Hello, ${noun} you are ${adjective} welcome to join me.`;
    const madLibTwo = `My favorite activity is to ${verb}. I also have two ${adjectiveTwo} ${nounTwo}`;
    const madLib = `${madLibOne}\n${madLibTwo}`;

    res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/">Go Back to Form</a>
    `);
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, '../public')

server.use(express.static(publicServedFilesPath));
let port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server is running on port ${port}`));

 