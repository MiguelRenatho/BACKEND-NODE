import express from "express";
import personasRoutes from "./routes/personasRoute";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(personasRoutes);

export default app;
