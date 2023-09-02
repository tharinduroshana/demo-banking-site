import express from "express";
import { createDatabase } from "./data/database.js";

const router = express.Router();

router.post("/create", (req, res) => {
  const db = createDatabase();

  const {
    transaction_id,
    transaction_type,
    account_id,
    amount,
    transaction_date,
    recipient_account_id,
  } = req.body;
  const sql = "INSERT INTO transactions VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      transaction_id,
      transaction_type,
      account_id,
      amount,
      new Date(transaction_date).toISOString().slice(0, 19).replace("T", " "),
      "Pending",
      recipient_account_id,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to process transaction." });
      }
      res.status(200).send();
    },
  );
});

router.route("/:transactionId").get((req, res) => {
  const { transactionId } = req.params;
  if (!transactionId) {
    res.status(500).send({ error: "Failed to retrieve transaction." });
  }
  const db = createDatabase();
  const sql = "SELECT * FROM transactions WHERE transaction_id = ?";
  db.query(sql, [transactionId], (error, result) => {
    if (error) {
      res.status(500).send({ error: "Cannot retrieve transaction." });
    }
    res.status(200).json(result[0]);
  });
});

export default router;
