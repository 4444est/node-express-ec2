const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

server.get('/submit', (req, res) => {
    const { noun, verb, adjective, adjectiveTwo, nounTwo } = req.query;

    const madLibOne = `Hello, ${noun} your striking ${adjective} has led us to recruit you for ${verb}.`;
    const madLibTwo = `${verb} is an exiting business that will allow you to ${adjectiveTwo} ${nounTwo}. It should be`;
    const madLibThree = `great fun, and we look forward to hearing back from you`;
    const madLib = `${madLibOne}\n${madLibTwo}\n${madLibThree}`;
    
    res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="cs212/lab/7">Go Back to Form</a>
    `);
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 3000
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))