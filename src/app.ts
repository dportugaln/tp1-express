import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { logger } from "./middlewares/logger.middleware";
import { router as starsRouter } from "./routes/stars.router";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('*', logger)

app.use("/stars", starsRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})