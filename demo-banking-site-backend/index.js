import express from "express";
import { createDatabase } from "./data/database.js";

const app = express();

const PORT = 3001;

app.use(express.json());

app.post("/users/create", (req, res) => {
  console.log(req.body);
  const db = createDatabase();
  const {
    national_id,
    firstname,
    lastname,
    address,
    sex,
    birthday,
    profession,
    status,
  } = req.body;
  const sql = "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [national_id, firstname, lastname, address, sex, new Date(birthday).toISOString().slice(0, 19).replace("T", " "), profession, status], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send();
    }
    res.status(200).send();
  });

});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
