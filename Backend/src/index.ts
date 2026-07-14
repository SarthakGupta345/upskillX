import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"


dotenv.config();


const PORT = process.env.PORT

const app = express()

app.use(express.json({
    limit: "10kb",
}))

app.use(express.urlencoded({ extended: true, limit: "10kb" }))
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(helmet())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})

app.get("/health", (req, res) => {
    console.log("server is running Properly")
    res.status(200).json({
        status: "success",
        message: "Server is running"
    })
})