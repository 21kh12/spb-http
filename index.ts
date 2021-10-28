/* ---------------------------------------------------------------------------------------------- */
/*                                             MODULES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------- HTTP Server ---------------------------------------- */
// This module is responsible for creating the HTTP server.
import express, { Application, NextFunction, Request, Response } from 'express'
// Compresses each request/response
import compression from 'compression'
// Parses the request body
import bodyParser from 'body-parser'
// Parses the request cookies
import cookieParser from 'cookie-parser'
// Implements certain security features and hardens the express server
import helmet from 'helmet'

/* ------------------------------------------ Utilities ----------------------------------------- */
// Pretty colors or something idk
import pc from 'picocolors'



/* ---------------------------------------------------------------------------------------------- */
/*                                              INIT                                              */
/* ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------- HTTP Server ---------------------------------------- */
// This creates the express server
const app : Application = express()
// Trust proxy is used when the server is behind reverse a reverse proxy (ex. nginx). This is used
// to allow requests via proxy forwarding.
app.set('trust proxy', true)



/* ---------------------------------------------------------------------------------------------- */
/*                                           MIDDLEWARE                                           */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------ Security ------------------------------------------ */
// Helmet middleware modifies certain headers in the HTTP Request/Response to improve security
app.use(helmet())

/* ----------------------------------------- Compression ---------------------------------------- */
// Attempts to shrink the file size of all responses
app.use(compression())

/* ---------------------------------------- Static Files ---------------------------------------- */
// Static files are all constant and unchanging files (ex. scripts, stylesheets, libraries, images,
// etc.). These files are served without any major backend routing logic. Files are mapped to their
// mount point exactly how they appear in the physical file system Default mounting location is
// /public/* and the default storage location is ./public/
app.use('/public/', express.static('./public/'))

/* ----------------------------------------- Body Parser ---------------------------------------- */
// This parses the body content of all requests. It sanitizes the bodies of requests.
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



/* ---------------------------------------------------------------------------------------------- */
/*                                             ROUTES                                             */
/* ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------- Main Router ---------------------------------------- */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('404. Page not found. SPB HTTP')
})

app.use((err: Error, req: Request, res:Response, next:NextFunction) => {
    res.status(500).send('500. Internal server error. SPB HTTP')
    console.log(err.stack)
})



/* ---------------------------------------------------------------------------------------------- */
/*                                            LISTENER                                            */
/* ---------------------------------------------------------------------------------------------- */
app.listen(5960, () => {
    console.log('SPB HTTP Server online!')
})



/* ---------------------------------------------------------------------------------------------- */
/*                                             EXPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
export default app
