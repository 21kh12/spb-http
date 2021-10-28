/* ---------------------------------------------------------------------------------------------- */
/*                                             MODULES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------- HTTP Server ---------------------------------------- */
// This module is responsible for creating the HTTP server.
import express          from 'express'
// Compresses each request/response
import compression      from 'compression'
// Parses the request body
import bodyParser       from 'body-parser'
// Parses the request cookies
import cookieParser     from 'cookie-parser'
// Implements certain security features and hardens the express server
import helmet           from 'helmet'
/* ------------------------------------------ Utilities ----------------------------------------- */
// Pretty colors or something idk
import pc               from 'picocolors'


/* ---------------------------------------------------------------------------------------------- */
/*                                              INIT                                              */
/* ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------- HTTP Server ---------------------------------------- */
// This creates the express server
const app = express()



/* ---------------------------------------------------------------------------------------------- */
/*                                             ROUTES                                             */
/* ---------------------------------------------------------------------------------------------- */

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5960, () => {
    console.log('SPB HTTP Server online!')
})
