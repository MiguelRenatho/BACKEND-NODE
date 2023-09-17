import { connect } from "../database";

export const getPersonas = async (req, res) => {
    const db = await connect();
    const personaList = await db.query("SELECT * FROM PERSONA");
    res.json(personaList);
};

export const getPersona = async (req, res) => {
    const db = await connect();
    const persona = await db.query("SELECT * FROM PERSONA WHERE DNI = ?", [req.params.id]);
    res.json(persona[0]);
};

export const createPersona = async (req, res) => {
    const db = await connect();
    const result = await db.query("INSERT INTO PERSONA (DNI, NOMBRES, APELLIDOS, FECHANAC, EDAD, CIUDAD) VALUES (?,?,?,?,?,?)", [
        req.body.DNI,
        req.body.NOMBRES,
        req.body.APELLIDOS,
        req.body.FECHANAC,
        req.body.EDAD,
        req.body.CIUDAD,
    ]);
    console.log(result);
};

export const deletePersona = async (req, res) => {
    const db = await connect();
    const result = await db.query("DELETE FROM PERSONA WHERE DNI = ?", [req.params.id]);
    console.log(result);
};

export const updtePersona = async (req, res) => {
    const db = await connect();
    const result = await db.query("UPDATE PERSONA SET ? WHERE DNI = ?", [req.body, req.params.id]);
    res.send(204);
};
