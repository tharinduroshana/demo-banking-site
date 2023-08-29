import express from "express";
import { createDatabase } from "./data/database.js";

const app = express();

const PORT = 3001;

app.use(express.json());

app.post("/users/create", (req, res) => {
  const db = createDatabase();
  const {
    national_id,
    firstname,
    lastname,
    address,
    sex,
    birthday,
    profession,
    email,
  } = req.body;
  const sql = "INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      national_id,
      firstname,
      lastname,
      address,
      sex,
      new Date(birthday).toISOString().slice(0, 19).replace("T", " "),
      profession,
      email,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to create user." });
      }
      res.status(200).send();
    },
  );
});

app
  .route("/users/:userId")
  .get((req, res) => {
    const { userId } = req.params;
    if (!userId) {
      res.status(500).send({ error: "Failed to retrieve user information." });
    }
    const db = createDatabase();
    const sql = "SELECT * FROM users WHERE national_id = ?";
    db.query(sql, [userId], (error, result) => {
      if (error) {
        res.status(500).send({ error: "Cannot retrieve user information." });
      }
      res.status(200).json(result[0]);
    });
  })
  .put((req, res) => {
    const db = createDatabase();
    const {
      national_id,
      firstname,
      lastname,
      address,
      sex,
      birthday,
      profession,
      email,
    } = req.body;
    const sql =
      "UPDATE users SET firstname = ?, lastname = ?, address = ?, sex = ?, birthday = ?, profession = ?, email = ? WHERE national_id = ?";
    db.query(
      sql,
      [
        firstname,
        lastname,
        address,
        sex,
        new Date(birthday).toISOString().slice(0, 19).replace("T", " "),
        profession,
        email,
        national_id,
      ],
      (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send({ error: "Unable to update user information." });
        }
        res.status(200).send();
      },
    );
  })
  .delete((req, res) => {
    const { userId } = req.params;
    if (!userId) {
      res.status(500).send({ error: "Failed to retrieve user information." });
    }

    const db = createDatabase();
    const checkAccountsQuery = "SELECT * FROM accounts WHERE user_id = ?";
    db.query(checkAccountsQuery, [userId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete user." });
      }
      if (results.length !== 0) {
        res
          .status(500)
          .send({ error: "The user has active associated accounts." });
      }

      const deleteSql = "DELETE FROM users WHERE national_id = ?";
      db.query(deleteSql, [userId], (error2, results2) => {
        if (error2) {
          console.error(error2);
          res.status(500).send({ error: "Failed to delete user." });
        }
        res.status(200).send();
      });
    });
  });

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
