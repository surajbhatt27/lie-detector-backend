import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        Credential: true
    })
)

// middlwares

app.use(express.json({limit: "16kb"}))   // Parse json bodies
app.use(express.urlencoded({extended: true, limit: "16kb"}))   // Parse form data
app.use(cookieParser())    //Parse cookies

export {app}