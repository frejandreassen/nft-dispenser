require('dotenv').config()
const routes = require('./src/api/routes')

const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 8080
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));
app.use("/", express.static(path.join(__dirname, "public")))
// app.use(helmet())
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Start endpoint for google cloud app engine
app.get('/_ah/start', (req, res) => {
  res.status(200).send('Service is warm and cozy.')
});

//Warmup endpoint for google cloud app engine
app.get('/_ah/warmup', (req, res) => {
  res.status(200).send('Service is warm and cozy.')
});


async function run(){

  //Set up the routes
  app.use('/', routes)

  //Start the server
  app.listen(port, () => {
    console.log(`Starting up server...`)
    console.log(`Server listening on port ${port}.`)
  })
}

function gracefulShutdown() {
  // log.warn('Shutting down server.')
  process.exit(0);
}

run().catch(error => {
  // log.error(error)
  console.log(error)
})
