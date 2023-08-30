import express from "express";
import { createDatabase } from "./data/database.js";

const router = express.Router();

router.post("/create", (req, res) => {
  const db = createDatabase();
  const {
    account_number,
    account_type,
    balance,
    user_id,
    creation_date,
    status,
  } = req.body;
  const sql = "INSERT INTO accounts VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      account_number,
      account_type,
      balance,
      user_id,
      new Date(creation_date).toISOString().slice(0, 19).replace("T", " "),
      status,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to create account." });
      }
      res.status(200).send();
    },
  );
});

router
  .route("/:accountNumber")
  .get((req, res) => {
    const { accountNumber } = req.params;
    if (!accountNumber) {
      res
        .status(500)
        .send({ error: "Failed to retrieve account information." });
    }
    const db = createDatabase();
    const sql = "SELECT * FROM accounts WHERE account_number = ?";
    db.query(sql, [accountNumber], (error, result) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .send({ error: "Failed to retrieve account information." });
      }
      res.status(200).json(result[0]);
    });
  })
  .put((req, res) => {
    const db = createDatabase();
    const {
      account_number,
      account_type,
      balance,
      user_id,
      creation_date,
      status,
    } = req.body;
    const sql =
      "UPDATE accounts SET account_type = ?, balance = ?, user_id = ?, creation_date = ?, status = ? WHERE account_number = ?";
    db.query(
      sql,
      [
        account_type,
        balance,
        user_id,
        new Date(creation_date).toISOString().slice(0, 19).replace("T", " "),
        status,
        account_number,
      ],
      (error, result) => {
        if (error) {
          console.error(error);
          res
            .status(500)
            .send({ error: "Failed to update account information." });
        }
        res.status(200).send();
      },
    );
  })
  .delete((req, res) => {
    const { accountNumber } = req.params;
    if (!accountNumber) {
      res.status(500).send({ error: "Failed to delete user information." });
    }
    const db = createDatabase();
    const sql = "DELETE FROM accounts WHERE account_number = ?";
    db.query(sql, [accountNumber], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to delete user information." });
      }
      res.status(200).send();
    });
  });

export default router;
