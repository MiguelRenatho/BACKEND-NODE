import { Router } from "express";
import { createPersona, deletePersona, getPersona, getPersonaCount, getPersonas, updtePersona } from "../controllers/personasController";

const router = Router();

router.get("/persons", getPersonas);
router.get("/persons/:id", getPersona);
router.post("/persons", createPersona);
router.delete("/persons/:id", deletePersona);
router.put("/persons/:id", updtePersona);

export default router;
