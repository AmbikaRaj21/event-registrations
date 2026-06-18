import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import eventRoutes from "./routes/eventRoutes.js"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

// configure
dotenv.config();

// created app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// root route
app.get("/", (req, res) => {
    res.json({
        project: "Event Registration API",
        status: "Running",
        documentation: "/api-docs",
    });
});

// route
app.use("/api", eventRoutes)

// PORT
const PORT = process.env.PORT || 5000;

// connect database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// start server
app.listen(PORT, () => {
    console.log("server running on port 5000")
})